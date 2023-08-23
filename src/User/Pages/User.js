import React from "react";

import UsersList from "../components/UsersList";

const User = () => {
  const USERS = [
    {
      id: "u1",
      name: "Himanshu Chauhan",
      image:
        "https://i0.wp.com/www.pixelimage.tv/CONTENT_wp-content/uploads/2018/09/IMG_3133.jpg?fit=4032%2C3024",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default User;
