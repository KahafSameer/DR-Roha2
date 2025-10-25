// ========== Configuration ==========
const POETIC_CAPTIONS = {
    her: [
        "Where coding meets poetry - You are both",
        "Your smile is my favorite compilation",
        "My heart's infinite loop: You",
        "Beauty in every pixel of you",
        "You are my masterpiece, my main function",
        "When I look at you, every bug becomes a feature ❤️"
    ],
    we: [
        "Two commits, one beautiful merge",
        "Our code is love, tested and deployed",
        "Building our forever, one memory at a time",
        "You + Me = 💕 (Our love algorithm)",
        "Every frame tells our love story",
        "Happiest when our hearts are in sync",
        "Our beautiful binary: 01=Love ❤️",
        "Every moment with you is golden runtime",
        "Two souls compiled into one perfect program",
        "Writing our forever with your hand in mine",
        "Together is my favorite deployment environment",
        "Our adventure: Building memories together",
        "Making history, one smile at a time",
        "Our love story: Chapter ∞",
        "Perfect together, like nested loops",
        "Two imperfect people, one perfect code",
        "Our happily ever after starts here",
        "Forever is our data type",
        "Building dreams on the stack of love",
        "You're my favorite variable - always constant ❤️"
    ]
};

// ========== DOM Elements ==========
const darkModeToggle = document.getElementById('darkModeToggle');
const musicToggle = document.getElementById('musicToggle');
const bgMusic = document.getElementById('bgMusic');
const heartIcon = document.getElementById('heartIcon');
const easterEggModal = document.getElementById('easterEggModal');
const closeEaster = document.getElementById('closeEaster');
const imageModal = document.getElementById('imageModal');
const floatingHearts = document.getElementById('floatingHearts');
const rosePetals = document.getElementById('rosePetals');

// ========== State Management ==========
let darkMode = false;
let musicPlaying = false;
let heartClickCount = 0;
let currentImageIndex = 0;
let allImages = [];
let currentGalleryImages = [];

// ========== Initialize App ==========
document.addEventListener('DOMContentLoaded', () => {
    initializeDarkMode();
    initializeMusic();
    initializeFloatingHearts();
    initializeCountdown();
    loadGallery();
    initializeEasterEgg();
    initializeDarkModeToggle();
    initializeImageModal();
    startRosePetals();
});

// ========== Dark Mode ==========
function initializeDarkMode() {
    darkMode = localStorage.getItem('darkMode') === 'true';
    if (darkMode) {
        document.body.classList.add('dark-mode');
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
}

function initializeDarkModeToggle() {
    darkModeToggle.addEventListener('click', () => {
        darkMode = !darkMode;
        document.body.classList.toggle('dark-mode');
        darkModeToggle.innerHTML = darkMode 
            ? '<i class="fas fa-sun"></i>' 
            : '<i class="fas fa-moon"></i>';
        localStorage.setItem('darkMode', darkMode);
    });
}

// ========== Music Controls ==========
function initializeMusic() {
    musicToggle.addEventListener('click', () => {
        if (musicPlaying) {
            bgMusic.pause();
            musicToggle.innerHTML = '<i class="fas fa-music"></i><span>Play Music</span>';
            musicToggle.classList.remove('playing');
        } else {
            bgMusic.play().catch(() => {
                console.log('Audio play failed - user interaction required');
            });
            musicToggle.innerHTML = '<i class="fas fa-pause"></i><span>Pause Music</span>';
            musicToggle.classList.add('playing');
        }
        musicPlaying = !musicPlaying;
    });
}

// ========== Floating Hearts Animation ==========
function initializeFloatingHearts() {
    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 10 + 10) + 's';
        heart.style.fontSize = (Math.random() * 10 + 15) + 'px';
        floatingHearts.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 20000);
    }

    // Create hearts every 2 seconds
    setInterval(createHeart, 2000);
    createHeart();
    
    // Create sparkles occasionally
    setInterval(createSparkle, 3000);
}

function createSparkle() {
    if (Math.random() > 0.3) return;
    
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = Math.random() * 100 + '%';
    sparkle.style.top = '-10px';
    document.body.appendChild(sparkle);
    
    gsap.to(sparkle, {
        y: window.innerHeight + 20,
        x: Math.random() * 200 - 100,
        rotation: Math.random() * 720,
        opacity: 0,
        duration: Math.random() * 3 + 4,
        ease: 'power2.out',
        onComplete: () => sparkle.remove()
    });
}

// ========== Countdown Timer ==========
function initializeCountdown() {
    const startDate = new Date('2024-01-01');
    
    function updateCountdown() {
        const now = new Date();
        const diffTime = now - startDate;
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        
        const daysString = diffDays.toString().padStart(4, '0');
        const digits = document.querySelectorAll('.digit');
        
        digits.forEach((digit, index) => {
            const newDigit = daysString[index] || '0';
            if (digit.textContent !== newDigit) {
                digit.textContent = newDigit;
                digit.style.animation = 'none';
                setTimeout(() => {
                    digit.style.animation = 'flipIn 0.5s ease';
                }, 10);
            }
        });
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// ========== Gallery Loading ==========
async function loadGallery() {
    try {
        await loadGallerySection('her', 'assets/her/', POETIC_CAPTIONS.her);
        await loadGallerySection('we', 'assets/we/', POETIC_CAPTIONS.we);
    } catch (error) {
        console.error('Error loading gallery:', error);
    }
}

async function loadGallerySection(galleryId, basePath, captions) {
    const gallery = document.getElementById(`${galleryId}Gallery`);
    
    // List of images based on what we found in the directory
    const images = galleryId === 'her' 
        ? [
            'IMG-20251021-WA0025.jpg',
            'IMG-20251021-WA0024.jpg',
            'IMG-20251021-WA0023.jpg',
            'IMG-20251021-WA0022.jpg',
            'IMG-20251021-WA0021.jpg',
            'IMG-20250929-WA0021.jpg'
        ]
        : [
            'IMG-20251022-WA0007.jpg',
            'IMG-20251021-WA0044.jpg',
            'IMG-20251021-WA0043.jpg',
            'IMG-20251021-WA0042.jpg',
            'IMG-20251021-WA0041.jpg',
            'IMG-20251021-WA0040.jpg',
            'IMG-20251021-WA0039.jpg',
            'IMG-20251021-WA0038.jpg',
            'IMG-20251021-WA0037.jpg',
            'IMG-20251021-WA0036.jpg',
            'IMG-20251021-WA0035.jpg',
            'IMG-20251021-WA0034.jpg',
            'IMG-20251021-WA0033.jpg',
            'IMG-20251021-WA0032.jpg',
            'IMG-20251021-WA0031.jpg',
            'IMG-20251021-WA0030.jpg',
            'IMG-20251021-WA0029.jpg',
            'IMG-20251021-WA0028.jpg',
            'IMG-20251021-WA0027.jpg',
            'IMG-20251021-WA0026.jpg'
        ];

    images.forEach((imageName, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.addEventListener('click', () => openModal(basePath + imageName, index, galleryId === 'we' ? allImages.length + images.indexOf(imageName) : images.indexOf(imageName)));
        
        const img = document.createElement('img');
        img.src = basePath + imageName;
        img.alt = captions[index % captions.length];
        img.loading = 'lazy';
        
        const caption = document.createElement('div');
        caption.className = 'gallery-caption';
        caption.textContent = captions[index % captions.length];
        
        galleryItem.appendChild(img);
        galleryItem.appendChild(caption);
        gallery.appendChild(galleryItem);

        allImages.push({
            src: basePath + imageName,
            caption: captions[index % captions.length]
        });
    });
}

// ========== Image Modal ==========
function initializeImageModal() {
    const closeModal = document.querySelector('.close-modal');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    closeModal.addEventListener('click', () => {
        imageModal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === imageModal) {
            imageModal.style.display = 'none';
        }
    });

    prevBtn.addEventListener('click', () => navigateImage(-1));
    nextBtn.addEventListener('click', () => navigateImage(1));

    document.addEventListener('keydown', (e) => {
        if (imageModal.style.display === 'block') {
            if (e.key === 'ArrowLeft') navigateImage(-1);
            if (e.key === 'ArrowRight') navigateImage(1);
            if (e.key === 'Escape') imageModal.style.display = 'none';
        }
    });
}

function openModal(imageSrc, index, globalIndex) {
    currentImageIndex = globalIndex;
    document.getElementById('modalImage').src = imageSrc;
    document.getElementById('modalCaption').textContent = allImages[globalIndex].caption;
    imageModal.style.display = 'block';
    
    // Add romantic sparkles when opening image
    createSparkleBurst();
}

function createSparkleBurst() {
    for (let i = 0; i < 20; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.animation = 'sparkleFall 2s ease-out forwards';
        document.body.appendChild(sparkle);
        
        setTimeout(() => sparkle.remove(), 2000);
    }
}

function navigateImage(direction) {
    currentImageIndex = (currentImageIndex + direction + allImages.length) % allImages.length;
    document.getElementById('modalImage').src = allImages[currentImageIndex].src;
    document.getElementById('modalCaption').textContent = allImages[currentImageIndex].caption;
}

// ========== Easter Egg ==========
function initializeEasterEgg() {
    heartIcon.addEventListener('click', () => {
        heartClickCount++;
        
        // Animate heart on click
        gsap.to(heartIcon, {
            scale: 1.5,
            rotation: 360,
            duration: 0.5,
            ease: 'back.out',
            onComplete: () => {
                gsap.to(heartIcon, {
                    scale: 1,
                    duration: 0.3
                });
            }
        });

        if (heartClickCount >= 3) {
            triggerEasterEgg();
            heartClickCount = 0;
        } else {
            // Shake animation for feedback
            gsap.to(heartIcon, {
                x: [-10, 10, -10, 10, 0],
                duration: 0.5,
                ease: 'power1.inOut'
            });
        }
    });

    closeEaster.addEventListener('click', () => {
        easterEggModal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === easterEggModal) {
            easterEggModal.style.display = 'none';
        }
    });
}

function triggerEasterEgg() {
    easterEggModal.style.display = 'block';
    
    // Confetti animation
    createConfetti();
    
    // Rose petals
    createRosePetals();
    
    // Extra sparkles
    for (let i = 0; i < 50; i++) {
        setTimeout(() => createSparkle(), i * 50);
    }
}

function createConfetti() {
    const colors = ['#ff6b9d', '#a855f7', '#3b82f6', '#c084fc', '#fbbf24'];
    
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        confetti.style.zIndex = '99999';
        confetti.style.pointerEvents = 'none';
        document.body.appendChild(confetti);

        gsap.to(confetti, {
            y: window.innerHeight + 100,
            x: Math.random() * 400 - 200,
            rotation: Math.random() * 720,
            duration: Math.random() * 2 + 2,
            ease: 'power2.out',
            onComplete: () => confetti.remove()
        });
    }
}

// ========== Rose Petals Animation ==========
function startRosePetals() {
    const petals = ['🌹', '🌷', '🌸'];
    
    function createPetal() {
        if (rosePetals) {
            const petal = document.createElement('div');
            petal.className = 'rose-petal';
            petal.textContent = petals[Math.floor(Math.random() * petals.length)];
            petal.style.left = Math.random() * 100 + '%';
            petal.style.animationDelay = Math.random() * 2 + 's';
            rosePetals.appendChild(petal);

            setTimeout(() => {
                petal.remove();
            }, 12000);
        }
    }

    // Create petals occasionally
    setInterval(() => {
        if (Math.random() > 0.7) {
            createPetal();
        }
    }, 3000);
}

function createRosePetals() {
    const petals = ['🌹', '🌷', '🌸'];
    
    for (let i = 0; i < 30; i++) {
        const petal = document.createElement('div');
        petal.className = 'rose-petal';
        petal.textContent = petals[Math.floor(Math.random() * petals.length)];
        petal.style.position = 'fixed';
        petal.style.left = Math.random() * 100 + '%';
        petal.style.fontSize = (Math.random() * 20 + 20) + 'px';
        petal.style.zIndex = '99999';
        petal.style.pointerEvents = 'none';
        document.body.appendChild(petal);

        gsap.to(petal, {
            y: window.innerHeight + 100,
            x: Math.random() * 200 - 100,
            rotation: Math.random() * 720,
            opacity: 0,
            duration: Math.random() * 3 + 5,
            ease: 'power2.out',
            onComplete: () => petal.remove()
        });
    }
}

// ========== Scroll Animations ==========
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            gsap.from(entry.target, {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: 'power2.out'
            });
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.poetry-card, .gallery-item, .letter-paper').forEach(el => {
        observer.observe(el);
    });
    
    // Add parallax effect to hero
    addParallaxEffect();
    
    // Add mouse follower effect
    addMouseFollower();
});

function addParallaxEffect() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero-content');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
            hero.style.opacity = 1 - scrolled / 500;
        }
    });
}

function addMouseFollower() {
    let sparkleTrail = [];
    
    document.addEventListener('mousemove', (e) => {
        if (Math.random() > 0.95) {
            const trailDot = document.createElement('div');
            trailDot.style.position = 'fixed';
            trailDot.style.left = e.clientX + 'px';
            trailDot.style.top = e.clientY + 'px';
            trailDot.style.width = '4px';
            trailDot.style.height = '4px';
            trailDot.style.background = 'rgba(255, 107, 157, 0.8)';
            trailDot.style.borderRadius = '50%';
            trailDot.style.pointerEvents = 'none';
            trailDot.style.zIndex = '9996';
            trailDot.style.boxShadow = '0 0 10px rgba(255, 107, 157, 0.8)';
            document.body.appendChild(trailDot);
            
            sparkleTrail.push(trailDot);
            
            setTimeout(() => {
                trailDot.style.transition = 'opacity 0.5s';
                trailDot.style.opacity = '0';
                setTimeout(() => trailDot.remove(), 500);
                sparkleTrail = sparkleTrail.filter(dot => dot !== trailDot);
            }, 200);
        }
    });
}

// ========== Smooth Scroll for Better UX ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
