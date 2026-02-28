import { useState, useEffect } from 'react'
import { MoneyInput } from '@byteflow-ui/money-input'
import { Button } from '@byteflow-ui/button'
import { Label } from '@byteflow-ui/label'
import { Input } from '@byteflow-ui/input'
import { Checkbox } from '@byteflow-ui/checkbox'
import { Radio, RadioGroup } from '@byteflow-ui/radio'
import { Textarea } from '@byteflow-ui/textarea'
import { Select } from '@byteflow-ui/select'
import { Switch } from '@byteflow-ui/switch'
import { Tooltip } from '@byteflow-ui/tooltip'

import '@byteflow-ui/money-input/dist/index.css'
import '@byteflow-ui/button/dist/index.css'
import '@byteflow-ui/label/dist/index.css'
import '@byteflow-ui/input/dist/index.css'
import '@byteflow-ui/checkbox/dist/index.css'
import '@byteflow-ui/radio/dist/index.css'
import '@byteflow-ui/textarea/dist/index.css'
import '@byteflow-ui/select/dist/index.css'
import '@byteflow-ui/switch/dist/index.css'
import '@byteflow-ui/tooltip/dist/index.css'
import './App.css'
import './theme.css'

type ComponentType = 'money-input' | 'button' | 'label' | 'input' | 'checkbox' | 'radio' | 'textarea' | 'select' | 'switch' | 'tooltip';
type TabType = 'preview' | 'code' | 'styles';

interface StyleDoc {
  selector: string;
  description: string;
  variables: { name: string; desc: string }[];
}

const componentStyles: Record<ComponentType, StyleDoc[]> = {
  'money-input': [{
    selector: '.bf-money-input',
    description: 'Contenedor principal del componente.',
    variables: [
      { name: '--bf-money-input-primary-color', desc: 'Color de acento para foco y bordes.' },
      { name: '--bf-money-input-bg-color', desc: 'Color de fondo del campo de entrada.' },
      { name: '--bf-money-input-border-color', desc: 'Color del borde en estado normal.' }
    ]
  }],
  'button': [{
    selector: '.bf-button',
    description: 'Clase base para todos los botones.',
    variables: [
      { name: '--bf-button-primary-bg', desc: 'Color de fondo para la variante principal.' },
      { name: '--bf-button-radius', desc: 'Radio de los bordes del botón.' }
    ]
  }],
  'label': [{
    selector: '.bf-label',
    description: 'Etiqueta de texto para campos de formulario.',
    variables: [
      { name: '--bf-label-text', desc: 'Color del texto de la etiqueta.' }
    ]
  }],
  'input': [{
    selector: '.bf-input',
    description: 'Campo de entrada de texto estándar.',
    variables: [
      { name: '--bf-input-bg', desc: 'Color de fondo del input.' },
      { name: '--bf-input-ring', desc: 'Color del anillo de foco.' }
    ]
  }],
  'checkbox': [{
    selector: '.bf-checkbox-custom',
    description: 'El cuadro visual que representa el checkbox.',
    variables: [
      { name: '--bf-checkbox-checked-bg', desc: 'Fondo cuando está seleccionado.' }
    ]
  }],
  'radio': [{
    selector: '.bf-radio-custom',
    description: 'El círculo visual del radio botón.',
    variables: [
      { name: '--bf-radio-dot-color', desc: 'Color del punto central seleccionado.' }
    ]
  }],
  'textarea': [{
    selector: '.bf-textarea',
    description: 'Área de texto multilínea.',
    variables: [
      { name: '--bf-textarea-min-height', desc: 'Altura mínima del área.' }
    ]
  }],
  'select': [{
    selector: '.bf-select',
    description: 'Selector (dropdown) nativo con estilizado premium.',
    variables: [
      { name: '--bf-select-bg', desc: 'Color de fondo del selector.' },
      { name: '--bf-select-radius', desc: 'Radio de los bordes.' },
      { name: '--bf-select-height', desc: 'Altura del componente.' }
    ]
  }, {
    selector: '.bf-select-chevron',
    description: 'Icono de flecha personalizado.',
    variables: [
      { name: '--bf-select-chevron', desc: 'Color del icono.' }
    ]
  }],
  'switch': [{
    selector: '.bf-switch-track',
    description: 'La pista o fondo del interruptor.',
    variables: [
      { name: '--bf-switch-bg-checked', desc: 'Color de fondo cuando está activado.' },
      { name: '--bf-switch-width', desc: 'Ancho total del track.' }
    ]
  }, {
    selector: '.bf-switch-thumb',
    description: 'El círculo deslizante.',
    variables: []
  }],
  'tooltip': [{
    selector: '.bf-tooltip',
    description: 'Etiqueta de información flotante con posicionamiento inteligente.',
    variables: [
      { name: '--bf-tooltip-bg', desc: 'Color de fondo del globo.' },
      { name: '--bf-tooltip-radius', desc: 'Radio de los bordes.' },
      { name: '--bf-tooltip-z-index', desc: 'Orden de apilamiento.' }
    ]
  }]
};

function App() {
  const [activeComponent, setActiveComponent] = useState<ComponentType>('money-input')
  const [amount, setAmount] = useState(125050)
  const [activeTab, setActiveTab] = useState<TabType>('preview')
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [radioValue, setRadioValue] = useState('opcion1')

  useEffect(() => {
    document.documentElement.classList.toggle('dark-theme', theme === 'dark')
  }, [theme])

  const renderPreview = () => {
    switch (activeComponent) {
      case 'money-input':
        return (
          <div style={{ width: '100%', maxWidth: '400px' }}>
            <MoneyInput
              label="Monto de la Operación"
              value={amount}
              onChange={(val: number) => setAmount(val)}
              currencySymbol="$"
              locale="es-MX"
            />
            <div className="display-result" style={{ marginTop: '1.5rem', border: '1px dashed var(--bf-surface-border)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ color: 'var(--bf-text-secondary)' }}>Valor Crudo:</span>
                <code>{amount}</code>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--bf-text-secondary)' }}>Formateado:</span>
                <strong style={{ color: 'var(--bf-accent)' }}>
                  ${(amount / 100).toLocaleString('es-MX', { minimumFractionDigits: 2 })}
                </strong>
              </div>
            </div>
          </div>
        );
      case 'button':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Button variant="primary">Principal</Button>
              <Button variant="secondary">Secundario</Button>
              <Button variant="ghost">Ghost</Button>
            </div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Button isLoading>Cargando...</Button>
              <Button disabled>Deshabilitado</Button>
            </div>
          </div>
        );
      case 'label':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%', maxWidth: '400px' }}>
            <div>
              <Label required>Campo Requerido</Label>
              <div className="placeholder-box">Input Placeholder...</div>
            </div>
            <div>
              <Label disabled>Campo Deshabilitado</Label>
              <div className="placeholder-box" style={{ opacity: 0.5 }}>Input Placeholder...</div>
            </div>
          </div>
        );
      case 'input':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%', maxWidth: '400px' }}>
            <Input label="Nombre de Usuario" placeholder="@usuario" required />
            <Input label="Contraseña" type="password" placeholder="••••••••" error="La contraseña es demasiado débil" />
            <Input label="Email" defaultValue="víctor@ejemplo.com" disabled />
          </div>
        );
      case 'checkbox':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'flex-start' }}>
            <Checkbox label="Acepto los términos y condiciones" required />
            <Checkbox label="Suscribirme al boletín informativo" defaultChecked />
            <Checkbox label="Guardar sesión" />
            <Checkbox label="Opción deshabilitada" disabled />
          </div>
        );
      case 'radio':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', width: '100%', maxWidth: '500px' }}>
            <div>
              <Label style={{ marginBottom: '1rem', display: 'block', fontWeight: 600 }}>Plan seleccionado</Label>
              <RadioGroup name="plan" value={radioValue} onChange={e => setRadioValue(e.target.value)}>
                <Radio label="Plan Básico - Gratis" value="opcion1" />
                <Radio label="Plan Pro - $19/mes" value="opcion2" />
                <Radio label="Plan Gold - $49/mes" value="opcion3" disabled />
              </RadioGroup>
            </div>
            <div>
              <Label style={{ marginBottom: '1rem', display: 'block', fontWeight: 600 }}>Notificaciones</Label>
              <RadioGroup orientation="horizontal" name="notif" defaultValue="si">
                <Radio label="Activadas" value="si" />
                <Radio label="Desactivadas" value="no" />
              </RadioGroup>
            </div>
          </div>
        );
      case 'textarea':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%', maxWidth: '500px' }}>
            <Textarea label="Biografía" placeholder="Escribe algo sobre ti..." rows={4} required />
            <Textarea label="Comentarios" error="Máximo 500 caracteres admitidos" />
            <Textarea label="Notas de Sistema" defaultValue="Logs bloqueados." disabled />
          </div>
        );
      case 'select':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%', maxWidth: '400px' }}>
            <Select
              label="País de envío"
              options={[
                { label: 'México', value: 'mx' },
                { label: 'España', value: 'es' },
                { label: 'Colombia', value: 'co' },
                { label: 'Argentina', value: 'ar' }
              ]}
              placeholder="Selecciona tu país"
              required
            />
            <Select label="Prioridad" defaultValue="normal">
              <option value="low">Baja</option>
              <option value="normal">Normal</option>
              <option value="high">Alta</option>
              <option value="urgent" disabled>Urgente (No disponible)</option>
            </Select>
            <Select label="Zona Horaria" defaultValue="gmt" error="Zona no válida para tu región">
              <option value="gmt">GMT 0</option>
              <option value="est">EST -5</option>
            </Select>
          </div>
        );
      case 'switch':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%', maxWidth: '300px' }}>
              <Switch label="Notificaciones de inserción" defaultChecked />
              <Switch label="Modo Desarrollador" />
              <Switch label="Opción deshabilitada" disabled />
            </div>
            <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
              <Switch size="sm" label="Pequeño" />
              <Switch size="md" label="Mediano" />
              <Switch size="lg" label="Grande" defaultChecked />
            </div>
          </div>
        );
      case 'tooltip':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem', alignItems: 'center', padding: '2rem' }}>
            <div style={{ display: 'flex', gap: '2rem' }}>
              <Tooltip content="Tooltip arriba" position="top">
                <Button variant="secondary">Arriba</Button>
              </Tooltip>
              <Tooltip content="Tooltip abajo" position="bottom">
                <Button variant="secondary">Abajo</Button>
              </Tooltip>
            </div>
            <div style={{ display: 'flex', gap: '2rem' }}>
              <Tooltip content="Tooltip izquierda" position="left">
                <Button variant="ghost">Izquierda</Button>
              </Tooltip>
              <Tooltip content="Tooltip derecha" position="right">
                <Button variant="ghost">Derecha</Button>
              </Tooltip>
            </div>
            <div style={{ marginTop: '2rem' }}>
              <Tooltip content={
                <div style={{ textAlign: 'left' }}>
                  <strong>Ayuda</strong>
                  <p style={{ margin: '0.25rem 0 0', fontSize: '0.7rem', color: '#cbd5e1' }}>Este es un tooltip con contenido personalizado.</p>
                </div>
              }>
                <span style={{ cursor: 'help', textDecoration: 'underline dotted', color: 'var(--bf-accent)' }}>Hover para más info</span>
              </Tooltip>
            </div>
          </div>
        );
      default:
        return null;
    }
  }

  const renderCode = () => {
    switch (activeComponent) {
      case 'money-input':
        return `import { MoneyInput } from '@byteflow-ui/money-input';\n\n<MoneyInput \n  label="Monto" \n  value={amount} \n  onChange={setAmount} \n  currencySymbol="$" \n  locale="es-MX"\n/>`;
      case 'button':
        return `import { Button } from '@byteflow-ui/button';\n\n<Button variant="primary">Click</Button>\n<Button variant="secondary" size="lg">Large</Button>\n<Button isLoading>Loading</Button>`;
      case 'label':
        return `import { Label } from '@byteflow-ui/label';\n\n<Label required>Nombre</Label>\n<Label disabled>Email</Label>`;
      case 'input':
        return `import { Input } from '@byteflow-ui/input';\n\n<Input label="Email" placeholder="tu@email.com" required />\n<Input label="Pass" type="password" error="Error message" />`;
      case 'checkbox':
        return `import { Checkbox } from '@byteflow-ui/checkbox';\n\n<Checkbox label="Acepto términos" required />\n<Checkbox label="Marcar" defaultChecked />`;
      case 'radio':
        return `import { Radio, RadioGroup } from '@byteflow-ui/radio';\n\n<RadioGroup name="plan" value={val} onChange={setVal}>\n  <Radio label="Pro" value="pro" />\n  <Radio label="Free" value="free" />\n</RadioGroup>`;
      case 'textarea':
        return `import { Textarea } from '@byteflow-ui/textarea';\n\n<Textarea label="Bio" placeholder="..." rows={4} />`;
      case 'select':
        return `import { Select } from '@byteflow-ui/select';\n\n<Select \n  label="País" \n  options={paises} \n  placeholder="Seleccionar..." \n/>`;
      case 'switch':
        return `import { Switch } from '@byteflow-ui/switch';\n\n<Switch label="Notificaciones" defaultChecked />`;
      case 'tooltip':
        return `import { Tooltip } from '@byteflow-ui/tooltip';\n\n<Tooltip content="Tooltip arriba" position="top">\n  <Button>Hover</Button>\n</Tooltip>`;
      default:
        return '';
    }
  }

  return (
    <div className="app-layout">
      <aside className="sidebar">
        <div className="logo-section"><h1>Byteflow UI</h1></div>
        <button className="theme-toggle-btn" onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}>
          {theme === 'light' ? '🌙 Modo Oscuro' : '☀️ Modo Claro'}
        </button>
        <nav className="nav-links">
          {(['money-input', 'button', 'label', 'input', 'checkbox', 'radio', 'textarea', 'select', 'switch', 'tooltip'] as const).map(comp => (
            <div
              key={comp}
              className={`nav-item ${activeComponent === comp ? 'active' : ''}`}
              onClick={() => { setActiveComponent(comp); setActiveTab('preview'); }}
            >
              {comp.charAt(0).toUpperCase() + comp.slice(1).replace('-', ' ')}
            </div>
          ))}
        </nav>
      </aside>

      <main className="main-content">
        <header className="content-header">
          <h2>{activeComponent.charAt(0).toUpperCase() + activeComponent.slice(1).replace('-', ' ')}</h2>
          <p>Ejemplos interactivos y documentación de personalización para el componente {activeComponent}.</p>
        </header>

        <section className="component-section">
          <div className="preview-card">
            <div className="preview-tabs">
              <button className={`tab-btn ${activeTab === 'preview' ? 'active' : ''}`} onClick={() => setActiveTab('preview')}>Vista Previa</button>
              <button className={`tab-btn ${activeTab === 'code' ? 'active' : ''}`} onClick={() => setActiveTab('code')}>Código</button>
              <button className={`tab-btn ${activeTab === 'styles' ? 'active' : ''}`} onClick={() => setActiveTab('styles')}>Personalización</button>
            </div>

            <div className={`preview-content ${activeTab}-active`}>
              {activeTab === 'preview' && (
                <div className="preview-body">
                  {renderPreview()}
                </div>
              )}
              {activeTab === 'code' && (
                <pre className="code-block"><code>{renderCode()}</code></pre>
              )}
              {activeTab === 'styles' && (
                <div className="styles-doc">
                  <h4>Arquitectura CSS y Personalización</h4>
                  <p>Personaliza este componente en tu <code>theme.css</code> usando los siguientes selectores y variables:</p>

                  {componentStyles[activeComponent].map((style, idx) => (
                    <div key={idx} className="style-item">
                      <div className="style-selector"><code>{style.selector}</code></div>
                      <p className="style-desc">{style.description}</p>
                      {style.variables.length > 0 && (
                        <table className="vars-table">
                          <thead>
                            <tr><th>Variable</th><th>Descripción</th></tr>
                          </thead>
                          <tbody>
                            {style.variables.map((v, vidx) => (
                              <tr key={vidx}><td><code>{v.name}</code></td><td>{v.desc}</td></tr>
                            ))}
                          </tbody>
                        </table>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
