from django.db import models


class CoreExercise(models.Model):
    name = models.CharField(max_length=255)
    duration_seconds = models.IntegerField()
    sets = models.IntegerField()
    difficulty = models.CharField(max_length=50)
    category = models.CharField(max_length=255)

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'coreexercises'
