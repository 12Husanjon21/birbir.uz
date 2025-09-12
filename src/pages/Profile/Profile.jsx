import React from "react";
import { useSelector } from "react-redux";
import LogOut from "./LogOut";

export default function Profile() {
  const profileData = useSelector((state) => state.project);
  console.log(profileData);

  return (
    <div className="page-module__page--lr4UP">
      <div className="container-module__container--dFCmu favoriteContainer-module__favorite--A_e2h">
        <h1>{profileData?.user?.telegram_username}</h1>
        <LogOut userId={profileData?.user?.id}/>
      </div>
    </div>
  );
}
