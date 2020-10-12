---
path: cheatsheet
date: 2020-08-06T17:58:56.230Z
lastUpdated: 2020-10-12T17:58:56.259Z
title: SQL Cheatsheet
description: My favorite SQL Commands
tags:
  - sql
isPublished: true
---

If I need to look up multiple times, I should just record it in my own cheatsheet.

```
BEGIN TRANSACTION
sql-request
ROLLBACK TRANSACTION OR COMMIT TRANSACTION
```

Allows you to see what would be changed with `ROLLBACK` or make the change and know what was changed with `COMMIT`

`!` is written as `NOT`

`coalesce(variable, false)` checks if the variable is null or false

All variables with capital letters need quotes around them

Migrations are sorted by timestamp. New migrations should have the largest timestamp in the name.

`LIKE` is equivalent to `=` unless wildcards are used `WHERE column_name LIKE '%input%'`

`EXPLAIN` lists who what processes were run and costs

Count the number of rows in a table

```
SELECT COUNT(*)
FROM my_table
```

Comments are prefixed with `--`

[SQL Join Types](https://www.sql-join.com/sql-join-types/)
