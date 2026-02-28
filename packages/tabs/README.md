# @byteflow-ui/tabs

Componente Tabs modular para navegación por pestañas en el kit **Byteflow-UI**.

## Características

- 🧩 **Modular**: Compón la navegación con `Tabs`, `TabsList`, `TabsTrigger` y `TabsContent`.
- 🌓 **Tematizable**: Soporte completo para Modo Claro y Oscuro.
- ♿ **Accesible**: Implementa roles ARIA y gestión de foco básica.

## Instalación

```bash
npm install @byteflow-ui/tabs
```

## Uso

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@byteflow-ui/tabs';
import '@byteflow-ui/tabs/dist/index.css';

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

## Personalización

```css
:root {
  --bf-tabs-active-bg: #2563eb;
  --bf-tabs-active-text: #ffffff;
  --bf-tabs-radius: 0px;
}
```
