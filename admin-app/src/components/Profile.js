
import React from 'react';
import './Profile.css'; // Import your CSS file for styling

const Profile = ({ darkMode }) => {
  // Sample user data
  const user = {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    location: 'New York, USA',
    joined: 'June 2023',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero eget erat consequat.'
  };

  const handleEditProfile = () => {
    // Handle edit profile action (e.g., navigate to edit profile page)
    console.log('Edit profile clicked');
  };

  return (
    <div className={`profile ${darkMode ? 'dark' : 'light'}`}>
      <div className="profile-header">
        <h1>User Profile</h1>
        <button className="edit-button" onClick={handleEditProfile}>Edit Profile</button>
      </div>
      <div className="profile-content">
        <div className="profile-info">
          <div className="profile-avatar">
            <img src="https://via.placeholder.com/150" alt="User Avatar" />
          </div>
          <div className="profile-details">
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Location: {user.location}</p>
            <p>Joined: {user.joined}</p>
          </div>
        </div>
        <div className="profile-bio">
          <h3>About Me</h3>
          <p>{user.bio}</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
