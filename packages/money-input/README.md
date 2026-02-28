# 💰 Money Input React RTL

**El componente de entrada de moneda más elegante, ligero e intuitivo para React.**

[![NPM Version](https://img.shields.io/npm/v/@byteflow-ui/money-input.svg)](https://www.npmjs.com/package/@byteflow-ui/money-input)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Diseñado específicamente para ofrecer una experiencia de usuario financiera premium mediante una máscara de entrada de **derecha a izquierda (RTL)**.

---

## ✨ ¿Por qué elegir Byteflow UI Money Input?

1.  **DX Superior**: API intuitiva, totalmente tipado y sin dependencias pesadas.
2.  **Rendimiento**: < 1.5kb minificado. Carga instantánea.
3.  **Ultra Personalizable**: Control total mediante variables CSS y props de estilo.
4.  **Localización**: Soporte nativo para diferentes configuraciones regionales (`locale`).

## 🚀 Instalación rápida

```bash
npm install @byteflow-ui/money-input
# o
yarn add @byteflow-ui/money-input
```

## 🛠️ Uso Básico

```tsx
import { MoneyInput } from '@byteflow-ui/money-input';
import '@byteflow-ui/money-input/dist/index.css';

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

## 🎨 Personalización Avanzada (Experience First)

### 1. Variables CSS (Recomendado)
Puedes cambiar la estética global de los componentes simplemente definiendo estas variables en tu CSS:

```css
:root {
  --bf-money-input-primary-color: #ff5722; /* Color de enfoque */
  --bf-money-input-bg-color: #f9f9f9;      /* Fondo */
  --bf-money-input-border-radius: 4px;     /* Bordes rectos */
}
```

### 2. Integración con Tailwind CSS
El componente acepta `className` para el contenedor y pronto soportará clases directas para el input.

```tsx
<MoneyInput
  className="my-8 max-w-sm font-mono"
  label="Custom Tailwind Style"
/>
```

## 📋 Propiedades (API Reference)

| Prop | Tipo | Defecto | Descripción |
| :--- | :--- | :--- | :--- |
| `value` | `number` | `0` | Valor en centavos (ej: 100 = $1.00) |
| `currencySymbol` | `string` | `$` | Símbolo de la moneda |
| `locale` | `string` | `en-US` | Configuración regional para formatos numéricos |
| `onChange` | `function` | `-` | Recibe el nuevo valor en centavos |
| `label` | `string` | `-` | Etiqueta superior opcional |
| `disabled` | `boolean` | `false` | Deshabilitar interacción |
| `containerStyle` | `CSSProperties` | `-` | Estilos inline para el contenedor |
| `inputStyle` | `CSSProperties` | `-` | Estilos inline para el input |

---

## 🏗️ Cómo contribuir
Si quieres extender este componente para tu uso personal o público:

1. Clona el repositorio.
2. `npm install`
3. `npm run dev` para ver los cambios en tiempo real en la carpeta `example`.
4. `npm run build` para generar la distribución final.

## 📄 Licencia
MIT © Realizado con ❤️ para la comunidad de React.
