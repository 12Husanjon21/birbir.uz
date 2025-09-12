import React from "react";
// import { deleteData } from "../../utils/utils";

export default function LogOut({ userId }) {
  const deleteUserProfile = async (userId) => {
    // deleteData(`/api/users/${userId}`);
    window.location.href = "/";
  };

  return <button onClick={() => deleteUserProfile(userId)}>LogOut</button>;
}
