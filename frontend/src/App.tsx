import { Button } from 'primereact/button';
import './index.css'
import { PrimeReactProvider } from 'primereact/api';

function App() {
  return (
    <PrimeReactProvider>
      <Button label="Click" />
    </PrimeReactProvider>
  )
}

export default App
