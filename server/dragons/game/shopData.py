import requests
from dragons.models import PlayerData

class ShopData:

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

        player = PlayerData.objects.get(gameid=gameid)

        player.lives = data['lives']
        player.gold = data['gold']
        player.level = data['level']
        player.turn = data['turn']

        player.save()

        return {
            'type': "shop",
            'success': data['shoppingSuccess'],
            'item': item['name'],
            'cost': item['cost']
        }
                