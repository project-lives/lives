"""
Tests for the User API endpoints.
"""
import pytest
from django.urls import reverse
from rest_framework import status
from apps.users.models import User


@pytest.mark.django_db
class TestUserAPI:
    """Tests for User API endpoints."""
    
    def test_create_user(self, api_client):
        """Test creating a user via API."""
        url = reverse('user-list')
        payload = {
            'email': 'newuser@example.com',
            'password': 'testpass123'
        }
        
        response = api_client.post(url, payload, format='json')
        
        assert response.status_code == status.HTTP_201_CREATED
        assert response.data['email'] == payload['email']
        assert 'password' not in response.data
        
        user = User.objects.get(email=payload['email'])
        assert user.check_password(payload['password'])
    
    def test_create_user_short_password(self, api_client):
        """Test that creating user with short password fails."""
        url = reverse('user-list')
        payload = {
            'email': 'newuser@example.com',
            'password': 'short'
        }
        
        response = api_client.post(url, payload, format='json')
        
        assert response.status_code == status.HTTP_400_BAD_REQUEST
    
    def test_create_user_duplicate_email(self, api_client, user):
        """Test creating a user with duplicate email fails."""
        url = reverse('user-list')
        payload = {
            'email': user.email,
            'password': 'testpass123'
        }
        
        response = api_client.post(url, payload, format='json')
        
        assert response.status_code == status.HTTP_400_BAD_REQUEST
    
    def test_list_users_requires_authentication(self, api_client):
        """Test that listing users requires authentication."""
        url = reverse('user-list')
        
        response = api_client.get(url)
        
        assert response.status_code == status.HTTP_403_FORBIDDEN
    
    def test_list_users_authenticated(self, authenticated_client, user):
        """Test listing users when authenticated."""
        url = reverse('user-list')
        
        response = authenticated_client.get(url)
        
        assert response.status_code == status.HTTP_200_OK
        assert len(response.data['results']) >= 1
    
    def test_retrieve_user_requires_authentication(self, api_client, user):
        """Test that retrieving a user requires authentication."""
        url = reverse('user-detail', args=[user.id])
        
        response = api_client.get(url)
        
        assert response.status_code == status.HTTP_403_FORBIDDEN
    
    def test_retrieve_user_authenticated(self, authenticated_client, user):
        """Test retrieving a user when authenticated."""
        url = reverse('user-detail', args=[user.id])
        
        response = authenticated_client.get(url)
        
        assert response.status_code == status.HTTP_200_OK
        assert response.data['email'] == user.email
    
    def test_get_current_user(self, authenticated_client, user):
        """Test getting current user details."""
        url = reverse('user-me')
        
        response = authenticated_client.get(url)
        
        assert response.status_code == status.HTTP_200_OK
        assert response.data['email'] == user.email
        assert 'password' not in response.data
    
    def test_get_current_user_unauthenticated(self, api_client):
        """Test that getting current user requires authentication."""
        url = reverse('user-me')
        
        response = api_client.get(url)
        
        assert response.status_code == status.HTTP_403_FORBIDDEN
