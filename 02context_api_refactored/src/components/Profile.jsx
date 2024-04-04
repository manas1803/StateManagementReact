import React from "react";
import { useTheme } from "../context/theme";

export const Profile = () => {
  const { toggleTheme } = useTheme();
  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};
