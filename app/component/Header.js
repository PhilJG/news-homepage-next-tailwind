import Image from "next/image"
// import Desktop from '../../public/assets/images/image-web-3-desktop.jpg'
import Mobile from '../../public/assets/images/image-web-3-desktop.jpg'
import News from './News'

export default function Header() {
    return (
        <header className='grid-rows-3  grid mb-16 lg:grid-rows-2 lg:grid-cols-3 lg:gap-x-8'>
            <Image src={Mobile} className=" lg:col-start-1 col-span-2 max-h-" alt='Web3 abstract image' />
            <h1 className='text-4xl font-[800] leading-10 inline-block max-h-fit-content lg:col-span-1 lg:row-start-2 lg:text-9xl'>The Bright Future of Web 3.0?</h1>
            <div className='lg:row-start-2 col-start-2'>
                <p> We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
                    But is it really fulfilling its promise?
                </p>
                <button className="bg-orange py-2 px-6 mt-6 text-white uppercase text- font-bold tracking-widest">Read more</button>
            </div>
            <section className={`px-7 py-4 my-16 lg:my-0 bg-very-dark-blue col-start-3 row-start-1 row-span-2`}>
                <News />
            </section>
        </header>
    )
}