"""
Tests for the User model.
"""
import pytest
from django.db import IntegrityError
from apps.users.models import User


@pytest.mark.django_db
class TestUserModel:
    """Tests for the User model."""
    
    def test_create_user_with_email(self):
        """Test creating a user with email is successful."""
        email = 'test@example.com'
        password = 'testpass123'
        
        user = User.objects.create_user(
            email=email,
            password=password
        )
        
        assert user.email == email
        assert user.check_password(password)
        assert user.is_active is True
        assert user.is_staff is False
        assert user.is_superuser is False
    
    def test_user_email_normalized(self):
        """Test email is normalized for new users."""
        email = 'test@EXAMPLE.COM'
        user = User.objects.create_user(email=email, password='test123')
        
        assert user.email == 'test@example.com'
    
    def test_user_email_required(self):
        """Test that creating a user without email raises error."""
        with pytest.raises(ValueError, match='The Email field must be set'):
            User.objects.create_user(email='', password='test123')
    
    def test_create_superuser(self):
        """Test creating a superuser."""
        user = User.objects.create_superuser(
            email='admin@example.com',
            password='adminpass123'
        )
        
        assert user.is_superuser is True
        assert user.is_staff is True
        assert user.is_active is True
    
    def test_user_email_unique(self):
        """Test that duplicate emails are not allowed."""
        email = 'test@example.com'
        User.objects.create_user(email=email, password='test123')
        
        with pytest.raises(IntegrityError):
            User.objects.create_user(email=email, password='test456')
    
    def test_user_str_representation(self):
        """Test the string representation of a user."""
        user = User.objects.create_user(
            email='test@example.com',
            password='test123'
        )
        
        assert str(user) == 'test@example.com'
