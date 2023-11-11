import { useState } from 'react'

function Navbar1(props){

	let size = props.lista.length
	let ft = parseInt((1/size)*100)

	return (
		<nav className={`bg-${props.color}-800 w-full text-zinc-50 py-5`}>
			<ul className="flex items-center">
			{ props.lista.map((v,i)=> 
				<li key={i} className={`font-medium text-sm uppercase hover:text-${props.hover}-500 duration-200 flex justify-center w-[${ft}%]`}><a href='#'>{v}</a></li>
			)}
			</ul>
		</nav>
	)
}

function Navbar2(props){
	return (
		<nav className={`flex items-center justify-center text-center bg-${props.color}-800 w-56 h-full text-zinc-50`}>
			<ul className="flex flex-col gap-y-4">
			{ props.lista.map((v,i)=> 
				<li key={i} className={`font-medium text-sm uppercase hover:text-${props.hover}-500 duration-200`}><a href='#'>{v}</a></li>
			)}
			</ul>
		</nav>
	)
}

function Navbar3(props){
	const [menu, setMenu] = useState(true)
	return (
		<nav className={`relative flex items-center justify-center text-center bg-${props.color}-800 h-full text-zinc-50 duration-300 ${ menu ? 'w-56':'w-14'} shrink-0`}>
			<button onClick={ ()=> setMenu(!menu) } className='absolute right-4 top-3'><i className={`bx ${ menu ? 'bx-menu-alt-right':'bx-menu-alt-left'} text-3xl`}></i></button>
			<ul className="flex flex-col w-full px-4 text-sm">
			{ props.lista.map((v,i)=> 
				<li key={i} className="relative py-2 font-medium uppercase group">
					<a href='#' className={`flex items-center gap-x-4 hover:text-${props.hover}-500 duration-200 text-zinc-200`}>
						<i className={`bx ${v[0]} text-xl`}></i>
						<span className={`${ menu ? 'inline':'hidden'}`}>{v[1]}</span>
					</a>
					<span className={`absolute top-1/2 -translate-y-[50%] left-[75%] bg-${props.hover}-500 rounded py-1 px-2 text-xs opacity-0 group-hover:opacity-100 translate-x-24 group-hover:translate-x-10 duration-200 ${ menu ? 'hidden':'inline'}`}>{v[1]}</span>
				</li>
			)}
			</ul>
		</nav>
	)
}

export { Navbar1, Navbar2, Navbar3 }