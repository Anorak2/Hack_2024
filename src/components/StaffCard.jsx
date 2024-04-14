import React from 'react';
import StaffList from "./StaffList"

function StaffCard() {
  const staffMembers = StaffList();

  return (
    <div>
        {staffMembers.map(member => (
            <div className="staff-card" key={member._id}>
                <h3>{member.firstName} {member.lastName} ({member.jobTitle})</h3>
                <p>Phone: {member.phoneNumber}, Email: {member.email}</p>
                <p>Address: {member.address}, {member.city} {member.state}</p>
                
            </div>
        ))}
    </div>
);
}

export default StaffCard;
