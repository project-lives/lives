"""
Pytest configuration and global fixtures for the backend project.
"""
import pytest
from django.conf import settings
from rest_framework.test import APIClient


@pytest.fixture(scope='session')
def django_db_setup():
    """Setup test database configuration."""
    settings.DATABASES['default'] = {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'test_backend_db',
        'USER': 'postgres',
        'PASSWORD': 'postgres',
        'HOST': 'localhost',
        'PORT': '5432',
        'ATOMIC_REQUESTS': False,
        'AUTOCOMMIT': True,
        'CONN_MAX_AGE': 0,
        'OPTIONS': {},
        'TIME_ZONE': None,
        'TEST': {
            'CHARSET': None,
            'COLLATION': None,
            'NAME': None,
            'MIRROR': None,
        },
    }


@pytest.fixture
def api_client():
    """Provide an API client for testing."""
    return APIClient()


@pytest.fixture
def authenticated_client(api_client, user):
    """Provide an authenticated API client."""
    api_client.force_authenticate(user=user)
    return api_client


@pytest.fixture
def user(db):
    """Create a test user."""
    from apps.users.models import User
    return User.objects.create_user(
        email='test@example.com',
        password='testpass123'
    )


@pytest.fixture
def superuser(db):
    """Create a test superuser."""
    from apps.users.models import User
    return User.objects.create_superuser(
        email='admin@example.com',
        password='adminpass123'
    )
