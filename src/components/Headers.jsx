import reactLogo from '../assets/react.svg'

function Header1(props){
	return (
		<div className="flex justify-between items-center grow-1 w-[inherit] h-20 px-5 border-b-2 bg-sky-800">
			<h1 className="whitespace-pre text-2xl font-medium tracking-tighter text-zinc-50">Componentes React</h1>
			<a href="https://reactjs.org" target="_blank">
				<img src={reactLogo} className="w-8" alt="React logo" />
			</a>
		</div>
	)
}

export { Header1 }