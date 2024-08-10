# Overview
## This document provides instructions for running the service locally and deploying it to production. Follow the steps below to get started.

# Local Development

## 1. Clone the Repository

```bash
git clone <repository-url>
cd <repository-directory>
```

## 2. Install Dependencies
Ensure you have Node.js installed. Run the following command to install the necessary dependencies:

```bash
npm install
```

## 3. Set Up Environment Variables
Create a .env.local file in the root directory of the project. Use the provided template bellow and update it with your environment-specific values:

```bash
DB_HOST=localhost
DB_PORT=5432
DB_USER=your-database-user
DB_PASSWORD=your-password
DB_NAME=your-database
DB_URL=postgres://your-database-user:your-password@localhost:5432/your-database
OTHER_ENV_VAR=value
```

## 4. Set Up the Database
Make sure your database is set up and running. If you are using PostgreSQL, you can use the following commands to create the necessary tables.

Run the schema migration script to create the required tables:
First run the drizzle-kit to create a drizzle folder, after run drizzle-kit migrate to create the table.

```bash
npx drizzle-kit generate
npx drizzle-kit migrate;
```

NOTE: You will see in the prompt the message "Migrations applied successfully" after run the migrate command and the table is already created.

NOTE: Create mannualy the table using the sql query with the generated script in the drizzle folder if the migrate did not work. So, only run the code bellow if the migrate did not work.

```bash
CREATE TABLE IF NOT EXISTS products (
  id VARCHAR(26) PRIMARY KEY,
  category_id VARCHAR(26) NOT NULL,
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  producer_name VARCHAR(255) NOT NULL,
  producer_email VARCHAR(255) NOT NULL,
  cover VARCHAR(255) NOT NULL,
  thumbnail VARCHAR(255) NOT NULL,
  price NUMERIC(10, 2) NOT NULL,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);
```

## 5. Run the Application
Start the development server with:

```bash
npm run dev
```
Access the application at http://localhost:3000.

# Deployment

## 1. Prepare for Deployment
Ensure you have a production-ready environment set up. This typically involves setting up your production database and ensuring all environment variables are configured.

## 2. Set Up Environment Variables
Configure your production environment variables in your hosting service. Ensure all required variables are set, such as DATABASE_URL.
This variables can be found in the platform you choose if you would like to use the database of the platform, in Vercel, you can create your database after conect your project and then run the command:

### This command should be used after the deployment in the platform is completed

```bash
vercel env pull .env.local
```

## 3. Deploy the Application
Follow the deployment instructions for your chosen platform. For example, if you are deploying to Vercel:

### 3.1 Commit your changes and push them to your repository:

```bash
git add .
git commit -m "Deploy to production"
git push origin main
```

### 3.2 Connect your repository to Vercel and follow the deployment steps on the Vercel dashboard.

# Handling Sensitive Data
* Environment Variables: Ensure sensitive data, such as database credentials and API keys, are stored in environment variables and are not hardcoded in the application code.
* Database Credentials: Keep your database credentials secure and do not share them publicly.

# Troubleshooting
* Database Connection Issues: Ensure that the DATABASE_URL is correct and the database server is accessible.
* Missing Environment Variables: Verify that all required environment variables are set correctly.

# Contact
For any issues or questions, please refer to the project's issue tracker on GitHub or contact-me in my email: engluanoliv@gmail.com