GASをREST APIとして公開
- https://qiita.com/aromanokarisu/items/ff3076a78335163d2f12

公開してデプロイ

デプロイ先のURLを控える

GET

CMD

```
$ curl -s -H "Content-Type: application/json" -X GET -L '$DEPLOY_URL' | jq
```


OUT

jsonが標準出力に出力される

```

```


POST

これは
-X POSTをつけるとうまく行かない。よくわからん。プロジェク卜をGET、PATCH、POST、DELETEで分けたほうが無難か


IN

```
$ cat postData.json
{
  "name": "ぽるこ",
  "role": "ブタ"
}
```

OK
```
$ curl -s -H "Content-Type: application/json" -L '$DEPLOY_URL' -d '@postData.json' | jq
```


NG
```
$ curl -s -H "Content-Type: application/json" -X POST -L '$DEPLOY_URL' -d '@postData.json' | jq
```

OUT

```
{
  "contextPath": "",
  "parameters": {},
  "parameter": {},
  "contentLength": 42,
  "queryString": "",
  "postData": {
    "contents": "{  \"name\": \"ぽるこ\",  \"role\": \"ブタ\"}",
    "length": 42,
    "name": "postData",
    "type": "application/json"
  }
}
```


IN

```
$ cat postData-array.json
[
  {
    "name": "ジーナ",
    "role": "恋人"
  },
  {
    "name": "ぽるこ",
    "role": "ブタ"
  }
]
```

CMD

```
$ curl -s -H "Content-Type: application/json" -L '$DEPLOY_URL' -d '@postData-array.json' | jq
```

OUT

```
{
  "parameter": {},
  "contextPath": "",
  "queryString": "",
  "parameters": {},
  "postData": {
    "contents": "[  {    \"name\": \"ジーナ\",    \"role\": \"恋人\"  },  {    \"name\": \"ぽるこ\",    \"role\": \"ブタ\"  }]",
    "length": 103,
    "name": "postData",
    "type": "application/json"
  },
  "contentLength": 103
}
```

CMD
```
$ curl -s -H "Content-Type: application/json" -L '$DEPLOY_URL' -d '1002' | jq
```

OUT
```
{
  "contextPath": "",
  "parameters": {},
  "parameter": {},
  "contentLength": 4,
  "queryString": "",
  "postData": {
    "contents": "1002",
    "length": 4,
    "name": "postData",
    "type": "application/json"
  }
}
```

