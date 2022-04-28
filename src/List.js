import React from "react";
import { useState } from "react";
const List = () => {
  return (
    <div className="color_box">
      <p>color</p>
    </div>
  );
};
// const getUsers = async () => {
//   setStatus({ ...status, loading: true, found: false, error: false });
//   try {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
//     console.log(response.status);
//     if (response.status >= 200 && response.status < 300) {
//       const users = await response.json();
//       console.log(users);
//       setUsers([...users]);
//       setStatus({ ...status, loading: false, found: true, error: false });
//     }
//   } catch (e) {
//     setStatus({ ...status, loading: false, found: false, error: true });
//   }
// };
export default List;
