import { useState, useEffect, useRef } from 'react'

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

// Fase 4 Imports
import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from '@byteflow-ui/dialog'
import {
  AlertDialog,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter
} from '@byteflow-ui/alert-dialog'
import { Popover, PopoverTrigger, PopoverContent } from '@byteflow-ui/popover'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut
} from '@byteflow-ui/dropdown-menu'
import {
  Sheet,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  Drawer
} from '@byteflow-ui/sheet'
import { ToastProvider, useToast } from '@byteflow-ui/toast'
import { ToasterProvider, useSonner } from '@byteflow-ui/sonner'
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@byteflow-ui/hover-card'
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut
} from '@byteflow-ui/context-menu'

// Fase 5 Imports
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@byteflow-ui/accordion'
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@byteflow-ui/collapsible'
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarItem,
  SidebarGroup,
  SidebarToggle
} from '@byteflow-ui/sidebar'
import { Pagination } from '@byteflow-ui/pagination'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink
} from '@byteflow-ui/navigation-menu'
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel
} from '@byteflow-ui/menubar'

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

// Fase 4 Styles
import '@byteflow-ui/dialog/dist/index.css'
import '@byteflow-ui/alert-dialog/dist/index.css'
import '@byteflow-ui/popover/dist/index.css'
import '@byteflow-ui/dropdown-menu/dist/index.css'
import '@byteflow-ui/sheet/dist/index.css'
import '@byteflow-ui/toast/dist/index.css'
import '@byteflow-ui/sonner/dist/index.css'
import '@byteflow-ui/hover-card/dist/index.css'
import '@byteflow-ui/context-menu/dist/index.css'

// Fase 5 Styles
import '@byteflow-ui/accordion/dist/index.css'
import '@byteflow-ui/collapsible/dist/index.css'
import '@byteflow-ui/sidebar/dist/index.css'
import '@byteflow-ui/pagination/dist/index.css'
import '@byteflow-ui/navigation-menu/dist/index.css'
import '@byteflow-ui/menubar/dist/index.css'
import './App.css'
import './theme.css'

type ComponentType =
  | 'money-input' | 'button' | 'label' | 'input' | 'checkbox' | 'radio' | 'textarea'
  | 'select' | 'switch' | 'tooltip' | 'badge' | 'avatar' | 'separator' | 'skeleton'
  | 'spinner' | 'card' | 'scroll-area' | 'tabs' | 'breadcrumb' | 'aspect-ratio'
  | 'empty' | 'item' | 'field' | 'slider' | 'toggle' | 'toggle-group' | 'input-group' | 'input-otp'
  | 'alert' | 'progress' | 'dialog' | 'alert-dialog' | 'popover' | 'dropdown-menu' | 'sheet' | 'drawer' | 'toast' | 'sonner' | 'hover-card' | 'context-menu'
  | 'accordion' | 'collapsible' | 'sidebar' | 'pagination' | 'navigation-menu' | 'menubar';

type TabType = 'preview' | 'code' | 'styles';

const categories = [
  {
    title: 'Fundamentos',
    components: ['button', 'label', 'input', 'textarea', 'select', 'checkbox', 'radio', 'switch', 'slider', 'toggle', 'toggle-group', 'input-group', 'input-otp'] as ComponentType[]
  },
  {
    title: 'Visualización',
    components: ['badge', 'avatar', 'separator', 'skeleton', 'spinner', 'tooltip', 'alert', 'progress', 'toast', 'sonner'] as ComponentType[]
  },
  {
    title: 'Layout & Estructura',
    components: ['card', 'scroll-area', 'tabs', 'breadcrumb', 'aspect-ratio', 'empty', 'item', 'field', 'money-input'] as ComponentType[]
  },
  {
    title: 'Overlays & Context',
    components: ['dialog', 'alert-dialog', 'popover', 'dropdown-menu', 'sheet', 'drawer', 'hover-card', 'context-menu'] as ComponentType[]
  },
  {
    title: 'Navegación & Estructura',
    components: ['accordion', 'collapsible', 'sidebar', 'pagination', 'navigation-menu', 'menubar'] as ComponentType[]
  }
];

const ToastDemo = () => {
  const { toast } = useToast();
  return (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button onClick={() => toast({ title: "Notificación", description: "Esto es un toast estándar." })}>Toast Default</Button>
      <Button variant="secondary" onClick={() => toast({ title: "Éxito", description: "Acción completada con éxito.", variant: "success" })}>Toast Success</Button>
      <Button style={{ background: '#ef4444', color: 'white' }} onClick={() => toast({ title: "Error", description: "Algo salió mal.", variant: "error" })}>Toast Error</Button>
    </div>
  );
};

const SonnerDemo = () => {
  const { toast } = useSonner();
  return (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button onClick={() => toast("Mensaje Apilado", { description: "Sonner permite múltiples notificaciones." })}>Enviar Sonner</Button>
      <Button variant="secondary" onClick={() => toast("Carga Finalizada", { type: "success" })}>Sonner Success</Button>
    </div>
  );
};

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

  // Fase 5 states
  const [currentPage, setCurrentPage] = useState(1)
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  // Fase 4 states
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isAlertDialogOpen, setIsAlertDialogOpen] = useState(false)
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isSheetOpen, setIsSheetOpen] = useState(false)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [isContextMenuOpen, setIsContextMenuOpen] = useState(false)
  const [contextMenuPoint, setContextMenuPoint] = useState({ x: 0, y: 0 })
  const popoverTriggerRef = useRef<HTMLButtonElement>(null)
  const dropdownTriggerRef = useRef<HTMLButtonElement>(null)

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
          <RadioGroup value={radioValue} onChange={(e: any) => setRadioValue(e.target.value)}>
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

      case 'dialog':
        return (
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Button onClick={() => setIsDialogOpen(true)}>Abrir Diálogo</Button>
            <Dialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
              <DialogHeader>
                <DialogTitle>Editar Perfil</DialogTitle>
                <DialogDescription>Haz cambios en tu perfil aquí. Haz clic en guardar cuando termines.</DialogDescription>
              </DialogHeader>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: '1rem 0' }}>
                <Input label="Nombre" defaultValue="Victor Hugo" />
                <Input label="Usuario" defaultValue="@rex2002xp" />
              </div>
              <DialogFooter>
                <Button variant="ghost" onClick={() => setIsDialogOpen(false)}>Cancelar</Button>
                <Button onClick={() => setIsDialogOpen(false)}>Guardar Cambios</Button>
              </DialogFooter>
            </Dialog>
          </div>
        );

      case 'alert-dialog':
        return (
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Button variant="secondary" onClick={() => setIsAlertDialogOpen(true)}>Eliminar Cuenta</Button>
            <AlertDialog isOpen={isAlertDialogOpen} onClose={() => setIsAlertDialogOpen(false)}>
              <AlertDialogHeader>
                <AlertDialogTitle>¿Estás absolutamente seguro?</AlertDialogTitle>
                <AlertDialogDescription>
                  Esta acción no se puede deshacer. Esto eliminará permanentemente tu cuenta
                  y borrará tus datos de nuestros servidores.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <Button variant="ghost" onClick={() => setIsAlertDialogOpen(false)}>Cancelar</Button>
                <Button style={{ background: '#ef4444', color: 'white' }} onClick={() => setIsAlertDialogOpen(false)}>Sí, eliminar cuenta</Button>
              </AlertDialogFooter>
            </AlertDialog>
          </div>
        );

      case 'popover':
        return (
          <div style={{ display: 'flex', justifyContent: 'center', padding: '4rem' }}>
            <Popover>
              <PopoverTrigger>
                <Button ref={popoverTriggerRef} onClick={() => setIsPopoverOpen(!isPopoverOpen)}>
                  Abrir Popover
                </Button>
              </PopoverTrigger>
              <PopoverContent
                isOpen={isPopoverOpen}
                onClose={() => setIsPopoverOpen(false)}
                anchorRef={popoverTriggerRef}
                side="bottom"
              >
                <div style={{ padding: '8px' }}>
                  <h4 style={{ margin: '0 0 8px 0' }}>Configuración Rápida</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <Switch label="Auto-guardado" size="sm" defaultChecked />
                    <Switch label="Sincronización" size="sm" />
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        );

      case 'dropdown-menu':
        return (
          <div style={{ display: 'flex', justifyContent: 'center', padding: '4rem' }}>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button ref={dropdownTriggerRef} onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                  Opciones de Cuenta
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                isOpen={isDropdownOpen}
                onClose={() => setIsDropdownOpen(false)}
                anchorRef={dropdownTriggerRef}
                align="end"
              >
                <DropdownMenuLabel>Mi Cuenta</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => setIsDropdownOpen(false)}>
                  Perfil
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setIsDropdownOpen(false)}>
                  Facturación
                  <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setIsDropdownOpen(false)}>
                  Ajustes
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => setIsDropdownOpen(false)} style={{ color: '#ef4444' }}>
                  Cerrar Sesión
                  <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        );

      case 'sheet':
        return (
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Button onClick={() => setIsSheetOpen(true)}>Abrir Sheet (Derecha)</Button>
            <Sheet isOpen={isSheetOpen} onClose={() => setIsSheetOpen(false)} side="right">
              <SheetHeader>
                <SheetTitle>Editar Perfil</SheetTitle>
                <SheetDescription>Realiza cambios en tu perfil aquí. Haz clic en guardar al terminar.</SheetDescription>
              </SheetHeader>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', flex: 1 }}>
                <Input label="Nombre completo" defaultValue="Victor Hugo Cornejo" />
                <Input label="Email" defaultValue="rex2002xp@gmail.com" />
              </div>
              <SheetFooter>
                <Button style={{ width: '100%' }} onClick={() => setIsSheetOpen(false)}>Guardar Cambios</Button>
              </SheetFooter>
            </Sheet>
          </div>
        );

      case 'drawer':
        return (
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Button variant="secondary" onClick={() => setIsDrawerOpen(true)}>Abrir Drawer (Móvil)</Button>
            <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
              <SheetHeader>
                <SheetTitle>Acciones Rápidas</SheetTitle>
                <SheetDescription>Selecciona una acción para continuar.</SheetDescription>
              </SheetHeader>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', padding: '1rem 0' }}>
                <Button variant="ghost" style={{ justifyContent: 'flex-start' }}>📤 Compartir Archivo</Button>
                <Button variant="ghost" style={{ justifyContent: 'flex-start' }}>🔗 Copiar Enlace</Button>
                <Button variant="ghost" style={{ justifyContent: 'flex-start' }}>📥 Descargar</Button>
              </div>
            </Drawer>
          </div>
        );

      case 'toast':
        return <ToastDemo />;

      case 'sonner':
        return <SonnerDemo />;

      case 'hover-card':
        return (
          <div style={{ display: 'flex', justifyContent: 'center', padding: '4rem' }}>
            <HoverCard openDelay={200}>
              <HoverCardTrigger>
                <div style={{ cursor: 'pointer', textDecoration: 'underline', color: 'var(--bf-accent)' }}>
                  @byteflow_ui
                </div>
              </HoverCardTrigger>
              <HoverCardContent side="top">
                <div style={{ display: 'flex', gap: '12px' }}>
                  <Avatar src="https://github.com/byteflow.png" alt="BF" />
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <div style={{ fontWeight: 600, fontSize: '14px' }}>Byteflow UI</div>
                    <div style={{ fontSize: '13px', opacity: 0.8 }}>
                      The premium React component library for high-end applications.
                    </div>
                    <div style={{ display: 'flex', gap: '12px', marginTop: '4px', fontSize: '12px', opacity: 0.6 }}>
                      <span><strong>1.2k</strong> Seguidores</span>
                      <span><strong>450</strong> Siguiendo</span>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        );

      case 'context-menu':
        return (
          <div style={{ display: 'flex', justifyContent: 'center', padding: '4rem' }}>
            <ContextMenu>
              <ContextMenuTrigger>
                <div
                  onContextMenu={(e) => {
                    e.preventDefault();
                    setContextMenuPoint({ x: e.clientX, y: e.clientY });
                    setIsContextMenuOpen(true);
                  }}
                  style={{
                    width: '400px',
                    height: '250px',
                    border: '2px dashed var(--bf-surface-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '24px',
                    background: 'var(--bf-canvas-subtle)',
                    color: 'var(--bf-text-muted)'
                  }}
                >
                  Haz Click Derecho Aquí para Opciones
                </div>
              </ContextMenuTrigger>

              <ContextMenuContent
                isOpen={isContextMenuOpen}
                onClose={() => setIsContextMenuOpen(false)}
                anchorPoint={contextMenuPoint}
              >
                <ContextMenuLabel>Área de Trabajo</ContextMenuLabel>
                <ContextMenuItem onClick={() => setIsContextMenuOpen(false)}>
                  Nuevo Archivo
                  <ContextMenuShortcut>⌘N</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem onClick={() => setIsContextMenuOpen(false)}>
                  Nueva Carpeta
                  <ContextMenuShortcut>⇧⌘N</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem onClick={() => setIsContextMenuOpen(false)}>
                  Pegar
                  <ContextMenuShortcut>⌘V</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem onClick={() => setIsContextMenuOpen(false)} style={{ color: '#ef4444' }}>
                  Limpiar Área
                </ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          </div>
        );

      case 'accordion':
        return (
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <Accordion type="single" defaultValue="item-1">
              <AccordionItem value="item-1">
                <AccordionTrigger>¿Qué es Byteflow UI?</AccordionTrigger>
                <AccordionContent>
                  Es una librería de componentes premium diseñada para crear interfaces modernas,
                  rápidas y accesibles con React y TypeScript.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>¿Soporta modo oscuro?</AccordionTrigger>
                <AccordionContent>
                  Sí, todos los componentes están diseñados con variables CSS que permiten
                  una integración fluida con temas claros y oscuros.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" disabled>
                <AccordionTrigger>Componente Deshabilitado</AccordionTrigger>
                <AccordionContent>
                  Este contenido no debería ser visible.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        );

      case 'collapsible':
        return (
          <div style={{ maxWidth: '400px', margin: '0 auto' }}>
            <Collapsible>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.5rem 1rem', background: 'var(--bf-canvas-subtle)', borderRadius: '8px' }}>
                <span style={{ fontWeight: 600 }}>Repositorios de @byteflow-ui</span>
                <CollapsibleTrigger>
                  <Button variant="ghost" size="sm">Ver más</Button>
                </CollapsibleTrigger>
              </div>
              <CollapsibleContent>
                <div style={{ marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <div style={{ padding: '0.75rem', border: '1px solid var(--bf-surface-border)', borderRadius: '8px' }}>
                    📦 packages/button
                  </div>
                  <div style={{ padding: '0.75rem', border: '1px solid var(--bf-surface-border)', borderRadius: '8px' }}>
                    📦 packages/input
                  </div>
                  <div style={{ padding: '0.75rem', border: '1px solid var(--bf-surface-border)', borderRadius: '8px' }}>
                    📦 packages/card
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        );

      case 'sidebar':
        return (
          <div style={{ height: '500px', border: '1px solid var(--bf-surface-border)', borderRadius: '12px', display: 'flex', overflow: 'hidden' }}>
            <Sidebar
              collapsed={isSidebarCollapsed}
              onCollapseChange={setIsSidebarCollapsed}
              width="240px"
            >
              <SidebarToggle />
              <SidebarHeader>
                <div style={{ fontWeight: 800, color: 'var(--bf-accent)' }}>BYTEFLOW</div>
              </SidebarHeader>
              <SidebarContent>
                <SidebarGroup label="Plataforma">
                  <SidebarItem icon={<span>🏠</span>} active>Dashboard</SidebarItem>
                  <SidebarItem icon={<span>📊</span>}>Analíticas</SidebarItem>
                  <SidebarItem icon={<span>👥</span>}>Usuarios</SidebarItem>
                </SidebarGroup>
                <SidebarGroup label="Configuración">
                  <SidebarItem icon={<span>⚙️</span>}>Ajustes</SidebarItem>
                  <SidebarItem icon={<span>🔒</span>}>Seguridad</SidebarItem>
                </SidebarGroup>
              </SidebarContent>
              <SidebarFooter>
                <SidebarItem icon={<span>👤</span>} suffix={<Badge variant="secondary">Pro</Badge>}>
                  v.cornejo
                </SidebarItem>
              </SidebarFooter>
            </Sidebar>
            <div style={{ flex: 1, padding: '2rem', background: 'var(--bf-canvas-subtle)' }}>
              <h3 style={{ margin: 0 }}>Contenido del Dashboard</h3>
              <p style={{ marginTop: '1rem', color: 'var(--bf-text-secondary)' }}>
                La barra lateral se puede colapsar usando el botón flotante.
              </p>
              <Button variant="secondary" onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}>
                {isSidebarCollapsed ? 'Expandir Sidebar' : 'Colapsar Sidebar'}
              </Button>
            </div>
          </div>
        );

      case 'pagination':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
            <div style={{ padding: '2rem', border: '1px solid var(--bf-surface-border)', borderRadius: '12px', width: '100%', textAlign: 'center' }}>
              Mostrando resultados de la página <strong>{currentPage}</strong>
            </div>
            <Pagination
              total={100}
              current={currentPage}
              pageSize={10}
              onChange={setCurrentPage}
            />
          </div>
        );

      case 'navigation-menu':
        return (
          <div style={{ height: '300px', width: '100%', border: '1px solid var(--bf-surface-border)', borderRadius: '12px', padding: '1rem' }}>
            <NavigationMenu>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Recursos</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', width: '450px' }}>
                    <div style={{ background: 'var(--bf-canvas-subtle)', padding: '1rem', borderRadius: '8px' }}>
                      <div style={{ fontWeight: 600, fontSize: '14px', marginBottom: '4px' }}>Introducción</div>
                      <p style={{ fontSize: '12px', opacity: 0.7, margin: 0 }}>Aprende los conceptos básicos de Byteflow UI.</p>
                    </div>
                    <div style={{ padding: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <NavigationMenuLink>Componentes</NavigationMenuLink>
                      <NavigationMenuLink>Tipografía</NavigationMenuLink>
                      <NavigationMenuLink>Colores</NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Comunidad</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div style={{ padding: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '200px' }}>
                    <NavigationMenuLink>GitHub</NavigationMenuLink>
                    <NavigationMenuLink>Discord</NavigationMenuLink>
                    <NavigationMenuLink>Twitter</NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/blog">Blog</NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenu>
            <div style={{ marginTop: '4rem', textAlign: 'center', color: 'var(--bf-text-muted)' }}>
              Pasa el cursor sobre los elementos del menú para ver los submenús.
            </div>
          </div>
        );

      case 'menubar':
        return (
          <div style={{ height: '300px', width: '100%', border: '1px solid var(--bf-surface-border)', borderRadius: '12px', padding: '1rem' }}>
            <Menubar>
              <MenubarMenu value="archivo">
                <MenubarTrigger>Archivo</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem shortcut="⌘N">Nuevo Proyecto</MenubarItem>
                  <MenubarItem shortcut="⌘O">Abrir...</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem shortcut="⌘S">Guardar</MenubarItem>
                  <MenubarItem shortcut="⇧⌘S">Guardar como...</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Imprimir...</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu value="editar">
                <MenubarTrigger>Editar</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem shortcut="⌘Z">Deshacer</MenubarItem>
                  <MenubarItem shortcut="⇧⌘Z">Rehacer</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem shortcut="⌘X">Cortar</MenubarItem>
                  <MenubarItem shortcut="⌘C">Copiar</MenubarItem>
                  <MenubarItem shortcut="⌘V">Pegar</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu value="ver">
                <MenubarTrigger>Ver</MenubarTrigger>
                <MenubarContent>
                  <MenubarLabel>Apariencia</MenubarLabel>
                  <MenubarItem>Barra Lateral</MenubarItem>
                  <MenubarItem>Barra de Estado</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Pantalla Completa</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
            <div style={{ marginTop: '4rem', textAlign: 'center', color: 'var(--bf-text-muted)' }}>
              Barra de menús estilo sistema operativo.
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
    <ToastProvider>
      <ToasterProvider>
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
                        {['field', 'empty', 'money-input', 'dialog', 'toast'].includes(comp) && <ItemSuffix><div style={{ width: 6, height: 6, background: 'var(--bf-accent)', borderRadius: '50%' }} /></ItemSuffix>}
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
      </ToasterProvider>
    </ToastProvider>
  )
}

export default App
