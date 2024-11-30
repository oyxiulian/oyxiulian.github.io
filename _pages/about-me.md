---
layout: archive
title: ""
permalink: /about-me/
author_profile: true
---

# Hi! 🤗
Thanks for your time and interest in my work!

---

### About Me

- **Longest Hike**: 23.03 km
- **Highest Climb**: 3,966 m (Cangshan)
- **Skills Keen to Sharpen**: Skateboarding & Coding
- **Favorite Movie**: *The Best of Youth*
- **Tagline on Social Media**: 
"Faith is the reality of what is hoped for, the proof of what is not seen."
- **Things Cherished Most**: Sunshine, Laughter, and Love

---

### Interactive Corner

If you have at least one of them (sunshine, laughter, or love), **give me a five** by clicking the button below:
<button id="highFiveButton" style="padding: 10px; background-color: #ffcc00; color: #000; font-size: 16px; border: none; border-radius: 5px; cursor: pointer;"> High Five!</button>  
<p id="highFiveCount">High Fives Given: 0</p >  

<script>
  let highFiveCount = 0;
  document.getElementById("highFiveButton").addEventListener("click", function() {
    highFiveCount++;
    document.getElementById("highFiveCount").innerText = `High Fives Given: ${highFiveCount}`;
  });
</script>


