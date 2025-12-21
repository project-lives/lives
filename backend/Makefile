.PHONY: help dev test db-up db-down install clean migrate-create migrate-up migrate-down migrate-current

help:
	@echo "Available commands:"
	@echo "  make dev              - Start development server"
	@echo "  make test             - Run tests"
	@echo "  make db-up            - Start PostgreSQL with Docker"
	@echo "  make db-down          - Stop PostgreSQL"
	@echo "  make install          - Install dependencies"
	@echo "  make migrate-create   - Create a new migration (use MSG='description')"
	@echo "  make migrate-up       - Apply all pending migrations"
	@echo "  make migrate-down     - Rollback last migration"
	@echo "  make migrate-current  - Show current migration version"
	@echo "  make clean            - Clean cache files"

dev:
	uv run uvicorn app.main:app --reload

test:
	uv run pytest

test-cov:
	uv run pytest --cov=app --cov-report=html

db-up:
	docker-compose up -d

db-down:
	docker-compose down

install:
	uv sync --all-extras

migrate-create:
	@if [ -z "$(MSG)" ]; then \
		echo "Error: Please provide a migration message with MSG='description'"; \
		echo "Example: make migrate-create MSG='add users table'"; \
		exit 1; \
	fi
	uv run alembic revision --autogenerate -m "$(MSG)"

migrate-up:
	uv run alembic upgrade head

migrate-down:
	uv run alembic downgrade -1

migrate-current:
	uv run alembic current

clean:
	find . -type d -name __pycache__ -exec rm -rf {} +
	find . -type f -name "*.pyc" -delete
	rm -rf .pytest_cache
	rm -rf htmlcov
	rm -rf .coverage
