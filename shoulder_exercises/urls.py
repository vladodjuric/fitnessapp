from django.urls import path
from . import views

urlpatterns = [
    path('', views.shoulder_exercises, name='shoulder_exercises'),
]
