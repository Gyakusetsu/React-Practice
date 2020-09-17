import React, { useEffect } from 'react';
import './App.css';
import GitHubCalendar from 'github-calendar';

function App() {

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
    <div class="main-div">
      <div class="first-half">
        <img class="life-code" src="59980531_p0.png" alt="life-code" />
      </div>
      <div class="second-half">
        <span class="calendar-header">My GitHub Calendar</span>
        <div class="calendar">
          Loading the data just for you.
      </div>
        <span class="intro">Hi, I'm Reymar</span>
        <p class="about-me">I am a 21-year old software engineer trying to make the cyber world a bit better. How? By
        contributing to
        open-source projects and being passionate about my career.
        I am an anime and music lover, workaholic, I love games, computer games and I am always looking forward to new
        challenges. Do you have one for me? </p>

        <div class="button-links">
          <button class="button-email ripple" onClick={mailClick}>
            <i class="fa fa-envelope"></i>
          &nbsp;EMAIL ME</button>
          <button class="button-github ripple" onClick={githubClick}>
            <i class="fa fa-github"></i>
          &nbsp;GYAKUSETSU </button>
        </div>
      </div>
    </div>
  );
}

export default App;
