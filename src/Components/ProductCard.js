import { LazyLoadImage } from "react-lazy-load-image-component"

const ProductCard = ({ productData }) => {
    // productdata example:
    // {
    //     "id": 7,
    //     "title": "White Gold Plated Princess",
    //     "price": 9.99,
    //     "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    //     "category": "jewelery",
    //     "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    //     "rating": {
    //         "rate": 3,
    //         "count": 400
    //     }
    // }
    return (
        <div className="row justify-content-center mb-3">
            <div className="col-md-12 col-xl-10 col-xs-10">
                <div className="card shadow-0 border rounded-3">
                    <div className="row no-gutters d-flex justify-content-center align-items-center">
                        <div className="col-lg-3 col-md-12 col-xs-3">
                            <LazyLoadImage style={{objectFit: "scale-down", maxHeight: "200px", maxWidth: "200px", margin:"5px"}} src={productData.image} className="card-img img-fluid" alt="..." />
                            {/* <img style={{objectFit: "scale-down", maxHeight: "200px", maxWidth: "200px", margin:"5px"}} src={productData.image} className="card-img img-fluid" alt="..."></img> */}
                        </div>
                        <div className="col-lg-6 col-md-6 col-xs-6">
                            <div className="card-body">
                                <h5 className="card-title">{productData.title}</h5>
                                <p className="card-text text-truncate">{productData.description}</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-xs-3 border-sm-start-none border-start">
                            <div className="d-flex flex-row align-items-center justify-content-center mb-1">
                                <h4 className="mb-1 me-1">${productData.price}</h4>
                            </div>
                            <div className="d-flex flex-column mt-4">
                                <button className="btn btn-primary btn-sm" type="button">Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProductCard