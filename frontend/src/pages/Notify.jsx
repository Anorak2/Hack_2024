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
        selectedStaff.forEach(({ email, name, sunday, monday, tuesday, wednesday, thursday, friday, saturday }) => {
            fetch(`http://localhost:3001/mail?to=${email}&name=${name}&sunday=${sunday}&monday=${monday}&tuesday=${tuesday}&wednesday=${wednesday}&thursday=${thursday}&friday=${friday}&saturday=${saturday}`)
                .then(res => res.text())
                .then(res => console.log(`Email sent to (${email}):`, res))
                .catch(err => console.error(`Error sending email to (${email}):`, err));
        });
    };

    return (
        <>
            <h1>Notification Panel</h1>
            <StaffCard onCheck={handleCheckboxChange}/>    
            <button style={{marginBottom:"100px"}} onClick={sendEmails}>Notify</button>
        </>
    );
}

export default Notify;
