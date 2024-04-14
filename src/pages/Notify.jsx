<<<<<<< HEAD
import React from "react";
// import axios from 'axios';
||||||| 42cf0d7
=======
import React from 'react';
import StaffCard from '../components/StaffCard';

>>>>>>> 11f1e8b00f340df02b74ad75c3559fc1604afcc3

const Main = () => {

    const sendEmail = async () => {
        console.log("yoooooo");
        fetch("http://localhost:8080/mail")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }))
        .catch(err => err);
    };

    return(
    <div className="Manage">
<<<<<<< HEAD
        <button onClick={sendEmail}>hallo
||||||| 42cf0d7
        <button>hallo
=======
        <h1>Notification Panel</h1>
        <StaffCard/>
        <button>hallo
>>>>>>> 11f1e8b00f340df02b74ad75c3559fc1604afcc3
        </button>
    </div>
    );
}
export default Main;