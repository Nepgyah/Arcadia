# Generated by Django 5.1.1 on 2024-11-22 05:49

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Genre',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Anime',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=500)),
                ('name_alternatives', models.JSONField(blank=True, null=True)),
                ('summary', models.TextField(blank=True, null=True)),
                ('status', models.CharField(choices=[('not_yet_airing', 'Not Yet Airing'), ('airing', 'Airing'), ('completed_airing', 'Airing Completed')], default='not_yet_airing', max_length=30)),
                ('media_type', models.CharField(choices=[('tv', 'TV Anime'), ('ova', 'OVA'), ('ona', 'ONA'), ('movie', 'Movie')], default='tv', max_length=10)),
                ('airing_start_date', models.DateField(blank=True, null=True)),
                ('airing_end_date', models.DateField(blank=True, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('genres', models.ManyToManyField(related_name='animes', to='miru.genre')),
            ],
            options={
                'verbose_name_plural': 'Anime',
                'ordering': ['-created_at'],
            },
        ),
    ]