
export default function CardProduct({ title, description, price }) {
    return (
        <div className="grid grid-cols-2 space-y-2 sm:flex sm:flex-col rounded-2xl bg-white sm:w-max sm:p-6 shadow-md sm:m-3 p-2">
            <img src="../png/food-example.jpg" alt={title} className="w-40 rounded-2xl" />
            <div className="p-2 w-full">
                <div className="flex flex-col">
                    <h3>{title}</h3>
                    <p className="text-gray-500">{description}</p>
                </div>
            </div>
            <div className="text-center pt-2">
                <button className="py-2 w-full rounded-md bg-blue-500 text-white">Add</button>
            </div>
            <p className="self-center justify-self-center text-green-600 font-semibold">{price}</p>
        </div>
    )
}