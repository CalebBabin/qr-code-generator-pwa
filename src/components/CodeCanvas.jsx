import QRCode from "qrcode";
import { useEffect, useRef, useState } from "react";


export default function CodeCanvas({ value, className, download }) {
	const canvasRef = useRef(null);

	useEffect(() => {
		if (canvasRef.current) {
			canvasRef.current.width = 256;
			canvasRef.current.height = 256;
		}
	}, [canvasRef]);

	const [lastDownload, setLastDownload] = useState(0);
	useEffect(() => {
		if (download !== 0 && download !== lastDownload && canvasRef?.current) {
			setLastDownload(download);
			const link = document.createElement('a');
			link.download = 'qr_code-' + value.replace(/ /g, '_').replace(/\./g, '-') + '.png';
			link.href = canvasRef.current.toDataURL();
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		}
	}, [download, lastDownload, canvasRef.current])

	useEffect(() => {
		if (!canvasRef?.current || !value) return;
		QRCode.toCanvas(canvasRef.current, value, {
			scale: 8,
		}, () => {
			canvasRef.current.removeAttribute('style');
		});
	}, [value, canvasRef.current]);

	return <canvas className={className} ref={canvasRef} />
}