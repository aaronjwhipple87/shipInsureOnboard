import Image from 'next/image'

export default function OnboardingHeader({pathname}) {

	return (
		<div className='w-full md:h-[139px] h-[100px] text-white flex flex-col justify-end items-start relative object-contain'>
			
			<Image src='/images/Gradient.png' fill={true}  alt='' className=""/>
		
			<div className="flex flex-col gap-1 ml-10 mb-4 z-10">
				<h6 className='text-xl font-header font-bold '>Onboarding</h6>
				<p className="font-body">{pathname === '/' ? '0/3' : pathname === 'orders' ? '1/3' : pathname === 'billing' && '2/3'} steps completed!</p>
			</div>
		</div>
	)
}
