from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter
from .api_views import TaskViewSet

app_name = 'todo'

router = DefaultRouter()
router.register(r'api/tasks', TaskViewSet, basename='api-tasks')

urlpatterns = [
    path('', views.TaskListView.as_view(), name='task-list'),
    path('task/<int:pk>/', views.TaskDetailView.as_view(), name='task-detail'),
    path('task/new/', views.TaskCreateView.as_view(), name='task-create'),
    path('task/<int:pk>/edit/', views.TaskUpdateView.as_view(), name='task-update'),
    path('task/<int:pk>/delete/', views.TaskDeleteView.as_view(), name='task-delete'),
]

urlpatterns += router.urls 