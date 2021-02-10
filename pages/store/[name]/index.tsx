import * as React from 'react';
import data from "../../../data.json"
import { useRouter } from 'next/router'
import HeroSection from 'components/HeroSection'
import Categories from 'components/Categories'
export interface StoreProps {

}
//client
const Store: React.FC<StoreProps> = ({ localstore }: any) => {
    const router = useRouter()
    if (router.isFallback) return <div>loading...</div>
    return (
        <div className="flex flex-col">
            <HeroSection
                companyTitle={localstore.company}
                companyDescription={localstore.description}
                companyAddress={localstore.address}
                companyTime={localstore.registered}
            />
            <div className="w-full">
                <Categories
                    productCategory={localstore.categories}
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
    const localstore = data.find(find => find.company === params.name)//company's name
    return {
        props: {
            localstore,
        },
    }
}
export default Store;