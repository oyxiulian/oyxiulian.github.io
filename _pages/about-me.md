---
layout: archive
title: ""
permalink: /about-me/
author_profile: true
---

## Hi! 🤗
Thanks for your time and interest in my work!

---

## About Me

- **Longest Hike**: 23.03 km
- **Highest Climb**: 3,966 m (Cangshan)
- **Skills Keen to Sharpen**: Skateboarding & Coding
- **Favorite Movie**: *The Best of Youth*
- **Tagline on Social Media**: 
"Faith is the reality of what is hoped for, the proof of what is not seen."
- **Things Cherished Most**: Sunshine, Laughter, and Love
If you have at least one of them (sunshine, laughter, or love), **give me a five** by clicking the button below:
<div style="position: relative;">
  <button id="highFiveButton" style="padding: 10px; background-color: #ffcc00; color: #000; font-size: 16px; border: none; border-radius: 5px; cursor: pointer;">High Five!</button>
  <img id="highFiveEffect" src="https://example.com/high-five-animation.gif" alt="High Five Effect" style="position: absolute; top: -50px; left: 50%; transform: translateX(-50%); display: none; width: 100px; height: auto;"/>
  <span id="highFiveCount">High Fives Given: 0</span>
</div>

<script>
  let highFiveCount = 0;
  const highFiveButton = document.getElementById("highFiveButton");
  const highFiveCountDisplay = document.getElementById("highFiveCount");
  const highFiveEffect = document.getElementById("highFiveEffect");

  highFiveButton.addEventListener("click", function() {
    highFiveCount++;
    highFiveCountDisplay.innerText = `High Fives Given: ${highFiveCount}`;
    highFiveEffect.style.display = "block";
    setTimeout(() => {
      highFiveEffect.style.display = "none";
    }, 1000);
  });
</script>
