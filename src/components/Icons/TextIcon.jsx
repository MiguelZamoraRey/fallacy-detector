import React from 'react';

export default function TextIcon({
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
			xmlns='http://www.w3.org/2000/svg'
			color='#000000'
			fill={color}
			onClick={onClickFunction}
		>
			<path
				d='M4 7h16M4 17h5M4 12h13.5a2.5 2.5 0 012.5 2.5v0a2.5 2.5 0 01-2.5 2.5h-5'
				stroke='#000000'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			></path>
			<path
				d='M15 15.5L12.5 17l2.5 1.5v-3z'
				stroke='#000000'
				strokeWidth='1.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			></path>
		</svg>
	);
}
