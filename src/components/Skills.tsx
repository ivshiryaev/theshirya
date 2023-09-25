import Section from '@/components/Section'
import Card from '@/components/Card'
import Noise from '@/components/Noise'

function Skills() {
	return (
		<Section>
			<Card className='
				h-[500px]
				relative
				bg-raspberry
				flex flex-col gap-[36px]
				justify-center
				p-12
			'>
				<Noise className='opacity-20'/>
				<h2 className='
					uppercase
					text-[24px] sm:text-[36px]
					leading-[24px] sm:leading-[36px]
				'>
					//Skills
				</h2>
				<p className='
					text-[16px] sm:text-[20px] 
					leading-[16px] sm:leading-[20px]
				'>
					Front end development<br/>
					Back end development<br/>
					Pixel Perfect Design<br/>
					Clean Code<br/>
				</p>
			</Card>
		</Section>
	)
}

export default Skills