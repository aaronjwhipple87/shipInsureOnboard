import HomeForm from './components/HomeForm'
import Review from './components/Review'

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-2 justify-between md:mt-10 mt-5 md:w-1/2 mx-2 md:mx-auto mb-20">
        <h4 className="text-heading font-bold text-2xl text-slate">
          Welcome, {"{"}NAME{"}"}!
        </h4>
        <p className="text-base text-body">
          Let&#39;s make this easy--Please verify the information below is correct.
        </p>
        <HomeForm />
        <Review/>
    </main>
  )
}
