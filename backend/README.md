# Backend API

Django backend application with Django REST Framework and PostgreSQL.

## Prerequisites

- Python 3.11 or higher
- [uv](https://pypi.org/project/uv/) package manager
- Docker (for PostgreSQL)

## Quick Start

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
   cp .env.example .env
   # On Windows: copy .env.example .env
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

## Development

### Database Migrations

Create new migrations after model changes:

```bash
make makemigrations
```

Apply migrations to database:

```bash
make migrate
```

### Testing

Run all tests:

```bash
make test
```

Run tests with coverage report:

```bash
make test-cov
```

### Other Commands

Open Django shell:

```bash
make shell
```

Stop the database:

```bash
make db-down
```

Clean cache files:

```bash
make clean
```

## Available Make Commands

| Command                | Description               |
| ---------------------- | ------------------------- |
| `make dev`             | Start development server  |
| `make test`            | Run tests                 |
| `make test-cov`        | Run tests with coverage   |
| `make db-up`           | Start PostgreSQL          |
| `make db-down`         | Stop PostgreSQL           |
| `make migrate`         | Apply database migrations |
| `make makemigrations`  | Create new migrations     |
| `make shell`           | Open Django shell         |
| `make createsuperuser` | Create a superuser        |
| `make install`         | Install dependencies      |
| `make clean`           | Clean cache files         |

- `make migrate-down` - Rollback migration
- `make migrate-current` - Show current migration
- `make install` - Install dependencies

## API Documentation

Once the application is running, visit:

- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc
