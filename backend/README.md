# Backend API

Django backend application with Django REST Framework and PostgreSQL.

Database is running in a docker image, so make sure Docker is installed and is running on your machine.

Also install python 3.11 or greater.

## Setup

1. Install uv (Python package manager):

```bash
pip install uv
```

2. Install dependencies:

```bash
uv sync --all-extras
# OR use: make install
```

3. Copy `.env.example` to `.env` and update values:

```bash
cp .env.example .env
```

4. Start PostgreSQL with Docker:

```bash
docker-compose up -d
# OR use: make db-up
```

5. Run database migrations:

```bash
uv run python manage.py migrate
# OR use: make migrate
```

6. Create a superuser (optional):

```bash
uv run python manage.py createsuperuser
# OR use: make createsuperuser
```

7. Run the application:

```bash
uv run python manage.py runserver
# OR use: make dev
```

The API will be available at http://localhost:8000/
Admin interface will be at http://localhost:8000/admin/

## Database Migrations

This project uses Django's built-in migration system:

**Create new migrations:**

```bash
make makemigrations
```

**Apply migrations:**

```bash
make migrate
```

## Testing

Run tests with pytest:

```bash
uv run pytest
# OR use: make test
```

Run tests with coverage:

```bash
uv run pytest --cov=apps --cov-report=html
# OR use: make test-cov
```

## Makefile Commands

- `make dev` - Start development server
- `make test` - Run tests
- `make test-cov` - Run tests with coverage
- `make db-up` - Start PostgreSQL
- `make db-down` - Stop PostgreSQL
- `make migrate` - Apply database migrations
- `make makemigrations` - Create new migrations
- `make shell` - Open Django shell
- `make createsuperuser` - Create a superuser
- `make clean` - Clean cache files
- `make migrate-down` - Rollback migration
- `make migrate-current` - Show current migration
- `make install` - Install dependencies
- `make clean` - Clean cache files

## API Documentation

Once the application is running, visit:

- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc
