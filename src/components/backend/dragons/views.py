from django.shortcuts import render
from django.http import JsonResponse
from dragons.models import playerData
import requests

from .game.gameCore import gameCore


def startTurn(request, gameid):

    game = gameCore(gameid)
    data = game.startTurn()

    player = playerData.objects.get(gameid=gameid)

    if player.lives == 0:
        return JsonResponse(
            {
                'data': 'Game over, start new game!'
            }
        )
    else:  
        return JsonResponse(
            {
                'data': data,
                'lives': player.lives,
                'gold': player.gold,
                'level': player.level,
                'score': player.score,
                'turn': player.turn
            }
            
        )

def startGame(request):

    if request.method == 'POST':
        data = requests.post("https://www.dragonsofmugloar.com/api/v2/game/start")
        data = data.json()

        startGame = playerData(
            gameid = data['gameId'],
            lives = data['lives'],
            gold = data['gold'],
            level = data['level'],
            score = data['score'],
            highScore = data['highScore'],
            turn = data['turn']
        )

        startGame.save()

        response = JsonResponse(data)
        response["Access-Control-Allow-Origin"] = "*"
        response["Access-Control-Allow-Methods"] = "POST"
        response["Access-Control-Max-Age"] = "1000"
        response["Access-Control-Allow-Headers"] = "X-Requested-With, Content-Type"

        return response

    else:
        return JsonResponse({
            "Error": "Coulnd't fetch game data"
        })