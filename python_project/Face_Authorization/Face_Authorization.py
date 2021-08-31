import requests

#Creates an Access Token
# token_url = 'https://www.nyckel.com/connect/token'
# data = {'client_id': 'bt6lrvt74oas1a6mi3nflx3pqn7mb21j', 'client_secret': 'rjb8d09ehh8hhkein0lum2veqgu3n6w2mq1izy9hu8y3ol759pzbg7wonwhw55qb', 'grant_type': 'client_credentials'}

# result = requests.post(token_url, data = data)
# print(result.text)

#Invokes Functionw
invoke_url = 'https://www.nyckel.com/v1/functions/yhpifr67l937a3fe/invoke'
headers = {
    'Authorization': 'Bearer ' + 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjM5NzUwMTU1QTU1NUI4MjI2NTlEREM5OTEzQjZFRDY3IiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2MzAxNDAyNzksImV4cCI6MTYzMDE0Mzg3OSwiaXNzIjoiaHR0cHM6Ly93d3cubnlja2VsLmNvbSIsImNsaWVudF9pZCI6ImJ0NmxydnQ3NG9hczFhNm1pM25mbHgzcHFuN21iMjFqIiwianRpIjoiNUMwMEJCRUUxMEEwODU2MTRFREEwMDA2QjA2QTZFMzEiLCJpYXQiOjE2MzAxNDAyNzksInNjb3BlIjpbImFwaSJdfQ.w5LEED2WMEsd-7oOg9PdtKG_1Yx4UREFBx-6asr-xlt-dr_NUiWDgbSybZyyCfVMQgIyO7lQuBNEBhgxoJjDWnTphSFcS4mQ70iCzAhEtWY4OkXX4Ts6B2pMIxb_NMXfvgyFkYH3sfOcEXpGYQh6PyZVf6CJYRnP_puJsufNTAh940kbquhUWnNYykt3npIa7ZWQbC72JqDw9A4YYTEY6q_ypTkUcLSdVrNdaYjKG2Dq-aRWun8hgsVTZEqt3nk8j0PUDrjVN_YCOq3fX6kGSBhmt3q_QsZuhMXETyMBlwkdrp2yJa-LHMCVIgBfLf4IkTXO53SjgIsynlV7aZ5jXg',
}

with open('real.jpg', 'rb') as f:
    result = requests.post(invoke_url, headers=headers, files={'data': f})
print(result.text);

#Example Response
# {
#     "labelName": "True",
#     "labelId": "label_2n5a7za51n329v0l",
#     "confidence": 0.76
# }