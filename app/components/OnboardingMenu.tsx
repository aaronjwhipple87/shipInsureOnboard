'use client'
import { usePathname } from 'next/navigation'
import OnboardingHeader from './OnboardingHeader'
import OnboardingItems from './OnboardingItems'

export default function OnboardingMenu() {
	const pathname = usePathname()
	return (
		<nav className='md:h-screen md:w-[350px] w-full md:shadow-2xl shadow-none flex flex-col' >
			<OnboardingHeader pathname={pathname}/>
			<OnboardingItems pathname={pathname}/>
		</nav>
	)
}
