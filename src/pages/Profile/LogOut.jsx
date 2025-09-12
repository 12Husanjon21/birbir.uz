import React from "react";
import { cleatBothStorage, deleteData } from "../../utils/utils";

export default function LogOut({ userId }) {
  const deleteUserProfile = async (userId) => {
    deleteData(`/api/users/${userId}`);
    cleatBothStorage();
    window.location.reload();
  };

  return <button onClick={() => deleteUserProfile(userId)}>LogOut</button>;
}
