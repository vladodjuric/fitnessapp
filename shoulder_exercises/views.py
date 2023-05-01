from django.http import JsonResponse
from django.shortcuts import render
from django.template import context
from .models import ShoulderExercise


def shoulder_exercises(request):
    exercises = ShoulderExercise.objects.all().values()
    exercises_list = list(exercises)
    context = {'exercises': exercises_list}
    return JsonResponse(context, safe=False)
