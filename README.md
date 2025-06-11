<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>🚴‍♂️ Bike Rental System - Full Stack Application</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            color: #333;
        }
        h1, h2, h3 {
            color: #2c3e50;
        }
        code {
            background-color: #f4f4f4;
            padding: 2px 5px;
            border-radius: 3px;
            font-family: monospace;
        }
        pre {
            background-color: #f4f4f4;
            padding: 10px;
            border-radius: 5px;
            overflow-x: auto;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
        }
        .highlight {
            background-color: #fffde7;
            padding: 2px;
        }
    </style>
</head>
<body>
    <h1>🚴‍♂️ Bike Rental System - Full Stack Application</h1>
    <p>A full-featured Bike Rental System where customers can rent/return bikes, admins can manage the fleet and users, and unregistered users can explore available bikes and their ratings.</p>

    <h2>⚙️ Tech Stack</h2>
    <ul>
        <li><strong>Frontend:</strong> React.js, Tailwind CSS</li>
        <li><strong>Backend:</strong> Express.js, Node.js</li>
        <li><strong>Database:</strong> MySQL</li>
        <li><strong>Auth:</strong> JWT + bcrypt</li>
        <li><strong>Payments:</strong> Simulated (Card, Mobile Banking, Cash)</li>
    </ul>

    <h2>🚀 Getting Started</h2>
    <h3>1. Clone the repo</h3>
    <pre><code>git clone https://github.com/your-username/bike-rental-system.git
cd bike-rental-system</code></pre>

    <h3>2. Setup Backend</h3>
    <pre><code>cd backend
npm install
cp .env.example .env
# Fill in DB credentials, JWT secret, etc.
npm run dev</code></pre>

    <h3>3. Setup Frontend</h3>
    <pre><code>cd frontend
npm install
npm start</code></pre>

    <h2>🔐 Authentication Flow</h2>
    <h3>Unregistered Customer can:</h3>
    <ul>
        <li>Search bikes</li>
        <li>See bike ratings</li>
        <li>Subscribe to newsletter</li>
        <li>Sign up</li>
    </ul>

    <h3>Registered Customer can:</h3>
    <ul>
        <li>Log in</li>
        <li>Rent/Return bike</li>
        <li>Make payment</li>
        <li>Reset password</li>
        <li>Log out</li>
    </ul>

    <!-- <h3>Admin can:</h3>
    <ul>
        <li>Add/Update/Delete bikes</li>
        <li>Add/Update/Delete users</li>
    </ul> -->

    <h2>📡 API Endpoints</h2>
    <h3>🔸 Auth APIs</h3>
    <table>
        <tr>
            <th>Method</th>
            <th>Endpoint</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>POST</td>
            <td><code>/api/auth/signup</code></td>
            <td>Register new user</td>
        </tr>
        <tr>
            <td>POST</td>
            <td><code>/api/auth/login</code></td>
            <td>Log in</td>
        </tr>
        <tr>
            <td>POST</td>
            <td><code>/api/auth/reset</code></td>
            <td>Reset password</td>
        </tr>
        <tr>
            <td>GET</td>
            <td><code>/api/auth/logout</code></td>
            <td>Log out</td>
        </tr>
    </table>

    <h3>🔸 Bike APIs</h3>
    <table>
        <tr>
            <th>Method</th>
            <th>Endpoint</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>GET</td>
            <td><code>/api/bikes</code></td>
            <td>Get all bikes</td>
        </tr>
        <tr>
            <td>POST</td>
            <td><code>/api/bikes/rent</code></td>
            <td>Rent a bike</td>
        </tr>
        <tr>
            <td>POST</td>
            <td><code>/api/bikes/return</code></td>
            <td>Return a rented bike</td>
        </tr>
        <tr>
            <td>GET</td>
            <td><code>/api/bikes/ratings</code></td>
            <td>Get bike ratings</td>
        </tr>
    </table>

    <h3>🔐 Admin-only:</h3>
    <table>
        <tr>
            <th>Method</th>
            <th>Endpoint</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>POST</td>
            <td><code>/api/bikes/add</code></td>
            <td>Add a new bike</td>
        </tr>
        <tr>
            <td>PUT</td>
            <td><code>/api/bikes/:id/update</code></td>
            <td>Update bike info</td>
        </tr>
        <tr>
            <td>DELETE</td>
            <td><code>/api/bikes/:id/delete</code></td>
            <td>Delete a bike</td>
        </tr>
    </table>

    <h3>🔸 Payment APIs</h3>
    <table>
        <tr>
            <th>Method</th>
            <th>Endpoint</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>POST</td>
            <td><code>/api/payments/make</code></td>
            <td>Make payment</td>
        </tr>
    </table>
    <p><strong>Payment Types supported</strong> (extendable):</p>
    <ul>
        <li>Card</li>
        <li>Mobile Banking</li>
        <li>Cash</li>
    </ul>

    <h3>🔸 Admin/User APIs</h3>
    <table>
        <tr>
            <th>Method</th>
            <th>Endpoint</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>POST</td>
            <td><code>/api/admin/add</code></td>
            <td>Add new admin</td>
        </tr>
        <tr>
            <td>GET</td>
            <td><code>/api/users</code></td>
            <td>Get all users</td>
        </tr>
        <tr>
            <td>POST</td>
            <td><code>/api/users/add</code></td>
            <td>Add user (Admin)</td>
        </tr>
        <tr>
            <td>PUT</td>
            <td><code>/api/users/:id/update</code></td>
            <td>Update user info</td>
        </tr>
        <tr>
            <td>DELETE</td>
            <td><code>/api/users/:id/delete</code></td>
            <td>Delete user</td>
        </tr>
    </table>

    <h2>🛡️ Security</h2>
    <ul>
        <li>Passwords hashed using bcrypt</li>
        <li>JWT-based authentication and protected routes</li>
        <li>Role-based access control (Customer vs Admin)</li>
    </ul>

    <h2>📧 Contact</h2>
    <p>For any queries, contact <a href="mailto:bsau4866@gmail.com">bsau4866@gmail.com</a></p>

    <h2>📝 License</h2>
    <p>MIT License - free to use and modify.</p>
</body>
</html>
