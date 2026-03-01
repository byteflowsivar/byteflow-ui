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
import { Slider } from '@byteflow-ui/slider'
import { Toggle } from '@byteflow-ui/toggle'
import { ToggleGroup, ToggleGroupItem } from '@byteflow-ui/toggle-group'
import { InputGroup, InputGroupText } from '@byteflow-ui/input-group'
import { InputOTP } from '@byteflow-ui/input-otp'
import { Alert, AlertTitle, AlertDescription } from '@byteflow-ui/alert'
import { Progress } from '@byteflow-ui/progress'
import {
  Empty,
  EmptyIcon,
  EmptyTitle,
  EmptyDescription,
  EmptyAction
} from '@byteflow-ui/empty'
import { Item, ItemPrefix, ItemContent, ItemSuffix } from '@byteflow-ui/item'
import { Field, FieldLabel, FieldDescription, FieldError } from '@byteflow-ui/field'

// Estilos de los componentes
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
import '@byteflow-ui/slider/dist/index.css'
import '@byteflow-ui/toggle/dist/index.css'
import '@byteflow-ui/toggle-group/dist/index.css'
import '@byteflow-ui/input-group/dist/index.css'
import '@byteflow-ui/input-otp/dist/index.css'
import '@byteflow-ui/alert/dist/index.css'
import '@byteflow-ui/progress/dist/index.css'
import '@byteflow-ui/empty/dist/index.css'
import '@byteflow-ui/item/dist/index.css'
import '@byteflow-ui/field/dist/index.css'
import './App.css'
import './theme.css'

type ComponentType =
  | 'money-input' | 'button' | 'label' | 'input' | 'checkbox' | 'radio' | 'textarea'
  | 'select' | 'switch' | 'tooltip' | 'badge' | 'avatar' | 'separator' | 'skeleton'
  | 'spinner' | 'card' | 'scroll-area' | 'tabs' | 'breadcrumb' | 'aspect-ratio'
  | 'empty' | 'item' | 'field' | 'slider' | 'toggle' | 'toggle-group' | 'input-group' | 'input-otp'
  | 'alert' | 'progress';

type TabType = 'preview' | 'code' | 'styles';

const categories = [
  {
    title: 'Fundamentos',
    components: ['button', 'label', 'input', 'textarea', 'select', 'checkbox', 'radio', 'switch', 'slider', 'toggle', 'toggle-group', 'input-group', 'input-otp'] as ComponentType[]
  },
  {
    title: 'Visualización',
    components: ['badge', 'avatar', 'separator', 'skeleton', 'spinner', 'tooltip', 'alert', 'progress'] as ComponentType[]
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

  // States para los demos interactivos
  const [amount, setAmount] = useState(125050) // $1,250.50 en centavos
  const [radioValue, setRadioValue] = useState('opcion1')
  const [inputValue, setInputValue] = useState('')
  const [switchState, setSwitchState] = useState(true)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark-theme', theme === 'dark')
  }, [theme])

  const renderComponentDemo = () => {
    switch (activeComponent) {
      case 'money-input':
        return (
          <Card style={{ width: '400px' }}>
            <CardHeader>
              <CardTitle>Simulador de Suscripción</CardTitle>
              <CardDescription>Ajusta el monto para ver el desglose de beneficios.</CardDescription>
            </CardHeader>
            <CardContent>
              <MoneyInput
                label="Presupuesto Mensual"
                value={amount}
                onChange={setAmount}
                name="amount-demo"
              />
              <div style={{ marginTop: '1.5rem', padding: '1.25rem', background: 'var(--bf-canvas-subtle)', borderRadius: '12px', border: '1px solid var(--bf-surface-border)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <span style={{ color: 'var(--bf-text-muted)', fontSize: '0.85rem' }}>Beneficio Estimado</span>
                  <Badge variant="success" size="sm">+{Math.floor(amount / 500)}ptos</Badge>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '1.1rem' }}>
                  <span>Créditos Byteflow</span>
                  <span style={{ color: 'var(--bf-accent)' }}>{(amount / 10).toLocaleString()}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button style={{ width: '100%' }} onClick={() => {
                setIsLoading(true);
                setTimeout(() => setIsLoading(false), 2000);
              }} isLoading={isLoading}>
                Actualizar Plan
              </Button>
            </CardFooter>
          </Card>
        );

      case 'button':
        return (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <Label>Variantes</Label>
              <Button variant="primary">Principal</Button>
              <Button variant="secondary">Secundario</Button>
              <Button variant="ghost">Fantasma</Button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <Label>Tamaños</Label>
              <Button size="sm">Pequeño</Button>
              <Button size="md">Mediano</Button>
              <Button size="lg">Grande</Button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <Label>Estados</Label>
              <Button isLoading>Cargando</Button>
              <Button disabled>Deshabilitado</Button>
            </div>
          </div>
        );

      case 'label':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Label>Etiqueta Estándar</Label>
            <Label required>Etiqueta Requerida</Label>
            <Label disabled>Etiqueta Deshabilitada</Label>
          </div>
        );

      case 'input':
        return (
          <div style={{ width: '350px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <Input label="Búsqueda" placeholder="Buscar archivos..." />
            <Input label="Email" type="email" defaultValue="victor@byteflow.ui" />
            <Input label="Contraseña" type="password" error="La contraseña es demasiado débil" />
          </div>
        );

      case 'checkbox':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Checkbox label="Acepto los términos de servicio" defaultChecked />
            <Checkbox label="Suscribirme al newsletter" />
            <Checkbox label="Opción deshabilitada" disabled />
          </div>
        );

      case 'radio':
        return (
          <RadioGroup value={radioValue} onChange={(e) => setRadioValue(e.target.value)}>
            <Label style={{ marginBottom: '1rem', display: 'block' }}>Selecciona tu rol</Label>
            <Radio label="Desarrollador" value="opcion1" />
            <Radio label="Diseñador" value="opcion2" />
            <Radio label="Product Manager" value="opcion3" />
          </RadioGroup>
        );

      case 'textarea':
        return (
          <div style={{ width: '400px' }}>
            <Textarea label="Comentario" placeholder="Escribe tu mensaje aquí..." rows={4} />
          </div>
        );

      case 'select':
        return (
          <div style={{ width: '300px' }}>
            <Select
              label="Idioma"
              placeholder="Seleccionar..."
              options={[
                { label: 'Español (ES)', value: 'es' },
                { label: 'English (EN)', value: 'en' },
                { label: 'Português (PT)', value: 'pt' }
              ]}
            />
          </div>
        );

      case 'switch':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Switch label="Notificaciones de sistema" checked={switchState} onChange={() => setSwitchState(!switchState)} />
            <Switch label="Modo Desarrollador" size="sm" />
            <Switch label="Bloqueo parental" disabled />
          </div>
        );

      case 'tooltip':
        return (
          <div style={{ display: 'flex', gap: '2rem' }}>
            <Tooltip content="Información extra">
              <Button variant="secondary">Hover para ver Tooltip</Button>
            </Tooltip>
            <Tooltip content="Acción destructiva">
              <Button variant="ghost">🗑️ Borrar</Button>
            </Tooltip>
          </div>
        );

      case 'badge':
        return (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            <Badge variant="primary">Beta</Badge>
            <Badge variant="success">Online</Badge>
            <Badge variant="warning">Revision</Badge>
            <Badge variant="error">Error</Badge>
            <Badge variant="outline">Estandard</Badge>
            <Badge size="lg">Grande</Badge>
          </div>
        );

      case 'avatar':
        return (
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <Avatar src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200" alt="JD" size="xl" />
            <Avatar alt="Victor Hugo" size="lg" />
            <Avatar shape="square" size="md" />
            <Avatar alt="S" size="sm" />
          </div>
        );

      case 'separator':
        return (
          <div style={{ width: '300px', textAlign: 'center' }}>
            <p>Sección Superior</p>
            <Separator />
            <p>Sección Inferior</p>
            <div style={{ height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span>L</span>
              <Separator orientation="vertical" />
              <span>R</span>
            </div>
          </div>
        );

      case 'skeleton':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <Skeleton width={40} height={40} style={{ borderRadius: '50%' }} />
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <Skeleton width="100%" height={12} />
                <Skeleton width="60%" height={12} />
              </div>
            </div>
            <Skeleton width="100%" height={150} />
          </div>
        );

      case 'spinner':
        return (
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <Spinner size="sm" />
            <Spinner size="md" />
            <Spinner size="lg" />
          </div>
        );

      case 'card':
        return (
          <Card style={{ width: '350px' }}>
            <AspectRatio ratio={16 / 9}>
              <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800" alt="Landscape" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </AspectRatio>
            <CardHeader>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Badge variant="primary" size="sm">Artículo</Badge>
                <span style={{ fontSize: '0.75rem', color: 'var(--bf-text-muted)' }}>5 min lectura</span>
              </div>
              <CardTitle style={{ marginTop: '0.5rem' }}>El Futuro de Byteflow UI</CardTitle>
            </CardHeader>
            <CardContent>
              <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--bf-text-secondary)', lineHeight: 1.6 }}>
                Descubre cómo estamos redefiniendo la construcción de interfaces premium con React y CSS moderno.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm">Leer más</Button>
            </CardFooter>
          </Card>
        );

      case 'scroll-area':
        return (
          <Card style={{ width: '350px', padding: 0 }}>
            <CardHeader style={{ padding: '1.5rem' }}>
              <CardTitle>Historial de Cambios</CardTitle>
            </CardHeader>
            <ScrollArea maxHeight={200} style={{ padding: '0 1.5rem 1.5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[...Array(10)].map((_, i) => (
                  <Item key={i}>
                    <ItemContent>
                      <div style={{ fontWeight: 600 }}>v1.0.{10 - i}</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--bf-text-muted)' }}>Corregido error en {activeComponent}</div>
                    </ItemContent>
                  </Item>
                ))}
              </div>
            </ScrollArea>
          </Card>
        );

      case 'tabs':
        return (
          <div style={{ width: '450px' }}>
            <Tabs defaultValue="perfil">
              <TabsList>
                <TabsTrigger value="perfil">Perfil</TabsTrigger>
                <TabsTrigger value="seguridad">Seguridad</TabsTrigger>
                <TabsTrigger value="notif">Alertas</TabsTrigger>
              </TabsList>
              <div style={{ marginTop: '1rem' }}>
                <TabsContent value="perfil">
                  <Card>
                    <CardContent style={{ padding: '2rem', textAlign: 'center' }}>
                      <Avatar size="xl" alt="VH" style={{ margin: '0 auto 1rem' }} />
                      <h3 style={{ margin: 0 }}>Victor Hugo</h3>
                      <p style={{ color: 'var(--bf-text-muted)', fontSize: '0.9rem' }}>Arquitecto UI</p>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="seguridad">
                  <Item>
                    <ItemContent>Verificación en dos pasos</ItemContent>
                    <ItemSuffix><Switch defaultChecked /></ItemSuffix>
                  </Item>
                </TabsContent>
                <TabsContent value="notif">
                  <Empty>
                    <EmptyIcon>🔔</EmptyIcon>
                    <EmptyTitle>Sin alertas</EmptyTitle>
                  </Empty>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        );

      case 'breadcrumb':
        return (
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink href="#">Inicio</BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbLink href="#">Componentes</BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbPage>{activeComponent}</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        );

      case 'aspect-ratio':
        return (
          <div style={{ width: '400px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Label>Ratio 16:9 (Video)</Label>
            <AspectRatio ratio={16 / 9} style={{ background: 'var(--bf-surface-hover)', borderRadius: '12px', overflow: 'hidden' }}>
              <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--bf-text-muted)' }}>Contenido 16:9</div>
            </AspectRatio>
            <Label>Ratio 1:1 (Cuadrado)</Label>
            <div style={{ width: '150px' }}>
              <AspectRatio ratio={1 / 1} style={{ background: 'var(--bf-surface-hover)', borderRadius: '12px', overflow: 'hidden' }}>
                <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--bf-text-muted)' }}>1:1</div>
              </AspectRatio>
            </div>
          </div>
        );

      case 'empty':
        return (
          <div style={{ padding: '4rem', border: '2px dashed var(--bf-surface-border)', borderRadius: '24px', width: '100%', maxWidth: '500px' }}>
            <Empty>
              <EmptyIcon>📁</EmptyIcon>
              <EmptyTitle>No hay archivos</EmptyTitle>
              <EmptyDescription>Sube tu primer componente para empezar la demostración.</EmptyDescription>
              <EmptyAction>
                <Button variant="secondary">Subir Archivo</Button>
              </EmptyAction>
            </Empty>
          </div>
        );

      case 'item':
        return (
          <Card style={{ width: '350px', padding: '0.5rem' }}>
            <Item selected><ItemPrefix>🏠</ItemPrefix><ItemContent>Escritorio</ItemContent><ItemSuffix><Badge size="sm">3</Badge></ItemSuffix></Item>
            <Item><ItemPrefix>⚙️</ItemPrefix><ItemContent>Configuración</ItemContent></Item>
            <Item disabled><ItemPrefix>🔒</ItemPrefix><ItemContent>Seguridad</ItemContent><ItemSuffix>🔑</ItemSuffix></Item>
          </Card>
        );

      case 'field':
        return (
          <Card style={{ width: '400px' }}>
            <CardHeader><CardTitle>Formulario Accesible</CardTitle></CardHeader>
            <CardContent style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <Field isInvalid={inputValue === ''}>
                <FieldLabel required>Nombre de Proyecto</FieldLabel>
                <Input
                  placeholder="ej. Byteflow Pro"
                  value={inputValue}
                  onChange={(e: any) => setInputValue(e.target.value)}
                />
                <FieldDescription>Usa un nombre descriptivo para identificarlo.</FieldDescription>
                <FieldError>El nombre es obligatorio para continuar.</FieldError>
              </Field>
              <Field>
                <FieldLabel>Tipo de Repositorio</FieldLabel>
                <Select options={[{ label: 'Público', value: 'pub' }, { label: 'Privado', value: 'priv' }]} />
              </Field>
            </CardContent>
            <CardFooter>
              <Button style={{ width: '100%' }}>Crear Repositorio</Button>
            </CardFooter>
          </Card>
        );

      case 'slider':
        return (
          <div style={{ width: '400px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <Slider
              label="Intensidad de Brillo"
              defaultValue={75}
              onChange={(v: number) => console.log('Slider:', v)}
            />
            <Slider
              label="Volumen de Sistema"
              min={0}
              max={100}
              step={10}
              defaultValue={30}
            />
            <Slider
              label="Control Deshabilitado"
              disabled
              defaultValue={50}
            />
          </div>
        );

      case 'toggle':
        return (
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <Toggle aria-label="Negrita" size="lg">B</Toggle>
            <Toggle aria-label="Itálica" variant="outline">I</Toggle>
            <Toggle aria-label="Subrayado" variant="ghost">U</Toggle>
            <Toggle disabled>D</Toggle>
          </div>
        );

      case 'toggle-group':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
              <Label style={{ display: 'block', marginBottom: '1rem' }}>Alineación (Única)</Label>
              <ToggleGroup type="single" defaultValue="center" variant="outline">
                <ToggleGroupItem value="left">Izquierda</ToggleGroupItem>
                <ToggleGroupItem value="center">Centro</ToggleGroupItem>
                <ToggleGroupItem value="right">Derecha</ToggleGroupItem>
              </ToggleGroup>
            </div>
            <div>
              <Label style={{ display: 'block', marginBottom: '1rem' }}>Formato (Múltiple)</Label>
              <ToggleGroup type="multiple" defaultValue={['bold']} variant="default">
                <ToggleGroupItem value="bold">B</ToggleGroupItem>
                <ToggleGroupItem value="italic">I</ToggleGroupItem>
                <ToggleGroupItem value="underline">U</ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>
        );

      case 'input-group':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '500px' }}>
            <InputGroup fullWidth>
              <InputGroupText>https://</InputGroupText>
              <Input placeholder="byteflow.ui" />
              <Button>Copiar</Button>
            </InputGroup>

            <InputGroup>
              <InputGroupText>@</InputGroupText>
              <Input placeholder="usuario" />
            </InputGroup>

            <InputGroup fullWidth>
              <Input type="email" placeholder="tu@email.com" />
              <Button variant="secondary">Suscribirse</Button>
            </InputGroup>
          </div>
        );

      case 'input-otp':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
              <Label style={{ display: 'block', marginBottom: '1rem' }}>Código de Verificación (6 dígitos)</Label>
              <InputOTP
                maxLength={6}
                onComplete={(v) => console.log('OTP Completo:', v)}
              />
            </div>
            <div>
              <Label style={{ display: 'block', marginBottom: '1rem' }}>Código Simple (4 caracteres)</Label>
              <InputOTP
                maxLength={4}
                numericOnly={false}
              />
            </div>
            <div>
              <Label style={{ display: 'block', marginBottom: '1rem' }}>Deshabilitado</Label>
              <InputOTP maxLength={4} disabled defaultValue="1234" />
            </div>
          </div>
        );

      case 'alert':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '500px' }}>
            <Alert variant="info">
              <AlertTitle>Nueva Actualización</AlertTitle>
              <AlertDescription>Una nueva versión de la librería está disponible para descargar.</AlertDescription>
            </Alert>
            <Alert variant="success">
              <AlertTitle>Éxito</AlertTitle>
              <AlertDescription>Tu perfil ha sido actualizado correctamente.</AlertDescription>
            </Alert>
            <Alert variant="warning">
              <AlertTitle>Atención</AlertTitle>
              <AlertDescription>Tu suscripción expirará en 3 días. Por favor renueva pronto.</AlertDescription>
            </Alert>
            <Alert variant="error">
              <AlertTitle>Error de Sistema</AlertTitle>
              <AlertDescription>No se pudo conectar con el servidor. Inténtalo de nuevo más tarde.</AlertDescription>
            </Alert>
          </div>
        );

      case 'progress':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', width: '400px' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <Label>Descargando Recursos</Label>
                <span style={{ fontSize: '0.8rem', color: 'var(--bf-text-muted)' }}>60%</span>
              </div>
              <Progress value={60} />
            </div>

            <div>
              <Label style={{ display: 'block', marginBottom: '0.5rem' }}>Sincronizando Datos</Label>
              <Progress value={30} />
            </div>

            <div>
              <Label style={{ display: 'block', marginBottom: '0.5rem' }}>Estado Indeterminado</Label>
              <Progress />
            </div>
          </div>
        );

      default: return null;
    }
  }

  const getCodeString = () => {
    const ComponentName = activeComponent.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('');
    return `import {${ComponentName} } from '@byteflow-ui/${activeComponent}';

            function App() {
  return (
            <${ComponentName}
              label="Ejemplo"
            // ... otras propiedades
            />
            );
}`;
  }

  const getStylesData = () => {
    return [
      { var: `--bf-${activeComponent}-bg`, def: 'var(--bf-surface)', desc: 'Color de fondo principal' },
      { var: `--bf-${activeComponent}-border`, def: 'var(--bf-surface-border)', desc: 'Color del borde' },
      { var: `--bf-${activeComponent}-text`, def: 'var(--bf-text-primary)', desc: 'Color de texto' },
      { var: `--bf-${activeComponent}-radius`, def: 'var(--bf-radius-md)', desc: 'Radio de las esquinas' }
    ];
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
                    onClick={() => {
                      setActiveComponent(comp);
                      setActiveTab('preview');
                    }}
                  >
                    <ItemContent>{comp.replace('-', ' ')}</ItemContent>
                    {['field', 'empty', 'money-input'].includes(comp) && <ItemSuffix><div style={{ width: 6, height: 6, background: 'var(--bf-accent)', borderRadius: '50%' }} /></ItemSuffix>}
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
            <Breadcrumb style={{ marginBottom: '0.75rem' }}>
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
                  {activeTab === 'preview' && (
                    <div className="preview-body">
                      {renderComponentDemo()}
                    </div>
                  )}
                  {activeTab === 'code' && (
                    <div className="code-block-wrapper">
                      <pre><code>{getCodeString()}</code></pre>
                    </div>
                  )}
                  {activeTab === 'styles' && (
                    <div className="styles-doc-wrapper">
                      <div className="styles-doc">
                        <h4>Variables CSS de {activeComponent}</h4>
                        <p className="style-desc">Personaliza el componente modificando estas variables en tu archivo de estilos global.</p>
                        <table className="vars-table">
                          <thead>
                            <tr><th>Variable</th><th>Valor Base</th><th>Descripción</th></tr>
                          </thead>
                          <tbody>
                            {getStylesData().map(s => (
                              <tr key={s.var}>
                                <td><code>{s.var}</code></td>
                                <td><code>{s.def}</code></td>
                                <td>{s.desc}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div style={{ marginTop: '3rem' }}>
                <Card style={{ background: 'var(--bf-canvas-subtle)', borderStyle: 'dashed' }}>
                  <CardContent style={{ padding: '2rem', textAlign: 'center' }}>
                    <p style={{ margin: 0, color: 'var(--bf-text-secondary)', fontSize: '0.9rem' }}>
                      Este componente sigue los estándares WCAG 2.1 para accesibilidad universal.
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
