import { useState } from "react";
import axios from 'axios';
import "../css/form.css"

axios.defaults.baseURL = 'http://localhost:3001';


const Manage = () => {
    const [formData, setFormData] = useState({firstName: "", lastName: "", phoneNumber: "", email: "",
     idNum: "", address: "", city: "", state: "", jobClass: "",  jobRank: ""});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
      };

    const handleSubmit = async (event) => {
        //event.preventDefault();
        //alert(`fname: ${formData.firstName},lname: ${formData.lastName} , Email: ${formData.email}, pnum: ${formData.phoneNumber}, id ${formData.idNum}, ad: ${formData.address}, city: ${formData.city}, st: ${formData.state}, jc: ${formData.jobClass}, jr: ${formData.jobRank} `);
        try {
            const response = await axios.post('/api/staff', formData);
            console.log('Response:', response.data);
            // Handle successful response (if needed)
        } catch (error) {
            console.error('Error:', error);
            // Handle error (if needed)
        }
    };

    return(
    <form onSubmit={handleSubmit}>
        <ul style={{backgroundColor:"white"}}>
            <li>
                <label htmlFor="firstName">First Name: </label>
                <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange}/>
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange}/>
            </li>
            <li>
                <label htmlFor="phoneNumber">Phone Number: </label>
                <input type="text" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange}/>
                <label htmlFor="idNum">ID Number:</label>
                <input type="text" id="idNum" name="idNum" value={formData.idNum} onChange={handleChange}/>
            </li>
            <li>
                <label htmlFor="jobClass">Job Class: </label>
                <input type="text" id="jobClass" name="jobClass" value={formData.jobClass} onChange={handleChange}/>
                <label htmlFor="jobRank">Job Rank: </label>
                <input type="text" id="jobRank" name="jobRank" value={formData.jobRank} onChange={handleChange}/>
            </li>
            <li>
                <label htmlFor="address">Address: </label>
                <input type="text" id="address" name="address" value={formData.address} onChange={handleChange}/>
            </li>
            <li>
                <label htmlFor="city">City: </label>
                <input type="text" id="city" name="city" value={formData.city} onChange={handleChange}/>
                <label htmlFor="state">State: </label>
                <input type="text" id="state" name="state" value={formData.state} onChange={handleChange}/>
            </li>
        </ul>
      <button type="submit">Submit</button>
    </form>
    );
}
export default Manage;