---
path: cheatsheet
date: 2021-12-13T15:54:17.197Z
lastUpdated: 2021-12-13T15:54:17.204Z
title: TypeORM Cheatsheet
description: TypeORM Guide
tags:
  - typeORM
  - nodejs
  - postgresql
isPublished: true
---
\### \[TypeORM](https://typeorm.io/#/)

\## Relationships

When querying for entities you can request associated entities that the parent entity has a relationship with.\
\`await UserEntity.find({relations: \["homes"]});\`

If \`homes\` also has a relationship that should be returned\
\`await UserEntity.find({relations: \["home", "home.address"]});\`