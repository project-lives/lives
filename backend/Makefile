.PHONY: help dev test db-up db-down install clean migrate makemigrations shell createsuperuser

help:
	@echo "Available commands:"
	@echo "  make dev              - Start development server"
	@echo "  make test             - Run tests"
	@echo "  make test-cov         - Run tests with coverage"
	@echo "  make db-up            - Start PostgreSQL with Docker"
	@echo "  make db-down          - Stop PostgreSQL"
	@echo "  make install          - Install dependencies"
	@echo "  make migrate          - Apply database migrations"
	@echo "  make makemigrations   - Create new migrations"
	@echo "  make shell            - Open Django shell"
	@echo "  make createsuperuser  - Create a superuser"
	@echo "  make clean            - Clean cache files"

dev:
	uv run python manage.py runserver

test:
	uv run pytest

test-cov:
	uv run pytest --cov=apps --cov-report=html

db-up:
	docker-compose up -d

db-down:
	docker-compose down

install:
	uv sync --all-extras

migrate:
	uv run python manage.py migrate

makemigrations:
	uv run python manage.py makemigrations

shell:
	uv run python manage.py shell

createsuperuser:
	uv run python manage.py createsuperuser

clean:
	find . -type d -name __pycache__ -exec rm -rf {} +
	find . -type f -name "*.pyc" -delete
	rm -rf .pytest_cache
	rm -rf htmlcov
	rm -rf .coverage
