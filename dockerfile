# Use official Python image
FROM python:3.9-slim-buster

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Set working directory
WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    libpq-dev \
    && rm -rf /var/lib/apt/lists/*

# Copy project files
COPY . /app/

# Install dependencies
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Collect static files and run migrations
# Set Django settings module if needed
ENV DJANGO_SETTINGS_MODULE=backend.todo_project.settings
RUN python backend/manage.py collectstatic --noinput
RUN python backend/manage.py migrate

# Expose port
EXPOSE 8000

# Run Gunicorn server
CMD ["gunicorn", "backend.todo_project.wsgi:application", "--bind", "0.0.0.0:8000"]
