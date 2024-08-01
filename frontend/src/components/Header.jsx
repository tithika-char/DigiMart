import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FiShoppingCart, FiLogIn, FiLogOut, FiUser } from 'react-icons/fi'

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)
    const [keyword, setKeyword] = useState('')
    const navigate = useNavigate()

    const userInfo = null // replace with actual user info logic
    const cartItems = [] // replace with actual cart items logic

    const handleSearch = (e) => {
        e.preventDefault()
        if (keyword) {
            navigate(`/search/${keyword.trim()}`)
            setKeyword('')
        } else {
            navigate('/')
        }
    }

    return (
        <nav className="bg-gray-800 p-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <Link to="/" className="text-white text-2xl font-extrabold">
                        DigiMart
                    </Link>
                    <input
                        type="text"
                        placeholder="Search"
                        className="ml-4 p-2 rounded-md bg-gray-700 text-white hidden sm:block"
                        value={keyword}
                        onChange={e => setKeyword(e.target.value)}
                    />
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-md hidden sm:block ml-2"
                        onClick={handleSearch}>
                        Search
                    </button>
                </div>

                <div className="hidden sm:flex items-center space-x-4">
                    <Link to="/cart" className="text-white flex items-center">
                        <FiShoppingCart className="mr-1" />
                        Cart
                        </Link>
                        <div className="hidden sm:flex items-center space-x-4">
                  
                 <div className="relative group">
                        <button  onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                    className="text-white flex items-center"> <FiUser className="mr-1" />Profile</button> 
                        

                        <ul
                    className={`absolute ${isProfileMenuOpen ? 'block' : 'hidden'
                        } bg-gray-800 p-2 mt-2 space-y-2 text-white border rounded-md`}
                >
                    <li>
                        <Link to="/profile">
                            <FiUser className="mr-1" />
                            Profile
                        </Link>
                    </li>
                    <li>
                        <Link >
                            <FiLogOut className="mr-1" />
                            Logout
                        </Link>
                    </li>
                </ul>
                </div>
                </div>
                   

               
                        <Link className='flex items-center' to="/login">
                            <FiLogIn className="mr-1 text-white" />
                            <button className="text-white">Sign In</button>
                        </Link>
                
                </div>

                <div className="sm:hidden">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-white text-xl focus:outline-none"
                    >
                        ☰
                    </button>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="mt-4 sm:hidden">
                    <input
                        type="text"
                        placeholder="Search"
                        className="p-2 rounded-md bg-gray-700 text-white w-full mb-2"
                        value={keyword}
                        onChange={e => setKeyword(e.target.value)}
                    />
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-md w-full mb-2"
                        onClick={handleSearch}>
                        Search
                    </button>
                    <div className="space-y-2">
                        <Link to="/cart" className="text-white flex items-center">
                            <FiShoppingCart className="mr-1" />
                            Cart
                            </Link>
                            <Link to="/profile" className="text-white flex items-center">
                        <FiUser className="mr-1" />
                        Profile
                         </Link>

                         <Link to="/logout" className="text-white flex items-center">
                        <FiLogOut className="mr-1" />
                        Logout
                         </Link>

                     
                            <Link className='flex items-center' to="/login">
                                <FiLogIn className="mr-1 text-white" />
                                <button className="text-white">Sign In</button>
                            </Link>
                    </div>
                </div>
            )}
        </nav>

        
    )
}
