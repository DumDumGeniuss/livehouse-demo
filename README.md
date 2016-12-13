# Deploy

1.clone專案

```
git clone https://github.com/DumDumGeniuss/livehouse-demo.git dir_name
```
2.進入資料夾

```
cd dir_name
```
3.安裝ruby套件

```
bundle
```
4.安裝node套件

```
npm install
```
5.打包react檔案

```
npm run build
```

6.產生rails的SECRET_KEY_BASE準備部署用

```
rake secret
```

7.將產生的key輸出供rails讀取

```
export SECRET_KEY_BASE='xxxxxxxxxxxxxxxxxxxxxxxxxx'
```
8.打包靜態資源

```
RAILS_ENV=production rake assets:precompile
```

9.啟動server, 完成

```
RAILS_ENV=production rails server
```
