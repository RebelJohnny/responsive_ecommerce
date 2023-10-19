export const apiService = {
    GetAllProducts,
    GetSingleProduct,
    GetAllCategories,
    GetProductsInCategory
}

async function GetAllProducts() {
    const res = await fetch('https://fakestoreapi.com/products')
    return await res.json()
}

async function GetSingleProduct(id) {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`)
    return await res.json()
}

async function GetAllCategories(){
    const res = await fetch('https://fakestoreapi.com/products/categories')
    return await res.json()
}

async function GetProductsInCategory(category) {
    const res = await fetch(`https://fakestoreapi.com/products/category/${category}`)
    return await res.json()
}