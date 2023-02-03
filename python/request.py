import requests

res = requests.get("https://pokeapi.co/api/v2/pokemon/ditto")
print(f"Status code: {res.status_code}")
json = res.json()
print(f"Habilidades do pokemon Ditto: {json['abilities']}")
