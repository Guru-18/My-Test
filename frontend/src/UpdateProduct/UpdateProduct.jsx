import React, { useEffect, useState } from 'react'
import "../CreateProduct/CreateProduct.css";
import { useSelector, useDispatch } from 'react-redux';
import { getProductDetails } from '../reducers/productSlice';
import { useParams } from 'react-router';
import { updateProduct } from './../reducers/productSlice';

const UpdateProduct = () => {

    const { id } = useParams();
    const dispatch = useDispatch();

    const { productDetails, success } = useSelector(state => state.products);

    const [productName, setProductName] = useState("")
    const [productPrice, setProductPrice] = useState(0);
    const [productDesc, setProductDesc] = useState("");

    function handleUpdateSubmit(event) {
        event.preventDefault();

        dispatch(updateProduct(id, {
            productName,
            productPrice,
            productDesc
        }))
    }

    useEffect(() => {
        dispatch(getProductDetails(id))
    }, [dispatch, id, success])

    useEffect(() => {
        if (productDetails) {
            setProductName(productDetails.productName)
            setProductPrice(productDetails.productPrice)
            setProductDesc(productDetails.productDesc)
        }
    }, [productDetails]);

    return (
        <div className='createProductContainer'>
            <form onSubmit={handleUpdateSubmit}>
                <div>
                    <input
                        type="text"
                        name='ProductName'
                        required
                        placeholder='Product Name'
                        value={productName || ""}
                        onChange={(e) => setProductName(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        required
                        name='ProductPrice'
                        type="number"
                        placeholder='Product Price'
                        value={productPrice || ""}
                        onChange={(e) => setProductPrice(e.target.value)}
                    />
                </div>
                <div>
                    <textarea
                        required
                        name='ProductDesc'
                        rows={3}
                        placeholder="Product Description"
                        value={productDesc || ""}
                        onChange={(e) => setProductDesc(e.target.value)}
                    />
                </div>
                <div>
                    <button type="submit">SUBMIT</button>
                </div>
            </form>
        </div>
    )
}

export default UpdateProduct