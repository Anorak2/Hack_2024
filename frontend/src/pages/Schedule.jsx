import React, { useState, useEffect } from 'react';
import StaffList from "../components/StaffList"
import axios from 'axios';
import "../css/schedule.css"

axios.defaults.baseURL = 'http://localhost:3001';

const Schedule = () => {
  const [tableData, setTableData] = useState([]);
  const [selectedDays, setSelectedDays] = useState({}); // State to store selected days
  const staffMembers = StaffList()

  const headers = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const fetchData = async () => {
    const initialData = Array.from({ length: staffMembers.length }, () =>
      headers.reduce((acc, day) => {
        acc[day] = false;
        return acc;
      }, {})
    );
    setTableData(initialData);
  };

  useEffect(() => {
    fetchData();
  }, [staffMembers]); // Ensure useEffect runs when staffMembers changes

  const renderTableHeaders = () => {
    return (
      <tr>
        <th></th>
        {headers.map((header, index) => (
          <th key={index}>{header}</th>
        ))}
      </tr>
    );
  };

  const renderTableRows = () => {
    return staffMembers.map((staff, rowIndex) => (
      <tr key={rowIndex}>
        <td>{staff.firstName + " " + staff.lastName}</td> {console.log(staff)}
        {headers.map((day, cellIndex) => (
          <td key={cellIndex}>
            <input
              type="checkbox"
              style={{ padding: "0px", margin: "0px", height: "13px", width: "13px" }}
              onChange={(e) => handleCheckboxChange(rowIndex, day, e.target.checked)}
              checked={selectedDays[rowIndex] && selectedDays[rowIndex][day]}
            />
          </td>
        ))}
      </tr>
    ));
  };

  const handleCheckboxChange = (name, day, isChecked) => {
    // Find the index of the staff member by name
    const rowIndex = staffMembers.findIndex(staff => staff.firstName === name);
    setSelectedDays(prevSelectedDays => ({
      ...prevSelectedDays,
      [rowIndex]: {
        ...prevSelectedDays[rowIndex],
        [day]: isChecked
      }
    }));
  };

  const handleSubmit = async () => {
    staffMembers.forEach(async (staff) => {
      const { firstName, lastName } = staff;
      const daysWorked = selectedDays[`${firstName} ${lastName}`] || {};
      const updatedDays = Object.fromEntries(
        Object.entries(daysWorked).map(([day, isSelected]) => [
          day.toLowerCase(), // Convert day to lowercase
          isSelected ? "True" : staff[day.toLowerCase()], // Replace "NA" with "True" if selected
        ])
      );
      try {
        const response = await axios.put(`/api/staff/${firstName}/${lastName}`, updatedDays);
        console.log('Response:', response.data);
        // Handle successful response (if needed)
      } catch (error) {
        console.error('Error:', error);
        // Handle error (if needed)
      }
    });
  };
  
  
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <table>
          <thead>{renderTableHeaders()}</thead>
          <tbody>{renderTableRows()}</tbody>
        </table>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Schedule;
