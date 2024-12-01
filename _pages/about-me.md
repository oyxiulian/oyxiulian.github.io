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

<ul>
  <li class="item">
    <b>Longest Hike</b>: 23.03 km
  </li>
  <li class="item">
    <b>Highest Climb</b>: 3,966 m (Cangshan)
  </li>
  <li class="item">
    <b>Skills Keen to Sharpen</b>: Skateboarding & Coding
  </li>
  <li class="item">
    <b>Favorite Movie</b>: <i>The Best of Youth</i>
  </li>
  <li class="item">
    <b>Tagline on Social Media</b>: "Faith is the reality of what is hoped for, the proof of what is not seen."
  </li>
  <li class="item">
    <b>Things Cherished Most</b>: Sunshine, Laughter, and Love
  </li>
  <div class="description">
     If you have at least one of them, please give me a five.
  </div>
</ul>
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

    void newClap.offsetWidth;

    const buttonRect = this.getBoundingClientRect();
    const containerRect = clapsContainer.getBoundingClientRect();
    const clapRect = newClap.getBoundingClientRect();

    const offsetX = buttonRect.left - containerRect.left + buttonRect.width / 2 - clapRect.width / 2;
    const offsetY = buttonRect.top - containerRect.top - buttonRect.height / 2 - 12;

    newClap.style.left = `${offsetX}px`;
    newClap.style.top = `${offsetY}px`;

    setTimeout(() => {
        clapsContainer.removeChild(newClap);
    }, 2000);
});
</script>
<script src="/assets/js/about.js"></script>
<link rel="stylesheet" href="/assets/css/item.css">
<link rel="stylesheet" href="/assets/css/give-me-five.css">