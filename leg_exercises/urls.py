from django.urls import path
from . import views

urlpatterns = [
    path('', views.leg_exercises, name='leg_exercises'),
]
