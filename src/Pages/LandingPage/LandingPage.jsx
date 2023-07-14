import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landcont">
      <div className="topland">
        <div className="content">
          <h3>
            "Unlock Efficiency, Embrace Productivity: TaskGiver, Empowering
            Progress!"
          </h3>
          <Link to="/register" className="explore">
            Explore
          </Link>
        </div>
      </div>
      <div className="cardsland">
        <h3>Seamless Task Management</h3>
        <p>The TaskGiver app streamlines task allocation, ensuring efficient and organized workflow management.</p>
      </div>
      <div className="cardsland">
      <h3>Intuitive Interface</h3>
        <p>With a user-friendly interface, TaskGiver makes it easy for both task assigners and recipients to navigate and collaborate effectively.</p>
      </div>
      <div className="cardsland">
      <h3>Smart Task Assignment</h3>
        <p>The app intelligently matches tasks with the most suitable individuals based on skills, availability, and preferences, optimizing productivity.</p>
      </div>
    </div>
  );
};

export default LandingPage;
