import { Download, GitHub } from '@mui/icons-material'
import { useState } from 'react'
import CodeCanvas from './components/CodeCanvas'
import InputBuffer from './components/Buffer.jsx'

function App() {
	const [text, setText] = useState("https://qr.opl.io/");
	const [download, setDownload] = useState(0);

	const [bufferedText, setBufferedText] = useState("https://qr.opl.io/");

	return (
		<>
			<h1 className='text-xl lg:text-4xl'>QR Code Generator</h1>
			<input
				className='border rounded-md px-2 py-1 max-w-[18rem] w-11/12'
				placeholder='https://qr.opl.io'
				type="text"
				value={text}
				onChange={e => setText(e.target.value)}
			/>

			<InputBuffer value={text.trim()} onComplete={setBufferedText}>
				<CodeCanvas className='h-auto w-[256px] max-w-full' value={bufferedText.trim()} download={download} />
			</InputBuffer>

			<button
				onClick={() => { setDownload(Date.now()) }}
				className='dark:border-white light:border-black border rounded-md px-1 py-.5 text-xs'>
				download <Download style={{ width: '0.75em' }} />
			</button>

			<p>
				Check out the <a href='https://github.com/CalebBabin/qr-code-generator-pwa' target="_blank">source code <GitHub className='w-2' /></a>
			</p>
		</>
	)
}

export default App
