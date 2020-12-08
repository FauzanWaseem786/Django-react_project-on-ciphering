from django.db import models

# Create your models here.
class Message(models.Model):
	Mid=models.IntegerField(primary_key=True)
	message=models.CharField(max_length=200,blank=True)
