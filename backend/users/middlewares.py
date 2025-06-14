from django.shortcuts import redirect

def guest(view_func):
    def wrapper(request, *args, **kwargs):
        if request.user.is_authenticated:
            return redirect('home')  # or wherever you want to redirect
        return view_func(request, *args, **kwargs)
    return wrapper

def auth(view_func):
    def wrapper(request, *args, **kwargs):
        if not request.user.is_authenticated:
            return redirect('login')  # or wherever your login is
        return view_func(request, *args, **kwargs)
    return wrapper

