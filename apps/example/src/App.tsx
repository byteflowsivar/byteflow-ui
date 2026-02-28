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

const componentList: ComponentType[] = [
  'money-input', 'button', 'label', 'input', 'checkbox', 'radio', 'textarea',
  'select', 'switch', 'tooltip', 'badge', 'avatar', 'separator', 'skeleton',
  'spinner', 'card', 'scroll-area', 'tabs', 'breadcrumb', 'aspect-ratio', 'empty', 'item', 'field'
];

function App() {
  const [activeComponent, setActiveComponent] = useState<ComponentType>('money-input')
  const [amount, setAmount] = useState(125050)
  const [activeTab, setActiveTab] = useState<TabType>('preview')
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [radioValue, setRadioValue] = useState('opcion1')
  const [fieldValue, setFieldValue] = useState('')

  useEffect(() => {
    document.documentElement.classList.toggle('dark-theme', theme === 'dark')
  }, [theme])

  const renderPreview = () => {
    switch (activeComponent) {
      case 'money-input': return <MoneyInput label="Ingreso" value={amount} onChange={setAmount} />;
      case 'button': return <Button variant="primary">Enviar</Button>;
      case 'label': return <Label required>Nombre Completo</Label>;
      case 'input': return <Input placeholder="Escribe aquí..." />;
      case 'checkbox': return <Checkbox label="Acepto términos" />;
      case 'radio': return <RadioGroup value={radioValue} onChange={e => setRadioValue(e.target.value)}><Radio label="Opción 1" value="opcion1" /></RadioGroup>;
      case 'textarea': return <Textarea placeholder="Mensaje..." />;
      case 'select': return <Select options={[{ label: 'Opción A', value: 'a' }]} />;
      case 'switch': return <Switch label="Activar" />;
      case 'tooltip': return <Tooltip content="Ayuda"><Button>Hover me</Button></Tooltip>;
      case 'badge': return <Badge>Nuevo</Badge>;
      case 'avatar': return <Avatar alt="User" />;
      case 'separator': return <Separator />;
      case 'skeleton': return <Skeleton width={100} height={20} />;
      case 'spinner': return <Spinner />;
      case 'card': return (
        <Card style={{ width: '350px' }}>
          <CardHeader>
            <CardTitle>Perfil de Usuario</CardTitle>
            <CardDescription>Gestiona tu información personal.</CardDescription>
          </CardHeader>
          <CardContent>Actualiza tus datos de contacto.</CardContent>
          <CardFooter><Button variant="secondary" size="small">Editar</Button></CardFooter>
        </Card>
      );
      case 'scroll-area': return <ScrollArea maxHeight={100}><div style={{ height: 200, padding: '10px' }}>Contenido con scroll personalizado...</div></ScrollArea>;
      case 'tabs': return (
        <Tabs defaultValue="1">
          <TabsList><TabsTrigger value="1">Cuenta</TabsTrigger><TabsTrigger value="2">Seguridad</TabsTrigger></TabsList>
          <TabsContent value="1">Configuración de cuenta.</TabsContent>
          <TabsContent value="2">Ajustes de seguridad.</TabsContent>
        </Tabs>
      );
      case 'breadcrumb': return (
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem><BreadcrumbLink href="#">Inicio</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbPage>Ajustes</BreadcrumbPage></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      );
      case 'aspect-ratio': return (
        <div style={{ width: '350px' }}>
          <AspectRatio ratio={16 / 9}><img src="https://images.unsplash.com/photo-1588345921523-c2dcd57f7dcb?w=800" alt="Landscape" /></AspectRatio>
        </div>
      );
      case 'empty': return (
        <Empty>
          <EmptyIcon>🔍</EmptyIcon>
          <EmptyTitle>No hay resultados</EmptyTitle>
          <EmptyDescription>Prueba con filtros diferentes.</EmptyDescription>
          <EmptyAction><Button variant="ghost">Limpiar</Button></EmptyAction>
        </Empty>
      );
      case 'item': return (
        <Card style={{ width: '350px', padding: '0.5rem' }}>
          <Item selected><ItemPrefix>🏠</ItemPrefix><ItemContent>Inicio</ItemContent></Item>
          <Item><ItemPrefix>👤</ItemPrefix><ItemContent>Perfil</ItemContent><ItemSuffix><Badge variant="outline">2</Badge></ItemSuffix></Item>
        </Card>
      );
      case 'field': return (
        <div style={{ width: '350px' }}>
          <Field isInvalid={fieldValue === ''}>
            <FieldLabel>Correo Electrónico</FieldLabel>
            <Input
              type="email"
              placeholder="v@example.com"
              value={fieldValue}
              onChange={(e: any) => setFieldValue(e.target.value)}
            />
            <FieldDescription>Nunca compartiremos tu correo.</FieldDescription>
            <FieldError>El correo es obligatorio.</FieldError>
          </Field>
        </div>
      );
      default: return null;
    }
  }

  return (
    <div className="app-layout">
      <aside className="sidebar">
        <div className="logo-section"><h1>Byteflow UI</h1></div>
        <button className="theme-toggle-btn" onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}>
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
        <nav className="nav-links">
          {componentList.map(comp => (
            <div key={comp} className={`nav-item ${activeComponent === comp ? 'active' : ''}`} onClick={() => setActiveComponent(comp)}>
              {comp.replace('-', ' ')}
            </div>
          ))}
        </nav>
      </aside>
      <main className="main-content">
        <header className="content-header"><h2>{activeComponent.replace('-', ' ')}</h2></header>
        <section className="component-section">
          <div className="preview-card">
            <div className="preview-tabs">
              <button onClick={() => setActiveTab('preview')}>Vista Previa</button>
              <button onClick={() => setActiveTab('code')}>Código</button>
            </div>
            <div className="preview-content">
              {activeTab === 'preview' ? renderPreview() : <pre><code>// Demo para {activeComponent}...</code></pre>}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
export default App
