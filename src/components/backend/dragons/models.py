from django.db import models

# Create your models here.

class PlayerData(models.Model):

    gameid = models.CharField(max_length=8)
    lives = models.IntegerField(default=0)
    gold = models.IntegerField(default=0)
    level = models.IntegerField(default=0)
    score = models.IntegerField(default=0)
    highScore = models.IntegerField(default=0)
    turn = models.IntegerField(default=0)

