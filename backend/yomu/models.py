from django.db import models
from shared.models import Company, Genre, Media
from characters.models import Character

class Author(models.Model):
    name=models.CharField(max_length=255, null=False, blank=False)

class WorkType(models.TextChoices):
    MANGA = 'manga', 'Manga'
    LIGHT_NOVEL = 'light_novel', 'Light Novel (LN)'
    NOVEL = 'novel', 'Novel'
    MANWHA = 'manwha', 'Manwha (KR)'
    MANHUA = 'manhua', 'Manhua (CN)'
    DOUJINSHI = 'doujinshi', 'Doujinshi'
    WEB_NOVEL = 'web_novel', 'Web Novel'

class Work(Media):

    class Status(models.IntegerChoices):
        NOT_PUBLISHING = 0, 'Not Publishing'
        PUBLISHING = 1, 'Publishing'
        COMPLETED = 2, 'Completed'

    title_alternatives = models.JSONField(default=list, blank=True)
    status = models.IntegerField(choices=Status.choices, default=Status.NOT_PUBLISHING)

    characters = models.ManyToManyField(Character, through='WorkCharacter', related_name='works', blank=True)
    genres = models.ManyToManyField(Genre, related_name='works', blank=True)
    related=models.ManyToManyField('self', through='WorkRelation', symmetrical=False, related_name='related_works', blank=True)
    total_volumes = models.IntegerField(null=True, blank=True)
    total_chapters = models.IntegerField(null=True, blank=True)

    type = models.CharField(choices=WorkType.choices, default=WorkType.MANGA, blank=True)
    authors = models.ManyToManyField(Author, through='WorkAuthor', related_name='works', blank=True)
    publisher=models.ForeignKey(Company, on_delete=models.SET_NULL, null=True, blank=True)
    publishing_start_date = models.DateField(null=True, blank=True)
    publishing_end_date = models.DateField(null=True, blank=True)

class WorkAuthor(models.Model):

    class Role(models.IntegerChoices):
        WRITER = 0, 'Writer'
        ARTIST = 1, 'Artist'
        WRITER_ARTIST = 2, 'Writer & Artist'
        
    work = models.ForeignKey(Work, on_delete=models.CASCADE)
    author = models.ForeignKey(Author, on_delete=models.CASCADE)
    role = models.IntegerField(choices=Role.choices, default=Role.WRITER, blank=True)

    def __str__(self):
        return f"{self.author} as {self.get_role_display()} in {self.work}"
    
class WorkCharacter(models.Model):

    class Role(models.IntegerChoices):
        MAIN = 0, 'Main'
        SUPPORT = 1, 'Supporting'

    work = models.ForeignKey(Work, on_delete=models.CASCADE)
    character = models.ForeignKey(Character, on_delete=models.CASCADE)
    role = models.IntegerField(choices=Role.choices, default=Role.SUPPORT, blank=True)

    class Meta:
        ordering = ['role']

    def __str__(self):
        return f"{self.character} in {self.work} as {self.get_role_display()} character"
    
class WorkRelation(models.Model):

    class Type(models.TextChoices):
        PREQUEL = 'prequel', 'Prequel'
        SEQUEL = 'sequel', 'Sequel'
        SPINOFF = 'spinoff', 'Spin-off'
        SIDE_STORY = 'side_story', 'Side Story'
        ALTERNATIVE_VERSION = 'alternative_version', 'Alternate'
        OTHER = 'other',  'Other'

    from_work = models.ForeignKey('Work', on_delete=models.CASCADE, related_name='outgoing_works')
    to_work = models.ForeignKey('Work', on_delete=models.CASCADE, related_name='incoming_works')
    relation_type = models.CharField(choices=Type.choices, default=Type.OTHER, blank=True)