# @byteflow-ui/hover-card

Componente de hover card premium para el kit Byteflow-UI, diseñado para mostrar contenido enriquecido cuando el usuario pasa el cursor sobre un elemento disparador, con un retraso intencional.

## Características

- ⏱️ **Retrasos Configurables:** Controla el tiempo de apertura y cierre (`openDelay`, `closeDelay`).
- ✨ **Estética Premium:** Efectos de desenfoque de fondo (glassmorphism), sombras profundas y animaciones suaves.
- 📦 **Composición Flexible:** Utiliza un sistema de `Trigger` y `Content`.
- 🚪 **Portal:** Renderizado mediante `React Portal` para evitar problemas de capas.

## Instalación

```bash
npm install @byteflow-ui/hover-card
```

## Uso

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

## Propiedades (HoverCardProps)

| Propiedad | Tipo | Por defecto | Descripción |
| :--- | :--- | :--- | :--- |
| `openDelay` | `number` | `700` | Tiempo en ms antes de mostrar el contenido al entrar. |
| `closeDelay` | `number` | `300` | Tiempo en ms antes de ocultar el contenido al salir. |

## Propiedades (HoverCardContentProps)

| Propiedad | Tipo | Por defecto | Descripción |
| :--- | :--- | :--- | :--- |
| `side` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'bottom'` | Lado preferido para posicionar el contenido. |
| `align` | `'start' \| 'center' \| 'end'` | `'center'` | Alineación del contenido respecto al disparador. |
| `sideOffset` | `number` | `8` | Espacio en píxeles entre el disparador y el contenido. |
