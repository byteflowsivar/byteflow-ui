import { useState } from 'react'
import { MoneyInput } from '../../src/MoneyInput.tsx'
import './App.css'

function App() {
  const [amount, setAmount] = useState(1000) // $10.00 inicial

  return (
    <div className="demo-container">
      <div className="card">
        <h1>MoneyInput Demo</h1>
        <p className="subtitle">Prueba el comportamiento de derecha a izquierda</p>

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

        <div className="input-group">
          <MoneyInput
            label="Deshabilitado"
            disabled={true}
            value={5000}
          />
        </div>
      </div>
    </div>
  )
}

export default App
