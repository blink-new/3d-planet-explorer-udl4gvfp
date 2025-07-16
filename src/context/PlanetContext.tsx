import React, { createContext, useContext, useState, ReactNode } from 'react'

export interface PlanetData {
  id: string
  name: string
  type: string
  diameter: string
  distance: string
  temperature: string
  description: string
  color: string
  size: number
  orbitRadius: number
  orbitSpeed: number
}

interface PlanetContextType {
  selectedPlanet: PlanetData | null
  setSelectedPlanet: (planet: PlanetData | null) => void
  isInfoPanelOpen: boolean
  setIsInfoPanelOpen: (open: boolean) => void
}

const PlanetContext = createContext<PlanetContextType | undefined>(undefined)

export const usePlanet = () => {
  const context = useContext(PlanetContext)
  if (!context) {
    throw new Error('usePlanet must be used within a PlanetProvider')
  }
  return context
}

interface PlanetProviderProps {
  children: ReactNode
}

export const PlanetProvider: React.FC<PlanetProviderProps> = ({ children }) => {
  const [selectedPlanet, setSelectedPlanet] = useState<PlanetData | null>(null)
  const [isInfoPanelOpen, setIsInfoPanelOpen] = useState(false)

  return (
    <PlanetContext.Provider
      value={{
        selectedPlanet,
        setSelectedPlanet,
        isInfoPanelOpen,
        setIsInfoPanelOpen,
      }}
    >
      {children}
    </PlanetContext.Provider>
  )
}