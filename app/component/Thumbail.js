import Image from "next/image"

export default function Thumbnail({ img, number, title, text }) {
    return (
        <div className="flex pb-8">
            <Image src={img} alt={title} className="w-24" />
            <div className="flex-col pl-6">
                <h3 className="text-2xl font-extrabold ">{number}</h3>
                <h3 className="text-l">{title}</h3>
                <p>{text}</p>
            </div>
        </div>
    )
}