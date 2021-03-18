import * as React from 'react';
import Link from "next/link"
import data from "../../data.json"
import { GetStaticProps } from 'next';
import Modal from 'components/Modal'
export interface StoreProps {
    filtered: { company: string }[]

}

const Store: React.FC<StoreProps> = ({ filtered }) => {
    return <div className="flex flex-wrap mx-5 justify-center">
        {filtered.map(store => (
            <div key={store.company}>
                <Link href={`store/${store.company}`}>
                    <div className="bg-red-100 rounded-xl w-28 p-2 m-4 text-center">
                        <a className="cursor-pointer w-28">
                            <img src="../../png/logo.jpg" alt="store's logo" className="rounded-xl" />
                            <p>{store.company}</p>
                        </a>
                    </div>
                </Link>
            </div>
        ))}
    </div>;
}

export const getStaticProps: GetStaticProps = async () => {
    const filtered = data.map(el => {
        return { company: el.company }
    })
    return {
        props: {
            filtered
        },
    }
}
export default Store;