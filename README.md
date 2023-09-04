[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

Я использовал базу данных mysql(тк только она установлена у меня локально), 
но следил за тем, чтобы на postgres тоже все запустилось.
Чтобы все работало, нужно поменять конфиги бд на ваши (config/typeorm.config.ts и src/database/database.providers.ts) 
Затем создать у себя пустую базу данных, запустить команду ($ nest build), 
и запустить миграции ($ typeorm migration:run -d dist/config/typeorm.config.js)  
 
Я немного не понял пункт 
"Написать API-сервис с эндпоинтом, который выдаст адрес, баланс которого изменился больше остальных (по абсолютной величине) за последние 100 блоков." 
Я не могу понять какой аргумент в массиве transactions привязан к номеру счета… Или это нужно делать по from и to?
И в итоге сделал просто топ 100 блоков у которых были большие операции (http://localhost:3000/api/ether-transactions/getTop100)
Если уточните мой вопрос - могу доделать


Так же только в последний момент понял что не сделал .env, так что простите) 

Вся логика хранится в app.service.ts. Крон вызывает функцию каждые 12 секунд, потому что у этой апишки есть ограничение на 5 запросов в минуту. 
```
