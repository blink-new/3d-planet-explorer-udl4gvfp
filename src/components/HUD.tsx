import React from 'react'
import { Radar, Zap, Navigation } from 'lucide-react'

const HUD: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Top HUD */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
        {/* Left side - Mission info */}
        <div className="bg-black/40 backdrop-blur-sm border border-blue-500/30 rounded-lg p-4 pointer-events-auto">
          <div className="flex items-center gap-2 mb-2">
            <Navigation className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 font-mono text-sm">NAVIGATION</span>
          </div>
          <div className="text-white text-xs space-y-1">
            <div>Mission: Solar System Explorer</div>
            <div>Status: <span className="text-green-400">Active</span></div>
          </div>
        </div>

        {/* Right side - Controls */}
        <div className="bg-black/40 backdrop-blur-sm border border-blue-500/30 rounded-lg p-4 pointer-events-auto">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-400 font-mono text-sm">CONTROLS</span>
          </div>
          <div className="text-white text-xs space-y-1">
            <div>Mouse: Rotate View</div>
            <div>Scroll: Zoom In/Out</div>
            <div>Click: Select Planet</div>
          </div>
        </div>
      </div>

      {/* Bottom HUD */}
      <div className="absolute bottom-4 left-4 right-4 flex justify-center">
        <div className="bg-black/40 backdrop-blur-sm border border-green-500/30 rounded-lg p-4 pointer-events-auto">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Radar className="w-4 h-4 text-green-400" />
              <span className="text-green-400 font-mono text-sm">SCANNER</span>
            </div>
            <div className="text-white text-xs">
              Click on any planet to view detailed information
            </div>
          </div>
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-blue-500/50"></div>
      <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-blue-500/50"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-blue-500/50"></div>
      <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-blue-500/50"></div>
    </div>
  )
}

export default HUD