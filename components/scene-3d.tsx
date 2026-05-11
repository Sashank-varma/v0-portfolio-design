"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import * as THREE from "three"

function ParticleField() {
  const ref = useRef<THREE.Points>(null)
  
  const particlesCount = 2000
  const positions = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3)
    for (let i = 0; i < particlesCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    return pos
  }, [])

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.02
      ref.current.rotation.y = state.clock.elapsedTime * 0.03
    }
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#60a5fa"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  )
}

function FloatingOrb({ position, color, scale = 1 }: { position: [number, number, number]; color: string; scale?: number }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const initialY = position[1]
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = initialY + Math.sin(state.clock.elapsedTime + position[0]) * 0.3
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <icosahedronGeometry args={[0.5, 1]} />
      <meshStandardMaterial
        color={color}
        wireframe
        transparent
        opacity={0.4}
      />
    </mesh>
  )
}

function NeuralNetwork() {
  const groupRef = useRef<THREE.Group>(null)
  
  const nodes = useMemo(() => {
    const n = []
    for (let i = 0; i < 12; i++) {
      n.push({
        position: [
          (Math.random() - 0.5) * 6,
          (Math.random() - 0.5) * 6,
          (Math.random() - 0.5) * 4
        ] as [number, number, number]
      })
    }
    return n
  }, [])

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05
    }
  })

  return (
    <group ref={groupRef}>
      {nodes.map((node, i) => (
        <mesh key={i} position={node.position}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial
            color="#818cf8"
            emissive="#818cf8"
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}
    </group>
  )
}

export function Scene3D() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#60a5fa" />
        <pointLight position={[-10, -10, -5]} intensity={0.3} color="#a78bfa" />
        
        <ParticleField />
        <NeuralNetwork />
        
        <FloatingOrb position={[-4, 2, -2]} color="#60a5fa" scale={0.8} />
        <FloatingOrb position={[4, -2, -3]} color="#a78bfa" scale={0.6} />
        <FloatingOrb position={[0, 3, -4]} color="#34d399" scale={0.5} />
      </Canvas>
    </div>
  )
}
