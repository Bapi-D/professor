import { Canvas } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

function FloatingOctahedron({ position, scale, color, speed = 1 }: { 
  position: [number, number, number]; 
  scale: number; 
  color: string;
  speed?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed * 0.3) * 0.3;
      meshRef.current.rotation.y += 0.003 * speed;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial 
          color={color} 
          metalness={0.6} 
          roughness={0.3}
          transparent
          opacity={0.7}
        />
      </mesh>
    </Float>
  );
}

function FloatingIcosahedron({ position, scale, color, speed = 1 }: { 
  position: [number, number, number]; 
  scale: number; 
  color: string;
  speed?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.cos(state.clock.elapsedTime * speed * 0.2) * 0.4;
      meshRef.current.rotation.z += 0.002 * speed;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial 
          color={color} 
          metalness={0.7} 
          roughness={0.2}
          transparent
          opacity={0.5}
          wireframe
        />
      </mesh>
    </Float>
  );
}

function FloatingTorus({ position, scale, color }: { 
  position: [number, number, number]; 
  scale: number; 
  color: string;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <torusGeometry args={[1, 0.3, 16, 50]} />
        <meshStandardMaterial 
          color={color} 
          metalness={0.5} 
          roughness={0.4}
          transparent
          opacity={0.4}
        />
      </mesh>
    </Float>
  );
}

function FloatingDodecahedron({ position, scale, color }: { 
  position: [number, number, number]; 
  scale: number; 
  color: string;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={0.4} floatIntensity={1.2}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <dodecahedronGeometry args={[1, 0]} />
        <meshStandardMaterial 
          color={color} 
          metalness={0.65} 
          roughness={0.25}
          transparent
          opacity={0.5}
        />
      </mesh>
    </Float>
  );
}

function Particles() {
  const pointsRef = useRef<THREE.Points>(null);
  const particleCount = 80;
  
  const positions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
  }

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.04} 
        color="#d4a84b" 
        transparent 
        opacity={0.5}
        sizeAttenuation
      />
    </points>
  );
}

function SceneContent() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={0.6} color="#fff4d4" />
      <directionalLight position={[-10, -10, -5]} intensity={0.3} color="#4a9eff" />
      <pointLight position={[0, 5, 0]} intensity={0.4} color="#d4a84b" />
      
      {/* Amber/Gold and Blue themed shapes */}
      <FloatingOctahedron position={[4, 2, -3]} scale={0.8} color="#d4a84b" speed={1.2} />
      <FloatingOctahedron position={[-5, -1, -4]} scale={0.5} color="#b8922a" speed={0.8} />
      
      <FloatingIcosahedron position={[-4, 3, -2]} scale={1} color="#4a9eff" speed={1} />
      <FloatingIcosahedron position={[5, -2, -5]} scale={0.6} color="#3d7cd9" speed={1.3} />
      
      <FloatingTorus position={[0, -3, -4]} scale={0.7} color="#d4a84b" />
      <FloatingTorus position={[-3, 0, -6]} scale={0.4} color="#f0c75e" />
      
      <FloatingDodecahedron position={[3, 0, -5]} scale={0.6} color="#4a9eff" />
      <FloatingDodecahedron position={[-2, 2, -3]} scale={0.4} color="#d4a84b" />
      
      <Particles />
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.3}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
      />
    </>
  );
}

export function Scene3D() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 2]}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <SceneContent />
        </Suspense>
      </Canvas>
      
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/60 pointer-events-none" />
    </div>
  );
}

export default Scene3D;