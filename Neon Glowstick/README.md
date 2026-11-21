# Neon GlowStick

An interactive neon glowstick built with HTML, CSS, and JavaScript, powered by **GSAP** (`gsap.to()`) for smooth toggle animations. Clicking the button switches the glowstick on and off—lighting up the bulb with a lime green glow, brightening the glass glare, and igniting the side LED strips and dial in neon red.

## Project Structure

- `index.html` — Page structure, GSAP CDN script, and `glowstick.js` link
- `glowstick.css` — Layout, dark theme styling, glass glare, and LED strip positioning
- `glowstick.js` — Button click toggle and GSAP glow animations

## How to Run

1. Keep `index.html`, `glowstick.css`, and `glowstick.js` in the same folder.
2. Open `index.html` in your browser (or launch it with Live Server in VS Code).
3. Click the button inside the holder dial to toggle the neon lights on and off.

## Customization & Debugging

- **Bulb & text glow color:** Update `#39ff14` in `glowstick.js` and `glowstick.css`.
- **LED strip & dial glow color:** Update `#ff073a` in `glowstick.js`.
- **Animation speed:** Adjust `duration` (in seconds) inside the `gsap.to()` calls in `glowstick.js`.
- **Nothing animates on click:** Check DevTools (`F12` > **Console**) to make sure GSAP loaded and there are no typos in `#powerBtn` or `.led1`/`.led2`.