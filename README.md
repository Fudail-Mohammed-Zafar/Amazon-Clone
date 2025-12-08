# 📈 StockHub

StockHub is a modern and responsive blogging platform designed to help users learn about stock markets in a structured way. Built with **Express.js, React, and Tailwind CSS**, this platform enables users to explore, create, and manage blog content related to financial markets.  

## 🚀 Features  

- **Dynamic Blog System** – Read and publish articles on stock market trends and financial insights.  
- **Admin Dashboard** – Manage blogs, subscriptions, and product listings with an easy-to-use admin panel.  
- **Seamless Navigation** – Powered by react-router-dom routing for an intuitive browsing experience.  
- **Optimized Performance** – Achieved a **98/92 (desktop/mobile) performance score** on Google PageSpeed Insights.  
- **Cloudinary Integration** – Effortlessly upload and manage images for blog posts.  

## 🛠️ Tech Stack  

- **Frontend:** React.js, Tailwind CSS  
- **Backend:** Node.js, Express.js (via API routes)  
- **Database:** MongoDB  
- **Styling:** Tailwind CSS,
- **Authentication & Security:** JWT

## 📂 Folder Structure  

```bash
└── fudailzafar-stockhub/
    ├── client/
    │   ├── README.md
    │   ├── eslint.config.js
    │   ├── index.html
    │   ├── jsconfig.json
    │   ├── package.json
    │   ├── vercel.json
    │   ├── vite.config.js
    │   └── src/
    │       ├── App.jsx
    │       ├── index.css
    │       ├── main.jsx
    │       ├── assets/
    │       │   └── assets.js
    │       ├── components/
    │       │   ├── BlogCard.jsx
    │       │   ├── BlogList.jsx
    │       │   ├── Footer.jsx
    │       │   ├── Header.jsx
    │       │   ├── Loader.jsx
    │       │   ├── Navbar.jsx
    │       │   ├── Newsletter.jsx
    │       │   └── admin/
    │       │       ├── BlogTableItem.jsx
    │       │       ├── CommentTableItem.jsx
    │       │       ├── Login.jsx
    │       │       └── Sidebar.jsx
    │       ├── context/
    │       │   ├── AppContext.jsx
    │       │   └── useAppContext.jsx
    │       └── pages/
    │           ├── Blog.jsx
    │           ├── Home.jsx
    │           └── admin/
    │               ├── AddBlog.jsx
    │               ├── Comments.jsx
    │               ├── Dashboard.jsx
    │               ├── Layout.jsx
    │               └── ListBlog.jsx
    └── server/
        ├── package.json
        ├── server.js
        ├── vercel.json
        ├── configs/
        │   ├── db.js
        │   ├── gemini.js
        │   └── imageKit.js
        ├── controllers/
        │   ├── adminController.js
        │   └── blogController.js
        ├── middleware/
        │   ├── auth.js
        │   └── multer.js
        ├── models/
        │   ├── Blog.js
        │   └── Comment.js
        └── routes/
            ├── adminRoutes.js
            └── blogRoutes.js
```

## 💻 Getting Started  

### Prerequisites  

Make sure you have:  
- **Node.js v14 or later**  
- **npm or yarn**  

### Installation  

Clone the repository:  
```bash
git clone https://github.com/fudailzafar/StockHub.git
cd StockHub
```

Go to client directory:
```bash
cd client
```

Install dependencies:  
```bash
npm install
```
or  
```bash
yarn install
```

Run the development server:  
```bash
npm start
```
or  
```bash
yarn start
```
Visit `http://localhost:5173` in your browser.

## 📦 Deployment  

To build the project for production:  
```bash
npm run build
```
This generates a `build/` folder with optimized static files, ready for deployment.  

## 🎯 Performance Scores  

✅ **Desktop:** **Performance (98), Accessibility (87), Best Practices (100), SEO (91)**  
✅ **Mobile:** **Performance (92), Accessibility (86), Best Practices (96), SEO (91)**  

## 📜 License  

This project is licensed under the **MIT License**.

---

**📢 Contributions are welcome!** Feel free to fork this repository, submit issues, or open pull requests. 🚀  
