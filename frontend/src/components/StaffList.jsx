import React, { useState, useEffect } from 'react';
import axios from 'axios';

function StaffList() {
  const [staffMembers, setStaffMembers] = useState([]);

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/staff');
        setStaffMembers(response.data);
      } catch (error) {
        console.error('Failed to fetch staff:', error);
      }
    };

    fetchStaff();
  }, []);

  return staffMembers
}

export default StaffList;
