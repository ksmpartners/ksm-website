import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import "./TiltDeck.css";

function AnimatedShader() {
  const meshRef = useRef();

  const shaderMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        u_time: { value: 0 },
        u_resolution: {
          value: new THREE.Vector2(window.innerWidth, window.innerHeight),
        },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        precision highp float;
        uniform float u_time;
        uniform vec2 u_resolution;
        varying vec2 vUv;

        void main() {
          vec2 uv = vUv;
          uv.x += 0.1 * sin(u_time * 0.5);
          uv.y += 0.1 * cos(u_time * 0.3);

          vec3 color1 = vec3(0.9, 0.7, 1.0);
          vec3 color2 = vec3(0.6, 0.9, 0.95);
          vec3 color3 = vec3(0.95, 0.85, 0.6);

          float mixVal = 0.5 + 0.5 * sin(u_time + uv.x * 10.0);
          vec3 color = mix(color1, color2, mixVal);
          color = mix(color, color3, 0.5 + 0.5 * cos(u_time + uv.y * 10.0));

          gl_FragColor = vec4(color, 1.0);
        }
      `,
      transparent: false,
    });
  }, []);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.material.uniforms.u_time.value = clock.getElapsedTime();
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} />
      <primitive object={shaderMaterial} attach="material" />
    </mesh>
  );
}

export default function TiltDecks() {
  return (
    <div className="hero-container">
      <div className="top-half">
        <Canvas
          orthographic
          camera={{ zoom: 1, position: [0, 0, 1] }}
          className="canvas"
        >
          <AnimatedShader />
        </Canvas>
        <div className="glass-overlay" />
      </div>
      <div className="bottom-half" />
      <div className="hero-content">
  <h1>KSM Technology Partners</h1>
  <p>Innovate, Execute, Empower</p>
</div>

    </div>
  );
}
