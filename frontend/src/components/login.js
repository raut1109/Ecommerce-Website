import React, { useState } from 'react';
import axios from 'axios';

const SendDataButton = () => {
 const [data, setData] = useState({ name: '', email: '' });

    const GetData = async () => {
        // Fetch data from the Node.js server when the component mounts
        axios
            .get('http://localhost:3000/api/user')
            .then((response) => {
                setData(response.data);
                const finaldata = JSON.stringify(response.data);
                console.log(finaldata);
                  

            })
            .catch((err) => {
                console.log(err)
            });
    };


    const LoginUser = async () => {
        console.log(data);

        try {

         const response = await axios.post('http://localhost:3000/api/user',data)
         const {token} = response.data;
         const {id} = response.data;

console.log(`ID ${id}` , `TOKEN ${token}`);
 localStorage.setItem('userId', id);

        //  axios.defaults.headers['Authorization'] = 'Bearer '+token ;

        

                console.log('Response from server:', response.data);
            setData({ name: '', email: '' })
            // if(response){
            //     window.location.href ='/dashboard';
            // } 
        
        } catch (error) {
            console.log(error);
        }
};


    return (
        <>
            <div className="App">
                <h1>React SendDataButton</h1>

                <input type='text' placeholder='Name' onChange={(e) => setData((prevDetails) => ({ ...prevDetails, name: e.target.value }))} value={data.name} ></input>

                <input type='text' placeholder='Email' onChange={(e) => setData((prevDetails) => ({ ...prevDetails, email: e.target.value }))} value={data.email}></input>

                <button onClick={LoginUser}>Login</button>
                {/* <button onClick={GetData}>getData</button> */}


            </div>
            
            <div>
                
            </div>

        </>

    );
};

export default SendDataButton;

