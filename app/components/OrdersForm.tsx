/* eslint-disable react/no-children-prop */
'use client'
import { Button, Checkbox, CheckboxGroup, HStack, useCheckboxGroup, useRadioGroup } from '@chakra-ui/react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import RadioCard from './hoc/RadioCard';

export default function OrdersForm() {
	const [selected, setSelected] = useState("");
  	const options = ["1-500", "500-1,0000", "1,0000-10,0000", "10,000-50,0000", "50,000+"];
	const router = useRouter()

	async function handleSubmit(e:any){
		e.preventDefault()
		await router.push('/billing')
	}

	const { getRootProps, getRadioProps } = useRadioGroup({
		name: "framework",
		onChange: setSelected
	});

	const group = getRootProps();

	return (
		<form className="text-body flex flex-col gap-6 mb-5 mt-10 md:w-2/3 w-full mx-auto px-4 md:px-0 text-left" onSubmit={(e) => handleSubmit(e)}>
			
			<div className="flex flex-col gap-4 text-body" {...group}>
				{options.map((value) => {
					const radio = getRadioProps({ value });
					return (
					<RadioCard key={value} {...radio}>
						<div className="flex flex-row gap-2">
						<Checkbox	_checked={{
							"& .chakra-checkbox__control": { background: '#6675FF' }
						}}   isChecked={selected === value ? true : false}/>
						{value}
						</div>
					</RadioCard>
					);
				})}
			</div>
			
			<button disabled={!(selected)} className={`transition-all disabled:bg-ltPurple transform-gpu active:scale-95 flex flex-row items-center justify-center text-white focus-visible:ring text-lg font-bold text-center outline-none duration-100 px-8 py-1.5 bg-purple rounded-3xl tracking-widest my-10 h-14`}>Next</button> 
		</form>
	)
}

