import { useState, useEffect } from 'react'
import { MoneyInput } from '@byteflow-ui/money-input'
import { Button } from '@byteflow-ui/button'
import { Label } from '@byteflow-ui/label'
import { Input } from '@byteflow-ui/input'
import { Checkbox } from '@byteflow-ui/checkbox'
import { Radio, RadioGroup } from '@byteflow-ui/radio'
import '@byteflow-ui/money-input/dist/index.css'
import '@byteflow-ui/button/dist/index.css'
import '@byteflow-ui/label/dist/index.css'
import '@byteflow-ui/input/dist/index.css'
import '@byteflow-ui/checkbox/dist/index.css'
import '@byteflow-ui/radio/dist/index.css'
import './App.css'
import './theme.css'

type ComponentType = 'money-input' | 'button' | 'label' | 'input' | 'checkbox' | 'radio';

function App() {
  const [activeComponent, setActiveComponent] = useState<ComponentType>('radio')
  const [amount, setAmount] = useState(125050) // $1,250.50
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview')
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [radioValue, setRadioValue] = useState('opcion1')

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark-theme')
    } else {
      document.documentElement.classList.remove('dark-theme')
    }
  }, [theme])

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  const moneyInputCode = `/* Implementación de MoneyInput */
import { MoneyInput } from '@byteflow-ui/money-input';

function MyComponent() {
  return (
    <MoneyInput
      label="Monto de Inscripción"
      value={125050}
      currencySymbol="$"
      locale="es-MX"
    />
  );
}`;

  const buttonCode = `/* Implementación de Button */
import { Button } from '@byteflow-ui/button';

function MyComponent() {
  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Button variant="primary">Principal</Button>
      <Button variant="secondary">Secundario</Button>
      <Button variant="ghost">Ghost</Button>
      <Button isLoading>Cargando...</Button>
    </div>
  );
}`;

  const labelCode = `/* Implementación de Label */
import { Label } from '@byteflow-ui/label';

function MyComponent() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div>
        <Label required>Campo Requerido</Label>
        <div style={{ padding: '0.5rem', border: '1px solid var(--bf-surface-border)', borderRadius: '4px' }}>
          Input Placeholder...
        </div>
      </div>
      
      <div>
        <Label disabled>Campo Deshabilitado</Label>
        <div style={{ padding: '0.5rem', border: '1px solid var(--bf-surface-border)', borderRadius: '4px', opacity: 0.5 }}>
          Input Placeholder...
        </div>
      </div>
    </div>
  );
}`;

  const inputCode = `/* Implementación de Input */
import { Input } from '@byteflow-ui/input';

function MyComponent() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '400px' }}>
      <Input
        label="Nombre de Usuario"
        placeholder="@usuario"
        required
      />
      
      <Input
        label="Contraseña"
        type="password"
        placeholder="••••••••"
        error="La contraseña debe tener al menos 8 caracteres"
      />
    </div>
  );
}`;

  const checkboxCode = `/* Implementación de Checkbox */
import { Checkbox } from '@byteflow-ui/checkbox';

function MyComponent() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Checkbox label="Acepto los términos" required />
      <Checkbox label="Suscribirme al newsletter" defaultChecked />
      <Checkbox label="Opción deshabilitada" disabled />
    </div>
  );
}`;

  const radioCode = `/* Implementación de Radio */
import { Radio, RadioGroup } from '@byteflow-ui/radio';

function MyComponent() {
  const [value, setValue] = useState('opcion1');

  return (
    <RadioGroup 
      name="mi-grupo" 
      value={value} 
      onChange={(e) => setValue(e.target.value)}
    >
      <Radio label="Opción 1" value="opcion1" />
      <Radio label="Opción 2" value="opcion2" />
      <Radio label="Opción 3" value="opcion3" disabled />
    </RadioGroup>
  );
}`;

  return (
    <div className="app-layout">
      {/* Sidebar Navigation */}
      <aside className="sidebar">
        <div className="logo-section">
          <h1>Byteflow UI</h1>
        </div>

        <div className="theme-switcher">
          <button className="theme-toggle-btn" onClick={toggleTheme}>
            {theme === 'light' ? '🌙 Modo Oscuro' : '☀️ Modo Claro'}
          </button>
        </div>

        <nav className="nav-links">
          <div className="nav-group">
            <span className="nav-label">Fundamentos</span>
            <div className="nav-item">Introducción</div>
            <div className="nav-item">Instalación</div>
            <div className="nav-item">Tematización</div>
          </div>

          <div className="nav-group" style={{ marginTop: '1.5rem' }}>
            <span className="nav-label" style={{ color: 'var(--bf-text-muted)', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.5rem', display: 'block' }}>Componentes</span>
            <div
              className={`nav-item ${activeComponent === 'money-input' ? 'active' : ''}`}
              onClick={() => setActiveComponent('money-input')}
            >
              Money Input
            </div>
            <div
              className={`nav-item ${activeComponent === 'button' ? 'active' : ''}`}
              onClick={() => setActiveComponent('button')}
            >
              Button
            </div>
            <div
              className={`nav-item ${activeComponent === 'label' ? 'active' : ''}`}
              onClick={() => setActiveComponent('label')}
            >
              Label
            </div>
            <div
              className={`nav-item ${activeComponent === 'input' ? 'active' : ''}`}
              onClick={() => setActiveComponent('input')}
            >
              Input
            </div>
            <div
              className={`nav-item ${activeComponent === 'checkbox' ? 'active' : ''}`}
              onClick={() => setActiveComponent('checkbox')}
            >
              Checkbox
            </div>
            <div
              className={`nav-item ${activeComponent === 'radio' ? 'active' : ''}`}
              onClick={() => setActiveComponent('radio')}
            >
              Radio
            </div>
            <div className="nav-item">Textarea (Próximamente)</div>
          </div>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="main-content">
        {activeComponent === 'money-input' && (
          <>
            <header className="content-header">
              <h2>Money Input</h2>
              <p>Un componente especializado en la gestión financiera con soporte nativo para máscaras RTL (Right-to-Left) y formateo de moneda internacional.</p>
            </header>

            <section className="component-section">
              <div className="preview-card">
                <div className="preview-header">
                  <h3>Uso Dinámico</h3>
                </div>

                <div className="preview-tabs">
                  <button
                    className={`tab-btn ${activeTab === 'preview' ? 'active' : ''}`}
                    onClick={() => setActiveTab('preview')}
                  >
                    Vista Previa
                  </button>
                  <button
                    className={`tab-btn ${activeTab === 'code' ? 'active' : ''}`}
                    onClick={() => setActiveTab('code')}
                  >
                    Código
                  </button>
                </div>

                {activeTab === 'preview' ? (
                  <div className="preview-body">
                    <div style={{ width: '100%', maxWidth: '320px' }}>
                      <MoneyInput
                        label="Monto de la Operación"
                        value={amount}
                        onChange={(val: number) => setAmount(val)}
                        currencySymbol="$"
                        locale="es-MX"
                      />
                    </div>
                  </div>
                ) : (
                  <pre className="code-block">
                    <code>{moneyInputCode}</code>
                  </pre>
                )}
              </div>
            </section>
          </>
        )}

        {/* ... Button, Label, Input, Checkbox sections ... */}
        {/* (I'll keep them simplified to save space but fully functional as before) */}

        {activeComponent === 'button' && (
          <section className="component-section">
            <header className="content-header"><h2>Button</h2><p>Componente interactivo fundamental.</p></header>
            <div className="preview-card">
              <div className="preview-tabs">
                <button className={`tab-btn ${activeTab === 'preview' ? 'active' : ''}`} onClick={() => setActiveTab('preview')}>Vista Previa</button>
                <button className={`tab-btn ${activeTab === 'code' ? 'active' : ''}`} onClick={() => setActiveTab('code')}>Código</button>
              </div>
              {activeTab === 'preview' ? (
                <div className="preview-body" style={{ gap: '1rem', flexWrap: 'wrap' }}>
                  <Button variant="primary">Principal</Button>
                  <Button variant="secondary">Secundario</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button isLoading>Cargando</Button>
                </div>
              ) : <pre className="code-block"><code>{buttonCode}</code></pre>}
            </div>
          </section>
        )}

        {activeComponent === 'label' && (
          <section className="component-section">
            <header className="content-header"><h2>Label</h2><p>Etiqueta accesible esencial.</p></header>
            <div className="preview-card">
              <div className="preview-tabs">
                <button className={`tab-btn ${activeTab === 'preview' ? 'active' : ''}`} onClick={() => setActiveTab('preview')}>Vista Previa</button>
                <button className={`tab-btn ${activeTab === 'code' ? 'active' : ''}`} onClick={() => setActiveTab('code')}>Código</button>
              </div>
              {activeTab === 'preview' ? (
                <div className="preview-body" style={{ flexDirection: 'column', gap: '1.5rem' }}>
                  <Label required>Campo Requerido</Label>
                  <Label disabled>Campo Deshabilitado</Label>
                </div>
              ) : <pre className="code-block"><code>{labelCode}</code></pre>}
            </div>
          </section>
        )}

        {activeComponent === 'input' && (
          <section className="component-section">
            <header className="content-header"><h2>Input</h2><p>Entrada de texto versátil.</p></header>
            <div className="preview-card">
              <div className="preview-tabs">
                <button className={`tab-btn ${activeTab === 'preview' ? 'active' : ''}`} onClick={() => setActiveTab('preview')}>Vista Previa</button>
                <button className={`tab-btn ${activeTab === 'code' ? 'active' : ''}`} onClick={() => setActiveTab('code')}>Código</button>
              </div>
              {activeTab === 'preview' ? (
                <div className="preview-body" style={{ flexDirection: 'column', gap: '1.5rem', width: '100%', maxWidth: '400px' }}>
                  <Input label="Usuario" placeholder="@usuario" required />
                  <Input label="Password" type="password" error="Error detectado" />
                </div>
              ) : <pre className="code-block"><code>{inputCode}</code></pre>}
            </div>
          </section>
        )}

        {activeComponent === 'checkbox' && (
          <section className="component-section">
            <header className="content-header"><h2>Checkbox</h2><p>Selección múltiple premium.</p></header>
            <div className="preview-card">
              <div className="preview-tabs">
                <button className={`tab-btn ${activeTab === 'preview' ? 'active' : ''}`} onClick={() => setActiveTab('preview')}>Vista Previa</button>
                <button className={`tab-btn ${activeTab === 'code' ? 'active' : ''}`} onClick={() => setActiveTab('code')}>Código</button>
              </div>
              {activeTab === 'preview' ? (
                <div className="preview-body" style={{ flexDirection: 'column', gap: '1rem' }}>
                  <Checkbox label="Acepto términos" required />
                  <Checkbox label="Newsletter" defaultChecked />
                  <Checkbox label="Deshabilitado" disabled />
                </div>
              ) : <pre className="code-block"><code>{checkboxCode}</code></pre>}
            </div>
          </section>
        )}

        {activeComponent === 'radio' && (
          <>
            <header className="content-header">
              <h2>Radio</h2>
              <p>El componente de selección única con gestión de grupos y una estética premium refinada.</p>
            </header>

            <section className="component-section">
              <div className="preview-card">
                <div className="preview-header">
                  <h3>Radio Groups & Orientaciones</h3>
                </div>

                <div className="preview-tabs">
                  <button
                    className={`tab-btn ${activeTab === 'preview' ? 'active' : ''}`}
                    onClick={() => setActiveTab('preview')}
                  >
                    Vista Previa
                  </button>
                  <button
                    className={`tab-btn ${activeTab === 'code' ? 'active' : ''}`}
                    onClick={() => setActiveTab('code')}
                  >
                    Código
                  </button>
                </div>

                {activeTab === 'preview' ? (
                  <div className="preview-body" style={{ flexDirection: 'column', gap: '3rem', alignItems: 'flex-start', maxWidth: '500px', margin: '0 auto' }}>
                    <div style={{ width: '100%' }}>
                      <Label style={{ marginBottom: '1rem', display: 'block', fontWeight: 600 }}>Plan de suscripción (Vertical)</Label>
                      <RadioGroup
                        name="plan"
                        value={radioValue}
                        onChange={(e) => setRadioValue(e.target.value)}
                      >
                        <Radio label="Plan Gratuito - $0/mes" value="opcion1" />
                        <Radio label="Plan Pro - $19/mes" value="opcion2" />
                        <Radio label="Plan Enterprise - Contactar" value="opcion3" disabled />
                      </RadioGroup>
                      <div className="display-result" style={{ marginTop: '1rem' }}>
                        Seleccionado: <code style={{ color: 'var(--bf-accent)' }}>{radioValue}</code>
                      </div>
                    </div>

                    <div style={{ width: '100%' }}>
                      <Label style={{ marginBottom: '1rem', display: 'block', fontWeight: 600 }}>Método de Entrega (Horizontal)</Label>
                      <RadioGroup orientation="horizontal" name="delivery" defaultValue="express">
                        <Radio label="Express" value="express" />
                        <Radio label="Estándar" value="standard" />
                        <Radio label="Recogida" value="pickup" />
                      </RadioGroup>
                    </div>
                  </div>
                ) : (
                  <pre className="code-block">
                    <code>{radioCode}</code>
                  </pre>
                )}

                <footer className="preview-footer" style={{ padding: '1rem 2rem', background: 'rgba(0,0,0,0.1)' }}>
                  <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--bf-text-muted)' }}>
                    Componentes: <code>RadioGroup</code> (name, value, onChange, orientation) y <code>Radio</code> (label, value, disabled).
                  </p>
                </footer>
              </div>
            </section>
          </>
        )}

        <footer className="demo-footer" style={{ marginTop: '6rem', borderTop: '1px solid var(--bf-surface-border)', padding: '4rem 0' }}>
          <p>© 2026 Byteflow-UI Framework. Diseñado para experiencias financieras premium.</p>
        </footer>
      </main>
    </div>
  )
}

export default App
