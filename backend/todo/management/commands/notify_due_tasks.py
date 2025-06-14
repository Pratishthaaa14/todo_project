from django.core.management.base import BaseCommand
from django.utils import timezone
from todo.models import Task
from django.contrib.auth.models import User
from django.core.mail import send_mail
from django.conf import settings
from datetime import timedelta

class Command(BaseCommand):
    help = 'Notify users about tasks due in the next 24 hours.'

    def handle(self, *args, **kwargs):
        now = timezone.now()
        soon = now + timedelta(hours=24)
        due_tasks = Task.objects.filter(due_date__gte=now, due_date__lte=soon, status__in=['PENDING', 'IN_PROGRESS'])
        users = User.objects.filter(tasks__in=due_tasks).distinct()
        if not due_tasks.exists():
            self.stdout.write(self.style.SUCCESS('No tasks due in the next 24 hours.'))
            return
        for user in users:
            user_tasks = due_tasks.filter(user=user)
            self.stdout.write(f'User: {user.username} has {user_tasks.count()} task(s) due soon:')
            for task in user_tasks:
                self.stdout.write(f'  - {task.title} (Due: {task.due_date.strftime("%Y-%m-%d %H:%M")})')
            # Send email notification
            if user.email:
                subject = 'Tasks Due Soon - Todo App Notification'
                message = 'Dear {},\n\nYou have the following tasks due in the next 24 hours:\n'.format(user.username)
                for task in user_tasks:
                    message += f"- {task.title} (Due: {task.due_date.strftime('%Y-%m-%d %H:%M')})\n"
                message += '\nPlease check your Todo App for more details.'
                send_mail(
                    subject,
                    message,
                    settings.DEFAULT_FROM_EMAIL,
                    [user.email],
                    fail_silently=False,
                )
                self.stdout.write(self.style.SUCCESS(f'Email sent to {user.email}'))
            else:
                self.stdout.write(self.style.WARNING(f'No email for user {user.username}, skipping email notification.'))
        self.stdout.write(self.style.SUCCESS('Due date notifications checked.')) 