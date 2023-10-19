import { Suspense, lazy, useEffect, useState } from "react"
import { apiService } from "../api.service"
import { Box, CircularProgress, FormControl, InputLabel, MenuItem, Select, Skeleton } from '@mui/material';


const ProductCard = lazy(() => import('./ProductCard.js'))

const Products = () => {
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    console.log(categories)
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

    const GetCategoriesData = () => {
        apiService.GetAllCategories()
            .then((res) => {
                setCategories(res);
            })
            .catch((error) => {
                console.error(error);
            });
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
        GetCategoriesData();
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

    return (
        <>
            {loading ? (
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <CircularProgress />
                </Box>
            ) : (
                <>
                    <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'left' }}>
                        <FormControl sx={{ m: 1, minWidth: { xs: 150, sm: 200 } }}>
                            <InputLabel>Category</InputLabel>
                            <Select
                                id="simple-select"
                                value={selectedCategory}
                                label="Category"
                                onChange={(e) => setSelectedCategory(e.target.value)}
                            >
                                <MenuItem key={-1} value={"none"}>None</MenuItem>
                                {categories?.map((val, index) => (
                                    <MenuItem key={index} value={val}>{val}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <FormControl sx={{ m: 1, minWidth: { xs: 150, sm: 200 } }}>
                            <InputLabel>Sort</InputLabel>
                            <Select
                                label="Sort"
                                value={sorting}
                                onChange={(e) => setSorting(e.target.value)}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value='none'>None</MenuItem>
                                <MenuItem value='asc'>Ascending</MenuItem>
                                <MenuItem value='desc'>Descending</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    {products.map((product) => (
                        <Suspense fallback={<Skeleton variant="rectangular" width={210} height={118} />} key={product.id}>
                            <ProductCard productData={product} />
                        </Suspense>
                    ))}
                </>
            )}
        </>
    )


}

export default Products