import React, { Fragment, useEffect } from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import Header from './Header/Header';
import Products from './Products/Products';
import CreateProduct from './CreateProduct/CreateProduct';
import UpdateProduct from './UpdateProduct/UpdateProduct';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from 'react-redux';
import { clearState } from './reducers/productSlice';

function App() {

  const { success, error } = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (success.length > 1 || error.length > 1) {
      if (success) {
        toast.success(success, {
          pauseOnHover: false
        })
      } if (error) {
        toast.error(error, {
          pauseOnHover: false
        })
      }
      setTimeout(() => {
        dispatch(clearState());
      }, 2000);
    }
  }, [dispatch, success, error])

  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path='/' exact element={<Products />} />
        <Route path='/product/new' element={<CreateProduct />} />
        <Route path='/product/update/:id' element={<UpdateProduct />} />
      </Routes>

      <ToastContainer position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        limit={2}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />

    </Fragment>
  );
}

export default App;
