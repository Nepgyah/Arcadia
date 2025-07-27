from django.utils.text import slugify

def unique_slugify(instance, value, slug_field_name='slug'):
    slug = slugify(value)
    model = instance.__class__
    unique_slug = slug
    suffix = 1
    while model.objects.filter(**{slug_field_name: unique_slug}).exists():
        suffix += 1
        unique_slug = f"{slug}-{suffix}"
    return unique_slug