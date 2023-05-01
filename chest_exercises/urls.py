from django.urls import path
from . import views

urlpatterns = [
    path('', views.chest_exercises, name='chest_exercises'),
]
