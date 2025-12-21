from polyfactory.factories.pydantic_factory import ModelFactory
from app.users.schemas import UserCreate


class UserFactory(ModelFactory[UserCreate]):
    """Factory for creating test user data."""
    __model__ = UserCreate

    @classmethod
    def username(cls) -> str:
        """Generate a unique username."""
        import random
        import string
        suffix = ''.join(random.choices(string.ascii_lowercase + string.digits, k=6))
        return f"testuser_{suffix}"
    
    @classmethod
    def password(cls) -> str:
        """Generate a valid password."""
        return "Test1234!"
