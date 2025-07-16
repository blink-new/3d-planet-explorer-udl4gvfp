import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

const Sun: React.FC = () => {
  const sunRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (sunRef.current) {
      // Sun rotation
      sunRef.current.rotation.y += 0.005
      
      // Subtle pulsing effect
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.05
      sunRef.current.scale.setScalar(scale)
    }
  })

  return (
    <mesh ref={sunRef} position={[0, 0, 0]}>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshBasicMaterial 
        color="#FDB813" 
        emissive="#FDB813"
        emissiveIntensity={0.5}
      />
      
      {/* Sun glow effect */}
      <mesh scale={1.2}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshBasicMaterial 
          color="#FDB813" 
          transparent 
          opacity={0.3}
        />
      </mesh>
    </mesh>
  )
}

export default Sun