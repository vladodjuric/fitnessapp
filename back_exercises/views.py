from django.http import JsonResponse
from django.shortcuts import render
from django.template import context
from .models import BackExercise


def back_exercises(request):
    exercises = BackExercise.objects.values()
    exercises_list = list(exercises)
    context = {'exercises': exercises_list}
    return JsonResponse(context, safe=False)
