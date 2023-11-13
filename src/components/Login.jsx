function Login1(props){
	let color = props.color ? props.color: 'violet'
	return (
		<div className='max-w-80 w-96 rounded-lg'>
			<div className='text-2xl tracking-tight font-bold flex flex-col gap-y-5 items-center'>
				<i className={`bx bxl-tailwind-css text-5xl text-${color}-500`}></i>
				<h2>Sing in to your account</h2>
			</div>
			<form className='text-sm mt-5'>
				<div className='w-[inherit]'>
					<input type='text' placeholder='Email address' className={`w-full h-10 py-1.5 px-3 outline-none rounded-t-lg border-2 border-b-transparent border-zinc-200 duration-200 focus:border-${color}-500`}/>
					<input type='password' placeholder='Password' className={`w-full h-10 py-1.5 px-3 outline-none rounded-b-lg border-2 border-t-transparent border-zinc-200 duration-200 focus:border-${color}-500`}/>
				</div>
				<div className='flex justify-between mt-5'>
					<div>
						<input type='checkbox'/>
						<label className='ml-2'>Remember me</label>
					</div>
					<a href='#' className={`text-${color}-500 font-medium`}>Forgot password</a>
				</div>
				<div className='mt-5'>
					<button className={`bg-${color}-500 rounded-lg text-zinc-50 font-bold py-2 w-full`}>Sign in</button>
				</div>
			</form>
			<p className='pt-10 text-sm text-center'>Not a member? <a href='#' className={`ml-2 text-${color}-500 font-medium`}>Start a 14-day free trial</a></p>
		</div>
	)
}


function Login2(props){
	let color = props.color ? props.color: 'violet'
	return (
		<div className='max-w-96 w-96 rounded-lg'>
			<div className='text-2xl tracking-tight font-bold flex flex-col gap-y-5 items-center'>
				<i className={`bx bxl-tailwind-css text-5xl text-${color}-500`}></i>
				<h2>Sing in to your account</h2>
			</div>
			<form className='text-sm mt-7'>
				<div className='w-[inherit] mt-5'>
					<div><label>Email address</label></div>
					<input type='text' className={`mt-2 w-full h-10 py-1.5 px-3 outline-none rounded-lg border-2 border-zinc-200 duration-200 focus:border-${color}-500`}/>
				</div>
				<div className='w-[inherit] mt-5'>
					<div className='flex justify-between items-center'>
						<label>Password</label>
						<a href='#' className={`text-${color}-500 font-medium`}>Forgot password</a>
					</div>
					<input type='password' className={`mt-2 w-full h-10 py-1.5 px-3 outline-none rounded-lg border-2 border-zinc-200 duration-200 focus:border-${color}-500`}/>
				</div>
				<div className='mt-5'>
					<button className={`bg-${color}-500 rounded-lg text-zinc-50 font-bold py-2 w-full`}>Sign in</button>
				</div>
			</form>
			<p className='pt-10 text-sm text-center'>Not a member? <a href='#' className={`ml-2 text-${color}-500 font-medium`}>Start a 14-day free trial</a></p>
		</div>
	)
}


export { Login1, Login2  }