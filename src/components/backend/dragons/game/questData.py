import requests

from dragons.models import playerData

class questData:

    def __init__(self):

        self.questData = {
            'easy': [],
            'normal': [],
            'hard': [],
            'very-hard': []
        }

    def getQuestData(self):
        return self.questData

    def getQuestToSolve(self):

        if int(len(self.questData['easy'])) > 0:
            return self.questData['easy'][0]

        elif int(len(self.questData['normal'])) > 0:
            return self.questData['normal'][0]

        elif int(len(self.questData['hard'])) > 0:
            return self.questData['hard'][0]

        elif int(len(self.questData['very-hard'])) > 0:
            return self.questData['very-hard'][0] 

    def solveQuest(self, gameid, questdata):
        data = requests.post("https://www.dragonsofmugloar.com/api/v2/" + gameid + "/solve/" + questdata['adId'])
        data = data.json()

        player = playerData.objects.get(gameid=gameid)

        player.lives = data['lives']
        player.gold = data['gold']
        player.score = data['score']
        player.turn = data['turn']
        player.save()

        return {
            'type': 'quest',
            'success': data['success'],
            'message': data['message'],
            'questData': {
                'message': questdata['message'],
                'reward': questdata['reward'],
                'probability': questdata['probability']
            }
        }

    def fetchQuestData(self, gameid):

        data = requests.get("https://www.dragonsofmugloar.com/api/v2/" + gameid + "/messages")
        data = data.json()

        for item in data:

            if item['probability'] == "Walk in the park" or item['probability'] == "Piece of cake":
                self.questData['easy'].append(item)

            elif item['probability'] == "Quite likely" or item['probability'] == "Sure thing":
                self.questData['normal'].append(item)

            elif item['probability'] == "Hmmm...." or item['probability'] == "Playing with fire" or item['probability'] == "Gamble":
                self.questData['hard'].append(item)

            else:
                self.questData['very-hard'].append(item)                       