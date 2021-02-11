import SocialMedia from './SocialMedia'

export default function HeroSection({companyTitle, companyDescription, companyAddress, companyTime}) {
    return (
        <div className="">
            <img src="../png/example-unsplash.jpg" alt="image of the restaurant" className="h-30 w-full object-contain" />
            <div className="flex flex-wrap sm:mx-16">
                <img src="../png/logo.jpg" alt="restaurant's logo" className="w-24 h-24 sm:w-40 sm:h-40 rounded-full border-2 border-white relative bottom-6 left-4 " />
                <div className="order-3 mb-3 mx-4 sm:ml-10 sm:mt-4">
                    <h1 className="text-2xl mb-2">{companyTitle}</h1>
                    <p className="w-72 text-gray-500 text-justify sm:w-full sm:max-w-lg">
                        {companyDescription}
                    </p>
                    <div className="flex flex-row my-2">
                        <img src="../svg/placeholder.svg" alt="location icon" className="w-4" />
                        <p className="text-green-500 ml-2 text-justify">{companyAddress}</p>
                    </div>
                </div>
                <div className="w-44 h-20 self-center justify-end ml-8 sm:ml-10 sm:order-3 ">
                    <SocialMedia />
                </div>
            </div>
            <div className="flex ">
                <p className="bg-blue-300 w-full text-white self-center text-center py-2">
                    {companyTime}</p>
            </div>
        </div>
    )
}