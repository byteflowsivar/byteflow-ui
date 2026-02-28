import { useState, useEffect } from 'react'
import { MoneyInput } from '@byteflow-ui/money-input'
import { Button } from '@byteflow-ui/button'
import { Label } from '@byteflow-ui/label'
import { Input } from '@byteflow-ui/input'
import { Checkbox } from '@byteflow-ui/checkbox'
import { Radio, RadioGroup } from '@byteflow-ui/radio'
import { Textarea } from '@byteflow-ui/textarea'
import '@byteflow-ui/money-input/dist/index.css'
import '@byteflow-ui/button/dist/index.css'
import '@byteflow-ui/label/dist/index.css'
import '@byteflow-ui/input/dist/index.css'
import '@byteflow-ui/checkbox/dist/index.css'
import '@byteflow-ui/radio/dist/index.css'
import '@byteflow-ui/textarea/dist/index.css'
import './App.css'
import './theme.css'

type ComponentType = 'money-input' | 'button' | 'label' | 'input' | 'checkbox' | 'radio' | 'textarea';

function App() {
  const [activeComponent, setActiveComponent] = useState<ComponentType>('textarea')
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

  const moneyInputCode = `import { MoneyInput } from '@byteflow-ui/money-input';
<MoneyInput label="Monto" value={125050} />`;

  const buttonCode = `import { Button } from '@byteflow-ui/button';
<Button variant="primary">Click me</Button>`;

  const labelCode = `import { Label } from '@byteflow-ui/label';
<Label required>Nombre</Label>`;

  const inputCode = `import { Input } from '@byteflow-ui/input';
<Input label="Email" placeholder="tu@email.com" />`;

  const checkboxCode = `import { Checkbox } from '@byteflow-ui/checkbox';
<Checkbox label="Acepto términos" />`;

  const radioCode = `import { Radio, RadioGroup } from '@byteflow-ui/radio';
<RadioGroup name="plan" value={value} onChange={setValue}>
  <Radio label="Básico" value="1" />
  <Radio label="Pro" value="2" />
</RadioGroup>`;

  const textareaCode = `import { Textarea } from '@byteflow-ui/textarea';

function MyComponent() {
  return (
    <Textarea 
      label="Descripción del Perfil"
      placeholder="Escribe algo sobre ti..."
      rows={4}
      required
    />
  );
}`;

  return (
    <div className="app-layout">
      {/* Sidebar Navigation */}
      <aside className="sidebar">
        <div className="logo-section"><h1>Byteflow UI</h1></div>
        <button className="theme-toggle-btn" onClick={toggleTheme} style={{ margin: '1rem' }}>
          {theme === 'light' ? '🌙 Modo Oscuro' : '☀️ Modo Claro'}
        </button>
        <nav className="nav-links">
          <div className="nav-group">
            <span className="nav-label">Componentes</span>
            {(['money-input', 'button', 'label', 'input', 'checkbox', 'radio', 'textarea'] as ComponentType[]).map(comp => (
              <div
                key={comp}
                className={`nav-item ${activeComponent === comp ? 'active' : ''}`}
                onClick={() => setActiveComponent(comp)}
              >
                {comp.charAt(0).toUpperCase() + comp.slice(1).replace('-', ' ')}
              </div>
            ))}
          </div>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="main-content">
        <header className="content-header">
          <h2>{activeComponent.charAt(0).toUpperCase() + activeComponent.slice(1).replace('-', ' ')}</h2>
        </header>

        <section className="component-section">
          <div className="preview-card">
            <div className="preview-tabs">
              <button className={`tab-btn ${activeTab === 'preview' ? 'active' : ''}`} onClick={() => setActiveTab('preview')}>Vista Previa</button>
              <button className={`tab-btn ${activeTab === 'code' ? 'active' : ''}`} onClick={() => setActiveTab('code')}>Código</button>
            </div>

            {activeTab === 'preview' ? (
              <div className="preview-body">
                {activeComponent === 'money-input' && <MoneyInput label="Monto" value={amount} onChange={setAmount} />}
                {activeComponent === 'button' && <div style={{ display: 'flex', gap: '1rem' }}><Button variant="primary">Primary</Button><Button variant="secondary">Secondary</Button></div>}
                {activeComponent === 'label' && <Label required>Etiqueta Requerida</Label>}
                {activeComponent === 'input' && <Input label="Usuario" placeholder="@nick" required />}
                {activeComponent === 'checkbox' && <Checkbox label="Acepto condiciones" defaultChecked />}
                {activeComponent === 'radio' && (
                  <RadioGroup name="demo" value={radioValue} onChange={e => setRadioValue(e.target.value)}>
                    <Radio label="Opción A" value="opcion1" />
                    <Radio label="Opción B" value="opcion2" />
                  </RadioGroup>
                )}
                {activeComponent === 'textarea' && (
                  <div style={{ width: '100%', maxWidth: '500px' }}>
                    <Textarea
                      label="Comentarios del Pedido"
                      placeholder="Instrucciones especiales para el repartidor..."
                      required
                    />
                    <div style={{ marginTop: '2rem' }}>
                      <Textarea
                        label="Notas Internas (Deshabilitado)"
                        defaultValue="Esta es una nota que no se puede editar."
                        disabled
                      />
                    </div>
                    <div style={{ marginTop: '2rem' }}>
                      <Textarea
                        label="Reporte de Errores"
                        error="El texto es demasiado corto"
                      />
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <pre className="code-block">
                <code>
                  {activeComponent === 'money-input' && moneyInputCode}
                  {activeComponent === 'button' && buttonCode}
                  {activeComponent === 'label' && labelCode}
                  {activeComponent === 'input' && inputCode}
                  {activeComponent === 'checkbox' && checkboxCode}
                  {activeComponent === 'radio' && radioCode}
                  {activeComponent === 'textarea' && textareaCode}
                </code>
              </pre>
            )}
          </div>
        </section>

        <footer className="demo-footer" style={{ marginTop: '4rem', opacity: 0.6 }}>
          <p>© 2026 Byteflow-UI - Final de la Fase 1 completado.</p>
        </footer>
      </main>
    </div>
  )
}

export default App
