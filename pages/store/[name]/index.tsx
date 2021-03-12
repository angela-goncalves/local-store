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
    if (router.isFallback) return <div>loading...</div>

    const [amount, setAmount] = React.useState([]);
    const { description, address, company, registered, color1, color2 } = localStore
    return (
        <div className="flex flex-col">
            <HeroSection
                companyDescription={description}
                companyAddress={address}
                companyTitle={company}
                companyTime={registered}
                color1={color1}
            />
            <div className={`flex flex-wrap w-full justify-center ${localStore.color1}-100`}>
                {localStore.products.map((product) => {
                    const { description, title, price } = product
                    return <ProductCard
                        description = {description}
                        title = {title}
                        price = {price}
                        color2 = {color2}
                        setAmount = {setAmount}
                    />
                })}
            </div>
            {amount.length >= 1 ? <Cart
                cartItems={amount}
            /> : ''}

        </div>
    )
}

export const getStaticPaths = async () => {

    return {
        paths: [

        ],
        fallback: true
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