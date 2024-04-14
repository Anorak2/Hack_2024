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

  const handleCheckboxChange = (rowIndex, day, isChecked) => {
    setSelectedDays((prevSelectedDays) => ({
      ...prevSelectedDays,
      [rowIndex]: {
        ...prevSelectedDays[rowIndex],
        [day]: isChecked
      }
    }));
  };

  const handleSubmit = async (event) => {
  
    // Initialize an array to store promises for each staff member update
    const updatePromises = [];
  
    staffMembers.forEach((staff, index) => {
      const { _id } = staff;
      const daysWorked = selectedDays[index] || {}; // Get selected days for the staff member
      const updatedDays = Object.fromEntries(
        Object.entries(daysWorked).map(([day, isSelected]) => [
          day.toLowerCase(), // Convert day to lowercase
          isSelected ? "True" : staff[day.toLowerCase()], // Replace "NA" with "True" if selected
        ])
      );
  
      // Construct the request promise
      const updatePromise = axios.put(`/api/staff/${_id}`, updatedDays);
      updatePromises.push(updatePromise);
    });
  
    try {
      // Wait for all update promises to resolve
      const responses = await Promise.all(updatePromises);
      console.log('Responses:', responses.map(response => response.data));
      // Handle successful responses (if needed)
    } catch (error) {
      console.error('Error:', error);
      // Handle error (if needed)
    }
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
