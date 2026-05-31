'use client'
import { createContext, useContext, useState, ReactNode } from 'react'

export type Product = {
  id: string
  category: string
  categorySlug: string
  name: string
  image: string
  description: string
  fullDescription: string
  specs: Record<string, string>
}

type AppState = {
  panelProduct: Product | null
  openPanel: (product: Product) => void
  closePanel: () => void
  missionOpen: boolean
  openMission: () => void
  closeMission: () => void
  legalOpen: 'privacy' | 'terms' | null
  openLegal: (type: 'privacy' | 'terms') => void
  closeLegal: () => void
}

const AppContext = createContext<AppState>({} as AppState)

export function AppProvider({ children }: { children: ReactNode }) {
  const [panelProduct, setPanelProduct] = useState<Product | null>(null)
  const [missionOpen, setMissionOpen] = useState(false)
  const [legalOpen, setLegalOpen] = useState<'privacy' | 'terms' | null>(null)

  const openPanel  = (p: Product) => { setPanelProduct(p); document.body.style.overflow = 'hidden' }
  const closePanel = () => { setPanelProduct(null); document.body.style.overflow = '' }
  const openMission  = () => { setMissionOpen(true);  document.body.style.overflow = 'hidden' }
  const closeMission = () => { setMissionOpen(false); document.body.style.overflow = '' }
  const openLegal  = (type: 'privacy' | 'terms') => { setLegalOpen(type); document.body.style.overflow = 'hidden' }
  const closeLegal = () => { setLegalOpen(null); document.body.style.overflow = '' }

  return (
    <AppContext.Provider value={{
      panelProduct, openPanel, closePanel,
      missionOpen, openMission, closeMission,
      legalOpen, openLegal, closeLegal,
    }}>
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => useContext(AppContext)
