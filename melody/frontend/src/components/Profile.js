import React from 'react';

function Profile() {
  // TODO: Fetch user data from API
  const user = { name: 'John Doe', email: 'john@example.com' };

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default Profile;
