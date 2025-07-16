import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import SolarSystem from './components/SolarSystem'
import HUD from './components/HUD'
import PlanetInfoPanel from './components/PlanetInfoPanel'
import { PlanetProvider } from './context/PlanetContext'
import './App.css'

function App() {
  return (
    <PlanetProvider>
      <div className="w-full h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-black overflow-hidden relative">
        {/* 3D Canvas */}
        <Canvas
          camera={{ position: [0, 5, 10], fov: 75 }}
          className="w-full h-full"
        >
          <Suspense fallback={null}>
            {/* Lighting */}
            <ambientLight intensity={0.1} />
            <pointLight position={[0, 0, 0]} intensity={2} color="#FDB813" />
            
            {/* Star field background */}
            <Stars 
              radius={300} 
              depth={60} 
              count={5000} 
              factor={7} 
              saturation={0} 
              fade 
            />
            
            {/* Solar System */}
            <SolarSystem />
            
            {/* Camera controls */}
            <OrbitControls 
              enablePan={true}
              enableZoom={true}
              enableRotate={true}
              minDistance={5}
              maxDistance={50}
              autoRotate={false}
            />
          </Suspense>
        </Canvas>

        {/* UI Overlay */}
        <HUD />
        <PlanetInfoPanel />
      </div>
    </PlanetProvider>
  )
}

export default App