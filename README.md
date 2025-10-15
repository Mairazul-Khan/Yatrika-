# 🌍 Yātrika - Travel Website

A modern, responsive travel website built with HTML, CSS, and JavaScript, featuring user authentication, package booking, and interactive travel experiences across Karnataka, India.

## 📋 Table of Contents

- [Features](#-features)
- [Technologies Used](#-technologies-used)
- [Project Structure](#-project-structure)
- [Installation & Setup](#-installation--setup)
- [Usage](#-usage)
- [Pages Overview](#-pages-overview)
- [API Documentation](#-api-documentation)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

## ✨ Features

### 🔐 User Authentication

- **User Registration**: Complete registration form with validation
- **Login System**: Secure login with email/password
- **User Profile**: Personal dashboard and booking history
- **Session Management**: Persistent login sessions

### 🎯 Travel Features

- **Destination Exploration**: Detailed information about Karnataka destinations
- **Package Booking**: Multiple travel packages (Bronze, Silver, Gold, Platinum)
- **Interactive Gallery**: High-quality images and videos
- **Responsive Design**: Mobile-first approach for all devices

### 📱 User Experience

- **Modern UI/UX**: Clean, intuitive interface
- **Form Validation**: Real-time validation with error messages
- **Newsletter Subscription**: Email subscription system
- **Contact System**: Direct communication with support team

### 🗺️ Destinations Covered

- **Mysore**: Palace, Chamundi Hills, Folklore Museum
- **Bengaluru**: Palace, Cubbon Park, Lalbagh Gardens
- **Shimoga**: Jog Falls, Ikkeri, Agumbe
- **Chikkamagaluru**: Mullayanagiri, Ettina Bhuja
- **Udupi**: Maravanthe Beach, Kollur Temple
- **Mangalore**: Beaches, Temples, Dharmasthala
- **Tumukuru**: Siddaganga Mutt, Mandaragiri
- **Mandya**: Melukote, Panchalingeshwara Temple

## 🛠️ Technologies Used

### Frontend

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Interactive functionality and DOM manipulation
- **Boxicons**: Icon library for UI elements
- **Google Fonts**: Typography (Poppins, Paytone One)

### Features

- **Local Storage**: Client-side data persistence
- **Responsive Design**: Mobile-first CSS approach
- **Form Validation**: Real-time validation
- **Modal System**: Login and user interaction modals

## 📁 Project Structure

```
Trip/
├── 📄 HTML Files
│   ├── index.html              # Homepage
│   ├── about.html              # About Us
│   ├── contact.html            # Contact Page
│   ├── register.html           # User Registration
│   ├── package.html            # Travel Packages
│   ├── payment.html            # Payment Gateway
│   ├── success.html            # Booking Confirmation
│   ├── explore.html            # Explore Destinations
│   ├── location.html           # All Locations
│   ├── adventure.html          # Adventure Tourism
│   ├── couples.html            # Couple Packages
│   ├── family.html             # Family Packages
│   └── [city].html             # Individual city pages
│
├── 🎨 Styling
│   ├── style.css               # Main stylesheet
│   ├── pay_sty.css             # Payment page styles
│   └── success.css             # Success page styles
│
├── 📜 JavaScript
│   └── script.js               # Main application logic
│
├── 🖼️ Assets
│   ├── img/                    # Images and videos
│   │   ├── [destination images]
│   │   ├── [package images]
│   │   └── [background videos]
│   ├── logo.png                # Website logo
│   └── logo1.png               # Alternative logo
│
└── 📚 Documentation
    └── README.md               # This file
```

## 🚀 Installation & Setup

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, for development)

### Quick Start

1. **Clone or Download**

   ```bash
   # If using Git
   git clone [repository-url]
   cd Trip

   # Or simply download and extract the ZIP file
   ```

2. **Open in Browser**

   ```bash
   # Method 1: Direct file opening
   open index.html

   # Method 2: Using a local server (recommended)
   # Using Python
   python -m http.server 8000

   # Using Node.js
   npx http-server

   # Using PHP
   php -S localhost:8000
   ```

3. **Access the Website**
   - Direct: Open `index.html` in your browser
   - Server: Navigate to `http://localhost:8000`

## 📖 Usage

### For Visitors

1. **Browse Destinations**: Explore different locations in Karnataka
2. **View Packages**: Check available travel packages
3. **Register**: Create an account for booking
4. **Book Packages**: Select and book your preferred package
5. **Contact Support**: Reach out for assistance

### For Developers

1. **Customize Styling**: Modify `style.css` for design changes
2. **Add Features**: Extend `script.js` for new functionality
3. **Update Content**: Edit HTML files for content updates
4. **Add Destinations**: Create new city pages following existing patterns

## 📄 Pages Overview

### 🏠 Homepage (`index.html`)

- Hero section with background video
- Service offerings (Flight, Food, Travel, Hotel)
- Featured destinations
- Newsletter subscription

### 👤 User Management

- **Registration** (`register.html`): User signup with validation
- **Login Modal**: Quick login without page reload
- **Profile**: User information and booking history

### 🎒 Travel Packages (`package.html`)

- **Bronze Package**: ₹9,999 (2-star hotel, 5 nights)
- **Silver Package**: ₹19,999 (3-star hotel, 7 nights)
- **Gold Package**: ₹29,999 (4-star hotel, 10 nights)
- **Platinum Package**: ₹39,999 (5-star hotel, 14 nights)

### 🗺️ Destination Pages

Each city has dedicated pages with:

- Local attractions
- Historical information
- High-quality images
- Booking options

### 💳 Payment (`payment.html`)

- Multiple payment methods
- Secure transaction processing
- Booking confirmation

## 🔧 API Documentation

### Local Storage API

#### User Management

```javascript
// Save user data
localStorage.setItem("users", JSON.stringify(users));

// Retrieve user data
const users = JSON.parse(localStorage.getItem("users")) || [];

// Current user session
localStorage.setItem("currentUser", JSON.stringify(user));
```

#### Booking System

```javascript
// Save booking
const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
bookings.push(bookingData);
localStorage.setItem("bookings", JSON.stringify(bookings));
```

#### Newsletter Subscriptions

```javascript
// Save subscription
const subscriptions =
  JSON.parse(localStorage.getItem("newsletterSubscriptions")) || [];
subscriptions.push(email);
localStorage.setItem("newsletterSubscriptions", JSON.stringify(subscriptions));
```

### JavaScript Functions

#### Authentication

```javascript
// Login user
handleLogin(event);

// Register user
handleRegistration(event);

// Logout user
logout();

// Check login status
checkLoginStatus();
```

#### Form Validation

```javascript
// Validate registration form
validateRegistrationForm(userData);

// Validate email format
isValidEmail(email);

// Validate phone number
isValidPhone(phone);
```

## 🎨 Customization Guide

### Adding New Destinations

1. Create new HTML file: `[city-name].html`
2. Follow existing structure from other city pages
3. Add images to `img/` folder
4. Update navigation links
5. Add to `location.html` gallery

### Modifying Packages

1. Edit `package.html` for package details
2. Update pricing in HTML
3. Modify package images in `img/` folder
4. Update booking logic in `script.js`

### Styling Changes

1. **Colors**: Modify CSS custom properties
2. **Typography**: Update font imports and CSS
3. **Layout**: Adjust Flexbox/Grid properties
4. **Responsive**: Update media queries

## 🐛 Troubleshooting

### Common Issues

#### Images Not Loading

- Ensure all images are in the `img/` folder
- Check file paths in HTML (should start with `img/`)
- Verify file extensions match exactly

#### JavaScript Not Working

- Check browser console for errors
- Ensure `script.js` is properly linked
- Verify all HTML elements have correct IDs/classes

#### Styling Issues

- Clear browser cache
- Check CSS syntax for errors
- Verify responsive breakpoints

#### Form Validation Problems

- Check input field names and IDs
- Ensure validation functions are properly defined
- Verify event listeners are attached

### Browser Compatibility

- **Chrome**: Full support
- **Firefox**: Full support
- **Safari**: Full support
- **Edge**: Full support
- **IE**: Limited support (not recommended)

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Ways to Contribute

1. **Bug Reports**: Report issues you encounter
2. **Feature Requests**: Suggest new functionality
3. **Code Improvements**: Submit pull requests
4. **Documentation**: Improve this README
5. **Content**: Add new destinations or packages

### Development Guidelines

1. Follow existing code style
2. Test changes across different browsers
3. Ensure responsive design is maintained
4. Update documentation for new features

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

### Yātrika Team

- **Website**: [Your Website URL]
- **Email**: [Your Email]
- **Instagram**: [@yatrika_just_travel](https://www.instagram.com/yatrika_just_travel)
- **Facebook**: [Yātrika Facebook](https://www.facebook.com/profile.php?id=61562580149102)
- **Twitter**: [@yatrika24](https://x.com/yatrika24)
- **YouTube**: [Yātrika Channel](https://www.youtube.com/@Yatrika-s1i)

### Support

- **General Inquiries**: Contact through the website form
- **Technical Issues**: Create an issue in the repository
- **Business Partnerships**: Email directly

---

## 🙏 Acknowledgments

- **Karnataka Tourism**: For destination information and images
- **Google Fonts**: For typography
- **Boxicons**: For icon library
- **Contributors**: All developers who helped improve this project

---

**Made with ❤️ by the Yātrika Team**

_"Together Let's Make Your Journey Special"_ ✨
