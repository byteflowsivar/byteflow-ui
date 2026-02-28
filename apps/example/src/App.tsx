import { useState, useEffect } from 'react'
import { MoneyInput } from '@byteflow-ui/money-input'
import { Button } from '@byteflow-ui/button'
import { Label } from '@byteflow-ui/label'
import '@byteflow-ui/money-input/dist/index.css'
import '@byteflow-ui/button/dist/index.css'
import '@byteflow-ui/label/dist/index.css'
import './App.css'
import './theme.css'

type ComponentType = 'money-input' | 'button' | 'label';

function App() {
  const [activeComponent, setActiveComponent] = useState<ComponentType>('label')
  const [amount, setAmount] = useState(125050) // $1,250.50
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview')
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

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
} `;

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
} `;

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
} `;

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
              className={`nav - item ${activeComponent === 'money-input' ? 'active' : ''} `}
              onClick={() => setActiveComponent('money-input')}
            >
              Money Input
            </div>
            <div
              className={`nav - item ${activeComponent === 'button' ? 'active' : ''} `}
              onClick={() => setActiveComponent('button')}
            >
              Button
            </div>
            <div
              className={`nav - item ${activeComponent === 'label' ? 'active' : ''} `}
              onClick={() => setActiveComponent('label')}
            >
              Label
            </div>
            <div className="nav-item">Input (Próximamente)</div>
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
                    className={`tab - btn ${activeTab === 'preview' ? 'active' : ''} `}
                    onClick={() => setActiveTab('preview')}
                  >
                    Vista Previa
                  </button>
                  <button
                    className={`tab - btn ${activeTab === 'code' ? 'active' : ''} `}
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

                      <div className="display-result" style={{ marginTop: '1.5rem', border: '1px dashed var(--bf-surface-border)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                          <span style={{ color: 'var(--bf-text-secondary)' }}>Valor Crudo (Centavos):</span>
                          <code style={{ color: 'var(--bf-accent)' }}>{amount}</code>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span style={{ color: 'var(--bf-text-secondary)' }}>Salida Formateada:</span>
                          <strong style={{ color: 'var(--bf-text-primary)' }}>
                            ${(amount / 100).toLocaleString('es-MX', { minimumFractionDigits: 2 })}
                          </strong>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <pre className="code-block">
                    <code>{moneyInputCode}</code>
                  </pre>
                )}

                <footer className="preview-footer" style={{ padding: '1rem 2rem', background: 'rgba(0,0,0,0.1)' }}>
                  <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--bf-text-muted)' }}>
                    Propiedades soportadas: <code>label</code>, <code>value</code>, <code>onChange</code>, <code>currencySymbol</code>, <code>locale</code>.
                  </p>
                </footer>
              </div>

              <div className="preview-card">
                <div className="preview-header">
                  <h3>Estados Especiales</h3>
                </div>
                <div className="preview-body" style={{ gap: '2rem', flexWrap: 'wrap' }}>
                  <div style={{ width: '100%', maxWidth: '280px' }}>
                    <MoneyInput
                      label="Solo Lectura (Disabled)"
                      disabled={true}
                      value={500000}
                      currencySymbol="€"
                    />
                  </div>
                  <div style={{ width: '100%', maxWidth: '280px' }}>
                    <MoneyInput
                      label="Sin Label (Placeholder)"
                      value={0}
                      currencySymbol="¥"
                    />
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {activeComponent === 'button' && (
          <>
            <header className="content-header">
              <h2>Button</h2>
              <p>El componente interactivo fundamental para ejecutar acciones. Soporta múltiples variantes, tamaños y estados emocionales de carga.</p>
            </header>

            <section className="component-section">
              <div className="preview-card">
                <div className="preview-header">
                  <h3>Variantes & Tamaños</h3>
                </div>

                <div className="preview-tabs">
                  <button
                    className={`tab - btn ${activeTab === 'preview' ? 'active' : ''} `}
                    onClick={() => setActiveTab('preview')}
                  >
                    Vista Previa
                  </button>
                  <button
                    className={`tab - btn ${activeTab === 'code' ? 'active' : ''} `}
                    onClick={() => setActiveTab('code')}
                  >
                    Código
                  </button>
                </div>

                {activeTab === 'preview' ? (
                  <div className="preview-body" style={{ flexDirection: 'column', gap: '2rem' }}>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                      <Button variant="primary">Botón Principal</Button>
                      <Button variant="secondary">Secundario</Button>
                      <Button variant="ghost">Botón Ghost</Button>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
                      <Button size="sm">Pequeño (sm)</Button>
                      <Button size="md">Mediano (md)</Button>
                      <Button size="lg">Grande (lg)</Button>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                      <Button isLoading>Cargando Datos</Button>
                      <Button disabled>Deshabilitado</Button>
                    </div>
                  </div>
                ) : (
                  <pre className="code-block">
                    <code>{buttonCode}</code>
                  </pre>
                )}

                <footer className="preview-footer" style={{ padding: '1rem 2rem', background: 'rgba(0,0,0,0.1)' }}>
                  <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--bf-text-muted)' }}>
                    Propiedades soportadas: <code>variant</code>, <code>size</code>, <code>isLoading</code>, <code>disabled</code>, <code>onClick</code>.
                  </p>
                </footer>
              </div>
            </section>
          </>
        )}

        {activeComponent === 'label' && (
          <>
            <header className="content-header">
              <h2>Label</h2>
              <p>El componente de etiqueta accesible esencial para identificar elementos de formulario y mejorar la experiencia de usuario con lectores de pantalla.</p>
            </header>

            <section className="component-section">
              <div className="preview-card">
                <div className="preview-header">
                  <h3>Uso Básico & Estados</h3>
                </div>

                <div className="preview-tabs">
                  <button
                    className={`tab - btn ${activeTab === 'preview' ? 'active' : ''} `}
                    onClick={() => setActiveTab('preview')}
                  >
                    Vista Previa
                  </button>
                  <button
                    className={`tab - btn ${activeTab === 'code' ? 'active' : ''} `}
                    onClick={() => setActiveTab('code')}
                  >
                    Código
                  </button>
                </div>

                {activeTab === 'preview' ? (
                  <div className="preview-body" style={{ flexDirection: 'column', gap: '3rem', alignItems: 'flex-start', maxWidth: '400px', margin: '0 auto' }}>
                    <div style={{ width: '100%' }}>
                      <Label required htmlFor="input-demo">Nombre Completo</Label>
                      <div id="input-demo" style={{ padding: '0.75rem 1rem', background: 'var(--bf-canvas-subtle)', border: '1px solid var(--bf-surface-border)', borderRadius: 'var(--bf-radius-md)', color: 'var(--bf-text-muted)', fontSize: '0.875rem' }}>
                        Input Placeholder...
                      </div>
                      <p style={{ fontSize: '0.75rem', color: 'var(--bf-text-muted)', marginTop: '0.5rem' }}>El asterisco indica que este campo es obligatorio.</p>
                    </div>

                    <div style={{ width: '100%' }}>
                      <Label disabled htmlFor="input-disabled">Correo (Deshabilitado)</Label>
                      <div id="input-disabled" style={{ padding: '0.75rem 1rem', background: 'var(--bf-canvas-subtle)', border: '1px solid var(--bf-surface-border)', borderRadius: 'var(--bf-radius-md)', color: 'var(--bf-text-muted)', fontSize: '0.875rem', opacity: 0.5 }}>
                        usuario@ejemplo.com
                      </div>
                    </div>
                  </div>
                ) : (
                  <pre className="code-block">
                    <code>{labelCode}</code>
                  </pre>
                )}

                <footer className="preview-footer" style={{ padding: '1rem 2rem', background: 'rgba(0,0,0,0.1)' }}>
                  <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--bf-text-muted)' }}>
                    Propiedades soportadas: <code>htmlFor</code>, <code>required</code>, <code>disabled</code>, <code>children</code>.
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
