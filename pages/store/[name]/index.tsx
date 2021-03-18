import * as React from 'react';
import data from "../../../data.json"
import { useRouter } from 'next/router'
import HeroSection from 'components/HeroSection'
import Categories from 'components/Categories'
import ProductCard from 'components/ProductCard'
import Cart from 'components/Cart';

export interface StoreProps {

}

const Store: React.FC<StoreProps> = ({ localStore }: any) => {
    const router = useRouter()

    const [cartItems, setCartItems] = React.useState([]);

    const { description, address, company, registered, color1 } = localStore
    const colorsTw = (color) => {
        if (color === "red") {
            return {
                backgound: 'bg-red-50',
                bgTime: 'bg-green-200',
                button: 'bg-green-400',
                ring: 'ring-green-600',
                focusRing: 'focus:ring-green-600',
                hover: 'hover:bg-green-600'
            }
        }
        if (color === "green") {
            return {
                backgound: 'bg-green-50',
                bgTime: 'bg-red-300',
                button: 'bg-red-400',
                ring: 'ring-red-600',
                focusRing: 'focus:ring-red-600',
                hover: 'hover:bg-red-600'
            }
        }
        if (color === "yellow") {
            return {
                backgound: 'bg-yellow-50',
                bgTime: 'bg-blue-200',
                button: 'bg-blue-400',
                ring: 'ring-blue-600',
                focusRing: 'focus:ring-blue-600',
                hover: 'hover:bg-blue-600'
            }
        }
        if (color === "blue") {
            return {
                backgound: 'bg-blue-100',
                bgTime: 'bg-yellow-200',
                button: 'bg-yellow-400',
                ring: 'ring-yellow-600',
                focusRing: 'focus:ring-yellow-600',
                hover: 'hover:bg-yellow-600'
            }
        }
        if (color === "indigo") {
            return {
                backgound: 'bg-indigo-100',
                bgTime: 'bg-yellow-200',
                button: 'bg-yellow-400',
                ring: 'ring-yellow-600',
                focusRing: 'focus:ring-yellow-600',
                hover: 'hover:bg-yellow-600'
            }
        }
        if (color === "purple") {
            return {
                backgound: 'bg-purple-100',
                bgTime: 'bg-pink-200',
                button: 'bg-pink-400',
                ring: 'ring-pink-600',
                focusRing: 'focus:ring-pink-600',
                hover: 'hover:bg-pink-600'
            }
        }
        if (color === "pink") {
            return {
                backgound: 'bg-pink-100',
                bgTime: 'bg-purple-200',
                button: 'bg-purple-400',
                ring: 'ring-purple-600',
                focusRing: 'focus:ring-purple-600',
                hover: 'hover:bg-purple-600'
            }
        }
    }
    const theColor = colorsTw(color1)

    const deleteItem = (id) => {
        setCartItems(cartItems.filter((item) => item.id !== id))
    }
//cambiar amount a cartItems 
//setCartItems(counter + 1) para cuando se sume el counter se actualice el valor en los dos componentes por lo tanto en el setCartItems debe ser ahora el q tenga el counter y los demas props(...prev) 
//
    return (
        <div className="flex flex-col">
            <HeroSection
                companyDescription={description}
                companyAddress={address}
                companyTitle={company}
                companyTime={registered}
                color1={theColor}
            />
            <div className={`flex flex-wrap w-full justify-center ${theColor.backgound}`}>
                {localStore.products.map((product) => {

                    const { description, title, price, id } = product
                    return (
                        <div key={id}>
                            <ProductCard
                                id={id}
                                description={description}
                                title={title}
                                price={price}
                                color2={theColor}
                                setAmount={setCartItems}
                            />
                        </div>
                    )
                })}
            </div>
            {cartItems.length >= 1 ? <Cart
                deleteItem={deleteItem}
                cartItems={cartItems}
            /> : ''}

        </div>
    )
}

export const getStaticPaths = async () => {

    return {
        paths: [

        ],
        fallback: 'blocking'
    }
}
export const getStaticProps = async ({ params }) => {
    const localStore = data.find(find => find.company === params.name)//company's name
    return {
        props: {
            localStore,
        },
    }
}
export default Store;