/* eslint-disable react/no-children-prop */
'use client'
import { Input, InputGroup, Select, InputRightElement, HStack } from '@chakra-ui/react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Visa } from '../icons/Visa'
import { Mastercard } from '../icons/Mastercard'
import { Dinersclub } from '../icons/Dinersclub'
import { Americanexpress } from '../icons/AmericanExpress'
import { Icon16CaratDown1 } from '../icons/Icon16CaratDown1'
import Image from 'next/image'

export default function BillingForm() {
	const [cardNumber, setCardNumber] = useState<number>()
	const [expiration, setExpiration] = useState<string>('')
	const [cvc, setCvc] = useState<string>('')
	const [country, setCountry] = useState<string>('')
	const [zip, setZip] = useState<number>()
	const router = useRouter()

	async function handleSubmit(e:any){
		e.preventDefault()
	}

	async function processPlaid(){

	}

	return (
		<form className="text-body flex flex-col gap-6 mb-5 mt-10 md:w-2/3 w-full mx-auto px-4 md:px-0 text-left" onSubmit={(e) => handleSubmit(e)}>
			{/* CARD NUMBER */}
			<div className="flex flex-col gap-2">
				<label className="ml-2" htmlFor='cardNumber'>Card Number<span className="text-purple">*</span></label>
				<InputGroup className="font-bold relative">
					{!cardNumber &&
					<>
						<InputRightElement
							children={
								<HStack spacing={3} mr={24}>
									<Visa className="visa-instance" />
									<Americanexpress className="american-express" />
									<Mastercard className="master-card" />
									<Dinersclub className="diners-club" />
								</HStack>
							}
						/>
					</>
					}
					<Input placeholder="1111 2222 3333 4444" name='cardNumber' variant={cardNumber ? 'filled' : 'outline'} type='number' onChange={(e:any) => setCardNumber(e.target.value)} isRequired/>
				</InputGroup>
			</div>
			<div className='flex flex-row gap-4 w-full'>
				{/* EXPIRATION */}
				<div className="flex flex-col gap-2 w-full">
					<label className="ml-2" htmlFor='expiration'>Expiration<span className="text-purple">*</span></label>
					<InputGroup className="font-bold">
						<Input placeholder="MM/YY" name='expiration' variant={expiration ? 'filled' : 'outline'} type='text' onChange={(e) => setExpiration(e.target.value)} isRequired/>
					</InputGroup>
				</div>
				{/* CVC */}
				<div className="flex flex-col gap-2 w-full">
					<label className="ml-2" htmlFor='cvc'>CVC<span className="text-purple">*</span></label>
					<InputGroup className="font-bold">
						<Input placeholder="123" name='cvc' variant={cvc ? 'filled' : 'outline'} type='text' onChange={(e) => setCvc(e.target.value)} isRequired/>
					</InputGroup>
				</div>
			</div>
			<div className='flex flex-row gap-4 w-full'>
				{/* COUNTRY */}
				<div className="flex flex-col gap-2 w-full">
					<label className="ml-2" htmlFor='country'>Country<span className="text-purple">*</span></label>
				
						<Select icon={<Icon16CaratDown1 className="test"/>} className='font-bold' placeholder='Select Option' variant={country ? 'filled' : 'outline'} onChange={(e) => setCountry(e.target.value)}
  							{...(country === "" && {color: "#a0a6b2"})}>
							<option value='usa'>USA</option>
							<option value='canada'>Canada</option>
							<option value='mexico'>Mexico</option>
						</Select>
			
					
				</div>
				{/* ZIP */}
				<div className="flex flex-col gap-2 w-full">
					<label className="ml-2" htmlFor='zip'>Zip Code<span className="text-purple">*</span></label>
					<InputGroup className="font-bold">
						<Input placeholder="123456" name='zip' variant={zip ? 'filled' : 'outline'} type='number' onChange={(e:any) => setZip(e.target.value)} isRequired/>
					</InputGroup>
				</div>
			</div>
			
			<div className="flex flex-col gap-6 justify-center items-center mb-10">
				<button disabled={!(cardNumber && expiration && cvc && country && zip)} className={`transition-all disabled:bg-ltPurple transform-gpu active:scale-95 flex flex-row items-center justify-center text-white focus-visible:ring text-lg font-bold text-center outline-none duration-100 px-8 py-1.5 bg-purple rounded-3xl tracking-widest mt-5 h-14 w-full`}>Next</button>

				<p className="text-lg">Or</p> 

				<button onClick={processPlaid} type='button' className={`transition-all transform-gpu active:scale-95 flex flex-row items-center justify-center  focus-visible:ring text-lg font-bold text-center outline-none duration-100 px-8 py-1.5 bg-ltGrey rounded-3xl h-14 border-slate border tracking-normal w-full`}><Image src="/images/plaidIcon.png" alt="Plaid Icon" className="object-contain" width={80} height={20}/></button>

				<button className="text-lg tracking-normal underline" onClick={() => router.back()}>Go Back</button> 
			</div>
		</form>
	)
}

