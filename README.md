# 💖 For Roha - A Romantic Website

A beautiful, romantic website built with pure HTML, CSS, and JavaScript to celebrate love and create lasting memories. This project is a tribute to Roha, featuring poetic messages, photo galleries, and delightful interactive elements.

## ✨ Features

### 🎨 Visual Design
- **Gradient Backgrounds**: Soft pink, lavender, and midnight blue gradients
- **Glassmorphism UI**: Modern frosted glass effects throughout
- **Dark Mode**: Toggle between light and dark themes
- **Floating Hearts**: Animated hearts floating across the screen
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop

### 💖 Hero Section
- Personalized greeting message
- Background music with play/pause controls
- Elegant typography with gradient effects
- Smooth entrance animations

### 📸 Photo Gallery
- Two sections: "Her Smile" and "Us Together"
- Automatic image loading from asset folders
- Poetic captions for each photo
- Hover effects with zoom and glow
- Click-to-enlarge modal view
- Keyboard navigation (Arrow keys, Escape)

### 💝 Poetic Messages
- Urdu, French, and English poetic lines
- Elegant typography using Noto Nastaliq Urdu and Dancing Script fonts
- Scroll-in animations for dramatic effect

### ⏰ Countdown Timer
- Days since 2024-01-01
- Flip-style animation for digits
- Auto-updates every second

### 🎉 Hidden Easter Egg
- Click the heart icon 3 times to reveal a surprise
- Confetti animation
- Rose petals falling effect
- Special proposal message

### 🌙 Additional Features
- Dark mode toggle with local storage persistence
- Smooth scrolling throughout the page
- GSAP animations for professional-grade effects
- Font Awesome icons

## 📁 Project Structure

```
roha/
├── index.html              # Main HTML file
├── styles.css              # All styles and animations
├── script.js               # Interactive functionality
├── README.md               # This file
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Pages deployment
└── assets/
    ├── her/                # Her photos
    ├── we/                 # Couple photos
    └── music/
        └── romantic-lofi.mp3  # Background music
```

## 🚀 Setup Instructions

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Optional: Local web server for testing

### Local Setup

1. **Clone or download this repository**
   ```bash
   cd roha
   ```

2. **Add your assets**
   - Place photos in `assets/her/` for her photos
   - Place photos in `assets/we/` for couple photos
   - Add music file at `assets/music/romantic-lofi.mp3`

3. **Open the website**
   - Option 1: Open `index.html` directly in your browser
   - Option 2: Use a local server (recommended):
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (with http-server)
     npx http-server
     ```
   - Visit `http://localhost:8000` in your browser

## 🌐 Deployment to GitHub Pages

### Automatic Deployment
This project includes a GitHub Actions workflow that automatically deploys to GitHub Pages on every push to the `main` branch.

### Manual Deployment

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - For Roha"
   git branch -M main
   git remote add origin https://github.com/yourusername/roha.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Under "Source", select `main` branch and `/ (root)` folder
   - Click Save
   - Your site will be available at `https://yourusername.github.io/roha`

### Custom Domain (Optional)
1. Add a `CNAME` file in the root directory with your domain
2. Configure DNS settings with your domain provider

## 🎨 Customization

### Changing the Date
Edit the countdown start date in `script.js`:
```javascript
const startDate = new Date('2024-01-01'); // Change this date
```

### Updating Poetic Messages
Edit the `POETIC_CAPTIONS` object in `script.js`:
```javascript
const POETIC_CAPTIONS = {
    her: ["Your message 1", "Your message 2", ...],
    we: ["Your message 1", "Your message 2", ...]
};
```

### Modifying Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-pink: #ff6b9d;
    --primary-purple: #a855f7;
    --primary-blue: #3b82f6;
    /* ... */
}
```

### Adding More Sections
1. Add HTML in `index.html`
2. Style in `styles.css`
3. Add any interactive functionality in `script.js`

## 🎵 Music Setup

1. Obtain or create a romantic lofi track
2. Convert to MP3 format
3. Place it at `assets/music/romantic-lofi.mp3`
4. The music will automatically load and can be controlled via the toggle button

**Note**: Make sure you have the rights to use the music file.

## 📱 Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🛠️ Technologies Used

- **HTML5**: Structure and semantics
- **CSS3**: Styling, animations, and responsive design
- **JavaScript (ES6+)**: Interactive functionality
- **GSAP**: Professional animations
- **Font Awesome**: Beautiful icons
- **Google Fonts**: Typography (Dancing Script, Poppins, Noto Nastaliq Urdu)

## 💡 Tips

1. **Image Optimization**: Compress images before uploading for faster load times
2. **Music File Size**: Keep music files under 5MB for better performance
3. **Responsive Images**: Consider using different image sizes for mobile
4. **Browser Storage**: Dark mode preference is saved in localStorage
5. **Performance**: The site uses lazy loading for images

## ❤️ Special Touches

- **Easter Egg**: Click the heart 3 times for a surprise proposal message
- **Smooth Animations**: GSAP-powered animations throughout
- **Accessibility**: Semantic HTML and ARIA labels
- **SEO Friendly**: Proper meta tags and structure

## 📝 License

This is a personal project created with love. Feel free to use it as inspiration for your own romantic projects!

## 🙏 Acknowledgments

- GSAP for amazing animation capabilities
- Font Awesome for beautiful icons
- Google Fonts for elegant typography
- The GitHub Pages service for hosting

---

Made with 💖 by someone who codes in the language of love

For Roha, always and forever ❤️
