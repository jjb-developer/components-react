import reactLogo from './assets/react.svg'

function App() {

  return (
    <div className="flex flex-col gap-y-4 w-full h-screen items-center justify-center">
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="w-24" alt="React logo" />
        </a>
      </div>
      <h1 className="text-4xl font-medium tracking-tighter text-zinc-700">Project React</h1>
    </div>
  )
}

export default App
