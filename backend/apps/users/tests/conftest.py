"""
Pytest configuration for users app tests.
"""
import pytest
import factory
from factory.django import DjangoModelFactory
from apps.users.models import User


class UserFactory(DjangoModelFactory):
    """Factory for creating test users."""
    
    class Meta:
        model = User
    
    email = factory.Sequence(lambda n: f'user{n}@example.com')
    is_active = True
    is_staff = False
    
    @factory.post_generation
    def password(obj, create, extracted, **kwargs):
        """Set password after user creation."""
        if not create:
            return
        
        if extracted:
            obj.set_password(extracted)
        else:
            obj.set_password('defaultpass123')
        obj.save()


@pytest.fixture
def user_factory():
    """Provide UserFactory for tests."""
    return UserFactory


@pytest.fixture
def create_user(db):
    """Helper function to create users in tests."""
    def _create_user(**kwargs):
        password = kwargs.pop('password', 'testpass123')
        user = User.objects.create_user(password=password, **kwargs)
        return user
    return _create_user
