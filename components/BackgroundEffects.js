'use client';

import { useEffect } from 'react';

export default function BackgroundEffects() {
  useEffect(() => {
    // --- 3D Background (Three.js) ---
    const canvas = document.getElementById('bg-canvas');
    if (canvas && typeof window !== 'undefined' && window.THREE) {
      const THREE = window.THREE;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 50;

      const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(window.devicePixelRatio);

      const count = 3000;
      const positions = new Float32Array(count * 3);
      const colors = new Float32Array(count * 3);

      const color1 = new THREE.Color('#38bdf8');
      const color2 = new THREE.Color('#a855f7');
      const color3 = new THREE.Color('#ec4899');

      for (let i = 0; i < count; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 120;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 80;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 40;

        const mixVal = Math.random();
        let mixColor;
        if (mixVal < 0.5) mixColor = color1.clone().lerp(color2, mixVal * 2);
        else mixColor = color2.clone().lerp(color3, (mixVal - 0.5) * 2);

        colors[i * 3] = mixColor.r;
        colors[i * 3 + 1] = mixColor.g;
        colors[i * 3 + 2] = mixColor.b;
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      const createCircleTexture = () => {
        const c = document.createElement('canvas');
        c.width = 16; c.height = 16;
        const ctx = c.getContext('2d');
        const grad = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
        grad.addColorStop(0, 'rgba(255,255,255,1)');
        grad.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(8, 8, 8, 0, Math.PI * 2);
        ctx.fill();
        return new THREE.CanvasTexture(c);
      };

      const material = new THREE.PointsMaterial({
        size: 0.4, vertexColors: true, transparent: true, opacity: 0.6,
        map: createCircleTexture(), depthWrite: false, blending: THREE.AdditiveBlending
      });

      const points = new THREE.Points(geometry, material);
      scene.add(points);

      let mouseX = 0, mouseY = 0, targetX = 0, targetY = 0;

      const handle3DMouseMove = (e) => {
        mouseX = (e.clientX - window.innerWidth / 2) / 200;
        mouseY = (e.clientY - window.innerHeight / 2) / 200;
      };

      window.addEventListener('mousemove', handle3DMouseMove);

      const clock = new THREE.Clock();
      let aniId;

      const animate = () => {
        aniId = requestAnimationFrame(animate);
        const elapsedTime = clock.getElapsedTime();
        const positionAttribute = geometry.getAttribute('position');

        for (let i = 0; i < count; i++) {
          const x = positionAttribute.getX(i);
          const z = positionAttribute.getZ(i);
          const waveY = Math.sin(elapsedTime * 0.5 + x * 0.08) * 3 + Math.cos(elapsedTime * 0.4 + z * 0.08) * 2;
          positionAttribute.setY(i, waveY + Math.sin(elapsedTime * 0.2 + i * 0.01) * 0.5);
        }
        geometry.attributes.position.needsUpdate = true;

        targetX += (mouseX - targetX) * 0.05;
        targetY += (mouseY - targetY) * 0.05;
        points.rotation.y = targetX * 0.4 + 0.0008 * elapsedTime * 100;
        points.rotation.x = targetY * 0.4;

        renderer.render(scene, camera);
      };
      animate();

      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      window.addEventListener('resize', handleResize);

      // Cleanup
      return () => {
        window.removeEventListener('mousemove', handle3DMouseMove);
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(aniId);
        renderer.dispose();
      };
    }

    // --- HTML Shapes Parallax ---
    const shapes = document.querySelectorAll('.bg-shape');
    const handleShapeMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      shapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.01;
        const x = (window.innerWidth - mouseX * speed) / 100;
        const y = (window.innerHeight - mouseY * speed) / 100;
        shape.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    document.addEventListener('mousemove', handleShapeMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleShapeMouseMove);
    };
  }, []);

  return (
    <>
      <canvas id="bg-canvas"></canvas>
      <div className="bg-shape shape-1"></div>
      <div className="bg-shape shape-2"></div>
      <div className="bg-shape shape-3"></div>
      <div className="bg-shape shape-4"></div>
      <div className="bg-shape shape-5"></div>
      <div className="bg-shape shape-6"></div>
    </>
  );
}
