# @byteflow-ui/card

Componente Card premium para el kit **Byteflow-UI**.

## Características

- 🧱 **Estructura Modular**: Compón tus tarjetas con `Header`, `Title`, `Description`, `Content` y `Footer`.
- 🌓 **Tematizable**: Soporte completo para Modo Claro y Oscuro.
- ✨ **Premium**: Sombras suaves, bordes redondeados y espaciado consistente.

## Instalación

```bash
npm install @byteflow-ui/card
```

## Uso

```tsx
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter 
} from '@byteflow-ui/card';
import '@byteflow-ui/card/dist/index.css';

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

## Personalización

```css
:root {
  --bf-card-radius: 1rem;
  --bf-card-shadow: none;
  --bf-card-border: #e0e0e0;
}
```
