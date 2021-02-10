
export default function CardProduct({ title, description, price }) {
    return (
        <div className="my-3 w-full grid justify-items-center sm:flex sm:flex-wrap sm:justify-center">
            {title.map(element =>
                <div className="sm:flex sm:flex-col bg-white rounded-xl m-2">
                    <div className="flex">
                        <img src="../png/food-example.jpg" alt={`image of ${element}`} className="w-24 h-24 rounded-tl-xl sm:w-36 sm:h-32 " />
                        <div className="pl-2 pt-2 w-full">
                            <h3>{element}</h3>
                            <p className="text-gray-500 h-20 w-48 pr-1 overflow-hidden sm:w-36">{description}</p>
                        </div>
                    </div>
                    <div className="text-center mx-3 my-2 flex justify-between ">
                        <button className="py-1 w-32 rounded-md bg-blue-500 text-white">
                            Add
                        </button>
                        <p className="self-center text-green-600 font-semibold ml-1">{price}</p>
                    </div>
                </div>
            )}
        </div>
    )
}