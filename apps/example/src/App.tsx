import { useState, useEffect } from 'react'
import { MoneyInput } from '@byteflow-ui/money-input'
import '@byteflow-ui/money-input/dist/index.css'
import './App.css'
import './theme.css'

function App() {
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

  const codeExample = `/* Implementación Base */
import { MoneyInput } from '@byteflow-ui/money-input';

function MyComponent() {
  return (
      currencySymbol="$"
      locale="es-MX"
    />
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
            <div className="nav-item active">Money Input</div>
            <div className="nav-item">Button (Próximamente)</div>
            <div className="nav-item">Input (Próximamente)</div>
          </div>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="main-content">
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
                <code>{codeExample}</code>
              </pre>
            )}

            <footer className="preview-footer" style={{ padding: '1rem 2rem', background: 'rgba(0,0,0,0.1)' }}>
              <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--bf-surface-text-muted)' }}>
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

        <footer className="demo-footer" style={{ marginTop: '6rem', borderTop: '1px solid var(--bf-surface-border)', padding: '4rem 0' }}>
          <p>© 2026 Byteflow-UI Framework. Diseñado para experiencias financieras premium.</p>
        </footer>
      </main>
    </div >
  )
}

export default App
