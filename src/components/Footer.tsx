import Link from 'next/link'
import Section from '@/components/Section'
import Card from '@/components/Card'
import Noise from '@/components/Noise'
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai'

function Footer() {
	const year : number = new Date().getFullYear()

	return (
		<Section>
			<Card className='
				relative
				flex flex-col gap-4
				justify-center items-center p-12
				bg-whiteText
				text-gray 
				text-[14px]
				dark:text-whiteText
				dark:bg-transparent
			'>
				<Noise className='opacity-50 dark:opacity-10'/>
				<div className='flex gap-1 text-[48px]'>
					<Link 
						href='https://github.com/ivshiryaev'
						className='hover:scale-105'
						target='_blank'
					>
						<AiOutlineGithub/>
					</Link>
					<Link 
						href='https://www.linkedin.com/in/theshirya/'
						className='hover:scale-105'
						target='_blank'
					>
						<AiFillLinkedin/>
					</Link>
				</div>
				<div className='
					leading-[16px]
					flex 
					flex-col gap-1 
					items-center justify-center 
					dark:bg-transparent
					dark:text-transparent
					dark:bg-clip-text
					dark:bg-gradient-to-r from-purple to-cyan-500
				'>
					<p>©{year}. Ivan Shyriaiev.</p>
					<p>All Rights Reserved</p>
				</div>
			</Card>
		</Section>
	)
}

export default Footer