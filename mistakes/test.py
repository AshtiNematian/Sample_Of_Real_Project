import requests

ss = requests.get('http://192.168.100.162:5000/data')
ss = ss.json()
print(ss['data_y'])
print(ss['data_x'])
