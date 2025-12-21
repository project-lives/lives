from fastapi import FastAPI
from app.users import router as users_router

app = FastAPI(
    title="Backend API",
    description="FastAPI backend with PostgreSQL and SQLAlchemy",
    version="0.1.0"
)

# Include routers
app.include_router(users_router.router)


@app.get("/")
def root():
    """Root endpoint."""
    return {"message": "Welcome to the Backend API"}


@app.get("/health")
def health():
    """Health check endpoint."""
    return {"status": "healthy"}
