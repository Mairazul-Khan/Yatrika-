// Video background handling
document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('.banner video');
    if (video) {
        // Ensure video plays on mobile devices
        video.addEventListener('loadeddata', function() {
            console.log('Background video loaded successfully');
            this.style.opacity = '1';
        });
        
        video.addEventListener('error', function() {
            console.log('Background video failed to load, using fallback');
            this.style.display = 'none';
        });
        
        // Try to play the video
        video.play().catch(function(error) {
            console.log('Video autoplay failed:', error);
            // Video will fall back to gradient background
        });
        
        // Pause video when page is not visible (saves battery)
        document.addEventListener('visibilitychange', function() {
            if (document.hidden) {
                video.pause();
            } else {
                video.play().catch(function(error) {
                    console.log('Video resume failed:', error);
                });
            }
        });
    }
});

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navbar = document.querySelector('.navbar');
    
    if (mobileMenu && navbar) {
        mobileMenu.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            navbar.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.navbar a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                navbar.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!mobileMenu.contains(event.target) && !navbar.contains(event.target)) {
                mobileMenu.classList.remove('active');
                navbar.classList.remove('active');
            }
        });
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form validation
function validateform() {
    var tel = document.getElementById("phonenum");
    if (tel) {
        var phoneValue = tel.value;
        if (phoneValue.length < 10) {
            alert("Phone number must be of atleast 10 digits!");
            return false;
        } else if (isNaN(phoneValue)) {
            alert("Phone number should not include character!");
            return false;
        }
    }
    return true;
}

// Newsletter form handling
document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.querySelector('.newsletter form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            if (email) {
                alert('Thank you for subscribing to our newsletter!');
                this.reset();
            }
        });
    }
});

// Enhanced Contact form handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        const inputs = contactForm.querySelectorAll('input, textarea');
        
        inputs.forEach(input => {
            // Add focus effects
            input.addEventListener('focus', function() {
                this.style.transform = 'translateY(-2px)';
                this.style.boxShadow = '0 0 20px rgba(252, 0, 80, 0.2)';
            });
            
            input.addEventListener('blur', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            });
        });
        
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            
            // Loading animation
            submitBtn.textContent = 'Sending...';
            submitBtn.style.background = 'linear-gradient(45deg, #4CAF50, #45a049)';
            
            setTimeout(() => {
                alert('Thank you for your message! We will get back to you within 2 business days.');
                this.reset();
                submitBtn.textContent = originalText;
                submitBtn.style.background = 'linear-gradient(45deg, #fc0050, #ff4081)';
            }, 2000);
        });
    }
});

// Registration form handling
document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.querySelector('.register-form form');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            if (validateform()) {
                alert('Registration successful! Welcome to Yātrika!');
                window.location.href = 'location.html';
            }
        });
    }
});

// Add loading animation for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        // Add loading state
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
        
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        img.addEventListener('error', function() {
            console.error('Failed to load image:', this.src);
            this.style.display = 'none';
            // Show fallback if available
            const fallback = this.nextElementSibling;
            if (fallback && fallback.style) {
                fallback.style.display = 'block';
            }
        });
        
        // Force load if already cached
        if (img.complete) {
            img.style.opacity = '1';
        }
    });
    
    // Special handling for about page image
    const aboutImg = document.querySelector('.about img');
    if (aboutImg) {
        aboutImg.addEventListener('load', function() {
            console.log('About page image loaded successfully');
        });
        
        aboutImg.addEventListener('error', function() {
            console.error('About page image failed to load:', this.src);
        });
    }
});


