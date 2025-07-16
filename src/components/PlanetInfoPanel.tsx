import React from 'react'
import { X, Globe, Thermometer, Ruler, MapPin } from 'lucide-react'
import { usePlanet } from '../context/PlanetContext'
import { Button } from './ui/button'

const PlanetInfoPanel: React.FC = () => {
  const { selectedPlanet, isInfoPanelOpen, setIsInfoPanelOpen, setSelectedPlanet } = usePlanet()

  if (!isInfoPanelOpen || !selectedPlanet) return null

  const handleClose = () => {
    setIsInfoPanelOpen(false)
    setSelectedPlanet(null)
  }

  return (
    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-blue-500/30 rounded-xl p-6 max-w-md w-full mx-4 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div 
              className="w-6 h-6 rounded-full shadow-lg"
              style={{ backgroundColor: selectedPlanet.color }}
            />
            <h2 className="text-2xl font-bold text-white">{selectedPlanet.name}</h2>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClose}
            className="text-gray-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Planet type badge */}
        <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm mb-4">
          <Globe className="w-4 h-4" />
          {selectedPlanet.type}
        </div>

        {/* Description */}
        <p className="text-gray-300 mb-6 leading-relaxed">
          {selectedPlanet.description}
        </p>

        {/* Stats */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-sm">
            <Ruler className="w-4 h-4 text-blue-400" />
            <span className="text-gray-400">Diameter:</span>
            <span className="text-white font-mono">{selectedPlanet.diameter}</span>
          </div>
          
          <div className="flex items-center gap-3 text-sm">
            <MapPin className="w-4 h-4 text-green-400" />
            <span className="text-gray-400">Distance:</span>
            <span className="text-white font-mono">{selectedPlanet.distance}</span>
          </div>
          
          <div className="flex items-center gap-3 text-sm">
            <Thermometer className="w-4 h-4 text-red-400" />
            <span className="text-gray-400">Temperature:</span>
            <span className="text-white font-mono">{selectedPlanet.temperature}</span>
          </div>
        </div>

        {/* Close button */}
        <div className="mt-6 pt-4 border-t border-gray-700">
          <Button 
            onClick={handleClose}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          >
            Continue Exploring
          </Button>
        </div>
      </div>
    </div>
  )
}

export default PlanetInfoPanel