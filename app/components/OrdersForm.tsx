/* eslint-disable react/no-children-prop */
'use client'
import { Button, Checkbox, CheckboxGroup } from '@chakra-ui/react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function OrdersForm() {
	const [storeName, setStoreName] = useState<string>('')
	const router = useRouter()

	async function handleSubmit(e:any){
		e.preventDefault()
		await router.push('/billing')
	}

	return (
		<form className="text-body flex flex-col gap-6 mb-5 mt-10 md:w-1/2 w-full mx-auto px-4 md:px-0 text-left" onSubmit={(e) => handleSubmit(e)}>
			<div className="flex flex-col gap-2">
			<CheckboxGroup defaultValue={['naruto', 'kakashi']}>
			
					<Checkbox value='naruto'>Naruto</Checkbox>
					<Checkbox value='sasuke'>Sasuke</Checkbox>
					<Checkbox value='kakashi'>Kakashi</Checkbox>
			
			</CheckboxGroup>
			</div>
			<button disabled={!(storeName)} className={`transition-all disabled:bg-ltPurple transform-gpu active:scale-95 flex flex-row items-center justify-center text-white focus-visible:ring ring-4accent text-lg font-bold text-center outline-none duration-100 px-8 py-1.5 bg-purple rounded-3xl tracking-widest my-10 h-14`}>Next</button> 
		</form>
	)
}

