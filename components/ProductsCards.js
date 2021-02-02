import ProductCard from '../components/ProductCard'

export default function ProductsCards(){
    return (
        <div className="space-y-3 px-3 grid sm:flex sm:flex-wrap sm:justify-center justify-items-center sm:m-4">
            <ProductCard 
            title={"Product title"} 
            description={"Product description"}
            price={"$ 500"}
            />
            <ProductCard 
            title={"Product title"} 
            description={"Product description"}
            price={"$ 500"}
            />
            <ProductCard 
            title={"Product title"} 
            description={"Product description"}
            price={"$ 500"}
            />
            <ProductCard 
            title={"Product title"} 
            description={"Product description"}
            price={"$ 500"}
            />
            <ProductCard 
            title={"Product title"} 
            description={"Product description"}
            price={"$ 500"}
            />
            <ProductCard 
            title={"Product title"} 
            description={"Product description"}
            price={"$ 500"}
            />
            <ProductCard 
            title={"Product title"} 
            description={"Product description"}
            price={"$ 500"}
            />
            <ProductCard 
            title={"Product title"} 
            description={"Product description"}
            price={"$ 500"}
            />
        </div>
    )
}