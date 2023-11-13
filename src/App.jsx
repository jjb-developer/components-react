import { Navbar1, Navbar3 } from './components/Navegations.jsx'
import { Boton3 } from './components/Botones.jsx'
//import { Header1 } from './components/Headers.jsx'
import { tuplas } from './variables.jsx'
import { Login1 } from './components/Login.jsx'

function App() {

  return (
    <div className="flex w-full h-screen">
      <div className='w-full h-full flex flex-col items-center justify-center'>
        <Login1 color='green'/>
      </div>
    </div>
  )
}

export default App
