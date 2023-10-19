import { Suspense, lazy, useEffect, useState } from "react"
import { apiService } from "../api.service"
import { Box, CircularProgress, FormControl, InputLabel, MenuItem, Select, Skeleton } from '@mui/material';
import Filters from "./Filters";


const ProductCard = lazy(() => import('./ProductCard.js'))

const Products = () => {
    const [products, setProducts] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("none");
    const [sorting, setSorting] = useState("none");
    const [loading, setLoading] = useState(false)

    const GetProductsData = () => {
        setLoading(true)
        apiService.GetAllProducts()
            .then((res) => {
                setProducts(res)
                setLoading(false)
            })
            .catch((error) => {
                console.error(error);
            })
    }



    const GetProductsInCategory = (category) => {
        apiService.GetProductsInCategory(category)
            .then((res) => {
                setProducts(res);
            })
            .catch((error) => {
                console.error(error)
            })
    }

    const GetSortedProducts = (sort) => {
        apiService.GetSortedProducts(sort)
            .then((res) => {
                setProducts(res);
            })
            .catch((error) => {
                console.error(error)
            })
    }

    const GetSortedProductsInCategory = (category, sort) => {
        apiService.GetSortedProductsInCategory(category, sort)
            .then((res) => {
                setProducts(res);
            })
            .catch((error) => {
                console.error(error)
            })
    }

    useEffect(() => {
        GetProductsData();
    }, []);

    useEffect(() => {
        if (selectedCategory !== "none" && sorting !== "none") {
            GetSortedProductsInCategory(selectedCategory, sorting)
        }
        else if (selectedCategory !== "none") {
            GetProductsInCategory(selectedCategory)
        }
        else if (sorting !== "none") {
            GetSortedProducts(sorting)
        }
    }, [selectedCategory, sorting])

    const GetCategoryFilter = (category) => {
        setSelectedCategory(category)
    }

    const GetSortFilter = (sort) => {
        setSorting(sort)
    }

    return (
        <>
            {loading ? (
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <CircularProgress />
                </Box>
            ) : (
                <div className="row justify-content-center">                        
                        <Filters selectedCategory={selectedCategory} SetCategoryFilter={GetCategoryFilter} selectedSort={sorting} SetSortFilter={GetSortFilter} />
                    {products.map((product) => (
                        <Suspense fallback={<Skeleton variant="rectangular" width={210} height={118} />} key={product.id}>
                            <ProductCard productData={product} />
                        </Suspense>
                    ))}
                </div>
            )}
        </>
    )


}

export default Products