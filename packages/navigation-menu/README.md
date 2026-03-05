# @byteflow-ui/navigation-menu

Componente Navigation Menu premium para Byteflow UI. Ideal para la navegación principal de sitios web corporativos, documentaciones o aplicaciones con estructuras jerárquicas complejas.

## Instalación

```bash
npm install @byteflow-ui/navigation-menu
```

## Uso

```tsx
import { 
  NavigationMenu, 
  NavigationMenuItem, 
  NavigationMenuTrigger, 
  NavigationMenuContent, 
  NavigationMenuLink 
} from '@byteflow-ui/navigation-menu';
import '@byteflow-ui/navigation-menu/dist/index.css';

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

## Propiedades

El componente utiliza composición para mayor flexibilidad. Soporta estados de hover automáticos para desplegar el contenido.
    
| Componente | Descripción |
| --- | --- |
| `NavigationMenu` | Contenedor principal del menú. |
| `NavigationMenuItem` | Ítem individual (li) dentro de la lista. |
| `NavigationMenuTrigger` | Botón que activa la visibilidad del contenido al hacer hover. |
| `NavigationMenuContent` | Contenedor desplegable para submenús o contenido complejo. |
| `NavigationMenuLink` | Enlace estándar estilizado para el menú. |
