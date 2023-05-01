from django.urls import path
from . import views

urlpatterns = [
    path('', views.core_exercises, name='core_exercises'),
]
