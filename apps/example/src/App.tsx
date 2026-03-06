import { useState, useEffect } from 'react'

// Layout & UI
import { DocLayout } from './components/layout/DocLayout'
import { ComponentDoc } from './pages/ComponentDocPage'
import { componentRegistry } from './registry'

// Styles
import '@byteflow-ui/button/dist/index.css'
import '@byteflow-ui/badge/dist/index.css'
import '@byteflow-ui/avatar/dist/index.css'
import '@byteflow-ui/card/dist/index.css'
import '@byteflow-ui/sidebar/dist/index.css'
import '@byteflow-ui/money-input/dist/index.css'
import './index.css'
import './theme.css'

const categories = [
  {
    title: 'Fundamentos',
    components: ['button', 'input', 'label', 'checkbox', 'radio', 'switch', 'slider']
  },
  {
    title: 'Visualización',
    components: ['badge', 'avatar', 'alert', 'progress', 'toast']
  },
  {
    title: 'Layout & Estructura',
    components: ['money-input', 'card', 'scroll-area', 'tabs', 'breadcrumb', 'empty', 'item', 'field']
  },
  {
    title: 'Overlays & Context',
    components: ['dialog', 'popover', 'dropdown-menu', 'sheet', 'hover-card']
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
