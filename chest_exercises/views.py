from django.shortcuts import render
from .models import ChestExercise
from django.http import JsonResponse


def chest_exercises(request):
    exercises = ChestExercise.objects.values()
    exercises_list = list(exercises)
    context = {'exercises': exercises_list}
    return JsonResponse(context, safe=False)
