import { Download, GitHub } from '@mui/icons-material'
import { useState } from 'react'
import CodeCanvas from './components/CodeCanvas'
import InputBuffer from './components/Buffer.jsx'

const errorLevels = [
	'low',
	'medium',
	'quartile',
	'high',
]

function App() {
	const [text, setText] = useState("https://qr.opl.io/");
	const [download, setDownload] = useState(0);

	const [bufferedText, setBufferedText] = useState("https://qr.opl.io/");


	//additional QR code options
	const [errorCorrectionLevel, setErrorCorrectionLevel] = useState(0);
	const [margin, setMargin] = useState(4);
	const [lightColor, setLightColor] = useState('#ffffff');
	const [darkColor, setDarkColor] = useState('#000000');

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
				<CodeCanvas
					options={{
						errorCorrectionLevel: errorLevels[errorCorrectionLevel],
						color: {light: lightColor, dark: darkColor},
						margin,
					}}
					className='h-auto w-[256px] max-w-full'
					value={bufferedText.trim()}
					download={download} />
			</InputBuffer>

			<button
				onClick={() => { setDownload(Date.now()) }}
				className='dark:border-white light:border-black border rounded-md px-1 py-.5 text-xs'>
				download <Download style={{ width: '0.75em' }} />
			</button>

			<div className='w-full border-t pt-2 max-w-sm'>
				<div className='lg:flex items-center justify-center gap-1 w-full'>
					<div>
						Colors
					</div>
					<input type="color" value={darkColor} onChange={e => setDarkColor(e.target.value)} />
					<input type="color" value={lightColor} onChange={e => setLightColor(e.target.value)} />
				</div>
			</div>

			<div className='w-full border-t pt-2 max-w-sm'>
				<div className='lg:flex items-center justify-center gap-1 w-full'>
					<div>
						Padding
					</div>
					<input type="range" min={0} max={10} step={1} value={margin} onChange={e => setMargin(e.target.value)} />
				</div>
			</div>

			<div className='w-full border-t pt-2 max-w-sm'>
				<div className='lg:flex items-center justify-center gap-1 w-full'>
					<div>
						Error correction level:
					</div>
					<input className='max-w-1/2' type="range" min={0} max={errorLevels.length - 1} step={1} value={errorCorrectionLevel} onChange={e => setErrorCorrectionLevel(e.target.value)} />
				</div>
				<small className='text-xs italic'>Makes QR codes easier to read when damaged or obscured</small>
			</div>

			<div className='w-full border-t border-t pt-2 max-w-sm'>
				Check out the <a href='https://github.com/CalebBabin/qr-code-generator-pwa' target="_blank">source code <GitHub className='w-2' /></a>
			</div>
		</>
	)
}

export default App
