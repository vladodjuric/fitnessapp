# Generated by Django 4.1.7 on 2023-04-19 17:36

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ChestExercise',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('duration_seconds', models.IntegerField()),
                ('sets', models.IntegerField()),
                ('difficulty', models.CharField(max_length=50)),
                ('category', models.CharField(max_length=255)),
            ],
            options={
                'db_table': 'chestexercises',
            },
        ),
    ]
