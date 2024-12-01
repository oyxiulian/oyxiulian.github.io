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
    <button id="giveMeFiveButton" class="btn">Give Me Five!</button>
    <div id="fireworks"></div>
</div>

<script>
document.getElementById('giveMeFiveButton').addEventListener('click', function() {
    const fireworksContainer = document.getElementById('fireworks');
    const buttonRect = this.getBoundingClientRect();
    const centerX = buttonRect.left + buttonRect.width / 2;
    const centerY = buttonRect.top + buttonRect.height / 2;
    for (let i = 0; i < 10; i++) {
        const firework = document.createElement('div');
        firework.classList.add('firework');
        firework.style.left = `${centerX}px`;
        firework.style.top = `${centerY}px`;
        const randomColor = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 1)`;
        firework.style.background = `radial-gradient(circle, ${randomColor}, transparent)`;
        fireworksContainer.appendChild(firework);
        setTimeout(() => {
            fireworksContainer.removeChild(firework);
        }, 1000);
    }
});
</script>
<link rel="stylesheet" href="/assets/css/give-me-five.css">