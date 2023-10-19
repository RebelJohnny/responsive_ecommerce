import { Suspense, lazy, useEffect, useState } from "react"
import { apiService } from "../api.service"
import Loading from "./Loading"
// import ProductCard from "./ProductCard"

const ProductCard = lazy(() => import('./ProductCard.js'))

const Products = () => {
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])

    const [loading, setLoading] = useState(false)

    const GetProductsData = () => {
        setLoading(true)
        apiService.GetAllProducts()
            .then((res) => {
                setProducts(res)
                setLoading(false)
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const GetCategoriesData = () => {
        apiService.GetAllCategories()
            .then((res) => {
                setCategories(res);
            }).catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        GetProductsData();
        GetCategoriesData();
    }, []);

    return (
        <>
            {products.map((product) => (
                <Suspense fallback={<Loading />} key={product.id}>
                    <ProductCard productData={product}  />
                </Suspense>
            ))}
        </>
    )

    
}

export default Products