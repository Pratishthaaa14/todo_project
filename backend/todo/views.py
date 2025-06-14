from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from django.contrib.auth.mixins import LoginRequiredMixin
from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView
from django.urls import reverse_lazy
from .models import Task
from django.db import models

# Task List with search, filter and sort
class TaskListView(LoginRequiredMixin, ListView):
    model = Task
    template_name = 'todo/task_list.html'
    context_object_name = 'tasks'

    def get_queryset(self):
        queryset = Task.objects.filter(user=self.request.user)
        status = self.request.GET.get('status')
        sort = self.request.GET.get('sort')
        q = self.request.GET.get('q', '').strip()

        # Filter based on completion
        if status == 'COMPLETED':
            queryset = queryset.filter(complete=True)
        elif status == 'PENDING':
            queryset = queryset.filter(complete=False)

        # Search by title or description
        if q:
            queryset = queryset.filter(
                models.Q(title__icontains=q) |
                models.Q(description__icontains=q)
            )

        # Sort
        if sort in ['due_date', 'created', 'priority']:
            queryset = queryset.order_by(sort)
        else:
            queryset = queryset.order_by('-created')

        return queryset

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        tasks = context['tasks']
        context['stats'] = {
            'total': tasks.count(),
            'completed': tasks.filter(complete=True).count(),
            'pending': tasks.filter(complete=False).count(),
        }
        context['current_status'] = self.request.GET.get('status', '')
        context['current_sort'] = self.request.GET.get('sort', '')
        context['current_search'] = self.request.GET.get('q', '')
        return context

class TaskDetailView(LoginRequiredMixin, DetailView):
    model = Task
    template_name = 'todo/task_detail.html'
    context_object_name = 'task'

    def get_queryset(self):
        return Task.objects.filter(user=self.request.user)

class TaskCreateView(LoginRequiredMixin, CreateView):
    model = Task
    template_name = 'todo/task_form.html'
    fields = ['title', 'description', 'due_date', 'priority', 'complete']
    success_url = reverse_lazy('todo:task-list')

    def form_valid(self, form):
        form.instance.user = self.request.user
        return super().form_valid(form)

class TaskUpdateView(LoginRequiredMixin, UpdateView):
    model = Task
    template_name = 'todo/task_form.html'
    fields = ['title', 'description', 'due_date', 'priority', 'complete']
    success_url = reverse_lazy('todo:task-list')

    def get_queryset(self):
        return Task.objects.filter(user=self.request.user)

class TaskDeleteView(LoginRequiredMixin, DeleteView):
    model = Task
    template_name = 'todo/task_confirm_delete.html'
    success_url = reverse_lazy('todo:task-list')

    def get_queryset(self):
        return Task.objects.filter(user=self.request.user)

# Dashboard logic (if used here instead of users/views.py)
@login_required
def dashboard_view(request):
    tasks = Task.objects.filter(user=request.user)

    stats = {
        'total': tasks.count(),
        'completed': tasks.filter(complete=True).count(),
        'pending': tasks.filter(complete=False).count(),
        'in_progress': 0  # placeholder, not used
    }

    return render(request, 'users/dashboard.html', {'tasks': tasks, 'stats': stats})
