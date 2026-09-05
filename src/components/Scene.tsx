import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, PresentationControls, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

const PremiumShape = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.1;
      meshRef.current.rotation.y += delta * 0.15;
    }
    if (wireframeRef.current) {
      wireframeRef.current.rotation.x -= delta * 0.05;
      wireframeRef.current.rotation.y -= delta * 0.08;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.5, 0]} />
        <MeshTransmissionMaterial
          backside
          backsideThickness={5}
          thickness={2}
          chromaticAberration={1}
          anisotropy={1}
          distortion={0}
          distortionScale={0}
          temporalDistortion={0}
          iridescence={1}
          iridescenceIOR={1.5}
          iridescenceThicknessRange={[0, 1400]}
          color="#ffffff"
          clearcoat={1}
          roughness={0.2}
        />
      </mesh>
      
      {/* Outer Wireframe Shell */}
      <mesh ref={wireframeRef}>
        <icosahedronGeometry args={[1.8, 1]} />
        <meshStandardMaterial 
          color="#444444" 
          wireframe 
          transparent 
          opacity={0.3} 
        />
      </mesh>
    </Float>
  );
};

export const Scene = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full opacity-80 mix-blend-screen">
      <Canvas camera={{ position: [0, 0, 7], fov: 45 }} gl={{ preserveDrawingBuffer: true, antialias: true, alpha: true }}>
        <ambientLight intensity={0.2} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#333333" />
        <PresentationControls
          global
          rotation={[0, -Math.PI / 4, 0]}
          polar={[-Math.PI / 3, Math.PI / 3]}
          azimuth={[-Math.PI / 1.4, Math.PI / 2]}
        >
          <PremiumShape />
        </PresentationControls>
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};
