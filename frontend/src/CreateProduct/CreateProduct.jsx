import React, { useEffect, useState } from 'react'
import "./CreateProduct.css";
import { useDispatch, useSelector } from 'react-redux';
import { createNewProduct } from '../reducers/productSlice';
import { toast } from 'react-toastify';

const CreateProduct = () => {

    const dispatch = useDispatch();
    const { success } = useSelector(state => state.products);

    //changing input states
    const [productName, setProductName] = useState("")
    const [productPrice, setProductPrice] = useState(0);
    const [productDesc, setProductDesc] = useState("");

    //handle create product form 
    function handleFormSubmit(event) {
        event.preventDefault();

        const checkStr = /^[a-zA-Z]+$/.test(productName);

        if (checkStr === false) {
            toast.error("Product Name should contains only characters!", {
                pauseOnHover: false
            })
            return
        }
        else
            dispatch(createNewProduct({
                productName,
                productPrice,
                productDesc
            }));
    }

    useEffect(() => {
        if (success) {
            setProductName("");
            setProductPrice(0);
            setProductDesc("");
        }
    }, [success])

    return (
        <div className='createProductContainer'>
            <form
                onSubmit={handleFormSubmit}
                encType="multipart/data"
            >
                <div>
                    <input
                        type="text"
                        name='ProductName'
                        required
                        placeholder='Product Name'
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        required
                        name='ProductPrice'
                        type="number"
                        placeholder='Product Price'
                        value={productPrice}
                        onChange={(e) => setProductPrice(e.target.value)}
                    />
                </div>
                <div>
                    <textarea
                        required
                        name='ProductDesc'
                        rows={3}
                        placeholder="Product Description"
                        value={productDesc}
                        onChange={(e) => setProductDesc(e.target.value)}
                    />
                </div>
                <div>
                    <button type="submit" >SUBMIT</button>
                </div>
            </form>
        </div>
    )
}

export default CreateProduct