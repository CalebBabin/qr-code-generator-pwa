import { GitHub } from '@mui/icons-material'
import { useState } from 'react'
import CodeCanvas from './components/CodeCanvas'

function App() {
	const [text, setText] = useState("https://qr.opl.io/")

	return (
		<>
			<h1 className='text-xl lg:text-4xl'>QR Code Generator</h1>
			<input
				className='border rounded-md px-2 py-1 max-w-xs'
				placeholder='https://qr.opl.io'
				type="text"
				value={text}
				onChange={e => setText(e.target.value)}
			/>

			<CodeCanvas className=' h-auto w-[256px] max-w-full' value={text.trim()} />

			<p>
				Check out the <a href='#' target="_blank">source code <GitHub className='w-2' /></a>
			</p>
		</>
	)
}

export default App
