import { useState } from "react";

const Manage = () => {
    const [formData, setFormData] = useState({firstName: "", lastName: "", phoneNumber: "", email: "",
     idNum: "", address: "", city: "", state: "", jobClass: "",  jobRank: "", name:""});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
      };

    const handleSubmit = (event) => {
        //event.preventDefault();
        alert(`f: ${formData.firstName},l: ${formData.lastName} , Email: ${formData.email}, Message: ${formData.message}`
        );
    };
    return(
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name:</label>
      <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange}/>
      <label htmlFor="lastName">Last Name:</label>
      <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange}/>
        
      <label htmlFor="phoneNumber">Phone Number:</label>
      <input type="text" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange}/>

      <label htmlFor="email">Email:</label>
      <input type="text" id="email" name="email" value={formData.email} onChange={handleChange}/>

     <label htmlFor="idNum">ID Number:</label>
      <input type="text" id="idNum" name="idNum" value={formData.idNum} onChange={handleChange}/>

      <label htmlFor="jobClass">Job Class:</label>
      <input type="text" id="jobClass" name="jobClass" value={formData.jobClass} onChange={handleChange}/>
      <label htmlFor="jobRank">Job Rank:</label>
      <input type="text" id="jobRank" name="jobRank" value={formData.jobRank} onChange={handleChange}/>

      <label htmlFor="city">City:</label>
      <input type="text" id="city" name="city" value={formData.city} onChange={handleChange}/>
      <label htmlFor="state">State:</label>
      <input type="text" id="state" name="state" value={formData.state} onChange={handleChange}/>

      <button type="submit">Submit</button>
    </form>
    );
}
export default Manage;