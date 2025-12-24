# Quick Start Guide

## Prerequisites

You should have installed:

1. Python with version that is higher than 3.11
2. [`uv`](https://pypi.org/project/uv/)
3. Docker

## Initial Setup

1. **Install dependencies:**

   ```bash
   cd backend
   make install
   ```

2. **Start the database:**

   ```bash
   make db-up
   ```

3. **Create .env file:**

   ```bash
   cp .env.example .env # Or copy instead of cp in Windows
   ```

4. **Run migrations:**

   ```bash
   make makemigrations
   make migrate
   ```

5. **Create a superuser:**

   ```bash
   make createsuperuser
   ```

6. **Start the development server:**
   ```bash
   make dev
   ```

The API will be available at: http://localhost:8000/
Admin interface at: http://localhost:8000/admin/

## Running Tests

```bash
make test
```

## API Endpoints

### Create a user

```bash
curl -X POST http://localhost:8000/api/users/ \
  -H "Content-Type: application/json" \
  -d '{"email": "user@example.com", "password": "securepass123"}'
```
