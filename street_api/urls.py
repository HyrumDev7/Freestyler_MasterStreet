
from django.contrib import admin
from django.urls import path, include
from django.http import HttpResponse

def home(request):
    return HttpResponse("¡Bienvenido a FreestylerWeb!")


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('productos.urls')),
    path('', home, name='home'),
]
