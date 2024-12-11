import React, { useState } from "react";

const AddData = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    work: "",
    charge: "",
    paid: "",
    remaining: "",
    User: "",  // This will be the ObjectId of the user
  });

   const userId = localStorage.getItem('userId');
   formData.User = userId;

  const getId = () =>{
    const userId = localStorage.getItem('userId');
    console.log(`loged user id : ${userId}`);
  }



  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Log data to the console (you can replace this with your API call)
    console.log("Form Data Submitted:", formData);
    
    // Example of sending the data to a backend (axios or fetch)
    // try {
    //   const response = await axios.post('http://localhost:3000/api/datas', formData);
    //   console.log(response.data);
    // } catch (error) {
    //   console.error('Error submitting data:', error);
    // }

    // Reset form after submission (optional)
 

    setFormData({
      work: "",
      charge: "",
      paid: "",
      remaining: "",
      User: "",
    });
  };

  return (

<>
<button onClick={getId}>Get user id</button>
     <div>
         <h1>Create Data Entry</h1>
    </div>

    <div className="addDataForm">
   
      <form onSubmit={handleSubmit}>
        <div>
          <label>Work:</label>
          <input
            type="text"
            name="work"
            value={formData.work}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Charge:</label>
          <input
            type="number"
            name="charge"
            value={formData.charge}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Paid:</label>
          <input
            type="number"
            name="paid"
            value={formData.paid}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Remaining:</label>
          <input
            type="number"
            name="remaining"
            value={formData.remaining}
            onChange={handleChange}
            required
          />
        </div>
        {/* <div>
          <label>User ID:</label>
          <input
            type="text"
            name="User"
            value={formData.User}
            onChange={handleChange}
            required
          />
        </div> */}
        <button type="submit">Submit</button>
      </form>
   
    </div>
    </>
  );
};

export default AddData;
