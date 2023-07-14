import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='d-flex align-items-center justify-content-between w-100 border border-primary'>


          


            

            <div className='d-flex align-items-center justify-content-around border border-dark w-25'>
                 <Link className='lim' to="/Card">Card</Link>
                <Link className='lim' to="About">About</Link>
                <Link className='lim' to="/Help">Help</Link>
            </div>


            <div className='d-flex align-items-center justfy-content-around border border-warning w-50  '>
                <div className='mx-2 w-100'><input className='w-100 mx-5' placeholder='Search here you want'></input></div>

                <div className=' '><button className='mx-5'>Search</button></div>
            </div>


            <div className='d-flex align-items-end justify-content-around border border-success w-25'>
                <Link className='lim' to="/Card">Card</Link>
                <Link className='lim' to="About">About</Link>
                <Link className='lim' to="/Help">Help</Link>
            </div>

{/* 
                <div className='col-sm-4 border border-dark'>
                    <Link className='lim' to="/Card">Card</Link>
                    <Link className='lim' to="About">About</Link>
                    <Link className='lim' to="/Help">Help</Link>
                </div>


                <div className='d-flex border border-warning'>
                    <div className='mx-2'><input placeholder='Search here you want'></input></div>
                    <div className='mx-1'><button>Search</button></div>
                </div>


                <div className='d-flex align-items-center justify-content-between border border-success w-25'>
                    <Link className='lim' to="/Card">Card</Link>
                    <Link className='lim' to="About">About</Link>
                    <Link className='lim' to="/Help">Help</Link>
                </div> */}



         


           


        </div>
    )
}

export default Navbar