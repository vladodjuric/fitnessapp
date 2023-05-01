from django.http import JsonResponse
from django.shortcuts import render
from django.template import context
from .models import CoreExercise


def core_exercises(request):
    exercises = CoreExercise.objects.all().values()
    exercises_list = list(exercises)
    context = {'exercises': exercises_list}
    return JsonResponse(context, safe=False)
