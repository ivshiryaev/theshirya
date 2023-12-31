"use client"

import gsap from 'gsap'

import Text from './Text'
import Line from './Line'

import { useRef, useEffect } from 'react'

function ScrollSvg() {
	const textRef = useRef<HTMLElement | null>(null)
	const lineRef = useRef<HTMLElement | null>(null)

	useEffect(() => {
		const textElement = textRef.current
		const lineElement = lineRef.current

		if( !textElement || !lineElement ) return (()=>{
			console.log('can\'t find text for line element refs')
		})

		const gsapContext = gsap.context(()=>{
			gsap.fromTo(lineElement ,{
				y:-4,
				duration: 0.5,
				repeat: -1,
				ease:'power2.in',
				yoyo: true,
			},{
				y:4,
				duration: 0.5,
				repeat: -1,
				ease:'power2.in',
				yoyo: true,
			})
		})

		function rotateOnScroll(){
			if(textElement){
				textElement.style.transform = 
					`rotate(${window.scrollY / 2}deg)`
			}
		}

		window.addEventListener('scroll', rotateOnScroll)

		return () => {
			window.removeEventListener('scroll', rotateOnScroll)
			gsapContext.revert()
		};
	}, [])

	return (
		<div 
			className='
				w-20 h-20
				relative
				flex justify-center items-center
			'
		>
			<Text innerRef={textRef} className='absolute object-fit'/>
			<Line innerRef={lineRef} />
		</div>
	)
}

export default ScrollSvg