/* eslint-disable react/no-children-prop */
'use client'
import { Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function HomeForm() {
	const [storeName, setStoreName] = useState<string>('')
	const [name, setName] = useState<string>('')
	const [email, setEmail] = useState<string>('')
	const [url, setUrl] = useState<string>('')
	const router = useRouter()

	async function handleSubmit(e:any){
		e.preventDefault()
		await router.push('/orders')
	}

	return (
		<form className="text-body flex flex-col gap-6 mb-5 mt-10 md:w-2/3 w-full mx-auto px-4 md:px-0 text-left" onSubmit={(e) => handleSubmit(e)}>
			{/* STORE NAME */}
			<div className="flex flex-col gap-2">
				<label className="ml-2" htmlFor='storeName'>Store Name<span className="text-purple">*</span></label>
				<InputGroup className="font-bold">
					{!storeName &&
					<>
						<InputLeftElement
							pointerEvents='none'
							children='-'
						/>
						<InputRightElement
							pointerEvents='none'
							color='#6675FF'
							children='update'
							className="pr-10"
						/>
					</>
					}
					<Input name='storeName' variant={storeName ? 'filled' : 'outline'} type='text' onChange={(e) => setStoreName(e.target.value)} isRequired/>
				</InputGroup>
			</div>
			{/* NAME */}
			<div className="flex flex-col gap-2">
				<label className="ml-2" htmlFor='name'>Full Name<span className="text-purple">*</span></label>
				<InputGroup className="font-bold">
					{!name &&
					<>
						<InputLeftElement
							pointerEvents='none'
							children='-'
						/>
						<InputRightElement
							pointerEvents='none'
							color='#6675FF'
							children='update'
							className="pr-10"
						/>
					</>
					}
					<Input name='name' variant={name ? 'filled' : 'outline'} type='text' onChange={(e) => setName(e.target.value)} isRequired/>
				</InputGroup>
			</div>
			{/* EMAIL */}
			<div className="flex flex-col gap-2">
				<label className="ml-2" htmlFor='email'>Email Address<span className="text-purple">*</span></label>
				<InputGroup className="font-bold">
					{!email &&
					<>
						<InputLeftElement
							pointerEvents='none'
							children='-'
						/>
						<InputRightElement
							pointerEvents='none'
							color='#6675FF'
							children='update'
							className="pr-10"
						/>
					</>
					}
					<Input name='email' variant={email ? 'filled' : 'outline'} type='text' onChange={(e) => setEmail(e.target.value)} isRequired/>
				</InputGroup>
			</div>
			{/* URL */}
			<div className="flex flex-col gap-2">
				<label className="ml-2" htmlFor='url'>Store URL<span className="text-purple">*</span></label>
				<InputGroup className="font-bold">
					{!url &&
					<>
						<InputLeftElement
							pointerEvents='none'
							children='-'
						/>
						<InputRightElement
							pointerEvents='none'
							color='#6675FF'
							children='update'
							className="pr-10"
						/>
					</>
					}
					<Input name='url' variant={url ? 'filled' : 'outline'} type='text' onChange={(e) => setUrl(e.target.value)} isRequired/>
				</InputGroup>
			</div>
			<button disabled={!(storeName && name && email && url)} className={`transition-all disabled:bg-ltPurple transform-gpu active:scale-95 flex flex-row items-center justify-center text-white focus-visible:ring text-lg font-bold text-center outline-none duration-100 px-8 py-1.5 bg-purple rounded-3xl tracking-widest my-10 h-14`}>Confirm</button> 
		</form>
	)
}

