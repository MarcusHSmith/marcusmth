---
path: cheatsheet
date: 2020-07-29T15:35:49.141Z
lastUpdated: 2020-09-09T15:35:49.187Z
title: Docker Cheatsheet
description: My favorite Docker Commands
tags:
  - docker
---

If I need to look up multiple times, I should just record it in my own cheatsheet.

`$ docker images | grep "node"` quick node images does docker have

`$ docker pull node:12` pull latest images for node 12

`$ docker stats` see machine stats while running docker commands

If docker throws memory errors `du -sh ~/Library/Containers/com.docker.docker/Data/vms/0/data/Docker.raw` then `rm ~/Library/Containers/com.docker.docker/Data/vms/0/data/Docker.raw` to clear memory