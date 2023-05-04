import React from 'react';

function UserInfo() {
  return (
    <div className='userInfo d-flex justify-content-between align-items-center'>
      <h4 style={{ color: 'white' }}>Mikael</h4>
      <div style={{ width: '50px', height: '50px', backgroundColor: 'grey', border: 'solid 3px #f20e89', borderRadius: '5px' }}></div>
    </div>
  );
}

export default UserInfo;