import requests

from .questData import questData
from .shopData import shopData
from dragons.models import playerData

class gameCore:

    def __init__(self, gameid):
        self.gameid = gameid

        # Game Data
        self.quests = questData()
        self.shop = shopData()
        self.player = playerData.objects.get(gameid=self.gameid)

    # Fetching Quest & Shop Data 
    def prepareData(self):

        # Fetching QuestData
        self.quests.fetchQuestData(self.gameid)
        print("Quests Done")

        # Fetching ShopData
        self.shop.fetchShopData(self.gameid)
        print("Shop Done")

    # Start Turn and making decision what to do
    def startTurn(self):
        # Fetch Data
        self.prepareData()
        
        shopItems = self.shop.getShopData()

        if self.player.lives < 3 and self.player.gold >= 50:
            data = self.shop.buyItem(self.gameid, shopItems['healingPotion'][0])

        elif self.player.gold >= 100 and self.player.level < 5:
            data = self.shop.buyItem(self.gameid, shopItems['firstItems'][0])

        elif self.player.gold >= 300 and self.player.level > 4:
            data = self.shop.buyItem(self.gameid, shopItems['secondItems'][0])       

        else:
             data = self.quests.solveQuest(self.gameid, self.quests.getQuestToSolve())
              
        return data
