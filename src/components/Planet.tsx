import React, { useRef, useState } from 'react'
import { useFrame, ThreeEvent } from '@react-three/fiber'
import { Mesh, Group } from 'three'
import { PlanetData, usePlanet } from '../context/PlanetContext'

interface PlanetProps {
  planetData: PlanetData
}

const Planet: React.FC<PlanetProps> = ({ planetData }) => {
  const orbitRef = useRef<Group>(null)
  const planetRef = useRef<Mesh>(null)
  const [hovered, setHovered] = useState(false)
  const { setSelectedPlanet, setIsInfoPanelOpen } = usePlanet()

  useFrame((state) => {
    if (orbitRef.current) {
      // Orbital motion
      orbitRef.current.rotation.y += planetData.orbitSpeed
    }
    
    if (planetRef.current) {
      // Planet rotation
      planetRef.current.rotation.y += 0.01
      
      // Hover effect
      if (hovered) {
        const scale = 1 + Math.sin(state.clock.elapsedTime * 5) * 0.1
        planetRef.current.scale.setScalar(scale)
      } else {
        planetRef.current.scale.setScalar(1)
      }
    }
  })

  const handleClick = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation()
    setSelectedPlanet(planetData)
    setIsInfoPanelOpen(true)
  }

  const handlePointerOver = (event: ThreeEvent<PointerEvent>) => {
    event.stopPropagation()
    setHovered(true)
    document.body.style.cursor = 'pointer'
  }

  const handlePointerOut = () => {
    setHovered(false)
    document.body.style.cursor = 'auto'
  }

  return (
    <group ref={orbitRef}>
      {/* Orbit path visualization */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[planetData.orbitRadius - 0.02, planetData.orbitRadius + 0.02, 64]} />
        <meshBasicMaterial 
          color="#ffffff" 
          transparent 
          opacity={0.1}
        />
      </mesh>
      
      {/* Planet */}
      <mesh
        ref={planetRef}
        position={[planetData.orbitRadius, 0, 0]}
        onClick={handleClick}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      >
        <sphereGeometry args={[planetData.size, 32, 32]} />
        <meshLambertMaterial 
          color={planetData.color}
          emissive={planetData.color}
          emissiveIntensity={hovered ? 0.2 : 0.05}
        />
        
        {/* Planet glow effect */}
        {hovered && (
          <mesh scale={1.3}>
            <sphereGeometry args={[planetData.size, 32, 32]} />
            <meshBasicMaterial 
              color={planetData.color} 
              transparent 
              opacity={0.3}
            />
          </mesh>
        )}
      </mesh>
    </group>
  )
}

export default Planet