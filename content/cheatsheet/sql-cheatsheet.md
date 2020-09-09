---
path: cheatsheet
date: 2020-08-06T17:58:56.230Z
lastUpdated: 2020-09-03T17:58:56.259Z
title: SQL Cheatsheet
description: My favorite SQL Commands
tags:
  - sql
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
