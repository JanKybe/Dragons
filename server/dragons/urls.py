from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'start_turn/(?P<gameid>[-\w]+)', views.startTurn, name="startTurn"),
    url(r'start_game', views.startGame, name="startGame")
]