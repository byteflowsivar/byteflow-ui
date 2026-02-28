import { useState } from 'react'
import { MoneyInput } from '@byteflow-ui/money-input'
import '@byteflow-ui/money-input/dist/index.css'
import './App.css'
import './theme.css' // Importación del tema personalizado para demostración

function App() {
  const [amount, setAmount] = useState(1000) // $10.00 inicial

  return (
    <div className="demo-container">
      <header className="demo-header">
        <h1>Byteflow-UI</h1>
        <p className="subtitle">Explorador de Componentes & Documentación Viva</p>
      </header>

      <main className="demo-grid">
        {/* Sección: Uso Estándar */}
        <section className="card">
          <h2>Uso Estándar</h2>
          <p>Componente `MoneyInput` con estilos base y configuración regional.</p>

          <div className="input-group">
            <MoneyInput
              label="Monto de la Transacción"
              value={amount}
              onChange={(val: number) => setAmount(val)}
              currencySymbol="$"
            />
          </div>

          <div className="display-result">
            <p>Valor en centavos: <code>{amount}</code></p>
            <p>Valor formateado: <strong>${(amount / 100).toLocaleString('en-US', { minimumFractionDigits: 2 })}</strong></p>
          </div>
        </section>

        {/* Sección: Guía de Estilización (Documentación) */}
        <section className="card highlight">
          <h2>Personalización (Theming)</h2>
          <p>Este kit usa variables CSS prefijadas con <code>bf-</code> para facilitar la integración de marca.</p>

          <div className="theme-demo">
            <div className="code-block">
              <pre>
                {`/* En tu archivo index.css */
:root {
  --bf-money-input-primary-color: #2563eb;
  --bf-money-input-border-radius: 12px;
}`}
              </pre>
            </div>
          </div>

          <div className="input-group">
            <MoneyInput
              label="Estado Deshabilitado"
              disabled={true}
              value={5000}
            />
          </div>
        </section>
      </main>

      <footer className="demo-footer">
        <p>Consulta el archivo <code>src/theme.css</code> para ver la plantilla de personalización completa.</p>
      </footer>
    </div>
  )
}

export default App
