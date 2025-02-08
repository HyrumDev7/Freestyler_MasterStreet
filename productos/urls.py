from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from .views import McFreesView

urlpatterns = [
    path('mcfrees/', McFreesView.as_view(), name='mcfrees'),
] 

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)