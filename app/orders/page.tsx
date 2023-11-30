import OrdersForm from '../components/OrdersForm'
import Review from '../components/Review'



export default function Orders() {
  return (
    <main className="flex flex-col items-center gap-2 justify-between md:mt-10 mt-5 md:w-1/2 mx-2 md:mx-auto mb-20">
        <h4 className="text-header font-bold text-2xl text-slate">
			Tell us a bit about your store!
        </h4>
        <p className="text-base text-body">
			We&#39;d love to hear more about your Shopify experience. On average, how many orders do you typically receive each month?
        </p>
        <OrdersForm />
        <Review/>
    </main>
  )
}
