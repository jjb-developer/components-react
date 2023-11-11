import { Navbar1, Navbar3 } from './components/Navegations.jsx'
import { Boton1, Boton2 } from './components/Botones.jsx'
import { Header1 } from './components/Headers.jsx'

function App() {
  const items = ['about','products','contact','more']
  const tuplas = [['bxs-dashboard','dashboard'],['bxs-user-circle','user'],['bxs-message','message'],['bx-objects-vertical-bottom','analytics'],['bxs-cart','cart'],['bxs-cog','settings']]

  return (
    <div className="flex w-full h-screen">
      <Navbar3 lista={tuplas} color='teal' hover='amber'/>
      <div className='w-full'>
        <Header1/>
        <div className='p-5 flex justify-around'>
          <Boton1 color='sky' title='login'/>
          <Boton1 color='orange' title='register'/>
        </div>
      </div>
    </div>
  )
}

export default App
