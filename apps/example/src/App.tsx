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
import { Badge } from '@byteflow-ui/badge'
import { Avatar } from '@byteflow-ui/avatar'
import { Separator } from '@byteflow-ui/separator'
import { Skeleton } from '@byteflow-ui/skeleton'
import { Spinner } from '@byteflow-ui/spinner'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from '@byteflow-ui/card'
import { ScrollArea } from '@byteflow-ui/scroll-area'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@byteflow-ui/tabs'
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage
} from '@byteflow-ui/breadcrumb'
import { AspectRatio } from '@byteflow-ui/aspect-ratio'
import {
  Empty,
  EmptyIcon,
  EmptyTitle,
  EmptyDescription,
  EmptyAction
} from '@byteflow-ui/empty'
import { Item, ItemPrefix, ItemContent, ItemSuffix } from '@byteflow-ui/item'
import { Field, FieldLabel, FieldDescription, FieldError } from '@byteflow-ui/field'

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
import '@byteflow-ui/badge/dist/index.css'
import '@byteflow-ui/avatar/dist/index.css'
import '@byteflow-ui/separator/dist/index.css'
import '@byteflow-ui/skeleton/dist/index.css'
import '@byteflow-ui/spinner/dist/index.css'
import '@byteflow-ui/card/dist/index.css'
import '@byteflow-ui/scroll-area/dist/index.css'
import '@byteflow-ui/tabs/dist/index.css'
import '@byteflow-ui/breadcrumb/dist/index.css'
import '@byteflow-ui/aspect-ratio/dist/index.css'
import '@byteflow-ui/empty/dist/index.css'
import '@byteflow-ui/item/dist/index.css'
import '@byteflow-ui/field/dist/index.css'
import './App.css'
import './theme.css'

type ComponentType = 'money-input' | 'button' | 'label' | 'input' | 'checkbox' | 'radio' | 'textarea' | 'select' | 'switch' | 'tooltip' | 'badge' | 'avatar' | 'separator' | 'skeleton' | 'spinner' | 'card' | 'scroll-area' | 'tabs' | 'breadcrumb' | 'aspect-ratio' | 'empty' | 'item' | 'field';
type TabType = 'preview' | 'code' | 'styles';

const categories = [
  {
    title: 'Fundamentos',
    components: ['button', 'label', 'input', 'textarea', 'select', 'checkbox', 'radio', 'switch'] as ComponentType[]
  },
  {
    title: 'Visualización',
    components: ['badge', 'avatar', 'separator', 'skeleton', 'spinner', 'tooltip'] as ComponentType[]
  },
  {
    title: 'Layout & Estructura',
    components: ['card', 'scroll-area', 'tabs', 'breadcrumb', 'aspect-ratio', 'empty', 'item', 'field', 'money-input'] as ComponentType[]
  }
];

function App() {
  const [activeComponent, setActiveComponent] = useState<ComponentType>('money-input')
  const [activeTab, setActiveTab] = useState<TabType>('preview')
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  // State for demos
  const [amount, setAmount] = useState(250000)
  const [radioValue, setRadioValue] = useState('opcion1')
  const [inputValue, setInputValue] = useState('')
  const [switchState, setSwitchState] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle('dark-theme', theme === 'dark')
  }, [theme])

  const renderComponentDemo = () => {
    switch (activeComponent) {
      case 'money-input':
        return (
          <Card style={{ width: '400px' }}>
            <CardHeader>
              <CardTitle>Simulador de Transferencia</CardTitle>
              <CardDescription>Establece el monto para tu próxima inversión Byteflow.</CardDescription>
            </CardHeader>
            <CardContent>
              <MoneyInput
                label="Monto a Transferir"
                value={amount}
                onChange={setAmount}
                className="custom-money-input"
              />
              <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'var(--bf-canvas-subtle)', borderRadius: '8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                  <span style={{ color: 'var(--bf-text-muted)' }}>Comisión (0.5%)</span>
                  <span style={{ fontWeight: 600 }}>${(amount * 0.005 / 100).toFixed(2)}</span>
                </div>
                <Separator style={{ margin: '0.75rem 0' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700 }}>
                  <span>Total Neto</span>
                  <span style={{ color: 'var(--bf-accent)' }}>${(amount / 100 + (amount * 0.005 / 100)).toLocaleString()}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="primary" style={{ width: '100%' }}>Confirmar Transacción</Button>
            </CardFooter>
          </Card>
        );

      case 'button':
        return (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center' }}>
            <Button variant="primary">Principal</Button>
            <Button variant="secondary">Secundario</Button>
            <Button variant="outline">Esquema</Button>
            <Button variant="ghost">Fantasma</Button>
            <Button variant="danger">Peligro</Button>
            <Button variant="success">Éxito</Button>
            <div style={{ width: '100%', height: '1px' }} />
            <Button size="small">Pequeño</Button>
            <Button size="large">Grande</Button>
          </div>
        );

      case 'card':
        return (
          <div style={{ display: 'flex', gap: '2rem' }}>
            <Card style={{ width: '300px' }}>
              <AspectRatio ratio={16 / 9}>
                <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800" alt="Abstract" />
              </AspectRatio>
              <CardHeader>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <Badge variant="secondary">Diseño</Badge>
                  <span style={{ fontSize: '0.75rem', color: 'var(--bf-text-muted)' }}>Hace 2h</span>
                </div>
                <CardTitle>Ecosistemas Digitales</CardTitle>
              </CardHeader>
              <CardContent>
                <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--bf-text-secondary)', lineHeight: 1.5 }}>
                  Explorando la frontera del diseño modular y sistemas escalables.
                </p>
              </CardContent>
              <CardFooter>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Avatar alt="VH" size="small" />
                  <span style={{ fontSize: '0.85rem', fontWeight: 500 }}>Victor Hugo</span>
                </div>
              </CardFooter>
            </Card>
          </div>
        );

      case 'field':
        return (
          <Card style={{ width: '450px' }}>
            <CardHeader>
              <CardTitle>Crear Nueva Cuenta</CardTitle>
              <CardDescription>Únete a la comunidad de Byteflow UI hoy mismo.</CardDescription>
            </CardHeader>
            <CardContent style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <Field isInvalid={inputValue === '' && activeTab === 'preview'}>
                <FieldLabel required>Nombre de Usuario</FieldLabel>
                <Input
                  placeholder="ej. @byteflow_wizard"
                  value={inputValue}
                  onChange={(e: any) => setInputValue(e.target.value)}
                />
                <FieldDescription>Usa un nombre único que te represente.</FieldDescription>
                {inputValue === '' && <FieldError>El nombre de usuario es obligatorio.</FieldError>}
              </Field>
              <Field>
                <FieldLabel>Biografía Corta</FieldLabel>
                <Textarea placeholder="Cuéntanos sobre ti..." />
              </Field>
              <Field>
                <FieldLabel>Plan de Suscripción</FieldLabel>
                <Select options={[
                  { label: 'Básico (Gratis)', value: 'free' },
                  { label: 'Pro ($19/mes)', value: 'pro' },
                  { label: 'Enterprise', value: 'corp' }
                ]} />
              </Field>
            </CardContent>
            <CardFooter>
              <Button variant="primary" style={{ width: '100%' }}>Registrar Cuenta</Button>
            </CardFooter>
          </Card>
        );

      case 'tabs':
        return (
          <Tabs defaultValue="perfil" style={{ width: '500px' }}>
            <TabsList style={{ width: '100%', justifyContent: 'center' }}>
              <TabsTrigger value="perfil">Perfil</TabsTrigger>
              <TabsTrigger value="seguridad">Seguridad</TabsTrigger>
              <TabsTrigger value="notif">Notificaciones</TabsTrigger>
            </TabsList>
            <Card style={{ marginTop: '1rem' }}>
              <TabsContent value="perfil">
                <CardHeader><CardTitle>Información de Perfil</CardTitle></CardHeader>
                <CardContent style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                  <Avatar size="large" alt="User" />
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                    <span style={{ fontWeight: 600, fontSize: '1.1rem' }}>Victor Hugo Cornejo</span>
                    <span style={{ color: 'var(--bf-text-muted)', fontSize: '0.9rem' }}>Arquitecto de Soluciones</span>
                  </div>
                </CardContent>
                <CardFooter><Button variant="outline" size="small">Editar Perfil</Button></CardFooter>
              </TabsContent>
              <TabsContent value="seguridad">
                <CardHeader><CardTitle>Seguridad de la Cuenta</CardTitle></CardHeader>
                <CardContent>
                  <Item>
                    <ItemContent>Autenticación de dos pasos</ItemContent>
                    <ItemSuffix><Switch checked={switchState} onChange={setSwitchState} /></ItemSuffix>
                  </Item>
                  <Separator style={{ margin: '0.5rem 0' }} />
                  <Item>
                    <ItemContent>Historial de sesiones</ItemContent>
                    <ItemSuffix><Button size="small" variant="ghost">Ver más</Button></ItemSuffix>
                  </Item>
                </CardContent>
              </TabsContent>
            </Card>
          </Tabs>
        );

      case 'empty':
        return (
          <div style={{ padding: '2rem', border: '2px dashed var(--bf-surface-border)', borderRadius: '20px', width: '100%', maxWidth: '500px' }}>
            <Empty>
              <EmptyIcon>🔍</EmptyIcon>
              <EmptyTitle>Búsqueda sin resultados</EmptyTitle>
              <EmptyDescription>
                No encontramos coincidencias para "<strong>{inputValue || 'tus criterios'}</strong>".
                Intenta con otros términos o limpia los filtros.
              </EmptyDescription>
              <EmptyAction>
                <Button variant="secondary" onClick={() => setInputValue('')}>Limpiar Búsqueda</Button>
              </EmptyAction>
            </Empty>
          </div>
        );

      default:
        return (
          <div className="placeholder-demo">
            <Badge variant="secondary" style={{ marginBottom: '1rem' }}>Vista Previa</Badge>
            <p style={{ color: 'var(--bf-text-muted)' }}>El demo de <strong>{activeComponent}</strong> está siendo optimizado.</p>
          </div>
        );
    }
  }

  const renderCodeDemo = () => {
    return (
      <pre><code>{`import { ${activeComponent.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('')} } from '@byteflow-ui/${activeComponent}';

function Demo() {
  return (
    <${activeComponent.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('')}
      /* Propiedades de ejemplo */
    />
  );
}`}</code></pre>
    );
  }

  const renderStylesDemo = () => {
    // This is a simplified version, ideally you'd have a list of vars per component
    return (
      <div className="styles-doc">
        <div className="style-item">
          <h4>Personalización CSS</h4>
          <p className="style-desc">Puedes personalizar la apariencia de <code>{activeComponent}</code> usando estas variables CSS:</p>
          <table className="vars-table">
            <thead>
              <tr><th>Variable</th><th>Default</th><th>Propósito</th></tr>
            </thead>
            <tbody>
              <tr><td><code>--bf-{activeComponent}-bg</code></td><td>var(--bf-surface)</td><td>Fondo del componente</td></tr>
              <tr><td><code>--bf-{activeComponent}-radius</code></td><td>var(--bf-radius-md)</td><td>Radio de borde</td></tr>
              <tr><td><code>--bf-{activeComponent}-accent</code></td><td>var(--bf-accent)</td><td>Color de resaltado</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  return (
    <div className="app-layout">
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="logo-section"><h1>Byteflow UI</h1></div>
        </div>

        <div className="theme-toggle-wrapper">
          <button className="theme-toggle-btn" onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}>
            {theme === 'light' ? <span>🌙</span> : <span>☀️</span>}
            {theme === 'light' ? 'Modo Oscuro' : 'Modo Claro'}
          </button>
        </div>

        <ScrollArea className="nav-scroll-area">
          <nav className="nav-links">
            {categories.map(cat => (
              <div key={cat.title}>
                <div className="nav-section-title">{cat.title}</div>
                {cat.components.map(comp => (
                  <Item
                    key={comp}
                    selected={activeComponent === comp}
                    onClick={() => setActiveComponent(comp)}
                  >
                    <ItemContent>{comp.replace('-', ' ')}</ItemContent>
                    {['card', 'tabs', 'field'].includes(comp) && <ItemSuffix><Badge variant="outline" style={{ scale: '0.8' }}>New</Badge></ItemSuffix>}
                  </Item>
                ))}
              </div>
            ))}
          </nav>
        </ScrollArea>
      </aside>

      <main className="main-content">
        <ScrollArea>
          <header className="content-header">
            <Breadcrumb style={{ marginBottom: '0.5rem' }}>
              <BreadcrumbList>
                <BreadcrumbItem><BreadcrumbLink href="#">Librería</BreadcrumbLink></BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem><BreadcrumbPage>{activeComponent.replace('-', ' ')}</BreadcrumbPage></BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <h2>{activeComponent.replace('-', ' ')}</h2>
          </header>

          <section className="component-viewport">
            <div className="component-container">
              <div className="preview-card">
                <nav className="preview-tabs">
                  <button className={`tab-btn ${activeTab === 'preview' ? 'active' : ''}`} onClick={() => setActiveTab('preview')}>Vista Previa</button>
                  <button className={`tab-btn ${activeTab === 'code' ? 'active' : ''}`} onClick={() => setActiveTab('code')}>Código</button>
                  <button className={`tab-btn ${activeTab === 'styles' ? 'active' : ''}`} onClick={() => setActiveTab('styles')}>Personalización</button>
                </nav>

                <div className="preview-viewport">
                  {activeTab === 'preview' && <div className="preview-body">{renderComponentDemo()}</div>}
                  {activeTab === 'code' && <div className="code-block-wrapper">{renderCodeDemo()}</div>}
                  {activeTab === 'styles' && <div className="styles-doc-wrapper">{renderStylesDemo()}</div>}
                </div>
              </div>

              <div style={{ marginTop: '3rem' }}>
                <Card style={{ background: 'var(--bf-canvas-subtle)', borderStyle: 'dashed' }}>
                  <CardContent style={{ padding: '2rem', textAlign: 'center' }}>
                    <p style={{ margin: 0, color: 'var(--bf-text-secondary)', fontSize: '0.9rem' }}>
                      ¿Necesitas ayuda con este componente? Consulta la <a href="#" style={{ color: 'var(--bf-accent)', fontWeight: 600 }}>documentación técnica completa</a>.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </ScrollArea>
      </main>
    </div>
  )
}

export default App
