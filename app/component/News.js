export default function News({ }) {
    return (
        <>
            <h2 className="text-2xl font-[800] text-orange">New</h2>
            <h3 className="hover:text-orange cursor-pointer text-l pt-8 font-[800] text-white "> Hydrogen VS Electric Cars
            </h3>
            <p className="text-white pt-3 pb-7">Will hydrogen-fueled cars ever catch up to EVs?</p>
            <hr className="text-white"></hr>
            <h3 className="hover:text-orange cursor-pointer text-l font-[800] text-white pt-8">  The Downsides of AI Artistry
            </h3>
            <p className="text-white pt-3 pb-7">What are the possible adverse effects of on-demand AI image generation?</p>
            <hr className="text-white" ></hr>
            <h3 className="hover:text-orange cursor-pointer text-l font-[800] text-white pt-8">Is VC Funding Drying Up?
            </h3>
            <p className="text-white pt-3 pb-7">Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>

        </>
    )
}