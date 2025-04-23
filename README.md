# Bike Servicing Management API

## Project Summary
The **Bike Servicing Management API** is designed to help a bike servicing center manage customers, bikes, and service records. The API supports CRUD operations for customers, bikes, and services. It includes endpoints for assigning, updating, and completing servicing jobs, allowing bike servicing centers to streamline their operations and track customer requests.

This API is built using **Node.js**, **Express.js**, **TypeScript**, and **Prisma ORM** with a **PostgreSQL** database. It uses UUIDs for all primary keys to ensure unique identifiers across the system.

## Live Backend Link
You can access the live backend API here: [https://bike-servicing-management-system-backend.vercel.app/]

## Tech Stack
- **Node.js**: JavaScript runtime to build the server-side application.
- **Express.js**: Web framework for building RESTful APIs.
- **TypeScript**: Typed superset of JavaScript for better maintainability and scalability.
- **Prisma ORM**: Object Relational Mapping tool to interact with the PostgreSQL database.
- **PostgreSQL**: Relational database used for storing customer, bike, and service records.

## Setup Guide

### Prerequisites
- Node.js and npm installed
- PostgreSQL installed and running
- Prisma CLI installed

### Steps to Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/bike-servicing-management-api.git
   cd bike-servicing-management-api
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up your PostgreSQL database:

   - Create a database in PostgreSQL.
   - Configure your `.env` file with the database URL:

     ```
     DATABASE_URL="postgresql://user:password@localhost:5432/database_name?schema=public"
     ```

4. Run Prisma migrations:

   ```bash
   npx prisma migrate dev
   ```

5. Start the server:

   ```bash
   npm run dev
   ```

   The API should now be running locally at `http://localhost:3000`.

## Key Features

- **Customer Management**: 
  - Create, read, update, and delete customer records.
  
- **Bike Management**: 
  - Add new bikes, view all bikes, and manage bike details.
  
- **Service Management**: 
  - Create new service records, update service status, and mark services as completed.
  
- **Pending/Overdue Services**: 
  - Fetch services that are pending or overdue (older than 7 days).

- **Error Handling**: 
  - Standardized error responses for consistency across the API.

## Endpoints Overview

1. **Customer Management**:
   - `POST /api/customers`: Create a new customer.
   - `GET /api/customers`: Get all customers.
   - `GET /api/customers/{customerId}`: Get a specific customer by ID.
   - `PUT /api/customers/{customerId}`: Update customer details.
   - `DELETE /api/customers/{customerId}`: Delete a customer.

2. **Bike Management**:
   - `POST /api/bikes`: Add a new bike.
   - `GET /api/bikes`: Get all bikes.
   - `GET /api/bikes/{bikeId}`: Get a specific bike by ID.

3. **Service Management**:
   - `POST /api/services`: Create a new service record.
   - `GET /api/services`: Get all service records.
   - `GET /api/services/{serviceId}`: Get a specific service record.
   - `PUT /api/services/{serviceId/complete`: Mark a service as completed.

4. **Pending or Overdue Services**:
   - `GET /api/services/status`: Get all services that are pending or overdue.

## Error Handling
The API includes standardized error responses to handle invalid requests or resource not found errors:

```json
{
  "success": false,
  "status": 404,
  "message": "Customer not found",
  "stack": "Optional stack trace shown only in development"
}
```
## Send Response
The API includes standardized send responses:

```json
  {
    "success": true,
    "message": "Service records fetched successfully",
    "data": [
        {
            "serviceId": "18dfa757-471a-4937-a21e-3ce6a75008da",
            "bikeId": "1b059fc8-16d8-43d2-bb2f-dbc29d0cbed9",
            "serviceDate": "2025-04-20T10:00:00.000Z",
            "completionDate": "2025-04-23T04:15:59.833Z",
            "description": "Oil changee",
            "status": "done"
        }
    ]
}
```
