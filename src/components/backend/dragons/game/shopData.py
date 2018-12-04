import requests
from dragons.models import playerData

class shopData:

    def __init__(self):

        self.shopData = {
            'healingPotion': [],
            'firstItems': [],
            'secondItems': []
        }

    def getShopData(self):
        return self.shopData

    def fetchShopData(self, gameid):

        data = requests.get("https://www.dragonsofmugloar.com/api/v2/" + gameid + "/shop")
        data = data.json()

        for item in data:

            if item['cost'] == 50:
                self.shopData['healingPotion'].append(item)

            elif item['cost'] == 100:
                self.shopData['firstItems'].append(item)

            else:
                self.shopData['secondItems'].append(item)

    def buyItem(self, gameid, item):
        data = requests.post("https://www.dragonsofmugloar.com/api/v2/" + gameid + "/shop/buy/" + item['id'])
        data = data.json()

        player = playerData.objects.get(gameid=gameid)

        player.lives = data['lives']
        player.gold = data['gold']
        player.level = data['level']
        player.turn = data['turn']

        player.save()

        return {
            'item': item['name'],
            'success': data['shoppingSuccess']  
        }
                