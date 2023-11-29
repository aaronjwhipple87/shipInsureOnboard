import { Icon24Check } from "../icons/Icon24Check";
import { StateInactive } from "../icons/StateInactive";


export default function OnboardingItems({pathname}) {
	return (
		<div className="hidden md:flex flex-col ml-10 my-6 text-body justify-between h-full">
			<div className="flex flex-col gap-6 ">
				<div className="flex flex-row gap-4 items-center">
					{(pathname === '/orders' || pathname === '/billing') ?  <Icon24Check className="icon-instance-node" />: <StateInactive className="icon-radio" color="#06001E" opacity="0.5" />}
					<p className={`text-base ${(pathname === '/' || pathname === 'orders')  && 'font-bold text-purple'}`}>Personal Info</p>
				</div>
				<div className="flex flex-row gap-4 items-center">
					{(pathname === '/billing') ?  <Icon24Check className="icon-instance-node" />: <StateInactive className="icon-radio" color="#06001E" opacity="0.5" />}
					<div className="flex flex-row gap-2 items-center">
						<p className={`text-base ${(pathname === '/orders')  && 'font-bold text-purple'}`}>Monthly Orders</p>
						<p className="text-xs font-bold text-purple">Required</p>
					</div>
				</div>
				<div className="flex flex-row gap-4 items-center">
					<StateInactive className="icon-radio" color="#06001E" opacity="0.5" />
					<div className="flex flex-row gap-2 items-center"> 
						<p className={`text-base ${(pathname === '/billing')  && 'font-bold text-purple'}`}>Billing</p>
						<p className="text-xs font-bold text-purple">Required</p>
					</div>
				</div>
			</div>
			<p className="text-base font-bold">Need help?</p>
		</div>
	)
}
