import * as React from 'react';
import data from "../../../data.json"
import { useRouter } from 'next/router'
import HeroSection from 'components/HeroSection'
import Categories from 'components/Categories'
import ProductCard from 'components/ProductCard'
export interface StoreProps {

}
//client
const Store: React.FC<StoreProps> = ({ localStore }: any) => {
    const router = useRouter()
    if (router.isFallback) return <div>loading...</div>
    return (
        <div className="flex flex-col bg-blue-100 ">
            <HeroSection
                companyTitle={localStore.company}
                companyDescription={localStore.description}
                companyAddress={localStore.address}
                companyTime={localStore.registered}
            />
            <div className="w-full">
               <ProductCard 
               title={localStore.products}
               description={localStore.productdescription}
               price={localStore.precio}
               />
            </div>
        </div>
    )
}
// server
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