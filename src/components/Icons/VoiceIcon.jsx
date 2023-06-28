import React from 'react';

export default function VoiceIcon({
	color,
	onClickFunction,
	width = '24px',
	height = '24px',
}) {
	return (
		<svg
			width={width}
			height={height}
			strokeWidth='1.5'
			viewBox='0 0 24 24'
			fill={color}
			onClick={onClickFunction}
			xmlns='http://www.w3.org/2000/svg'
			color='#000000'
		>
			<path
				d='M12 6v12M9 9v6M18 11v2M6 11v2M15 7v10M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z'
				stroke='#000000'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			></path>
		</svg>
	);
}
