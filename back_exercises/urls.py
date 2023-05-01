from django.urls import path
from . import views

urlpatterns = [
    path('', views.back_exercises, name='back_exercises'),
]
