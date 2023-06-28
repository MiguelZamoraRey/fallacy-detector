import React, { useState } from 'react';

export default function DownloadIcon({
	color,
	onClickFunction,
	tooltip = 'Download',
}) {
	const [style, setStyle] = useState({ display: 'none' });

	const handleSeeTooltip = (visible) => {
		if (visible) {
			setStyle({
				display: 'block',
				position: 'absolute',
				zIndex: '1',
				background: 'black',
				padding: '0.2em',
			});
		} else {
			setStyle({ display: 'none' });
		}
	};
	return (
		<>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 512 512'
				fill={color}
				onMouseEnter={() => handleSeeTooltip(true)}
				onMouseLeave={() => handleSeeTooltip(false)}
			>
				<path d='M256 422.4L17.6 192 94.4 192 256 375.7 417.6 192 494.4 192 256 422.4z' />
			</svg>
			<div style={{ position: 'relative', bottom: '-1.5em', right: '3em' }}>
				<span style={style}>{tooltip}</span>
			</div>
		</>
	);
}
