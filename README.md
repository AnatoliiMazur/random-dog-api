# Свой random-dog API на NodeJS

## Требования к окружению:
- установленный [nodejs](https://nodejs.org/)

## Подготовка:
```
git clone https://github.com/gerkirill/random-dog-api.git
cd random-dog-api
npm install
```

## Запуск:
```
npm start
```
API будет доступен на по ссылке http://localhost:3000/randomdog, о чем он вам в консоли и напишет.

Внимание: ре-стартовать сервер после правок в server.js уже не нужно, т.к. он запускается через `node-dev server.js` а не `node server.js`. Это автоматически перезапускает сервер, когда вы меняете файл. Почему `npm-start` запускает `node-dev server.js` - вы можете узать, прочитав package.json.