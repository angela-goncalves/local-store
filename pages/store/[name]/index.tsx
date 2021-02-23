import * as React from 'react';
import data from "../../../data.json"
import { useRouter } from 'next/router'
import HeroSection from 'components/HeroSection'
import Categories from 'components/Categories'
import ProductCard from 'components/ProductCard'
export interface StoreProps {

}
const Store: React.FC<StoreProps> = ({ localStore }: any) => {
    const router = useRouter()
    if (router.isFallback) return <div>loading...</div>
    console.log(localStore)
    return (
        <div className="flex flex-col">
            <HeroSection
                companyTitle={localStore.company}
                companyDescription={localStore.description}
                companyAddress={localStore.address}
                companyTime={localStore.registered}
                color1={localStore.color1}
            />
            <div className="w-full">
                {localStore.products.map(product => 
                <ProductCard
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    color1={localStore.color1}
                    color2={localStore.color2}
                />)}  
            </div>
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