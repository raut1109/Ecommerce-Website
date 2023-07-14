import React, { useEffect, useState } from 'react'

const LandingPage = () => {
  const [data, setData] = useState([])

  useEffect(() => {

    console.log("useEffect is called");
    const allData = async () => {
      try {
        const responce = await fetch('https://fakestoreapi.com/products')
        var data = await responce.json();
        setData(data)
        data.forEach(product => {
          console.log(product);
        });
      }
      catch (error) {
        console.log(error);
      }
    }
    allData();

  }, [])

 

  return (

    <>
      <div className='bg-warning'>

        <div className='d-flex flex-wrap justify-content-center  '>
          {data.map((product, index) => {
            return (
              <div className='border border-danger iw  h-auto   d-flex flex-column align-items-center justify-content-center rounded' key={index}>
                <img className='h-25 w-25' src={product.image} alt='Image'></img>
                <h5>{product.title}</h5>
                <p>{product.price}</p>
                {/* <p>Rating:{product.rating.rate} {product.rating.count}Peoples Rate</p> */}
                {/* {renderRatingStars(product.rating.rate)} */}
              </div>
            )
          }

          )}
        </div>
       

      </div>
    </>
  )
}

export default LandingPage