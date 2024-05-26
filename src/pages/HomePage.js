import React, { useState } from "react";
import Header from "../components/Header";
import ResourceList from "../components/ResourceList";
import "./homepage.css";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("Resources");

  return (
    <div>
      <Header />
      <nav className="navbar">
        <a
          className={"nav-link" + (activeTab === "Resources" ? " active" : "")}
          onClick={() => setActiveTab("Resources")}
        >
          Resources
        </a>
        <a
          className={"nav-link" + (activeTab === "Requests" ? " active" : "")}
          onClick={() => setActiveTab("Requests")}
        >
          Requests
        </a>
        <a
          className={"nav-link" + (activeTab === "Users" ? " active" : "")}
          onClick={() => setActiveTab("Users")}
        >
          Users
        </a>
      </nav>
      <div className="homepage-wrapper">
        {activeTab === "Resources" && <ResourceList />}
        {activeTab === "Requests" && <div>Requests Content</div>}
        {activeTab === "Users" && <div>Users Content</div>}
      </div>
    </div>
  );
};

export default HomePage;
