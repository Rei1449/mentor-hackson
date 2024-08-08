# はじめかた

## clone直後のみ
```
docker compose build  
docker compose run --rm next npm install  
docker compose up -d
```

## .envとsupabaseの設定
.example.envをコピーし、.envを作成する  
supabaseのプロジェクトを作成し、プロジェクトのsettings→Database→Connection settingsからDatabase urlを取得してくる  
それを.envに貼り付ける  
## prismaのマイグレーションのやり方
コンテナを立ち上げなおす(npm installを勝手にやってくれるため)  
```
docker compose up -d
```
dockerのコンテナ内に入る  
```
docker compose exec next bash
```
migrationを実行する
```
npx prisma migrate dev
```
