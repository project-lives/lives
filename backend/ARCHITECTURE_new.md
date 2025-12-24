# Backend Architecture

## Technology Stack

- **Framework**: Django 5.0+ with Django REST Framework
- **Database**: PostgreSQL 16
- **Testing**: pytest with pytest-django
- **Package Manager**: uv

## Project Structure

```
backend/
├── config/                 # Django project configuration
│   ├── settings.py        # Main settings file
│   ├── urls.py            # Root URL configuration
│   ├── wsgi.py            # WSGI application
│   └── asgi.py            # ASGI application
├── apps/                   # Django applications
│   └── users/             # User management app
│       ├── models.py      # User model
│       ├── serializers.py # DRF serializers
│       ├── views.py       # API views
│       ├── urls.py        # App URL routing
│       ├── admin.py       # Django admin config
│       └── tests/         # App-specific tests
│           ├── conftest.py        # Test fixtures
│           ├── test_models.py     # Model tests
│           ├── test_api.py        # API tests
│           └── test_serializers.py # Serializer tests
├── tests/                  # Global test directory (legacy)
├── manage.py              # Django management script
├── conftest.py            # Global pytest fixtures
├── pyproject.toml         # Project dependencies
├── Makefile               # Development commands
└── docker-compose.yml     # PostgreSQL container
```

## Design Patterns

### User Model

The project uses a custom user model that:
- Uses email as the username field
- Extends Django's AbstractBaseUser and PermissionsMixin
- Includes custom UserManager for user creation
- Only stores email and password (minimal design)

### API Design

- RESTful API using Django REST Framework
- ViewSets for CRUD operations
- Serializers for data validation and transformation
- Permission-based access control

### Testing Strategy

- pytest as test runner with pytest-django
- Global fixtures in root conftest.py (api_client, user, etc.)
- App-specific fixtures in apps/users/tests/conftest.py
- Factory Boy for test data generation
- Comprehensive test coverage (models, serializers, API endpoints)

## Database

- PostgreSQL as primary database
- Django ORM for database operations
- Django migrations for schema management
- Custom User model with email authentication

## API Endpoints

### Users API

- `POST /api/users/` - Create new user (public)
- `GET /api/users/` - List users (authenticated)
- `GET /api/users/{id}/` - Retrieve user details (authenticated)
- `PUT/PATCH /api/users/{id}/` - Update user (authenticated)
- `DELETE /api/users/{id}/` - Delete user (authenticated)
- `GET /api/users/me/` - Get current user details (authenticated)

## Environment Variables

Required environment variables (see .env.example):
- `DEBUG` - Enable/disable debug mode
- `SECRET_KEY` - Django secret key
- `ALLOWED_HOSTS` - Comma-separated list of allowed hosts
- `DB_NAME` - Database name
- `DB_USER` - Database user
- `DB_PASSWORD` - Database password
- `DB_HOST` - Database host
- `DB_PORT` - Database port

## Development Workflow

1. Make changes to models
2. Create migrations: `make makemigrations`
3. Apply migrations: `make migrate`
4. Write tests
5. Run tests: `make test`
6. Run development server: `make dev`

## Testing

All tests are run with pytest:
- Tests use a separate test database
- Database is reused between tests for speed (--reuse-db)
- Factory Boy generates test data
- Global fixtures provide common test utilities
