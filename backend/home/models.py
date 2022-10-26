from django.conf import settings
from django.db import models
class Profile(models.Model):
    'Generated Model'
    user = models.ForeignKey("users.User",on_delete=models.CASCADE,related_name="profile_user",)
    phone = models.CharField(max_length=20,)
    is_phone_authenticated = models.BooleanField()
