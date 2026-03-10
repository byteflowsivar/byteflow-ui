import { useState, useEffect } from 'react'

// Layout & UI
import { DocLayout } from './components/layout/DocLayout'
import { ComponentDoc } from './pages/ComponentDocPage'
import { componentRegistry } from './registry'

// Styles
import '@byteflow-ui/button/index.css'
import '@byteflow-ui/badge/index.css'
import '@byteflow-ui/avatar/index.css'
import '@byteflow-ui/alert/index.css'
import '@byteflow-ui/progress/index.css'
import '@byteflow-ui/toast/index.css'
import '@byteflow-ui/card/index.css'
import '@byteflow-ui/sidebar/index.css'
import '@byteflow-ui/money-input/index.css'
import '@byteflow-ui/checkbox/index.css'
import '@byteflow-ui/input/index.css'
import '@byteflow-ui/switch/index.css'
import '@byteflow-ui/slider/dist/index.css'
import '@byteflow-ui/tabs/index.css'
import '@byteflow-ui/scroll-area/index.css'
import '@byteflow-ui/breadcrumb/index.css'
import '@byteflow-ui/empty/index.css'
import '@byteflow-ui/item/index.css'
import '@byteflow-ui/field/index.css'
import '@byteflow-ui/dialog/index.css'
import '@byteflow-ui/popover/index.css'
import '@byteflow-ui/dropdown-menu/index.css'
import '@byteflow-ui/sheet/index.css'
import '@byteflow-ui/hover-card/index.css'
import '@byteflow-ui/tooltip/index.css'
import '@byteflow-ui/data-table/index.css'
import '@byteflow-ui/table/index.css'
import '@byteflow-ui/pagination/index.css'
import '@byteflow-ui/command/index.css'
import '@byteflow-ui/combobox/index.css'
import '@byteflow-ui/accordion/index.css'
import '@byteflow-ui/calendar/index.css'
import '@byteflow-ui/date-picker/index.css'
import '@byteflow-ui/skeleton/index.css'
import '@byteflow-ui/textarea/index.css'
import '@byteflow-ui/alert-dialog/index.css'
import './index.css'
import './theme.css'

const categories = [
  {
    title: 'Fundamentos',
    components: ['button', 'input', 'textarea', 'checkbox', 'switch', 'slider', 'field', 'skeleton']
  },
  {
    title: 'Visualización',
    components: ['badge', 'avatar', 'alert', 'progress', 'toast']
  },
  {
    title: 'Layout & Estructura',
    components: ['money-input', 'card', 'tabs', 'scroll-area', 'breadcrumb', 'empty', 'item', 'data-table', 'accordion']
  },
  {
    title: 'Formularios & Selección',
    components: ['combobox', 'select', 'date-picker']
  },
  {
    title: 'Overlays & Context',
    components: ['dialog', 'alert-dialog', 'popover', 'dropdown-menu', 'sheet', 'hover-card', 'tooltip']
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
