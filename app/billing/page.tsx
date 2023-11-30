import BillingForm from '../components/BillingForm'
import Review from '../components/Review'



export default function Billing() {
  return (
    <main className="flex flex-col items-center gap-2 justify-between md:mt-10 mt-5 md:w-1/2 mx-2 md:mx-auto mb-20">
        <h4 className="text-header font-bold text-2xl text-slate">
			ShipInsure is free, here is how it works
        </h4>
        <p className="text-base text-body">
			In order to pay claims, ShipInsure refunds the customer directly or completes repurchases from your store. As our widget collects premiums from customers during checkout, your billing info is needed for ShipInsure to collect those premiums every month.
        </p>
        <BillingForm />
        <Review/>
    </main>
  )
}
