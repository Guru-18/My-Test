import React from 'react'
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Tooltip } from '@mui/material';
import { useNavigate } from 'react-router';
import { deleteProduct } from '../reducers/productSlice';
import { useDispatch } from 'react-redux';

const TableTd = ({ id, productName, productPrice, productDesc }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <tr key={id}>
            <td>{productName}</td>
            <td>${productPrice}</td>
            <td>{productDesc}</td>
            <td>
                <Tooltip title="Update Product">
                    <ModeEditIcon
                        onClick={() => navigate(`/product/update/${id}`)}
                    />
                </Tooltip>
                <Tooltip title="Delete Product">
                    <DeleteIcon
                        onClick={() => dispatch(deleteProduct(id))}
                    />
                </Tooltip>
            </td>
        </tr>
    )
}

export default TableTd