import CloseIcon from '@mui/icons-material/Close';
const ProductDetail = ({ closeModal, productInfo }) => {
    return (
        <>
            <div className="modal-header">
                <p className='title'>ProductDetails</p>
                <button type="button" className="close-btn" onClick={() => closeModal()}>
                    <CloseIcon />
                </button>
            </div>
            <div className="card shadow-0 border">
                    <div className="row no-gutters d-flex justify-content-center align-items-center">
                        <div className="col-lg-3 col-12">
                            {/* <LazyLoadImage style={{ objectFit: "scale-down", maxHeight: "200px", maxWidth: "200px", margin: "5px" }} src={productInfo.image} className="card-img img-fluid" alt="..." /> */}
                            <img style={{objectFit: "scale-down", maxHeight: "200px", maxWidth: "200px", margin:"5px"}} src={productInfo.image} className="card-img img-fluid" alt="..."></img>
                        </div>
                        <div className="col-lg-9 col-12">
                            <div className="card-body">
                                <h2 className="card-title">{productInfo.title}</h2>
                                <h3 className="mb-1 me-1">${productInfo.price}</h3>
                                <p className="card-text">{productInfo.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default ProductDetail