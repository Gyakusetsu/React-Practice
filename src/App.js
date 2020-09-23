import React, { useEffect, useState } from 'react';
import './App.css';
import GitHubCalendar from 'github-calendar';
import axios from 'axios';

function App() {

  const [topCatFact, setTopCatFact] = useState("");

  useEffect(() => {
    const asyncCatFacts = async () => {
      const result = await axios.get("https://cat-fact.herokuapp.com/facts");
      const topFact = result?.data?.all[0]?.text;
      setTopCatFact(topFact);
    };
    asyncCatFacts();
  });

  useEffect(() => {
    GitHubCalendar(".calendar", "gyakusetsu", { responsive: true });
  });

  const mailClick = () => {
    window.location.href = "mailto:reymarbc@gmaiil.com";
  };

  const githubClick = () => {
    window.location.href = "https://github.com/Gyakusetsu";
  }

  return (
    <div className="main-div">
      <div className="first-half">
        <img className="life-code" src="59980531_p0.png" alt="life-code" />
      </div>
      <div className="second-half">
        <span className="calendar-header">My GitHub Calendar</span>
        <div className="calendar">
          Loading the data just for you.
      </div>
        <span className="intro">Hi, I'm Reymar</span>
        <p className="about-me">I am a 21-year old software engineer trying to make the cyber world a bit better. How? By
        contributing to
        open-source projects and being passionate about my career.
        I am an anime and music lover, workaholic, I love games, computer games and I am always looking forward to new
        challenges. Do you have one for me? </p>

        <div className="button-links">
          <button className="button-email ripple" onClick={mailClick}>
            <i className="fa fa-envelope"></i>
          &nbsp;EMAIL ME</button>
          <button className="button-github ripple" onClick={githubClick}>
            <i className="fa fa-github"></i>
          &nbsp;GYAKUSETSU </button>
        </div>
        {
          topCatFact &&
          <div className="cat-fact">
            <hr style={{
              opacity: 0.3
            }} />
            <p>
              <b style={{
                fontWeight: "bold"
              }}> Cat Fact: </b>
              {topCatFact}
            </p>
          </div>
        }
      </div>
    </div>
  );
}

export default App;
