const categories = [
    {
        categoryTitle: "Desert",
        src: "../svg/sorbet.svg",
    },
    {
        categoryTitle: "Pizzas",
        src: "../svg/pizza.svg"
    },
    {
        categoryTitle: "Pastas",
        src: "../svg/spaguetti.svg",
    },
    {
        categoryTitle: "Burgers",
        src: "../svg/hamburguer.svg",
    },
    {
        categoryTitle: "Drinks",
        src: "../svg/can.svg",
    },
    {
        categoryTitle: "Hot-Dogs",
        src: "../svg/hot-dog.svg",
    },
    {
        categoryTitle: "Meats",
        src: "../svg/steak.svg",
    },
]

export default function Categories() {
    return (
        <div className="flex overflow-x-scroll overscroll-x-contain w-full">
            {categories.map((categ) =>
                <div className="bg-yellow-50 p-3 ml-4 my-4 flex flex-col items-center justify-center rounded-lg">
                    <img src={categ.src} className="w-12"/>
                    <p>{categ.categoryTitle} </p>
                </div>
            )}
        </div>
    )
} 