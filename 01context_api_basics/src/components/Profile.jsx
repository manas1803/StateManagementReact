import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const Profile = () => {
  const { userInfo } = useContext(UserContext);
  if (userInfo === null) return <>Please login before proceeding</>;
  return (
    <>
      <div>UserName is :- {userInfo.userName}</div>
      <div>Password is :- {userInfo.password}</div>
    </>
  );
};
