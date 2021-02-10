export default function Categories({ productCategory }) {

    return (
        <div >
            <div className="overflow-y-scroll w-screen">
                <div className="flex flex-row">
                    {productCategory.map(element =>
                        <div className="flex flex-col bg-yellow-50 p-3 rounded-lg w-40 h-40 max-w-screen-2xl">
                            <img src="../../../png/food-example.jpg" className="w-full h-24 rounded-xl" />
                            <p className="max-w-prose">{element}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}