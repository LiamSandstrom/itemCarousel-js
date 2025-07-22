# lim-carousel

A lightweight, customizable, JavaScript carousel for sliding items or images. Built with performance and simplicity in mind.

## Features

- Arrows and dot indicators (toggleable)
- Auto-play with configurable interval
- Looping mode
- Custom slide width/height
- Smooth CSS transitions

---

## Installation

```bash
npm install lim-carousel
```

## Usage

### HTML

```bash 
<div id="my-carousel">
  <img src="1.jpg" />
  <img src="2.jpg" />
  <img src="3.jpg" />
</div>
```


### JavaScript
```bash
import itemCarousel from 'lim-carousel';

const container = document.getElementById('my-carousel');

const carousel = new itemCarousel(container, {
  width: '600px',
  height: '400px',
  showArrows: true,
  showDots: true,
  animationSpeed: 400,
  autoPlay: true,
  autoPlayInterval: 3000,
  loop: true
});

document.body.appendChild(carousel.getElement());
```
## Options 

These are the available configuration options you can pass into the `itemCarousel` constructor:

---

### width  
**Type:** `String`  
**Default:** `"400px"`  
**Description:** Width of the carousel container.

---

### height  
**Type:** `String`  
**Default:** `"400px"`  
**Description:** Height of the carousel container.

---

### animationSpeed  
**Type:** `Number`  
**Default:** `400`  
**Description:** Duration of the transition between slides, in milliseconds.

---

### showArrows  
**Type:** `Boolean`  
**Default:** `true`  
**Description:** Whether to show left/right navigation arrows.

---

### showDots  
**Type:** `Boolean`  
**Default:** `true`  
**Description:** Whether to display dot indicators for each slide.

---

### autoPlay  
**Type:** `Boolean`  
**Default:** `false`  
**Description:** Automatically cycle through slides at a set interval.

---

### autoPlayInterval  
**Type:** `Number`  
**Default:** `5000`  
**Description:** Time (in milliseconds) between autoPlay transitions.

---

### loop  
**Type:** `Boolean`  
**Default:** `false`  
**Description:** Whether the carousel should loop back to the beginning or end when navigation hits the boundary.
