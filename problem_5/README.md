# Express.js Product API

A RESTful API built with Express.js and SQLite for managing products.

## Project Structure

```
problem_5/
├── src/
│   ├── config/
│   │   └── database.js
│   ├── controllers/
│   ├── services/
│   ├── repositories/
│   ├── models/
│   ├── data/
│   │   └── database.sqlite
│   ├── app.js
│   └── server.js
├── package.json
├── package-lock.json
├── env.example
├── README.md
```

## Prerequisites

- Node.js (v14 or higher)

## Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd problem_5
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

## Environment Variables

Create a `.env` file in the root directory (optional):

```env
PORT=3000
NODE_ENV=development
```

## Running the Application

```bash
npm run dev
```

The server will start on `http://localhost:3000`

## API Endpoints

### Products

#### Create a Product
```bash
POST /products
Content-Type: application/json

{
  "name": "iPhone 15",
  "price": 999.99
}
```

#### Get All Products
```bash
GET /products
```

#### Get All Products (with name filter)
```bash
GET /products?name=iPhone
```

#### Get Product by ID
```bash
GET /products/1
```

#### Update a Product
```bash
PUT /products/1
Content-Type: application/json

{
  "name": "iPhone 15 Pro",
  "price": 1199.99
}
```

#### Delete a Product
```bash
DELETE /products/1
```
