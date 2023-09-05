"use client"

import { motion } from 'framer-motion'

import { plumpfullFont } from '@/app/fonts'

function Section({children, className, heading}) {
	return (
		<motion.section 
			className={`
				px-4
				flex flex-col gap-4
				justify-center items-center
				md:gap-8
				${className && className}
			`}
			initial={{
				opacity:0
			}}
			whileInView={{
				opacity:1
			}}
			exit={{
				opacity:0
			}}
		>
			{heading && 
				<p className={`text-3xl ${plumpfullFont.className}`}>{heading}</p>
			}
			{children}
		</motion.section>
	)
}

export default Section