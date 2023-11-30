import OnboardingMenu from "../OnboardingMenu"

type Props = {
    children: any
}


const Wrapper = ({children}:Props) => {

    return (
        <div className='w-full justify-center flex md:flex-row flex-col overflow-x-hidden'>
            <OnboardingMenu />
            <div className='w-full item-center text-center'>
                {children}
            </div>
        </div>
    )
}

export default Wrapper