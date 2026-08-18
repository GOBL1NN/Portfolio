import { useEffect, useRef } from "react";
import "./InteractiveBackground.css";

function InteractiveBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    let animId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
    };

    const trail = Array.from({ length: 10 }, () => ({
      x: mouse.x,
      y: mouse.y,
    }));

    const handleMouseMove = (event) => {
      mouse.targetX = event.clientX;
      mouse.targetY = event.clientY;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;

      mouse.x = width / 2;
      mouse.y = height / 2;
      mouse.targetX = width / 2;
      mouse.targetY = height / 2;

      trail.forEach((point) => {
        point.x = mouse.x;
        point.y = mouse.y;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    // Deep Space Background Stars
    const spaceStars = Array.from({ length: 320 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.4 + 0.3,
      alpha: Math.random() * 0.7 + 0.2,
      twinkleSpeed: Math.random() * 0.02 + 0.005,
    }));

    // Factory to create realistic muted galaxies
    const createGalaxy = (
      cx,
      cy,
      radius,
      branches,
      tiltAngle,
      colorPalette,
    ) => {
      const particles = [];
      const count = 650;

      for (let i = 0; i < count; i++) {
        const r = Math.pow(Math.random(), 2) * radius + 6;

        const branchAngle =
          (Math.floor(Math.random() * branches) * (Math.PI * 2)) / branches;

        const spinAngle = r * 0.007;

        const scatterX = (Math.random() - 0.5) * (r * 0.22);
        const scatterY = (Math.random() - 0.5) * (r * 0.22);

        const normR = r / radius;

        let color;

        if (normR < 0.15) {
          color = "rgba(255, 250, 235, ";
        } else if (normR < 0.5) {
          color = colorPalette.mid;
        } else {
          color = colorPalette.outer;
        }

        particles.push({
          r,
          angle: branchAngle + spinAngle,
          scatterX,
          scatterY,
          speed: 0.0004 + (1 - normR) * 0.0008,
          size: Math.random() * 1.2 + 0.3,
          alpha: Math.random() * 0.5 + 0.2,
          color,
        });
      }

      return {
        cx,
        cy,
        radius,
        tiltAngle,
        particles,
        rot: Math.random() * Math.PI,
      };
    };

    const galaxies = [
      createGalaxy(width * 0.28, height * 0.42, 260, 2, 0.42, {
        mid: "rgba(180, 205, 240, ",
        outer: "rgba(110, 130, 180, ",
      }),

      createGalaxy(width * 0.8, height * 0.25, 170, 3, -0.55, {
        mid: "rgba(200, 190, 240, ",
        outer: "rgba(130, 120, 170, ",
      }),

      createGalaxy(width * 0.18, height * 0.8, 130, 2, 0.25, {
        mid: "rgba(160, 215, 230, ",
        outer: "rgba(90, 140, 170, ",
      }),
    ];

    let time = 0;

    const render = () => {
      time += 0.015;

      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      // Update trail
      trail[0].x += (mouse.x - trail[0].x) * 0.35;
      trail[0].y += (mouse.y - trail[0].y) * 0.35;

      for (let i = 1; i < trail.length; i++) {
        trail[i].x += (trail[i - 1].x - trail[i].x) * 0.3;
        trail[i].y += (trail[i - 1].y - trail[i].y) * 0.3;
      }

      // Deep Space Void
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = "#020205";
      ctx.fillRect(0, 0, width, height);

      // Render Distant Twinkling Space Field
      ctx.globalCompositeOperation = "lighter";

      spaceStars.forEach((star) => {
        const twinkle = Math.sin(time * star.twinkleSpeed * 10) * 0.25;

        const currentAlpha = Math.max(0.1, Math.min(1, star.alpha + twinkle));

        ctx.fillStyle = `rgba(220, 232, 255, ${currentAlpha})`;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Render Background Galaxies
      galaxies.forEach((g) => {
        g.rot += 0.0005;

        ctx.save();

        ctx.translate(g.cx, g.cy);
        ctx.rotate(g.tiltAngle);

        const coreGrad = ctx.createRadialGradient(
          0,
          0,
          0,
          0,
          0,
          g.radius * 0.35,
        );

        coreGrad.addColorStop(0, "rgba(240, 245, 255, 0.22)");

        coreGrad.addColorStop(0.5, "rgba(130, 155, 200, 0.06)");

        coreGrad.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.fillStyle = coreGrad;

        ctx.beginPath();
        ctx.arc(0, 0, g.radius * 0.35, 0, Math.PI * 2);
        ctx.fill();

        g.particles.forEach((p) => {
          p.angle += p.speed;

          const currentAngle = p.angle + g.rot;

          const rawX = Math.cos(currentAngle) * p.r + p.scatterX;

          const rawY = (Math.sin(currentAngle) * p.r + p.scatterY) * 0.38;

          ctx.fillStyle = `${p.color}${p.alpha})`;

          ctx.beginPath();
          ctx.arc(rawX, rawY, p.size, 0, Math.PI * 2);
          ctx.fill();
        });

        ctx.restore();
      });

      // =========================================
      // CURSOR LIGHT TRAIL
      // =========================================

      ctx.globalCompositeOperation = "lighter";

      // Trail particles
      for (let i = trail.length - 1; i >= 0; i--) {
        const point = trail[i];

        const progress = 1 - i / trail.length;

        const size = 2 + progress * 7;
        const alpha = 0.008 + progress * 0.035;

        const glow = ctx.createRadialGradient(
          point.x,
          point.y,
          0,
          point.x,
          point.y,
          size * 8,
        );

        glow.addColorStop(0, `rgba(175, 210, 255, ${alpha * 2})`);

        glow.addColorStop(0.35, `rgba(145, 185, 255, ${alpha})`);

        glow.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.fillStyle = glow;

        ctx.beginPath();
        ctx.arc(point.x, point.y, size * 8, 0, Math.PI * 2);

        ctx.fill();
      }

      // Soft line connecting the trail
      ctx.beginPath();

      ctx.moveTo(trail[0].x, trail[0].y);

      for (let i = 1; i < trail.length; i++) {
        ctx.lineTo(trail[i].x, trail[i].y);
      }

      ctx.strokeStyle = "rgba(170, 205, 255, 0.035)";
      ctx.lineWidth = 10;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      ctx.stroke();

      // Cursor core
      const coreGlow = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        42,
      );

      coreGlow.addColorStop(0, "rgba(220, 235, 255, 0.16)");

      coreGlow.addColorStop(0.35, "rgba(150, 190, 255, 0.06)");

      coreGlow.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.fillStyle = coreGlow;

      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 42, 0, Math.PI * 2);
      ctx.fill();

      ctx.globalCompositeOperation = "source-over";

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="bg-space">
      <canvas ref={canvasRef} className="bg-space__canvas" />
    </div>
  );
}

export default InteractiveBackground;
