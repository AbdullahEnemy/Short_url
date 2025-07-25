
# 🔗 URL Shortener API

A simple RESTful API built with **Node.js**, **Express.js**, and **MongoDB** that allows users to shorten long URLs, retrieve original URLs, update or delete them, and view access statistics.
---
## 📌 Overview

This project is a RESTful API service that allows users to:
- Create short URLs from long ones
- Retrieve original URLs using short codes
- Track how many times a short URL has been accessed
- Update and delete existing short URLs

It uses MongoDB as the database to persist URL data, along with timestamps and access statistics.

---

## 🧱 Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (via Mongoose)
- **Utilities**: dotenv, cors, nodemon
- **Tools**: Postman (for API testing)

---

## ✨ Features

- ✅ Shorten long URLs into unique short codes
- 🔍 Retrieve original URLs
- ✏️ Update the original URL
- 🗑️ Delete a short URL
- 📊 Track number of times a URL is accessed

---

## 🛠 Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/url-shortener-api.git](https://github.com/AbdullahEnemy/Abdullah-innovaxel-Fayyaz.git
cd url-shortener-api
npm install
````

## Environment Variables

Create a .env file in the root directory and add the following:

```bash
PORT=5000
MONGO_URI=<your mongo url>
```

##  Running the Server

Start the development server:

```bash
npm run dev
or
npm start
```
