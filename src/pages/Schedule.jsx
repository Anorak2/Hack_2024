import React, { useState, useEffect } from 'react';
import StaffList from "../components/StaffList"
import "../css/schedule.css"

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
        <td>{staff.name}</td> {/* Render staff name */}
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

  const handleSubmit = async () => {
    // Assuming you have staff member IDs stored in staffMembers array
    staffMembers.forEach(async (staff, index) => {
      const { _id } = staff;
      const daysWorked = selectedDays[index] || {}; // Get selected days for the staff member
      try {
        await fetch(`http://localhost:3001/api/staff/${_id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(daysWorked),
        });
        console.log(`Updated schedule for staff member ${staff.name}`);
      } catch (error) {
        console.error(`Error updating schedule for staff member ${staff.name}:`, error);
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
