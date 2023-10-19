export const apiService = {
    GetAllProducts,
    GetSingleProduct,
    GetAllCategories,
    GetProductsInCategory,
    GetSortedProducts,
    GetSortedProductsInCategory,
    ImageBlobber
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

async function GetSortedProducts(sort) {
    const res = await fetch(`https://fakestoreapi.com/products?sort=${sort}`)
    return await res.json()
}

async function GetSortedProductsInCategory(category, sort) {
    const res = await fetch(`https://fakestoreapi.com/products/category/${category}?sort=${sort}`)
    return await res.json()
}

async function ImageBlobber(url){
    return await fetch(url).then(r => r.blob()).then(blobFile => new File([blobFile], "image", { type: "image/png" }))
}