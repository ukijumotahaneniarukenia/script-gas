GASをREST APIとして公開
- https://qiita.com/aromanokarisu/items/ff3076a78335163d2f12

公開してデプロイ

デプロイ先のURLを控える

CMD

```
$ curl -s -H "Content-Type: application/json" -L '$DEPLOY_URL' | jq
```


OUT

jsonが標準出力に出力される

```

```
