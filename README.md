
# 🎮 Gamehub – A Game Library  

An engaging online library for discovering and supporting indie game developers.  
Users can explore games, view detailed information, and install or support their favorite titles.

---

## 🚀 Live Demo  
🔗 [Live Site](https://gamehub-ts.web.app)  
🔗 [GitHub Repository](https://github.com/Thesachindey/PHero-B12A09-CLotus)

---

## 🧾 Project Purpose  

**Gamehub** is built to provide a vibrant and interactive platform where users can browse through a curated collection of games, read details, and access download links.  
It also supports authentication features like registration, login (with Google), profile management, and password reset.

---

## ✨ Key Features  

- 🏠 **Homepage**
  - Banner (animated slider with game images)
  - Popular Games Section (sorted by rating)
  - Newsletter subscription section  
- 🔍 **Game Details Page (Protected)**
  - Accessible only to logged-in users
  - Displays full details: title, description, developer, rating, etc.  
- 🔐 **Authentication**
  - Register & Login using Email & Password
  - Google Login
  - Password Reset (Forget Password)  
- 👤 **Profile Management**
  - View Profile Information  
  - Update Name & Photo URL through “Update Info” page  
- 🔁 **Logout Feature**
  - Instantly logs out user and updates Navbar dynamically  
- 🧭 **Dynamic Routing**
  - React Router for SPA navigation  
  - Protected Routes (Firebase Auth based)  
- 💥 **404 Page**
  - Custom animated Not Found page  
- 🧠 **Additional Route**
  - All Games 
- 💫 **Animations**
  - Implemented using **Framer Motion** and **Lottie React**  
- 📱 **Fully Responsive**
  - Works perfectly on desktop, tablet, and mobile  
- 🧩 **Firebase Environment Variables**
  - All Firebase config keys stored securely in `.env.local` file  

---

## 🛠️ Technologies Used  

| Category | Tools |
|-----------|--------|
| Frontend | React, React Router |
| Styling | Tailwind CSS, DaisyUI |
| Animations | Framer Motion, Lottie React |
| Authentication | Firebase Auth |
| Notifications | React Toastify |
| Loading Animations | React Spinners |
| Icons | React Icons |
| Build Tool | Vite |

---

## 📦 NPM Packages  

```json
{
  "@tailwindcss/vite": "^4.1.17",
  "daisyui": "^5.4.7",
  "firebase": "^12.5.0",
  "framer-motion": "^12.23.24",
  "lottie-react": "^2.4.1",
  "react": "^19.2.0",
  "react-dom": "^19.2.0",
  "react-icons": "^5.5.0",
  "react-router": "^7.9.5",
  "react-spinners": "^0.17.0",
  "react-toastify": "^11.0.5",
  "tailwindcss": "^4.1.17"
}
````

---

## ⚙️ Installation & Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Thesachindey/PHero-B12A09-CLotus
   ```
2. **Go to the Project Directory**

   ```bash
   cd phero-b12a09-clotus
   ```
3. **Install Dependencies**

   ```bash
   npm install
   ```
4. **Create a `.env.local` File** in the root folder and add Firebase configuration:

   ```env
   VITE_apiKey=your_api_key
   VITE_authDomain=your_auth_domain
   VITE_projectId=your_project_id
   VITE_storageBucket=your_storage_bucket
   VITE_messagingSenderId=your_sender_id
   VITE_appId=your_app_id
   ```
5. **Run the App**

   ```bash
   npm run dev
   ```

---

## 🧰 Folder Structure

```
src/
 ├── assets/           # Images and JSON data
 ├── components/       # Reusable UI components
 ├── layout/           # Header, Footer, and Layout files
 ├── pages/            # All route pages (Home, Login, Register, etc.)
 ├── routes/           # Protected & public route management
 ├── context/          # Auth Context (Firebase)
 ├── hooks/            # Custom hooks
 ├── App.jsx
 ├── main.jsx
 └── index.css
```

---

## 🔒 Authentication Features

* Email & Password login/registration
* Google Sign-in
* Password validation rules:

  * Minimum 6 characters
  * At least one uppercase & one lowercase letter
* Forget Password (redirects to Gmail)
* Protected route for Game Details page

---

## 🧑‍💻 Developer Info

👤 **Name:** Sachin Dey
📧 **Email:** [ts20.official@gmail.com](mailto:your@email.com)
🐙 [GitHub](https://github.com/Thesachindey)
💼 [LinkedIn](https://linkedin.com/in/thesachindey)

---

## 🪪 License

This project is open source and available under the [MIT License](LICENSE).

---

