"""
Tests for user serializers.
"""
import pytest
from apps.users.models import User
from apps.users.serializers import UserSerializer, UserCreateSerializer


@pytest.mark.django_db
class TestUserSerializer:
    """Tests for UserSerializer."""
    
    def test_serialize_user(self, user):
        """Test serializing a user."""
        serializer = UserSerializer(user)
        
        assert serializer.data['email'] == user.email
        assert 'password' not in serializer.data
        assert 'id' in serializer.data
        assert 'created_at' in serializer.data
    
    def test_deserialize_user(self):
        """Test deserializing user data."""
        data = {
            'email': 'test@example.com',
            'password': 'testpass123'
        }
        
        serializer = UserSerializer(data=data)
        
        assert serializer.is_valid()
        user = serializer.save()
        
        assert user.email == data['email']
        assert user.check_password(data['password'])


@pytest.mark.django_db
class TestUserCreateSerializer:
    """Tests for UserCreateSerializer."""
    
    def test_create_user(self):
        """Test creating a user with the serializer."""
        data = {
            'email': 'newuser@example.com',
            'password': 'testpass123'
        }
        
        serializer = UserCreateSerializer(data=data)
        
        assert serializer.is_valid()
        user = serializer.save()
        
        assert user.email == data['email']
        assert user.check_password(data['password'])
        assert User.objects.filter(email=data['email']).exists()
    
    def test_password_min_length_validation(self):
        """Test password minimum length validation."""
        data = {
            'email': 'test@example.com',
            'password': 'short'
        }
        
        serializer = UserCreateSerializer(data=data)
        
        assert not serializer.is_valid()
        assert 'password' in serializer.errors
