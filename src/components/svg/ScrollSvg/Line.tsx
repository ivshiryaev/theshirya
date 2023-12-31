"use client"

import { RefObject } from 'react'

function Line({
	className,
	innerRef,
}: {
	className?: string,
	innerRef: RefObject<any>,
}) {
	return (
		<svg ref={innerRef} width="21" height="33" viewBox="0 0 21 33" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${className && className}`}>
			<path d="M11.4843 32.4843C10.9407 33.0279 10.0593 33.0279 9.51571 32.4843L0.657074 23.6257C0.113464 23.082 0.113464 22.2007 0.657073 21.6571C1.20068 21.1135 2.08205 21.1135 2.62566 21.6571L10.5 29.5314L18.3743 21.6571C18.918 21.1135 19.7993 21.1135 20.3429 21.6571C20.8865 22.2007 20.8865 23.082 20.3429 23.6257L11.4843 32.4843ZM9.108 1.5C9.108 0.731219 9.73122 0.107999 10.5 0.107999C11.2688 0.107999 11.892 0.731218 11.892 1.5L9.108 1.5ZM9.108 31.5L9.108 1.5L11.892 1.5L11.892 31.5L9.108 31.5Z" fill="#717171"/>
		</svg>
	)
}

export default Line