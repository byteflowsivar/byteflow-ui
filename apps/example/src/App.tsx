import { useState, useEffect } from 'react'

// Layout & UI
import { DocLayout } from './components/layout/DocLayout'
import { ComponentDoc } from './pages/ComponentDocPage'
import { componentRegistry } from './registry'

// Styles
import '@byteflow-ui/button/dist/index.css'
import '@byteflow-ui/badge/dist/index.css'
import '@byteflow-ui/avatar/dist/index.css'
import '@byteflow-ui/alert/dist/index.css'
import '@byteflow-ui/progress/dist/index.css'
import '@byteflow-ui/toast/dist/index.css'
import '@byteflow-ui/card/dist/index.css'
import '@byteflow-ui/sidebar/dist/index.css'
import '@byteflow-ui/money-input/dist/index.css'
import '@byteflow-ui/checkbox/dist/index.css'
import '@byteflow-ui/input/dist/index.css'
import '@byteflow-ui/switch/dist/index.css'
import '@byteflow-ui/slider/dist/index.css'
import '@byteflow-ui/tabs/dist/index.css'
import '@byteflow-ui/scroll-area/dist/index.css'
import '@byteflow-ui/breadcrumb/dist/index.css'
import '@byteflow-ui/empty/dist/index.css'
import '@byteflow-ui/item/dist/index.css'
import '@byteflow-ui/field/dist/index.css'
import '@byteflow-ui/dialog/dist/index.css'
import '@byteflow-ui/popover/dist/index.css'
import '@byteflow-ui/dropdown-menu/dist/index.css'
import '@byteflow-ui/sheet/dist/index.css'
import '@byteflow-ui/hover-card/dist/index.css'
import '@byteflow-ui/tooltip/dist/index.css'
import './index.css'
import './theme.css'

const categories = [
  {
    title: 'Fundamentos',
    components: ['button', 'input', 'checkbox', 'switch', 'slider', 'field']
  },
  {
    title: 'Visualización',
    components: ['badge', 'avatar', 'alert', 'progress', 'toast']
  },
  {
    title: 'Layout & Estructura',
    components: ['money-input', 'card', 'tabs', 'scroll-area', 'breadcrumb', 'empty', 'item']
  },
  {
    title: 'Overlays & Context',
    components: ['dialog', 'popover', 'dropdown-menu', 'sheet', 'hover-card', 'tooltip']
  }
];

function App() {
  const [activeComponentId, setActiveComponentId] = useState('button')
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    document.documentElement.classList.toggle('dark-theme', theme === 'dark')
  }, [theme])

  const activeDefinition = componentRegistry[activeComponentId];

  return (
    <DocLayout
      activeComponentId={activeComponentId}
      onSelectComponent={setActiveComponentId}
      categories={categories}
      theme={theme}
      onToggleTheme={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {activeDefinition ? (
        <ComponentDoc definition={activeDefinition} />
      ) : (
        <div style={{ padding: '4rem', textAlign: 'center', color: 'var(--bf-text-muted)' }}>
          <h2 style={{ fontSize: '2rem', color: 'var(--bf-text-primary)' }}>Próximamente</h2>
          <p>La documentación para el componente <strong>"{activeComponentId}"</strong> está en construcción.</p>
          <div style={{
            marginTop: '2rem',
            padding: '2rem',
            border: '1px dashed var(--bf-surface-border)',
            borderRadius: '16px'
          }}>
            <p style={{ margin: 0 }}>Estamos migrando todos los ejemplos al nuevo formato premium.</p>
          </div>
        </div>
      )}
    </DocLayout>
  )
}

export default App
