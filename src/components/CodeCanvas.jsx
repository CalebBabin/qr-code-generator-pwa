import QRCode from "qrcode";
import { useEffect, useRef } from "react";


export default function CodeCanvas({ value, className }) {
	const canvasRef = useRef();

	useEffect(()=>{
		if (canvasRef.current) {
			canvasRef.current.width = 256;
			canvasRef.current.height = 256;
		}
	}, [canvasRef]);

	useEffect(() => {
		if (!canvasRef?.current || !value) return;
		QRCode.toCanvas(canvasRef.current, value, ()=>{
			canvasRef.current.removeAttribute('style');
		});
	}, [value, canvasRef]);

	return <canvas className={className} ref={canvasRef} />
}