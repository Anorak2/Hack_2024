import React, { useState } from "react";
import StaffCard from '../components/StaffCard';
import StaffList from '../components/StaffList';

const Notify = () => {

    const [selectedStaff, setSelectedStaff] = useState([]);

    const handleCheckboxChange = (email) => {
        setSelectedStaff((prevSelected) => {
            if (prevSelected.includes(email)) {
                return prevSelected.filter((item) => item !== email);
            } else {
                return [...prevSelected, email];
            }
        });
    };

    const sendEmails = async () => {
        selectedStaff.forEach(({ email, name }) => {
            fetch(`http://localhost:8080/mail?to=${email}&name=${name}`)
                .then(res => res.text())
                .then(res => console.log(`Email sent to (${email}):`, res))
                .catch(err => console.error(`Error sending email to (${email}):`, err));
        });
    };

    return (
        <div className="Manage">
            <h1>Notification Panel</h1>
            <div>
            <StaffCard onCheck={handleCheckboxChange}/>    
            </div>
            <button onClick={sendEmails}>Notify</button>
        </div>
    );
}

export default Notify;
