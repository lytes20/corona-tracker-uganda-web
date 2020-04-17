import React from 'react';

function DateTime() {
  let today = new Date();
  let date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
  let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

  return (
    <div>
      <h2>
        Today's Date: <span> {date} </span>
      </h2>
      <h2>
        Current time: <span>{time}</span>
      </h2>
    </div>
  );
}

export default DateTime;
