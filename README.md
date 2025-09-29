# ☕ Brew Haven – Café Website  

A modern, responsive React.js web application for **Brew Haven**, a café/coffee restaurant. Built with **React.js**, **Tailwind CSS**, and **React Router**, the app provides a clean and user-friendly interface for browsing the menu, placing mock orders, and managing user accounts.  

---

## 🚀 Features  

### 🌐 Core Pages  
- **Home Page**: Hero section with branding, tagline, and featured coffees.  
- **Menu Page**: Coffee categories (Espresso, Cappuccino, Latte, Mocha, Cold Brews, Flavored Coffees, etc.) with images, descriptions, and prices.  
- **Order Page**: Customize coffee (size, sugar, add-ons) and add to cart.  
- **Cart & Billing Page**: Cart summary + checkout form (mock payment).  
- **Account Page**: Profile management, saved orders, and preferences.  
- **Authentication**: Login & Signup with mock backend (localStorage).  

### 🧩 UI & Components  
- **Responsive Navbar** with links and login/account icon.  
- **Footer** with café details, contact info, and social links.  
- **Reusable Cards** for menu items.  
- **Modal** for quick order previews.  
- **Toast/Alerts** for order & auth confirmations.  

### ⚙️ Functionality  
- **React Router DOM** for seamless navigation.  
- **React Context API** for global cart state.  
- **Mock Authentication** using localStorage/session.  
- **Responsive Grids** for menu layouts.  
- **Smooth Animations** with Framer Motion.  

### 🎨 Design Guidelines  
- Warm café-style theme: **Brown, Cream, Dark Green**.  
- Rounded cards, soft shadows, elegant fonts.  
- Mobile-first responsive design.  

### ✨ Optional Enhancements  
- Search bar & category filter on menu.  
- Dark/Light theme toggle.  
- Order history in Account page.  
- Newsletter subscription form in footer.  

---

## 📂 Project Structure  

```
brew-haven/
├── public/
│   └── index.html
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Card.jsx
│   │   ├── Modal.jsx
│   │   └── Toast.jsx
│   ├── context/
│   │   └── CartContext.jsx
│   ├── data/
│   │   └── coffeeData.json
│   ├── pages/             # Page-level components
│   │   ├── Home.jsx
│   │   ├── Menu.jsx
│   │   ├── Order.jsx
│   │   ├── Cart.jsx
│   │   ├── Account.jsx
│   │   ├── Login.jsx
│   │   └── Signup.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
└── tailwind.config.js
```

---

## 🛠️ Tech Stack  

- **Frontend**: React.js (Vite), React Router DOM  
- **Styling**: Tailwind CSS, Framer Motion  
- **State Management**: React Context API  
- **Authentication**: Mock (localStorage)  
- **Icons**: Lucide React / Heroicons  

---

## 📦 Installation & Setup  

1. Clone the repository:  
   ```bash
   git clone https://github.com/yourusername/brew-haven.git
   cd brew-haven
   ```

2. Install dependencies:  
   ```bash
   npm install
   ```

3. Start development server:  
   ```bash
   npm run dev
   ```

4. Open your browser at **http://localhost:5173/** (if using Vite).  

---

## 📊 Sample Data  

Coffee menu data is stored in **`src/data/coffeeData.json`** to simulate a backend API.  

---

## 🔑 Authentication  

- **Mock authentication** with localStorage/session.  
- Signup/Login functionality only simulates real backend.  
- Future enhancement: integrate Firebase/Auth0.  

---

## 🤝 Contributing  

Contributions, issues, and feature requests are welcome!  
Feel free to fork the repo and submit a PR.  

---

## 📜 License  

This project is licensed under the **MIT License**.  

---

## 📸 Screenshots (Optional)  

_Add UI screenshots here once the app is running._  
