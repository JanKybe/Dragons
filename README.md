# Dragons of Mugloar

## Vue setup
```
npm install
```

### Development version
```
npm run serve
```

### Production version
```
npm run build
```

## Django setup

### Change Allowed Host IP
###### Location: /src/components/backend/backend/settings.py
```
ALLOWED_HOSTS = ['YOUR_IP']
```

### Making migrations and starting Django
```
python manage.py makemigrations
```

```
python manage.py migrate
```

```
python manage.py runserver ...
```

### Changing Vuex module
###### Location: /src/store/backendData.js
```
Line 44
const data = await window.fetch("http://YOUR_IP/start_game", {
```

```
Line 61
const data = await window.fetch("http://YOUR_IP/start_turn/" + state.b_playerData.gameId, {
```
