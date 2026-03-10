# 📚 Documentación de Componentes Byteflow-UI

Esta documentación técnica está diseñada para ser utilizada por desarrolladores y agentes de IA. Proporciona una referencia completa de la API, ejemplos de uso y descripciones funcionales de cada componente en el kit de UI de Byteflow.

## 🗂️ Tabla de Contenidos

- [Accordion](#accordion)
- [Alert](#alert)
- [Alert Dialog](#alert-dialog)
- [Aspect Ratio](#aspect-ratio)
- [Avatar](#avatar)
- [Badge](#badge)
- [Breadcrumb](#breadcrumb)
- [Button](#button)
- [Calendar](#calendar)
- [Card](#card)
- [Carousel](#carousel)
- [Checkbox](#checkbox)
- [Collapsible](#collapsible)
- [Combobox](#combobox)
- [Command](#command)
- [Context Menu](#context-menu)
- [Data Table](#data-table)
- [Date Picker](#date-picker)
- [Dialog](#dialog)
- [Dropdown Menu](#dropdown-menu)
- [Empty](#empty)
- [Field](#field)
- [Hover Card](#hover-card)
- [Input](#input)
- [Input Group](#input-group)
- [Input Otp](#input-otp)
- [Item](#item)
- [Kbd](#kbd)
- [Label](#label)
- [Menubar](#menubar)
- [Money Input](#money-input)
- [Navigation Menu](#navigation-menu)
- [Pagination](#pagination)
- [Popover](#popover)
- [Progress](#progress)
- [Radio](#radio)
- [Resizable](#resizable)
- [Scroll Area](#scroll-area)
- [Select](#select)
- [Separator](#separator)
- [Sheet](#sheet)
- [Sidebar](#sidebar)
- [Skeleton](#skeleton)
- [Slider](#slider)
- [Sonner](#sonner)
- [Spinner](#spinner)
- [Switch](#switch)
- [Table](#table)
- [Tabs](#tabs)
- [Textarea](#textarea)
- [Toast](#toast)
- [Toggle](#toggle)
- [Toggle Group](#toggle-group)
- [Tooltip](#tooltip)

---

## <a id="accordion"></a> Accordion

**Paquete:** `@byteflow-ui/accordion`

### 📝 Descripción
Componente Accordion premium para Byteflow UI. Permite organizar contenido en secciones colapsables, ideal para preguntas frecuentes, menús laterales o desgloses de información.

### ⚙️ Propiedades (Props)

| Prop | Tipo | Descripción |
| :--- | :--- | :--- |
| `type` | `'single' | 'multiple'` | Determina si se puede abrir un solo ítem o varios simultáneamente. |
| `defaultValue` | `string | string[]` | Valor del ítem (o ítems) expandidos por defecto. |
| `onValueChange` | `(value: string | string[]) => void` | Callback disparado al cambiar los ítems expandidos. |

### 🚀 Ejemplo de Uso

```tsx
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@byteflow-ui/accordion';
import '@byteflow-ui/accordion/index.css';

function App() {
  return (
    <Accordion type="single" defaultValue="item-1">
      <AccordionItem value="item-1">
        <AccordionTrigger>¿Qué es Byteflow UI?</AccordionTrigger>
        <AccordionContent>
          Es un kit de componentes premium diseñado para aplicaciones React modernas.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
```

---

## <a id="alert"></a> Alert

**Paquete:** `@byteflow-ui/alert`

### 📝 Descripción
Componente de alerta para mostrar mensajes de retroalimentación de estado de manera clara y estética.

### ⚙️ Propiedades (Props)

| Prop | Tipo | Descripción |
| :--- | :--- | :--- |
| `variant` | `'info' | 'success' | 'warning' | 'error'` | - |

### 🚀 Ejemplo de Uso

```tsx
import { Alert, AlertTitle, AlertDescription } from '@byteflow-ui/alert';
import '@byteflow-ui/alert/index.css';

function Example() {
  return (
    <Alert variant="info">
      <AlertTitle>Información</AlertTitle>
      <AlertDescription>
        Este es un mensaje informativo para el usuario.
      </AlertDescription>
    </Alert>
  );
}
```

---

## <a id="alert-dialog"></a> Alert Dialog

**Paquete:** `@byteflow-ui/alert-dialog`

### 📝 Descripción
Componente de diálogo de alerta para acciones críticas que requieren confirmación explícita del usuario. Extiende la funcionalidad de `@byteflow-ui/dialog`.

### 🚀 Ejemplo de Uso

```tsx
import { useState } from 'react';
import { AlertDialog, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter } from '@byteflow-ui/alert-dialog';
import { Button } from '@byteflow-ui/button';

export const MyComponent = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Button variant="error" onClick={() => setIsOpen(true)}>Eliminar Cuenta</Button>
            
            <AlertDialog isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <AlertDialogHeader>
                    <AlertDialogTitle>¿Estás absolutamente seguro?</AlertDialogTitle>
                    <AlertDialogDescription>
                        Esta acción no se puede deshacer. Esto eliminará permanentemente tu cuenta
                        y removerá tus datos de nuestros servidores.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                
                <AlertDialogFooter>
                    <Button variant="ghost" onClick={() => setIsOpen(false)}>Cancelar</Button>
                    <Button variant="error" onClick={() => setIsOpen(false)}>Sí, eliminar cuenta</Button>
                </AlertDialogFooter>
            </AlertDialog>
        </>
    );
};
```

---

## <a id="aspect-ratio"></a> Aspect Ratio

**Paquete:** `@byteflow-ui/aspect-ratio`

### 📝 Descripción
Componente Aspect Ratio para controlar proporciones de elementos en el kit **Byteflow-UI**.

### ⚙️ Propiedades (Props)

| Prop | Tipo | Descripción |
| :--- | :--- | :--- |
| `ratio` | `number` | Relación de aspecto deseada (ej. 16/9 = 1.77, 4/3 = 1.33). Por defecto es 1. |

### 🚀 Ejemplo de Uso

```tsx
import { AspectRatio } from '@byteflow-ui/aspect-ratio';
import '@byteflow-ui/aspect-ratio/index.css';

function ImageCard() {
  return (
    <div style={{ width: 300 }}>
      <AspectRatio ratio={16 / 9}>
        <img 
          src="https://images.unsplash.com/photo-1588345921523-c2dcd57f7dcb?w=800&dpr=2" 
          alt="Paisaje" 
        />
      </AspectRatio>
    </div>
  );
}
```

---

## <a id="avatar"></a> Avatar

**Paquete:** `@byteflow-ui/avatar`

### 📝 Descripción
Componente Avatar premium para el kit **Byteflow-UI**.

### ⚙️ Propiedades (Props)

| Prop | Tipo | Descripción |
| :--- | :--- | :--- |
| `src` | `string` | URL de la imagen de perfil. Si falla o no se provee, se mostrará el fallback. |
| `alt` | `string` | Texto alternativo para la imagen, importante para la accesibilidad por lectores de pantalla. |
| `fallback` | `React.ReactNode` | Contenido personalizado (ej. iniciales o iconos) a mostrar cuando la imagen no esté disponible. |
| `size` | `'sm' | 'md' | 'lg' | 'xl'` | Determina las dimensiones físicas del avatar dentro del espacio de la UI. |
| `shape` | `'circle' | 'square'` | La forma geométrica del avatar: circle (estándar) o square (más industrial/moderno). |

### 🚀 Ejemplo de Uso

```tsx
import { Avatar } from '@byteflow-ui/avatar';
import '@byteflow-ui/avatar/index.css';

function App() {
  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      {/* Con imagen */}
      <Avatar src="user.jpg" alt="Victor Hugo" />
      
      {/* Fallback automático por iniciales */}
      <Avatar alt="Victor Hugo" />
      
      {/* Fallback personalizado */}
      <Avatar fallback={<IconUser />} />
      
      {/* Tamaños y formas */}
      <Avatar size="lg" shape="square" alt="UX" />
    </div>
  );
}
```

---

## <a id="badge"></a> Badge

**Paquete:** `@byteflow-ui/badge`

### 📝 Descripción
Componente Badge premium para el kit **Byteflow-UI**.

### ⚙️ Propiedades (Props)

| Prop | Tipo | Descripción |
| :--- | :--- | :--- |
| `variant` | `'primary' | 'secondary' | 'outline' | 'success' | 'warning' | 'error'` | La variante visual del badge que determina su color y estilo. |
| `size` | `'sm' | 'md' | 'lg'` | El tamaño del badge. |

### 🚀 Ejemplo de Uso

```tsx
import { Badge } from '@byteflow-ui/badge';
import '@byteflow-ui/badge/index.css';

function App() {
  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      <Badge variant="primary">Nuevo</Badge>
      <Badge variant="success">Completado</Badge>
      <Badge variant="error" size="sm">Urgente</Badge>
    </div>
  );
}
```

---

## <a id="breadcrumb"></a> Breadcrumb

**Paquete:** `@byteflow-ui/breadcrumb`

### 📝 Descripción
Componente Breadcrumb para navegación jerárquica en el kit **Byteflow-UI**.

### ⚙️ Propiedades (Props)

| Prop | Tipo | Descripción |
| :--- | :--- | :--- |
| `separator` | `React.ReactNode` | Elemento opcional para usar como separador entre niveles. |

### 🚀 Ejemplo de Uso

```tsx
import { 
  Breadcrumb, 
  BreadcrumbList, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbSeparator, 
  BreadcrumbPage 
} from '@byteflow-ui/breadcrumb';
import '@byteflow-ui/breadcrumb/index.css';

function MyNavigation() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Inicio</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/productos">Productos</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Detalle del Producto</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
```

---

## <a id="button"></a> Button

**Paquete:** `@byteflow-ui/button`

### 📝 Descripción
Un componente de botón altamente personalizable, accesible y listo para producción, parte del kit **Byteflow-UI**.

### ⚙️ Propiedades (Props)

| Prop | Tipo | Descripción |
| :--- | :--- | :--- |
| `variant` | `'primary' | 'secondary' | 'ghost'` | La variante visual del botón que define su nivel de importancia: primary (acción principal), secondary (acción de apoyo) o ghost (acción mínima). |
| `size` | `'sm' | 'md' | 'lg'` | Tamaño del botón para ajustar su jerarquía visual en diferentes contextos de UI. |
| `isLoading` | `boolean` | Cuando es true, muestra un indicador de carga (spinner) y deshabilita la interacción para prevenir clicks duplicados. |

### 🚀 Ejemplo de Uso

```tsx
import { Button } from '@byteflow-ui/button';
import '@byteflow-ui/button/index.css';

function App() {
  return (
    <Button variant="primary" onClick={() => console.log('Click!')}>
      Mi Botón Premium
    </Button>
  );
}
```

---

## <a id="calendar"></a> Calendar

**Paquete:** `@byteflow-ui/calendar`

### 📝 Descripción
Componente Calendar premium para Byteflow UI. Proporciona una interfaz intuitiva y elegante para la visualización y selección de fechas, con navegación por meses y soporte para temas oscuros.

### ⚙️ Propiedades (Props)

| Prop | Tipo | Descripción |
| :--- | :--- | :--- |
| `className` | `string` | - |
| `selected` | `Date | Date[]` | - |
| `onSelect` | `(date: Date) => void` | - |
| `mode` | `'single' | 'range' | 'multiple'` | - |

### 🚀 Ejemplo de Uso

```tsx
import { Calendar } from '@byteflow-ui/calendar';
import '@byteflow-ui/calendar/index.css';

function DatePicker() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Calendar 
      selected={date} 
      onSelect={setDate} 
      className="border rounded-md"
    />
  );
}
```

---

## <a id="card"></a> Card

**Paquete:** `@byteflow-ui/card`

### 📝 Descripción
Componente Card premium para el kit **Byteflow-UI**.

### 🚀 Ejemplo de Uso

```tsx
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter 
} from '@byteflow-ui/card';
import '@byteflow-ui/card/index.css';

function MyCard() {
  return (
    <Card style={{ width: '350px' }}>
      <CardHeader>
        <CardTitle>Título del Proyecto</CardTitle>
        <CardDescription>Resumen ejecutivo de la iniciativa.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Aquí va el contenido principal de la tarjeta con toda la información relevante.</p>
      </CardContent>
      <CardFooter>
        <button>Acción Principal</button>
      </CardFooter>
    </Card>
  );
}
```

---

## <a id="carousel"></a> Carousel

**Paquete:** `@byteflow-ui/carousel`

### 📝 Descripción
Componente Carousel premium para Byteflow UI. Implementado con motores nativos de scroll (scroll-snap) para un rendimiento excepcional y transiciones fluidas tanto en escritorio como en móviles.

### ⚙️ Propiedades (Props)

| Prop | Tipo | Descripción |
| :--- | :--- | :--- |
| `scrollPrev` | `() => void` | - |
| `scrollNext` | `() => void` | - |
| `canScrollNext` | `boolean` | - |
| `canScrollPrev` | `boolean` | - |

### 🚀 Ejemplo de Uso

```tsx
import { Carousel, CarouselItem, CarouselPrevious, CarouselNext } from '@byteflow-ui/carousel';
import '@byteflow-ui/carousel/index.css';

function Gallery() {
  return (
    <div style={{ padding: '0 2rem' }}>
      <Carousel>
        <CarouselItem>
          <div className="p-4 border rounded-xl bg-slate-100 h-64 flex items-center justify-center">Slide 1</div>
        </CarouselItem>
        <CarouselItem>
          <div className="p-4 border rounded-xl bg-slate-100 h-64 flex items-center justify-center">Slide 2</div>
        </CarouselItem>
        <CarouselItem>
          <div className="p-4 border rounded-xl bg-slate-100 h-64 flex items-center justify-center">Slide 3</div>
        </CarouselItem>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
```

---

## <a id="checkbox"></a> Checkbox

**Paquete:** `@byteflow-ui/checkbox`

### 📝 Descripción
Componente Checkbox premium y accesible para el kit **Byteflow-UI**.

### ⚙️ Propiedades (Props)

| Prop | Tipo | Descripción |
| :--- | :--- | :--- |
| `label` | `string` | Etiqueta de texto que aparece a la derecha del checkbox, facilitando la identificación de la opción. |
| `required` | `boolean` | Indica si la selección de este checkbox es obligatoria para continuar (ej. términos y condiciones). |

### 🚀 Ejemplo de Uso

```tsx
import { Checkbox } from '@byteflow-ui/checkbox';
import '@byteflow-ui/checkbox/index.css';

function App() {
  return (
    <Checkbox 
      label="Acepto los términos y condiciones"
      required
    />
  );
}
```

---

## <a id="collapsible"></a> Collapsible

**Paquete:** `@byteflow-ui/collapsible`

### 📝 Descripción
Componente Collapsible premium para Byteflow UI. Ideal para secciones que el usuario puede expandir o contraer a discreción, como detalles técnicos, configuraciones avanzadas o paneles de información secundaria.

### ⚙️ Propiedades (Props)

| Prop | Tipo | Descripción |
| :--- | :--- | :--- |
| `children` | `React.ReactNode` | - |
| `defaultOpen` | `boolean` | - |
| `open` | `boolean` | - |
| `onOpenChange` | `(open: boolean) => void` | - |
| `disabled` | `boolean` | - |
| `className` | `string` | - |

### 🚀 Ejemplo de Uso

```tsx
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@byteflow-ui/collapsible';
import '@byteflow-ui/collapsible/index.css';

function App() {
  return (
    <Collapsible>
      <CollapsibleTrigger>Ver más detalles</CollapsibleTrigger>
      <CollapsibleContent>
        Aquí puedes colocar cualquier contenido que desees ocultar inicialmente y 
        permitir que el usuario lo expanda bajo demanda.
      </CollapsibleContent>
    </Collapsible>
  );
}
```

---

## <a id="combobox"></a> Combobox

**Paquete:** `@byteflow-ui/combobox`

### 📝 Descripción
Componente Combobox (Búsqueda + Selección) premium para Byteflow UI. Combina la potencia del componente `Command` con la versatilidad de un `Popover` para ofrecer una experiencia de selección con filtrado fluido.

### ⚙️ Propiedades (Props)

| Prop | Tipo | Descripción |
| :--- | :--- | :--- |
| `options` | `ComboboxOption[]` | - |
| `value` | `string` | - |
| `onValueChange` | `(value: string) => void` | - |
| `placeholder` | `string` | - |
| `emptyText` | `string` | - |
| `className` | `string` | - |
| `disabled` | `boolean` | - |

### 🚀 Ejemplo de Uso

```tsx
import { Combobox } from '@byteflow-ui/combobox';
import '@byteflow-ui/combobox/index.css';

const frameworks = [
  { value: "next.js", label: "Next.js" },
  { value: "sveltekit", label: "SvelteKit" },
  { value: "nuxt.js", label: "Nuxt.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
];

function FrameworkSelect() {
  const [value, setValue] = useState("");

  return (
    <Combobox 
      options={frameworks} 
      value={value} 
      onValueChange={setValue} 
      placeholder="Seleccionar framework..."
    />
  );
}
```

---

## <a id="command"></a> Command

**Paquete:** `@byteflow-ui/command`

### 📝 Descripción
Componente Command (Paleta de comandos) premium para Byteflow UI. Ideal para búsquedas globales, menús de acciones rápidas (⌘K) o filtrado de colecciones de datos.

### ⚙️ Propiedades (Props)

| Prop | Tipo | Descripción |
| :--- | :--- | :--- |
| `children` | `React.ReactNode` | Contenido del comando. |

### 🚀 Ejemplo de Uso

```tsx
import { 
  Command, 
  CommandInput, 
  CommandList, 
  CommandEmpty, 
  CommandGroup, 
  CommandItem, 
  CommandSeparator,
  CommandShortcut 
} from '@byteflow-ui/command';
import '@byteflow-ui/command/index.css';

function CommandMenu() {
  return (
    <Command>
      <CommandInput placeholder="Escribe un comando..." />
      <CommandList>
        <CommandEmpty>No se encontraron resultados.</CommandEmpty>
        <CommandGroup heading="Sugerencias">
          <CommandItem onSelect={() => console.log('Calendario')}>
            <span>Calendario</span>
            <CommandShortcut>⌘C</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <span>Búsqueda</span>
            <CommandShortcut>⌘F</CommandShortcut>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Configuración">
          <CommandItem>Perfil</CommandItem>
          <CommandItem>Ajustes</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
```

---

## <a id="context-menu"></a> Context Menu

**Paquete:** `@byteflow-ui/context-menu`

### 📝 Descripción
Componente de menú contextual premium para el kit Byteflow-UI, diseñado para aparecer al hacer clic derecho sobre un área específica.

### ⚙️ Propiedades (Props)

| Prop | Tipo | Descripción |
| :--- | :--- | :--- |
| `children` | `React.ReactNode` | - |

### 🚀 Ejemplo de Uso

```tsx
import { useState } from 'react';
import { 
    ContextMenu, 
    ContextMenuTrigger, 
    ContextMenuContent, 
    ContextMenuItem,
    ContextMenuLabel,
    ContextMenuSeparator,
    ContextMenuShortcut
} from '@byteflow-ui/context-menu';

export const MyComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });

    const handleContextMenu = (e: React.MouseEvent) => {
        e.preventDefault();
        setAnchorPoint({ x: e.clientX, y: e.clientY });
        setIsOpen(true);
    };

    return (
        <>
            <ContextMenu>
                <ContextMenuTrigger>
                    <div 
                        onContextMenu={handleContextMenu}
                        style={{ 
                            width: '300px', 
                            height: '200px', 
                            border: '2px dashed #444', 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center',
                            borderRadius: '12px'
                        }}
                    >
                        Click Derecho Aquí
                    </div>
                </ContextMenuTrigger>
                
                <ContextMenuContent 
                    isOpen={isOpen} 
                    onClose={() => setIsOpen(false)} 
                    anchorPoint={anchorPoint}
                >
                    <ContextMenuLabel>Acciones de Archivo</ContextMenuLabel>
                    <ContextMenuItem onClick={() => alert('Abrir')}>
                        Abrir
                        <ContextMenuShortcut>⌘O</ContextMenuShortcut>
                    </ContextMenuItem>
                    <ContextMenuItem onClick={() => alert('Editar')}>
                        Editar
                        <ContextMenuShortcut>⌘E</ContextMenuShortcut>
                    </ContextMenuItem>
                    <ContextMenuSeparator />
                    <ContextMenuItem onClick={() => alert('Eliminar')} style={{ color: '#ef4444' }}>
                        Eliminar
                        <ContextMenuShortcut>⌘⌫</ContextMenuShortcut>
                    </ContextMenuItem>
                </ContextMenuContent>
            </ContextMenu>
        </>
    );
};
```

---

## <a id="data-table"></a> Data Table

**Paquete:** `@byteflow-ui/data-table`

### 📝 Descripción
Componente Data Table (Orquestador) premium para Byteflow UI. A partir de la versión 1.0.2 utiliza arquitectura de componentes compuestos (*Headless UI*) para permitir máxima flexibilidad de layout sin perder su gestión interna del estado (paginación y filtrado).

### ⚙️ Novedades (v1.0.2)
- **Control de Estilos Variables:** Utiliza CSS Variables para facilitar las variaciones de diseño y propagación de `classNames`.
- **Columnas Mejoradas:** `DataTableColumn` ahora soporta definiciones de `width`, `align` y `className` individualmente.
- **Sub-Componentes:** Expone `<DataTable.Toolbar>`, `<DataTable.Table>` y `<DataTable.Pagination>`.

### 🚀 Ejemplo de Uso (Avanzado - Composición)

```tsx
import { DataTable } from '@byteflow-ui/data-table';
import '@byteflow-ui/data-table/index.css';

const data = [
  { id: 1, name: "Victor Cornejo", role: "Developer" },
  { id: 2, name: "Jane Doe", role: "Designer" },
];

const columns = [
  { header: "ID", accessorKey: "id", width: "80px", align: "center" },
  { header: "Nombre", accessorKey: "name", className: "text-blue-600 font-medium" },
  { header: "Rol", accessorKey: "role", align: "right" },
];

function AdvancedTable() {
  return (
    <DataTable 
      data={data} 
      columns={columns} 
      pageSize={5} 
      searchKey="name"
      classNames={{ th: "bg-slate-50 uppercase tracking-wider text-xs" }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
        <h2>Gestión de Personal</h2>
        <DataTable.Toolbar /> 
      </div>
      
      <div style={{ border: '1px solid #e2e8f0', borderRadius: '0.5rem' }}>
        <DataTable.Table />
      </div>
      
      <DataTable.Pagination />
    </DataTable>
  );
}
```

*Nota: El renderizado clásico monolítico (sin definir children) sigue funcionando de forma retrocompatible.*

---

## <a id="date-picker"></a> Date Picker

**Paquete:** `@byteflow-ui/date-picker`

### 📝 Descripción
Componente Date Picker premium para Byteflow UI. Combina un trigger estilizado con un calendario desplegable para una selección de fechas intuitiva y accesible.

### ⚙️ Propiedades (Props)

| Prop | Tipo | Descripción |
| :--- | :--- | :--- |
| `value` | `Date` | - |
| `onValueChange` | `(date: Date) => void` | - |
| `placeholder` | `string` | - |
| `className` | `string` | - |
| `disabled` | `boolean` | - |

### 🚀 Ejemplo de Uso

```tsx
import { DatePicker } from '@byteflow-ui/date-picker';
import '@byteflow-ui/date-picker/index.css';

function BirthdayPicker() {
  const [date, setDate] = useState<Date | undefined>();

  return (
    <DatePicker 
      value={date} 
      onValueChange={setDate} 
      placeholder="Elige tu fecha de nacimiento"
    />
  );
}
```

---

## <a id="dialog"></a> Dialog

**Paquete:** `@byteflow-ui/dialog`

### 📝 Descripción
Componente de diálogo modal premium para el kit Byteflow-UI, diseñado con un enfoque en la estética moderna, accesibilidad y facilidad de uso.

### ⚙️ Propiedades (Props)

| Prop | Tipo | Descripción |
| :--- | :--- | :--- |
| `isOpen` | `boolean` | Indica si el diálogo está abierto. |
| `onClose` | `() => void` | Callback para cerrar el diálogo. |
| `children` | `React.ReactNode` | Contenido del diálogo. |
| `className` | `string` | Clase CSS adicional para el contenido. |
| `closeOnOutsideClick` | `boolean` | Si es true, cierra el diálogo al hacer click fuera del contenido. |
| `closeOnEsc` | `boolean` | Si es true, cierra el diálogo al presionar la tecla Escape. |

### 🚀 Ejemplo de Uso

```tsx
import { useState } from 'react';
import { Dialog, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@byteflow-ui/dialog';
import { Button } from '@byteflow-ui/button';

export const MyComponent = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setIsOpen(true)}>Abrir Modal</Button>
            
            <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <DialogHeader>
                    <DialogTitle>Confirmación de Acción</DialogTitle>
                    <DialogDescription>
                        ¿Estás seguro de que deseas archivar este proyecto? Esta acción se puede revertir luego.
                    </DialogDescription>
                </DialogHeader>
                
                <DialogFooter>
                    <Button variant="ghost" onClick={() => setIsOpen(false)}>Cancelar</Button>
                    <Button variant="primary" onClick={() => setIsOpen(false)}>Confirmar</Button>
                </DialogFooter>
            </Dialog>
        </>
    );
};
```

---

## <a id="dropdown-menu"></a> Dropdown Menu

**Paquete:** `@byteflow-ui/dropdown-menu`

### 📝 Descripción
Componente de menú desplegable premium para el kit Byteflow-UI, diseñado para mostrar una lista de acciones o opciones cuando se interactúa con un disparador.

### ⚙️ Propiedades (Props)

| Prop | Tipo | Descripción |
| :--- | :--- | :--- |
| `children` | `React.ReactNode` | Contenido del dropdown. |

### 🚀 Ejemplo de Uso

```tsx
import { useState, useRef } from 'react';
import { 
    DropdownMenu, 
    DropdownMenuTrigger, 
    DropdownMenuContent, 
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut
} from '@byteflow-ui/dropdown-menu';
import { Button } from '@byteflow-ui/button';

export const MyComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const triggerRef = useRef<HTMLButtonElement>(null);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Button ref={triggerRef} onClick={() => setIsOpen(!isOpen)}>
                    Mi Cuenta
                </Button>
            </DropdownMenuTrigger>
            
            <DropdownMenuContent 
                isOpen={isOpen} 
                onClose={() => setIsOpen(false)} 
                anchorRef={triggerRef}
                align="end"
            >
                <DropdownMenuLabel>Ajustes</DropdownMenuLabel>
                <DropdownMenuItem onClick={() => alert('Perfil')}>
                    Ver Perfil
                    <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => alert('Facturación')}>
                    Facturación
                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => setIsOpen(false)} style={{ color: '#ef4444' }}>
                    Cerrar Sesión
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
```

---

## <a id="empty"></a> Empty

**Paquete:** `@byteflow-ui/empty`

### 📝 Descripción
Componente Empty State para gestionar estados vacíos en el kit **Byteflow-UI**.

### 🚀 Ejemplo de Uso

```tsx
import { 
  Empty, 
  EmptyIcon, 
  EmptyTitle, 
  EmptyDescription, 
  EmptyAction 
} from '@byteflow-ui/empty';
import { Button } from '@byteflow-ui/button';
import '@byteflow-ui/empty/index.css';

function NoResults() {
  return (
    <Empty>
      <EmptyIcon>🔍</EmptyIcon>
      <EmptyTitle>No se encontraron resultados</EmptyTitle>
      <EmptyDescription>
        Intenta ajustar tus filtros de búsqueda para encontrar lo que buscas.
      </EmptyDescription>
      <EmptyAction>
        <Button variant="secondary">Limpiar Filtros</Button>
      </EmptyAction>
    </Empty>
  );
}
```

---

## <a id="field"></a> Field

**Paquete:** `@byteflow-ui/field`

### 📝 Descripción
Componente Field compuesto para gestionar formularios de manera accesible en el kit **Byteflow-UI**.

### ⚙️ Propiedades (Props)

| Prop | Tipo | Descripción |
| :--- | :--- | :--- |
| `id` | `string` | - |
| `errorId` | `string` | - |
| `descriptionId` | `string` | - |
| `isInvalid` | `boolean` | - |

### 🚀 Ejemplo de Uso

```tsx
import { Field, FieldLabel, FieldDescription, FieldError } from '@byteflow-ui/field';
import { Input } from '@byteflow-ui/input';
import '@byteflow-ui/field/index.css';

function UserForm() {
  return (
    <Field isInvalid={false}>
      <FieldLabel>Nombre de usuario</FieldLabel>
      <Input placeholder="@usuario" />
      <FieldDescription>Usa tu nombre real o un seudónimo.</FieldDescription>
      <FieldError>Este nombre ya está en uso.</FieldError>
    </Field>
  );
}
```

---

## <a id="hover-card"></a> Hover Card

**Paquete:** `@byteflow-ui/hover-card`

### 📝 Descripción
Componente de hover card premium para el kit Byteflow-UI, diseñado para mostrar contenido enriquecido cuando el usuario pasa el cursor sobre un elemento disparador, con un retraso intencional.

### ⚙️ Propiedades (Props)

| Prop | Tipo | Descripción |
| :--- | :--- | :--- |
| `children` | `React.ReactNode` | - |
| `openDelay` | `number` | - |
| `closeDelay` | `number` | - |

### 🚀 Ejemplo de Uso

```tsx
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@byteflow-ui/hover-card';
import { Avatar } from '@byteflow-ui/avatar';

export const MyComponent = () => {
    return (
        <HoverCard openDelay={300}>
            <HoverCardTrigger>
                <a href="https://twitter.com/byteflow" target="_blank" rel="noreferrer">
                    <Avatar src="https://github.com/byteflow.png" alt="Byteflow" />
                </a>
            </HoverCardTrigger>
            
            <HoverCardContent side="top" align="center">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div style={{ fontWeight: 600 }}>Byteflow UI</div>
                    <div style={{ fontSize: '14px', opacity: 0.8 }}>
                        The premium component library for modern web applications.
                    </div>
                </div>
            </HoverCardContent>
        </HoverCard>
    );
};
```

---

## <a id="input"></a> Input

**Paquete:** `@byteflow-ui/input`

### 📝 Descripción
Componente de entrada de texto base, parte del kit **Byteflow-UI**. Integra automáticamente el componente `@byteflow-ui/label` para una mejor accesibilidad.

### ⚙️ Propiedades (Props)

| Prop | Tipo | Descripción |
| :--- | :--- | :--- |
| `label` | `string` | Texto de la etiqueta que identifica el propósito del campo. |
| `error` | `string` | Mensaje de error a pie de campo. Si se provee, el borde del input cambiará a rojo para indicar un estado inválido. |
| `required` | `boolean` | Si es true, añade un indicador visual (ej. asterisco) resaltando que el campo es obligatorio. |

### 🚀 Ejemplo de Uso

```tsx
import { Input } from '@byteflow-ui/input';
import '@byteflow-ui/input/index.css';

function App() {
  return (
    <Input
      label="Nombre de Usuario"
      placeholder="Ej. rex2002xp"
      required
    />
  );
}
```

---

## <a id="input-group"></a> Input Group

**Paquete:** `@byteflow-ui/input-group`

### 📝 Descripción
El componente **Input Group** es un contenedor versátil que permite fusionar visualmente campos de entrada con otros elementos como iconos, botones o texto estático.

### ⚙️ Propiedades (Props)

| Prop | Tipo | Descripción |
| :--- | :--- | :--- |
| `children` | `React.ReactNode` | Contenido del grupo (inputs, botones, texto). |
| `fullWidth` | `boolean` | Si es true, el grupo ocupará todo el ancho disponible del contenedor. |

### 🚀 Ejemplo de Uso

```tsx
import { InputGroup, InputGroupText } from '@byteflow-ui/input-group';
import { Input } from '@byteflow-ui/input';
import { Button } from '@byteflow-ui/button';

function App() {
  return (
    <InputGroup fullWidth>
      <InputGroupText>https://</InputGroupText>
      <Input placeholder="byteflow.ui" />
      <Button variant="primary">Copiar</Button>
    </InputGroup>
  );
}
```

---

## <a id="input-otp"></a> Input Otp

**Paquete:** `@byteflow-ui/input-otp`

### 📝 Descripción
El componente **Input OTP** es un campo de entrada especializado para capturar códigos de un solo uso (One-Time Passwords) o códigos de verificación de forma fluida y accesible.

### ⚙️ Propiedades (Props)

| Prop | Tipo | Descripción |
| :--- | :--- | :--- |
| `maxLength` | `number` | Número de caracteres/celdas. |
| `value` | `string` | Valor actual (controlado). |
| `defaultValue` | `string` | Valor inicial (no controlado). |
| `onComplete` | `(value: string) => void` | Callback al cambiar el valor completo. |
| `onChange` | `(value: string) => void` | Callback en cada cambio de carácter. |
| `numericOnly` | `boolean` | Si es true, solo permite números. |
| `disabled` | `boolean` | Si es true, deshabilita el input. |
| `className` | `string` | Clase CSS adicional. |

### 🚀 Ejemplo de Uso

```tsx
import { InputOTP } from '@byteflow-ui/input-otp';

function App() {
  return (
    <InputOTP 
      maxLength={6} 
      onComplete={(code) => console.log('Código listo:', code)} 
    />
  );
}
```

---

## <a id="item"></a> Item

**Paquete:** `@byteflow-ui/item`

### 📝 Descripción
Componente Item base para listas y menús en el kit **Byteflow-UI**.

### ⚙️ Propiedades (Props)

| Prop | Tipo | Descripción |
| :--- | :--- | :--- |
| `selected` | `boolean` | Indica si el ítem está seleccionado visualmente. |
| `disabled` | `boolean` | Deshabilita la interacción con el ítem. |

### 🚀 Ejemplo de Uso

```tsx
import { Item, ItemPrefix, ItemContent, ItemSuffix } from '@byteflow-ui/item';
import { Badge } from '@byteflow-ui/badge';
import '@byteflow-ui/item/index.css';

function UserItem() {
  return (
    <Item onClick={() => console.log('Click!')}>
      <ItemPrefix>👤</ItemPrefix>
      <ItemContent>
        <span style={{ fontWeight: 600 }}>Victor Hugo</span>
        <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>Desarrollador Senior</span>
      </ItemContent>
      <ItemSuffix>
        <Badge variant="success">Activo</Badge>
      </ItemSuffix>
    </Item>
  );
}
```

---

## <a id="kbd"></a> Kbd

**Paquete:** `@byteflow-ui/kbd`

### 📝 Descripción
Componente Kbd (Teclado) premium para Byteflow UI. Proporciona una representación visual semántica para teclas y atajos de teclado, con estilos consistentes con el resto de la librería.

### ⚙️ Propiedades (Props)

| Prop | Tipo | Descripción |
| :--- | :--- | :--- |
| `children` | `React.ReactNode` | - |

### 🚀 Ejemplo de Uso

```tsx
import { Kbd } from '@byteflow-ui/kbd';
import '@byteflow-ui/kbd/index.css';

function Shortcut() {
  return (
    <div className="flex items-center gap-2">
      <span>Presiona</span>
      <Kbd>⌘</Kbd>
      <span>+</span>
      <Kbd>K</Kbd>
      <span>para buscar.</span>
    </div>
  );
}
```

---

## <a id="label"></a> Label

**Paquete:** `@byteflow-ui/label`

### 📝 Descripción
Componente de etiqueta accesible para formularios, parte del kit **Byteflow-UI**.

### ⚙️ Propiedades (Props)

| Prop | Tipo | Descripción |
| :--- | :--- | :--- |
| `as` | `'label' | 'span'` | - |
| `required` | `boolean` | - |
| `disabled` | `boolean` | - |

### 🚀 Ejemplo de Uso

```tsx
import { Label } from '@byteflow-ui/label';
import '@byteflow-ui/label/index.css';

function App() {
  return (
    <div>
      <Label htmlFor="email" required>
        Correo Electrónico
      </Label>
      <input id="email" type="email" />
    </div>
  );
}
```

---

## <a id="menubar"></a> Menubar

**Paquete:** `@byteflow-ui/menubar`

### 📝 Descripción
Componente Menubar premium para Byteflow UI. Imita el comportamiento de los menús de aplicaciones de escritorio (OS), permitiendo agrupar múltiples menús desplegables en una barra horizontal con soporte para navegación fluida.

### ⚙️ Propiedades (Props)

| Prop | Tipo | Descripción |
| :--- | :--- | :--- |
| `children` | `React.ReactNode` | - |
| `className` | `string` | - |

### 🚀 Ejemplo de Uso

```tsx
import { 
  Menubar, 
  MenubarMenu, 
  MenubarTrigger, 
  MenubarContent, 
  MenubarItem, 
  MenubarSeparator,
  MenubarLabel
} from '@byteflow-ui/menubar';
import '@byteflow-ui/menubar/index.css';

function App() {
  return (
    <Menubar>
      <MenubarMenu value="file">
        <MenubarTrigger>Archivo</MenubarTrigger>
        <MenubarContent>
          <MenubarItem shortcut="⌘N">Nuevo Proyecto</MenubarItem>
          <MenubarItem shortcut="⌘O">Abrir...</MenubarItem>
          <MenubarSeparator />
          <MenubarItem shortcut="⌘S">Guardar</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu value="edit">
        <MenubarTrigger>Editar</MenubarTrigger>
        <MenubarContent>
          <MenubarItem shortcut="⌘Z">Deshacer</MenubarItem>
          <MenubarItem shortcut="⌘Y">Rehacer</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
```

---

## <a id="money-input"></a> Money Input

**Paquete:** `@byteflow-ui/money-input`

### 📝 Descripción
**El componente de entrada de moneda más elegante, ligero e intuitivo para React.** [![NPM Version](https://img.shields.io/npm/v/@byteflow-ui/money-input.svg)](https://www.npmjs.com/package/@byteflow-ui/money-input) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) Diseñado específicamente para ofrecer una experiencia de usuario financiera premium mediante una máscara de entrada de **derecha a izquierda (RTL)**. ---

### ⚙️ Propiedades (Props)

| Prop | Tipo | Descripción |
| :--- | :--- | :--- |
| `value` | `number` | Valor en centavos (ej: 100 para $1.00). Si se omite, el componente maneja su propio estado interno. |
| `currencySymbol` | `string` | Símbolo de moneda que se mostrará. Por defecto '$'. |
| `locale` | `string` | Configuración regional para el formato de miles (ej: 'es-MX', 'en-US'). Por defecto 'en-US'. |
| `onChange` | `(value: number) => void` | Callback que se dispara al cambiar el valor. Recibe el monto exacto en centavos. |
| `label` | `string` | Texto opcional que aparece arriba del campo de entrada. |
| `className` | `string` | Clase CSS para el contenedor principal. Útil para integración con frameworks como Tailwind. |
| `containerStyle` | `React.CSSProperties` | Estilos en línea para el contenedor principal. |
| `inputStyle` | `React.CSSProperties` | Estilos en línea directamente para el elemento input. |
| `name` | `string` | Atributo 'name' estándar para formularios. |
| `disabled` | `boolean` | Si es true, el usuario no podrá interactuar con el campo. |

### 🚀 Ejemplo de Uso

```tsx
import { MoneyInput } from '@byteflow-ui/money-input';
import '@byteflow-ui/money-input/index.css';

function PaymentForm() {
  const [total, setTotal] = useState(1500); // Equivale a $15.00

  return (
    <MoneyInput
      label="Monto de Inscripción"
      value={total}
      onChange={setTotal}
      currencySymbol="€"
      locale="de-DE"
    />
  );
}
```

---

## <a id="navigation-menu"></a> Navigation Menu

**Paquete:** `@byteflow-ui/navigation-menu`

### 📝 Descripción
Componente Navigation Menu premium para Byteflow UI. Ideal para la navegación principal de sitios web corporativos, documentaciones o aplicaciones con estructuras jerárquicas complejas.

### ⚙️ Propiedades (Props)

| Prop | Tipo | Descripción |
| :--- | :--- | :--- |
| `children` | `React.ReactNode` | - |
| `className` | `string` | - |

### 🚀 Ejemplo de Uso

```tsx
import { 
  NavigationMenu, 
  NavigationMenuItem, 
  NavigationMenuTrigger, 
  NavigationMenuContent, 
  NavigationMenuLink 
} from '@byteflow-ui/navigation-menu';
import '@byteflow-ui/navigation-menu/index.css';

function Navbar() {
  return (
    <NavigationMenu>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Productos</NavigationMenuTrigger>
        <NavigationMenuContent>
          <div style={{ display: 'grid', gap: '10px' }}>
            <NavigationMenuLink href="/cloud">Byteflow Cloud</NavigationMenuLink>
            <NavigationMenuLink href="/ui">Byteflow UI Pro</NavigationMenuLink>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink href="/docs">Documentación</NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenu>
  );
}
```

---

## <a id="pagination"></a> Pagination

**Paquete:** `@byteflow-ui/pagination`

### 📝 Descripción
Componente Pagination premium para Byteflow UI. Permite navegar a través de grandes conjuntos de datos divididos en múltiples páginas de forma intuitiva y accesible.

### ⚙️ Propiedades (Props)

| Prop | Tipo | Descripción |
| :--- | :--- | :--- |
| `total` | `number` | Número total de elementos a paginar. |
| `current` | `number` | Página actual (empezando por 1). |
| `onChange` | `(page: number) => void` | Callback disparado cuando se cambia la página. |
| `pageSize` | `number` | Número de elementos por página. Por defecto 10. |
| `siblingCount` | `number` | Número de páginas adyacentes a mostrar alrededor de la actual. |
| `showEdges` | `boolean` | Si se deben mostrar los botones de ir al inicio/final (opcional). |

### 🚀 Ejemplo de Uso

```tsx
import { Pagination } from '@byteflow-ui/pagination';
import '@byteflow-ui/pagination/index.css';

function MyTable() {
  const [page, setPage] = useState(1);
  
  return (
    <Pagination 
      total={100} 
      current={page} 
      pageSize={10} 
      onChange={setPage} 
    />
  );
}
```

---

## <a id="popover"></a> Popover

**Paquete:** `@byteflow-ui/popover`

### 📝 Descripción
Componente de popover premium para el kit Byteflow-UI, diseñado para mostrar contenido flotante anclado a un elemento disparador.

### ⚙️ Propiedades (Props)

| Prop | Tipo | Descripción |
| :--- | :--- | :--- |
| `children` | `React.ReactNode` | - |

### 🚀 Ejemplo de Uso

```tsx
import { useState, useRef } from 'react';
import { Popover, PopoverTrigger, PopoverContent } from '@byteflow-ui/popover';
import { Button } from '@byteflow-ui/button';

export const MyComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const triggerRef = useRef<HTMLButtonElement>(null);

    return (
        <Popover>
            <PopoverTrigger>
                <Button ref={triggerRef} onClick={() => setIsOpen(!isOpen)}>
                    Ver Detalles
                </Button>
            </PopoverTrigger>
            
            <PopoverContent 
                isOpen={isOpen} 
                onClose={() => setIsOpen(false)} 
                anchorRef={triggerRef}
                side="bottom"
                align="center"
            >
                <div style={{ padding: '8px' }}>
                    <h4 style={{ margin: '0 0 8px 0' }}>Información Extra</h4>
                    <p style={{ margin: 0, fontSize: '14px', opacity: 0.8 }}>
                        Este es un popover que se posiciona automáticamente.
                    </p>
                </div>
            </PopoverContent>
        </Popover>
    );
};
```

---

## <a id="progress"></a> Progress

**Paquete:** `@byteflow-ui/progress`

### 📝 Descripción
Componente de barra de progreso visual para indicar el avance de una tarea.

### ⚙️ Propiedades (Props)

| Prop | Tipo | Descripción |
| :--- | :--- | :--- |
| `value` | `number | null` | - |
| `max` | `number` | - |

### 🚀 Ejemplo de Uso

```tsx
import { Progress } from '@byteflow-ui/progress';
import '@byteflow-ui/progress/index.css';

function Example() {
  return <Progress value={60} />;
}
```

---

## <a id="radio"></a> Radio

**Paquete:** `@byteflow-ui/radio`

### 📝 Descripción
Componente Radio premium para selección única dentro de un conjunto de opciones, parte del kit **Byteflow-UI**.

### ⚙️ Propiedades (Props)

| Prop | Tipo | Descripción |
| :--- | :--- | :--- |
| `name` | `string` | - |
| `value` | `string` | - |
| `onChange` | `(e: React.ChangeEvent<HTMLInputElement>) => void` | - |
| `disabled` | `boolean` | - |

### 🚀 Ejemplo de Uso

```tsx
import { Radio, RadioGroup } from '@byteflow-ui/radio';
import '@byteflow-ui/radio/index.css';

function App() {
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
}
```

---

## <a id="resizable"></a> Resizable

**Paquete:** `@byteflow-ui/resizable`

### 📝 Descripción
Componente Resizable (Paneles divisibles) premium para Byteflow UI. Permite crear interfaces de múltiples paneles (estilo IDE) con divisores configurables y soporte para orientación horizontal y vertical.

### ⚙️ Propiedades (Props)

| Prop | Tipo | Descripción |
| :--- | :--- | :--- |
| `children` | `React.ReactNode` | - |
| `direction` | `'horizontal' | 'vertical'` | - |
| `className` | `string` | - |

### 🚀 Ejemplo de Uso

```tsx
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@byteflow-ui/resizable';
import '@byteflow-ui/resizable/index.css';

function IDE() {
  return (
    <ResizablePanelGroup direction="horizontal" style={{ height: '400px', border: '1px solid #ccc' }}>
      <ResizablePanel defaultSize={20}>
        <div style={{ padding: '1rem' }}>Explorador</div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={80}>
        <div style={{ padding: '1rem' }}>Editor de Código</div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
```

---

## <a id="scroll-area"></a> Scroll Area

**Paquete:** `@byteflow-ui/scroll-area`

### 📝 Descripción
Componente Scroll Area con barras de desplazamiento personalizadas para el kit **Byteflow-UI**.

### ⚙️ Propiedades (Props)

| Prop | Tipo | Descripción |
| :--- | :--- | :--- |
| `maxHeight` | `string | number` | Altura máxima que puede alcanzar el área antes de mostrar scroll. |
| `hideScrollbar` | `boolean` | Si es true, oculta la barra de scroll visualmente manteniendo la funcionalidad. |

### 🚀 Ejemplo de Uso

```tsx
import { ScrollArea } from '@byteflow-ui/scroll-area';
import '@byteflow-ui/scroll-area/index.css';

function MyList() {
  return (
    <ScrollArea maxHeight={300}>
      <div style={{ padding: '1rem' }}>
        {/* Mucho contenido aquí */}
      </div>
    </ScrollArea>
  );
}
```

---

## <a id="select"></a> Select

**Paquete:** `@byteflow-ui/select`

### 📝 Descripción
Componente de selección premium para el kit **Byteflow-UI**.

### ⚙️ Propiedades (Props)

| Prop | Tipo | Descripción |
| :--- | :--- | :--- |
| `label` | `string` | Etiqueta descriptiva sobre el campo de selección. |
| `options` | `SelectOption[]` | Lista de opciones a renderizar. Alternativamente se pueden pasar `<option>` como children. |
| `error` | `string` | Mensaje de error. Cambia el estilo del borde y activa aria-invalid. |
| `placeholder` | `string` | Texto a mostrar cuando no hay ninguna opción seleccionada. |

### 🚀 Ejemplo de Uso

```tsx
import { Select } from '@byteflow-ui/select';
import '@byteflow-ui/select/index.css';

const paises = [
  { label: 'México', value: 'mx' },
  { label: 'España', value: 'es' },
  { label: 'Colombia', value: 'co' },
];

function App() {
  return (
    <Select 
      label="País de residencia"
      options={paises}
      placeholder="Selecciona un país"
      required
    />
  );
}
```

---

## <a id="separator"></a> Separator

**Paquete:** `@byteflow-ui/separator`

### 📝 Descripción
Componente Separator premium para el kit **Byteflow-UI**.

### ⚙️ Propiedades (Props)

| Prop | Tipo | Descripción |
| :--- | :--- | :--- |
| `orientation` | `'horizontal' | 'vertical'` | - |
| `decorative` | `boolean` | - |

### 🚀 Ejemplo de Uso

```tsx
import { Separator } from '@byteflow-ui/separator';
import '@byteflow-ui/separator/index.css';

function App() {
  return (
    <div>
      <h3>Sección 1</h3>
      <Separator className="my-4" />
      <h3>Sección 2</h3>
      
      <div style={{ display: 'flex', height: '20px', alignItems: 'center' }}>
        <span>Link 1</span>
        <Separator orientation="vertical" className="mx-4" />
        <span>Link 2</span>
      </div>
    </div>
  );
}
```

---

## <a id="sheet"></a> Sheet

**Paquete:** `@byteflow-ui/sheet`

### 📝 Descripción
Componente de panel superpuesto (`Sheet`) o cajón inferior (`Drawer`) premium para el kit Byteflow-UI. Ideal para sidebars, menús móviles o formularios rápidos.

### ⚙️ Propiedades (Props)

| Prop | Tipo | Descripción |
| :--- | :--- | :--- |
| `isOpen` | `boolean` | Indica si el panel está abierto. |
| `onClose` | `() => void` | Callback para cerrar el panel. |
| `children` | `React.ReactNode` | Contenido del panel. |
| `side` | `'top' | 'bottom' | 'left' | 'right'` | Lado por el que aparece el panel. |
| `className` | `string` | Clase CSS adicional para el contenido. |
| `closeOnOutsideClick` | `boolean` | Si es true, cierra al hacer click fuera. |
| `closeOnEsc` | `boolean` | Si es true, cierra al presionar Escape. |

### 🚀 Ejemplo de Uso

```tsx
import { useState } from 'react';
import { Sheet, SheetHeader, SheetTitle, SheetDescription, SheetFooter } from '@byteflow-ui/sheet';
import { Button } from '@byteflow-ui/button';

export const SidebarDemo = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setIsOpen(true)}>Abrir Menú Lateral</Button>
            
            <Sheet isOpen={isOpen} onClose={() => setIsOpen(false)} side="right">
                <SheetHeader>
                    <SheetTitle>Menú de Ajustes</SheetTitle>
                    <SheetDescription>
                        Gestiona las preferencias de tu cuenta y notificaciones.
                    </SheetDescription>
                </SheetHeader>
                
                <div style={{ flex: 1 }}>
                    {/* Contenido del menú */}
                </div>
                
                <SheetFooter>
                    <Button variant="ghost" onClick={() => setIsOpen(false)}>Cerrar</Button>
                    <Button variant="primary">Guardar Cambios</Button>
                </SheetFooter>
            </Sheet>
        </>
    );
};
```

---

## <a id="sidebar"></a> Sidebar

**Paquete:** `@byteflow-ui/sidebar`

### 📝 Descripción
Componente Sidebar premium para aplicaciones dashboard en Byteflow UI. Proporciona una estructura robusta para la navegación principal, con soporte para colapso, agrupamiento de ítems y estados activos.

### ⚙️ Propiedades (Props)

| Prop | Tipo | Descripción |
| :--- | :--- | :--- |
| `defaultCollapsed` | `boolean` | Determina si la barra lateral comienza colapsada. |
| `collapsed` | `boolean` | Estado controlado para determinar si la barra lateral está colapsada. |
| `onCollapseChange` | `(collapsed: boolean) => void` | Callback disparado al cambiar el estado de colapso. |
| `width` | `string` | Ancho de la barra lateral expandida. Ej: '280px'. |
| `collapsedWidth` | `string` | Ancho de la barra lateral colapsada. Ej: '80px'. |

### 🚀 Ejemplo de Uso

```tsx
import { 
  Sidebar, 
  SidebarHeader, 
  SidebarContent, 
  SidebarFooter, 
  SidebarItem, 
  SidebarGroup,
  SidebarToggle 
} from '@byteflow-ui/sidebar';
import '@byteflow-ui/sidebar/index.css';

function DashboardLayout() {
  return (
    <Sidebar>
      <SidebarToggle />
      <SidebarHeader>
        <Logo />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup label="Principal">
          <SidebarItem icon={<HomeIcon />} active>Dashboard</SidebarItem>
          <SidebarItem icon={<UsersIcon />}>Usuarios</SidebarItem>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarItem icon={<SettingsIcon />}>Configuración</SidebarItem>
      </SidebarFooter>
    </Sidebar>
  );
}
```

---

## <a id="skeleton"></a> Skeleton

**Paquete:** `@byteflow-ui/skeleton`

### 📝 Descripción
Componente Skeleton premium para el kit **Byteflow-UI**.

### ⚙️ Propiedades (Props)

| Prop | Tipo | Descripción |
| :--- | :--- | :--- |
| `variant` | `'rectangular' | 'circular' | 'rounded'` | - |
| `width` | `string | number` | - |
| `height` | `string | number` | - |

### 🚀 Ejemplo de Uso

```tsx
import { Skeleton } from '@byteflow-ui/skeleton';
import '@byteflow-ui/skeleton/index.css';

function MyLoadingComponent() {
  return (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Skeleton variant="circular" width={40} height={40} />
      <div style={{ flex: 1 }}>
        <Skeleton variant="text" width="60%" height={20} style={{ marginBottom: '8px' }} />
        <Skeleton variant="text" width="40%" height={16} />
      </div>
    </div>
  );
}
```

---

## <a id="slider"></a> Slider

**Paquete:** `@byteflow-ui/slider`

### 📝 Descripción
El componente **Slider** es un control deslizante premium diseñado para permitir a los usuarios seleccionar un valor numérico de forma intuitiva y visual.

### ⚙️ Propiedades (Props)

| Prop | Tipo | Descripción |
| :--- | :--- | :--- |
| `value` | `number` | Valor actual del slider (0-100 por defecto). |
| `defaultValue` | `number` | Valor inicial para modo no controlado. |
| `min` | `number` | Valor mínimo permitido. |
| `max` | `number` | Valor máximo permitido. |
| `step` | `number` | Incremento mínimo entre valores. |
| `onChange` | `(value: number) => void` | Callback al cambiar el valor. |
| `label` | `string` | Texto descriptivo (label). |
| `disabled` | `boolean` | Si es true, deshabilita la interacción. |
| `className` | `string` | Clase CSS adicional. |
| `style` | `React.CSSProperties` | Estilos en línea. |

### 🚀 Ejemplo de Uso

```tsx
import { Slider } from '@byteflow-ui/slider';

function App() {
  return (
    <Slider 
      label="Volumen"
      min={0}
      max={100}
      defaultValue={50}
      onChange={(val) => console.log(val)}
    />
  );
}
```

---

## <a id="sonner"></a> Sonner

**Paquete:** `@byteflow-ui/sonner`

### 📝 Descripción
Componente Sonner para Byteflow-UI, que proporciona notificaciones apiladas (stacked) con animaciones de profundidad y perspectiva, siguiendo la estética de Sonner pero adaptado al sistema premium de Byteflow.

### ⚙️ Propiedades (Props)

| Prop | Tipo | Descripción |
| :--- | :--- | :--- |
| `id` | `string` | - |
| `message` | `string` | - |
| `description` | `string` | - |
| `type` | `'default' | 'success' | 'error' | 'warning' | 'info'` | - |
| `duration` | `number` | - |
| `onClose` | `(id: string) => void` | - |
| `index` | `number` | - |
| `total` | `number` | - |

### 🚀 Ejemplo de Uso

```tsx
import { ToasterProvider } from '@byteflow-ui/sonner';
import '@byteflow-ui/sonner/index.css';

function App() {
  return (
    <ToasterProvider>
      <MainContent />
    </ToasterProvider>
  );
}
```

---

## <a id="spinner"></a> Spinner

**Paquete:** `@byteflow-ui/spinner`

### 📝 Descripción
Componente Spinner premium para el kit **Byteflow-UI**.

### ⚙️ Propiedades (Props)

| Prop | Tipo | Descripción |
| :--- | :--- | :--- |
| `size` | `'sm' | 'md' | 'lg' | 'xl'` | - |
| `variant` | `'primary' | 'secondary' | 'ghost'` | - |

### 🚀 Ejemplo de Uso

```tsx
import { Spinner } from '@byteflow-ui/spinner';
import '@byteflow-ui/spinner/index.css';

function LoadingState() {
  return <Spinner size="md" variant="primary" />;
}
```

---

## <a id="switch"></a> Switch

**Paquete:** `@byteflow-ui/switch`

### 📝 Descripción
Componente Switch (Toggle) premium para el kit **Byteflow-UI**.

### ⚙️ Propiedades (Props)

| Prop | Tipo | Descripción |
| :--- | :--- | :--- |
| `label` | `string` | - |
| `size` | `'sm' | 'md' | 'lg'` | - |

### 🚀 Ejemplo de Uso

```tsx
import { Switch } from '@byteflow-ui/switch';
import '@byteflow-ui/switch/index.css';

function App() {
  return (
    <Switch 
      label="Activar notificaciones"
      defaultChecked
    />
  );
}
```

---

## <a id="table"></a> Table

**Paquete:** `@byteflow-ui/table`

### 📝 Descripción
Componente Table premium para Byteflow UI. Proporciona una estructura semántica y estilizada para el despliegue de colecciones de datos, con soporte para scroll horizontal, estados de hover y temas dinámicos.

### 🚀 Ejemplo de Uso

```tsx
import { 
  Table, 
  TableHeader, 
  TableBody, 
  TableFooter, 
  TableRow, 
  TableHead, 
  TableCell, 
  TableCaption 
} from '@byteflow-ui/table';
import '@byteflow-ui/table/index.css';

const invoices = [
  { id: "INV001", status: "Pagado", method: "Tarjeta Cr", total: "$250.00" },
  { id: "INV002", status: "Pendiente", method: "PayPal", total: "$150.00" },
];

function InvoiceTable() {
  return (
    <Table>
      <TableCaption>Lista de facturas recientes.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Factura</TableHead>
          <TableHead>Estado</TableHead>
          <TableHead>Método</TableHead>
          <TableHead style={{ textAlign: 'right' }}>Total</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.id}>
            <TableCell>{invoice.id}</TableCell>
            <TableCell>{invoice.status}</TableCell>
            <TableCell>{invoice.method}</TableCell>
            <TableCell style={{ textAlign: 'right' }}>{invoice.total}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
```

---

## <a id="tabs"></a> Tabs

**Paquete:** `@byteflow-ui/tabs`

### 📝 Descripción
Componente Tabs modular para navegación por pestañas en el kit **Byteflow-UI**.

### ⚙️ Propiedades (Props)

| Prop | Tipo | Descripción |
| :--- | :--- | :--- |
| `activeValue` | `string` | - |
| `setActiveValue` | `(value: string) => void` | - |

### 🚀 Ejemplo de Uso

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@byteflow-ui/tabs';
import '@byteflow-ui/tabs/index.css';

function ConfigAccount() {
  return (
    <Tabs defaultValue="perfil">
      <TabsList>
        <TabsTrigger value="perfil">Perfil</TabsTrigger>
        <TabsTrigger value="password">Seguridad</TabsTrigger>
      </TabsList>
      <TabsContent value="perfil">Configuración del perfil...</TabsContent>
      <TabsContent value="password">Cambiar contraseña...</TabsContent>
    </Tabs>
  );
}
```

---

## <a id="textarea"></a> Textarea

**Paquete:** `@byteflow-ui/textarea`

### 📝 Descripción
Componente de entrada de texto multilínea premium para el kit **Byteflow-UI**.

### ⚙️ Propiedades (Props)

| Prop | Tipo | Descripción |
| :--- | :--- | :--- |
| `label` | `string` | Etiqueta de texto para el campo. |
| `error` | `string` | Mensaje de error a mostrar. Cambia el color del borde y activa aria-invalid. |
| `required` | `boolean` | Si el campo es obligatorio. Muestra un asterisco si hay label. |

### 🚀 Ejemplo de Uso

```tsx
import { Textarea } from '@byteflow-ui/textarea';
import '@byteflow-ui/textarea/index.css';

function App() {
  return (
    <Textarea 
      label="Descripción del proyecto"
      placeholder="Cuéntanos más sobre tu idea..."
      required
    />
  );
}
```

---

## <a id="toast"></a> Toast

**Paquete:** `@byteflow-ui/toast`

### 📝 Descripción
Sistema de notificaciones `Toast` premium para Byteflow-UI, diseñado para proporcionar retroalimentación no intrusiva al usuario.

### ⚙️ Propiedades (Props)

| Prop | Tipo | Descripción |
| :--- | :--- | :--- |
| `id` | `string` | - |
| `title` | `string` | - |
| `description` | `string` | - |
| `variant` | `'default' | 'success' | 'error' | 'warning' | 'info'` | - |
| `duration` | `number` | - |
| `onClose` | `(id: string) => void` | - |

### 🚀 Ejemplo de Uso

```tsx
import { ToastProvider } from '@byteflow-ui/toast';
import '@byteflow-ui/toast/index.css';

function App() {
  return (
    <ToastProvider>
      <MainContent />
    </ToastProvider>
  );
}
```

---

## <a id="toggle"></a> Toggle

**Paquete:** `@byteflow-ui/toggle`

### 📝 Descripción
El componente **Toggle** es un botón de dos estados que permite a los usuarios alternar una opción o preferencia de forma clara y semántica.

### ⚙️ Propiedades (Props)

| Prop | Tipo | Descripción |
| :--- | :--- | :--- |
| `pressed` | `boolean` | Estado del toggle (controlado). Indicar true para 'presionado'. |
| `defaultPressed` | `boolean` | Estado inicial del toggle cuando no es controlado. |
| `onPressedChange` | `(pressed: boolean) => void` | Callback disparado cuando el estado del toggle cambia. |
| `variant` | `'default' | 'outline' | 'ghost'` | Estética visual: default (relleno), outline (borde), ghost (transparente). |
| `size` | `'sm' | 'md' | 'lg'` | Tamaño del botón de toggle. |

### 🚀 Ejemplo de Uso

```tsx
import { Toggle } from '@byteflow-ui/toggle';

function App() {
  return (
    <Toggle 
      aria-label="Negrita"
      onPressedChange={(pressed) => console.log('Negrita:', pressed)}
    >
      B
    </Toggle>
  );
}
```

---

## <a id="toggle-group"></a> Toggle Group

**Paquete:** `@byteflow-ui/toggle-group`

### 📝 Descripción
El componente **Toggle Group** permite agrupar múltiples botones de toggle para realizar selecciones únicas o múltiples de forma orquestada.

### ⚙️ Propiedades (Props)

| Prop | Tipo | Descripción |
| :--- | :--- | :--- |
| `type` | `'single' | 'multiple'` | Tipo de selección: 'single' (radio-like) o 'multiple' (checkbox-like). |
| `value` | `string | string[]` | Valor o valores seleccionados actualmente (modo controlado). |
| `defaultValue` | `string | string[]` | Valor o valores seleccionados inicialmente (modo no controlado). |
| `onValueChange` | `(value: string | string[]) => void` | Callback disparado cuando cambia la selección. |
| `variant` | `'default' | 'outline' | 'ghost'` | Variante visual que heredarán todos los ítems del grupo. |
| `size` | `'sm' | 'md' | 'lg'` | Tamaño que heredarán todos los ítems del grupo. |

### 🚀 Ejemplo de Uso

```tsx
import { ToggleGroup, ToggleGroupItem } from '@byteflow-ui/toggle-group';

function App() {
  return (
    <ToggleGroup type="single" defaultValue="c" variant="outline">
      <ToggleGroupItem value="l">Izquierda</ToggleGroupItem>
      <ToggleGroupItem value="c">Centro</ToggleGroupItem>
      <ToggleGroupItem value="r">Derecha</ToggleGroupItem>
    </ToggleGroup>
  );
}
```

---

## <a id="tooltip"></a> Tooltip

**Paquete:** `@byteflow-ui/tooltip`

### 📝 Descripción
Componente Tooltip premium para el kit **Byteflow-UI**.

### ⚙️ Propiedades (Props)

| Prop | Tipo | Descripción |
| :--- | :--- | :--- |
| `content` | `React.ReactNode` | - |
| `children` | `React.ReactNode` | - |
| `position` | `'top' | 'bottom' | 'left' | 'right'` | - |
| `className` | `string` | - |
| `delay` | `number` | - |

### 🚀 Ejemplo de Uso

```tsx
import { Tooltip } from '@byteflow-ui/tooltip';
import { Button } from '@byteflow-ui/button';
import '@byteflow-ui/tooltip/index.css';

function App() {
  return (
    <Tooltip content="Información útil" position="top">
      <Button>Hover me</Button>
    </Tooltip>
  );
}
```

---

