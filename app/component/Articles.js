import Image from "next/image"
import RetroPC from '../../public/assets/images/image-retro-pcs.jpg'
import Laptops from '../../public/assets/images/image-top-laptops.jpg'
import Gaming from '../../public/assets/images/image-gaming-growth.jpg'
import Thumbnail from "./Thumbail"

export default function Articles() {
    return (
        <section className="lg:grid grid-cols-3 my-16 lg:gap-8">

            <Thumbnail
                img={RetroPC}
                number={'01'}
                title={'Reviving Retro PCs'}
                text={'What happens when old PCs are given modern upgrades?'}
            />
            <Thumbnail
                img={Laptops}
                number={'02'}
                title={'Top 10 Laptops of 2022'}
                text={'Our best picks for various needs and budgets.'}
            />
            <Thumbnail
                img={Gaming}
                number={'03'}
                title={'The Growth of Gaming'}
                text={'How the pandemic has sparked fresh opportunities.'}
            />

        </section>
    )
}