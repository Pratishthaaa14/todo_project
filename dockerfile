# Use official Python image
FROM python:3.11-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set work directory
WORKDIR /app/backend

# Install system dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    libpq-dev \
    && rm -rf /var/lib/apt/lists/*

# Copy requirements and install
COPY backend/requirements.txt /app/backend/
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Copy project files
COPY . /app/

# Collect static files and run migrations
RUN python manage.py collectstatic --noinput
RUN python manage.py migrate

# Expose port (optional)
EXPOSE 8000

# Start Gunicorn server
CMD ["gunicorn", "todo_project.wsgi:application", "--bind", "0.0.0.0:8000"]
