import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

const Header = () => {
    return (
        <header>
            <div>
                <ul>
                    <li>
                        <Link to="/">Products</Link>
                    </li>
                    <li>
                        <Link to="/product/new">Create Product</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header