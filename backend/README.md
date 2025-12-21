# Backend API

FastAPI backend application with PostgreSQL and SQLAlchemy.

Database is running in a docker image, so make sure Docker is installed and is running on your machine.

Also install python 3.11 or greater.

## Setup

1. Install uv (Python package manager):

```bash
pip install uv
```

2. Install dependencies:

```bash
uv sync
```

3. Copy `.env.example` to `.env` and update values:

```bash
cp .env.example .env
```

4. Start PostgreSQL with Docker:

```bash
docker-compose up -d
```

5. Run database migrations:

```bash
uv run alembic upgrade head
# OR use: make migrate-up
```

6. Run the application:

```bash
uv run uvicorn app.main:app --reload
# OR use: make dev
```

## Database Migrations

This project uses Alembic for database migrations:

**Create a new migration:**

```bash
make migrate-create MSG="add new column to users"
```

**Apply migrations:**

```bash
make migrate-up
```

**Rollback last migration:**

```bash
make migrate-down
```

**Check current version:**

```bash
make migrate-current
```

## Testing

Run tests:

```bash
uv run pytest
# OR use: make test
```

Run tests with coverage:

```bash
uv run pytest --cov=app --cov-report=html
# OR use: make test-cov
```

## Makefile Commands

- `make dev` - Start development server
- `make test` - Run tests
- `make db-up` - Start PostgreSQL
- `make db-down` - Stop PostgreSQL
- `make migrate-create MSG="description"` - Create new migration
- `make migrate-up` - Apply migrations
- `make migrate-down` - Rollback migration
- `make migrate-current` - Show current migration
- `make install` - Install dependencies
- `make clean` - Clean cache files

## API Documentation

Once the application is running, visit:

- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc
