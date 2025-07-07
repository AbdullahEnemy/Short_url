A URL shortening service built with Node.js and MongoDB. Enter a long URL to get a compact, shareable link—complete with redirection functionality.

# 🚀 Features
✅ Shorten long URLs and store them in a database

🔄 Redirect users automatically when they visit a short link

🧬 Node.js + Express backend

💾 MongoDB for persistence

# 🔧 Installation
Clone the repo

git clone https://github.com/AbdullahEnemy/Short_url.git

cd Short_url

## Install dependencies

npm install
## Set environment variables

Create a .env file:

MONGO_URI= Your Mongo Url

PORT= Your Port #

BASE_URL=http://localhost:3000

## Start the server

npm start

Open your browser

Visit http://localhost:3000 to use the app.

# 🧭 How It Works
You enter a long URL in the frontend form.

The server:

Checks MongoDB to see if it was already shortened.

If not, generates a unique short code (e.g., abc123).

Saves the pair (code + original URL) to MongoDB.

Service returns the short link: BASE_URL/abc123.

Visitors to BASE_URL/abc123 are redirected to the original URL via a server-side lookup.

# 📦 Tech Stack
Node.js & Express — backend server and routing

Mongoose — MongoDB object modeling

MongoDB — database for URLs

