# 🚴‍♂️ Bike Rental System - Full Stack Application

A full-featured Bike Rental System where customers can rent/return bikes, admins can manage the fleet and users, and unregistered users can explore available bikes and their ratings.

## ⚙️ Tech Stack
- **Frontend**: React.js, Tailwind CSS  
- **Backend**: Express.js, Node.js  
- **Database**: MySQL  
- **Auth**: JWT + bcrypt  
- **Payments**: Simulated (Card, Mobile Banking, Cash)  

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/your-username/bike-rental-system.git
cd bike-rental-system
2. Setup Backend
bash
cd backend
npm install
cp .env.example .env
# Fill in DB credentials, JWT secret, etc.
npm run dev
3. Setup Frontend
bash
cd frontend
npm install
npm start
🔐 Authentication Flow
Unregistered Customer can:
Search bikes

See bike ratings

Subscribe to newsletter

Sign up

Registered Customer can:
Log in

Rent/Return bike

Make payment

Reset password

Log out

<!-- ### Admin can: - Add/Update/Delete bikes - Add/Update/Delete users -->
📡 API Endpoints
🔸 Auth APIs
Method	Endpoint	Description
POST	/api/auth/signup	Register new user
POST	/api/auth/login	Log in
POST	/api/auth/reset	Reset password
GET	/api/auth/logout	Log out
🔸 Bike APIs
Method	Endpoint	Description
GET	/api/bikes	Get all bikes
POST	/api/bikes/rent	Rent a bike
POST	/api/bikes/return	Return a rented bike
GET	/api/bikes/ratings	Get bike ratings
🔐 Admin-only:
Method	Endpoint	Description
POST	/api/bikes/add	Add a new bike
PUT	/api/bikes/:id/update	Update bike info
DELETE	/api/bikes/:id/delete	Delete a bike
🔸 Payment APIs
Method	Endpoint	Description
POST	/api/payments/make	Make payment
Payment Types supported (extendable):

Card

Mobile Banking

Cash

🔸 Admin/User APIs
Method	Endpoint	Description
POST	/api/admin/add	Add new admin
GET	/api/users	Get all users
POST	/api/users/add	Add user (Admin)
PUT	/api/users/:id/update	Update user info
DELETE	/api/users/:id/delete	Delete user
🛡️ Security
Passwords hashed using bcrypt

JWT-based authentication and protected routes

Role-based access control (Customer vs Admin)

📧 Contact
For any queries, contact bsau4866@gmail.com

📝 License
MIT License - free to use and modify.