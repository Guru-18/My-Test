import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import "./Products.css";
import { getAllProducts } from './../reducers/productSlice';
import TableTd from './TableTd';

const Products = () => {

    const dispatch = useDispatch();

    const { allProducts, success, error } = useSelector(state => state.products);

    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch, success, error]);

    return (
        <div className='productsContainer'>
            <table>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th>Product Desc</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {allProducts && allProducts.map(item => {
                        return <TableTd
                            key={item._id}
                            id={item._id}
                            productName={item.productName}
                            productPrice={item.productPrice}
                            productDesc={item.productDesc}
                        />
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Products