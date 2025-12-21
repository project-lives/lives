import pytest
from fastapi.testclient import TestClient
from sqlalchemy.orm import Session

from app.users.models import User
from app.auth import hash_password, verify_password
from app.users.tests.factories import UserFactory


class TestUserEndpoints:
    """Test user API endpoints."""
    
    def test_create_user(self, client: TestClient):
        """Test creating a new user."""
        user_data = UserFactory.build()
        response = client.post(
            "/users/",
            json={"username": user_data.username, "password": user_data.password}
        )
        
        assert response.status_code == 201
        data = response.json()
        assert data["username"] == user_data.username
        assert "id" in data
        assert "password" not in data
    
    def test_create_user_duplicate_username(self, client: TestClient, db_session: Session):
        """Test creating a user with duplicate username fails."""
        user_data = UserFactory.build()
        
        # Create first user
        response = client.post(
            "/users/",
            json={"username": user_data.username, "password": user_data.password}
        )
        assert response.status_code == 201
        
        # Try to create duplicate
        response = client.post(
            "/users/",
            json={"username": user_data.username, "password": "DifferentPass123!"}
        )
        assert response.status_code == 400
        assert "already registered" in response.json()["detail"]
    
    def test_get_users(self, client: TestClient, db_session: Session):
        """Test getting all users."""
        # Create multiple users
        users_data = [UserFactory.build() for _ in range(3)]
        for user_data in users_data:
            user = User(username=user_data.username, password=hash_password(user_data.password))
            db_session.add(user)
        db_session.commit()
        
        response = client.get("/users/")
        assert response.status_code == 200
        data = response.json()
        assert len(data) == 3
        assert all("username" in user for user in data)
    
    def test_get_user_by_id(self, client: TestClient, db_session: Session):
        """Test getting a user by ID."""
        user_data = UserFactory.build()
        user = User(username=user_data.username, password=hash_password(user_data.password))
        db_session.add(user)
        db_session.commit()
        db_session.refresh(user)
        
        response = client.get(f"/users/{user.id}")
        assert response.status_code == 200
        data = response.json()
        assert data["id"] == user.id
        assert data["username"] == user.username
    
    def test_get_user_not_found(self, client: TestClient):
        """Test getting a non-existent user returns 404."""
        response = client.get("/users/99999")
        assert response.status_code == 404
        assert "not found" in response.json()["detail"].lower()
    
    def test_delete_user(self, client: TestClient, db_session: Session):
        """Test deleting a user."""
        user_data = UserFactory.build()
        user = User(username=user_data.username, password=hash_password(user_data.password))
        db_session.add(user)
        db_session.commit()
        db_session.refresh(user)
        
        response = client.delete(f"/users/{user.id}")
        assert response.status_code == 204
        
        # Verify user is deleted
        response = client.get(f"/users/{user.id}")
        assert response.status_code == 404
    
    def test_delete_user_not_found(self, client: TestClient):
        """Test deleting a non-existent user returns 404."""
        response = client.delete("/users/99999")
        assert response.status_code == 404


class TestUserModel:
    """Test User model functionality."""
    
    def test_create_user_model(self, db_session: Session):
        """Test creating a user in the database."""
        user_data = UserFactory.build()
        hashed_pw = hash_password(user_data.password)
        
        user = User(username=user_data.username, password=hashed_pw)
        db_session.add(user)
        db_session.commit()
        db_session.refresh(user)
        
        assert user.id is not None
        assert user.username == user_data.username
        assert user.password == hashed_pw
    
    def test_password_hashing(self):
        """Test password hashing and verification."""
        password = "TestPassword123!"
        hashed = hash_password(password)
        
        assert hashed != password
        assert verify_password(password, hashed)
        assert not verify_password("WrongPassword", hashed)
    
    def test_user_repr(self, db_session: Session):
        """Test User model string representation."""
        user_data = UserFactory.build()
        user = User(username=user_data.username, password=hash_password(user_data.password))
        db_session.add(user)
        db_session.commit()
        db_session.refresh(user)
        
        repr_str = repr(user)
        assert "User" in repr_str
        assert str(user.id) in repr_str
        assert user.username in repr_str
