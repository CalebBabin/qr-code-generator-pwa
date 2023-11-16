import { useEffect, useState } from "react";

export default function InputBuffer(props) {
	const [buffering, setBuffering] = useState(false);
	const [lastValue, setLastValue] = useState();

	useEffect(() => {
		let timeout;
		if (props.value !== lastValue) {
			setLastValue(props.value);
			setBuffering(true);
			timeout = window.setTimeout(() => {
				setBuffering(false);
				props.onComplete(props.value);
			}, 500);
		}

		return () => {
			window.clearTimeout(timeout);
		}
	}, [props.value]);

	return <div style={{
		opacity: buffering ? 0.5 : 1,
		filter: buffering ? 'blur(5px)' : '',
	}}
		className={props.className}
		children={props.children}
	/>
}