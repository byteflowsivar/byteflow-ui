# @byteflow-ui/breadcrumb

Componente Breadcrumb para navegación jerárquica en el kit **Byteflow-UI**.

## Características

- 🧩 **Modular**: Compón rutas complejas con `Breadcrumb`, `List`, `Item`, `Link`, `Separator` y `Page`.
- 🌓 **Tematizable**: Soporte completo para Modo Claro y Oscuro.
- ♿ **Accesible**: Sigue las guías WAI-ARIA para navegación por migas de pan.

## Instalación

```bash
npm install @byteflow-ui/breadcrumb
```

## Uso

```tsx
import { 
  Breadcrumb, 
  BreadcrumbList, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbSeparator, 
  BreadcrumbPage 
} from '@byteflow-ui/breadcrumb';
import '@byteflow-ui/breadcrumb/dist/index.css';

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

## Personalización

```css
:root {
  --bf-breadcrumb-gap: 1rem;
  --bf-breadcrumb-link-color: #666;
}
```
