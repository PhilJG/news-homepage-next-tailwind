
import Navbar from './component/Navbar'
import Header from './component/Header'
import News from './component/News'
import Articles from './component/Articles'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="grid place-items-center sm:px-4 lg:px-40 ">
        <Header />
        <Articles />
      </main>
    </>
  )
}
