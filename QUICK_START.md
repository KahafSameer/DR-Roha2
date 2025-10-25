# 🚀 Quick Start Guide

Welcome! This guide will help you get the romantic website up and running in minutes.

## ⚡ Fast Setup

### 1. Add Your Music (Optional)
1. Download a romantic lofi track
2. Rename it to `romantic-lofi.mp3`
3. Place it in `assets/music/romantic-lofi.mp3`

### 2. Open the Website
Simply double-click `index.html` or open it in your web browser!

That's it! Your website is ready to view.

## 🎯 What You Get

✅ Hero section with greeting
✅ Photo galleries (your photos are already loaded!)
✅ Poetic messages in Urdu, French, and English
✅ Countdown timer since January 1, 2024
✅ Dark mode toggle
✅ Music controls
✅ Hidden easter egg (click the heart 3 times!)
✅ Responsive design for all devices

## 🎨 Features to Explore

### ✨ Try These:
1. **Click the heart icon** 3 times for a surprise
2. **Toggle dark mode** using the button in the top-right corner
3. **Click any photo** to view it in fullscreen
4. **Play the music** using the play button
5. **Scroll down** to see the poetic messages
6. **Hover over photos** to see the zoom effect

## 📝 Customization

### Change the Countdown Date
Open `script.js` and find line ~142:
```javascript
const startDate = new Date('2024-01-01'); // Change this
```

### Add Your Own Messages
Open `script.js` and modify the `POETIC_CAPTIONS` object around line 3.

### Change Colors
Open `styles.css` and modify the CSS variables at the top.

## 🌐 Sharing Your Website

### Option 1: Local File
Just share the `index.html` file along with the `assets` folder.

### Option 2: GitHub Pages (Free!)
1. Create a GitHub account
2. Create a new repository
3. Upload all files
4. Go to Settings → Pages
5. Select `main` branch and `/ (root)`
6. Your site will be live at `yourusername.github.io/repository-name`

### Option 3: Netlify (Easiest!)
1. Go to netlify.com
2. Drag and drop your entire project folder
3. Your site is live instantly!

## 💡 Tips

- Photos should be in JPG format for best compatibility
- Compress images for faster loading
- Test on mobile devices for best experience
- Share the link with Roha for a romantic surprise!

## ❓ Troubleshooting

**Music not playing?**
- Check if the file is named correctly: `romantic-lofi.mp3`
- Some browsers require user interaction before playing audio

**Photos not showing?**
- Make sure images are in `assets/her/` and `assets/we/` folders
- Check file names match those in `script.js`

**Dark mode not working?**
- Your browser must support local storage
- Try refreshing the page

## 🎁 What's Special?

This website includes:
- 💖 Floating hearts animation
- 🌹 Falling rose petals (when you trigger the easter egg)
- 🎉 Confetti animation
- 🎨 Smooth fade-in animations
- 📱 Perfect on all screen sizes

---

Need help? Check the full README.md for detailed documentation.

Enjoy your romantic website! 💕
