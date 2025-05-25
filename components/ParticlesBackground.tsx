'use client';

import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import type { Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        particles: {
          number: { value: 60 },
          color: { value: '#b28bfa' },//パーティクルカラー
          links: {
            enable: true,
            color: '#ffffff',//つなぐ線の色
            distance: 150,
            opacity: 0.4,
            width: 1,
          },
          move: { enable: true, speed: 0.5 },//速度０停止
          size: { value: 2 },
        },
        background: {
            color: '#242b46', // 背景色
        },
      }}
    />
  );
}
