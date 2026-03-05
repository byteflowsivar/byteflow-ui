# @byteflow-ui/menubar

Componente Menubar premium para Byteflow UI. Imita el comportamiento de los menús de aplicaciones de escritorio (OS), permitiendo agrupar múltiples menús desplegables en una barra horizontal con soporte para navegación fluida.

## Instalación

```bash
npm install @byteflow-ui/menubar
```

## Uso

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
import '@byteflow-ui/menubar/dist/index.css';

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

## Propiedades

El componente utiliza un sistema de `value` para identificar cuál menú está activo de manera coordinada.
    
| Componente | Prop | Descripción |
| --- | --- | --- |
| `Menubar` | `children` | Contenedor de `MenubarMenu`. |
| `MenubarMenu` | `value` | Identificador único para coordinar con la barra. |
| `MenubarTrigger` | `children` | El botón que activa el menú. |
| `MenubarContent` | `children` | El contenido desplegable. |
| `MenubarItem` | `shortcut` | Texto opcional para mostrar atajos de teclado. |
| `MenubarItem` | `disabled` | Deshabilita la opción. |
