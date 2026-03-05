# @byteflow-ui/sidebar

Componente Sidebar premium para aplicaciones dashboard en Byteflow UI. Proporciona una estructura robusta para la navegación principal, con soporte para colapso, agrupamiento de ítems y estados activos.

## Instalación

```bash
npm install @byteflow-ui/sidebar
```

## Uso

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
import '@byteflow-ui/sidebar/dist/index.css';

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

## Propiedades

### Sidebar
| Prop | Tipo | Default | Descripción |
| --- | --- | --- | --- |
| `defaultCollapsed` | `boolean` | `false` | Estado inicial del colapso. |
| `collapsed` | `boolean` | - | Estado controlado del colapso. |
| `onCollapseChange` | `(collapsed: boolean) => void` | - | Callback cuando cambia el estado. |
| `width` | `string` | `'280px'` | Ancho cuando está expandido. |
| `collapsedWidth` | `string` | `'80px'` | Ancho cuando está colapsado. |
