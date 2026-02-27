# Money Input React RTL 💸

Un componente de entrada de moneda para React elegante, premium y ligero, con comportamiento de derecha a izquierda (RTL). Perfecto para aplicaciones financieras donde la precisión y la experiencia de usuario son primordiales.

## Características

-   **Entrada de derecha a izquierda**: Los números se desplazan desde los centavos hacia las unidades automáticamente.
-   **Máscara de moneda en tiempo real**: Formatea mientras escribes (ej: 1250 -> $12.50).
-   **Diseño Premium**: Estética moderna con soporte para modo deshabilitado y estados de enfoque.
-   **Ligero**: < 1kb minificado y comprimido.
-   **TypeScript**: Totalmente tipado para una mejor experiencia de desarrollo.

## Instalación

```bash
npm install money-input-react-rtl
```

## Uso

```tsx
import { MoneyInput } from 'money-input-react-rtl';
import 'money-input-react-rtl/dist/index.css';

function App() {
  const [value, setValue] = useState(0); // Valor en centavos

  return (
    <MoneyInput
      label="Monto de pago"
      value={value}
      onChange={(amount) => setValue(amount)}
      currencySymbol="$"
    />
  );
}
```

## Guía de Publicación (Aprende a publicar en NPM)

Si quieres publicar este componente tú mismo, sigue estos pasos:

1.  **Crea una cuenta en npmjs.com** (si no la tienes).
2.  **Inicia sesión en tu terminal**:
    ```bash
    npm login
    ```
3.  **Asegúrate de que el nombre en `package.json` esté disponible**.
4.  **Genera el build final**:
    ```bash
    npm run build
    ```
5.  **Publicar**:
    ```bash
    npm publish --access public
    ```

> [!TIP]
> Recuerda que cada vez que hagas un cambio, debes subir la versión en el `package.json` (ej: de `1.0.0` a `1.0.1`) antes de volver a publicar.

## Licencia

MIT
