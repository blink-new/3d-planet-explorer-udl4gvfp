import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Group } from 'three'
import Planet from './Planet'
import Sun from './Sun'
import { PlanetData } from '../context/PlanetContext'

const planetsData: PlanetData[] = [
  {
    id: 'mercury',
    name: 'Mercury',
    type: 'Rocky Planet',
    diameter: '4,879 km',
    distance: '57.9 million km from Sun',
    temperature: '427°C (day) / -173°C (night)',
    description: 'The smallest planet in our solar system and closest to the Sun. Mercury has extreme temperature variations.',
    color: '#8C7853',
    size: 0.4,
    orbitRadius: 4,
    orbitSpeed: 0.02
  },
  {
    id: 'venus',
    name: 'Venus',
    type: 'Rocky Planet',
    diameter: '12,104 km',
    distance: '108.2 million km from Sun',
    temperature: '462°C (surface)',
    description: 'The hottest planet in our solar system with a thick, toxic atmosphere. Often called Earth\'s twin.',
    color: '#FFC649',
    size: 0.6,
    orbitRadius: 6,
    orbitSpeed: 0.015
  },
  {
    id: 'earth',
    name: 'Earth',
    type: 'Rocky Planet',
    diameter: '12,756 km',
    distance: '149.6 million km from Sun',
    temperature: '15°C (average)',
    description: 'Our home planet, the only known planet with life. 71% of its surface is covered by water.',
    color: '#6B93D6',
    size: 0.65,
    orbitRadius: 8,
    orbitSpeed: 0.01
  },
  {
    id: 'mars',
    name: 'Mars',
    type: 'Rocky Planet',
    diameter: '6,792 km',
    distance: '227.9 million km from Sun',
    temperature: '-65°C (average)',
    description: 'The Red Planet, known for its iron oxide surface. Mars has the largest volcano in the solar system.',
    color: '#CD5C5C',
    size: 0.5,
    orbitRadius: 10,
    orbitSpeed: 0.008
  }
]

const SolarSystem: React.FC = () => {
  const systemRef = useRef<Group>(null)

  useFrame((state) => {
    if (systemRef.current) {
      // Gentle system rotation
      systemRef.current.rotation.y += 0.001
    }
  })

  console.log('SolarSystem component rendering')

  return (
    <group ref={systemRef}>
      {/* Sun at center */}
      <Sun />
      
      {/* Planets orbiting */}
      {planetsData.map((planetData) => (
        <Planet key={planetData.id} planetData={planetData} />
      ))}
    </group>
  )
}

export default SolarSystem