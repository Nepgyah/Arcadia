# Generated by Django 5.1.1 on 2024-11-22 08:10

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('miru', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Season',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('season', models.CharField(choices=[('Winter', 'Winter'), ('Spring', 'Spring'), ('Summer', 'Summer'), ('Fall', 'Fall')], max_length=20)),
                ('year', models.PositiveIntegerField()),
            ],
        ),
        migrations.AddField(
            model_name='anime',
            name='season',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='animes', to='miru.season'),
        ),
    ]