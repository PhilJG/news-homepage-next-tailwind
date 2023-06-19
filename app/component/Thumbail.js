import Image from "next/image"

export default function Thumbnail({ img, number, title, text }) {
    return (
        <div className="flex pb-8">
            <Image src={img} alt={title} className="w-24 object-contain" />
            <div className="flex-col pl-6">
                <h3 className="text-4xl font-extrabold text-[#C5C6CE]">{number}</h3>
                <h3 className="text-l font-extrabold">{title}</h3>
                <p className="text-[#5E607A]">{text}</p>
            </div>
        </div>
    )
}