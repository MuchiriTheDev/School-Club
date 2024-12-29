// import React from "react";
import { useNavigate } from "react-router-dom";
//import Sidebar from "../Components/Sidebar";
import { useEffect, useState } from "react";
//import UpdatePage from "../Components/UpdatePage";
//import Delete from "../Components/Delete";
//import Settings from "../Components/Settings";
//import ErrorPage from "../Components/ErrorPage";

const ProfilePage = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState("profile");

  useEffect(() => {
    console.log(page);
  }, [page]);

  return (
    <div className="fixed top-0 left-0 w-full h-screen flex">
      {/* Sidebar component to control which page is displayed */}
      <Sidebar setPage={setPage} />

      {/* Content section */}
      <div className="flex-1 h-full overflow-y-auto justify-center items-center bg-slate-100 p-4">
        {page === "profile" ? (
          <UpdatePage  />
        ) : page === "delete" ? (
          <Delete setPage={setPage} />
        ) : (
          <ErrorPage />
        )}
      </div>
    </div>
  );
};

export default ProfilePage;

