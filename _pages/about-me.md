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
<div class="container">
    <button id="clapButton" class="btn">GIVE ME FIVE!</button>
    <div id="clapsContainer"></div>
</div>

<script>
document.getElementById('clapButton').addEventListener('click', function() {
    const clapsContainer = document.getElementById('clapsContainer');
    const newClap = document.createElement('span');
    newClap.classList.add('clap');
    newClap.textContent = '+1👏';

    clapsContainer.appendChild(newClap);

    setTimeout(() => {
        clapsContainer.removeChild(newClap);
    }, 2000);
});
</script>
<link rel="stylesheet" href="/assets/css/give-me-five.css">