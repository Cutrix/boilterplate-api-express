# Awesome Project Build with TypeORM

![typeorm](https://github.com/typeorm/typeorm/raw/master/resources/logo_big.png)

![ts](https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png)



## Idee sur le projet

Ce projet est template de base d'api fait en mode js, typeorm, typescript et aussi un systeme de migration

On pourra ainsi aller plus rapidement sur ce qui est essentiel :smile:



## Structure du projet

**config**: Ce dossier contient tout ce qui est configuration pour l'api (secret JWT,...)

**controllers**: Ce dossier contient tous les controllers nécessaires au développement de l'api

**entity**: Contient toutes les entity TypeORM

**migration**: Toutes les migrations se trouvent dans ce dossier 

**routes**: il contient les routes nécessaires pour l'api

**middlewares**: Ici se touvent les middlewares



## Configuaration

la config se trouve dans le fichier ormconfig.json

```{
   "type": "mysql",
   "host": "localhost",
   "port": 3306,
   "username": "root",
   "password": "test",
   "database": "test",
   "synchronize": true,
   "logging": false,
   "entities": [
      "src/entity/**/*.ts"
   ],
   "migrations": [
      "src/migration/**/*.ts"
   ],
   "subscribers": [
      "src/subscriber/**/*.ts"
   ],
   "cli": {
      "entitiesDir": "src/entity",
      "migrationsDir": "src/migration",
      "subscribersDir": "src/subscriber"
   }
} ``
```

## Installation

+ Installer les dépendances

```npm install```

## Lancer le serveur

+ Watch

``npm run start:watch``

+ serve

  ```npm start```

  

**Prerequis: ** Install typeorm globally first with ```npm install -g typeorm```

## Executer les migrations

+ Creer une nouvelle migration

``` npm run migration:create -n <nomMigration>```

+ Generer une nouvelle migration

```npm run migration:run -n <nomMigration>```

+ Executer les migrations

```npm run migration:run```

### Hint

**routes**: les routes ont ete mis dans le dossier routes mais separement au cas de l'ampleur sur le projet

A titre d'exemple: 

+ Routes/auth.ts: le path est **/login**
+ routes/index.ts: le path pour acceder au auth est **/auth**

la route final sera: **http://localhost:3000/login/auth**



## Todo

+ Ajouter le port dans les configurations dans le .env
+ Ajouter les interceptors
+ Ajouter les services

