import React from 'react';
import StaffList from "./StaffList"
import '../css/staffcard.css'

function StaffCard({ onCheck }) {
  const staffMembers = StaffList();
  return (
    <div>
      {staffMembers.map(member => (
        <div className="staff-card-wrapper" key={member._id}>
          <div className="staff-card">
            <div className="header" style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
              <h3 style={{textAlign:'center'}}>{member.firstName} {member.lastName} ({member.jobTitle})</h3>
              <input type="checkbox" onChange={() => onCheck({ email: member.email, name: member.firstName })} />
            </div>
            <div className="details">
              <p>Phone: {member.phoneNumber}</p>
              <p>Email: {member.email}</p>
              <p>Address: {member.address}, {member.city} {member.state}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StaffCard;