---
path: cheatsheet
date: 2019-10-27T22:12:03.284Z
lastUpdated: 2021-02-19T20:41:45.078Z
title: Git Cheatsheet
description: My favorite Git Commands
tags:
  - github
isPublished: true
---

If I need to look up multiple times, I should just record it in my own cheatsheet.

### Commands

`$ git commit --amend` includes current staged commit with last commit

`$ git clean -f` removes untracked files

To squash commits `$ git rebase -i HEAD~10` (or however many commits are specific to the branch). Change `pick` to `squash` or `s`. Merge Commits will update the SHA so avoid rebasing over more commits than neccessary

`$ git branch -m new-name` renames the current branch

`$ git commit --amend` renames the last commit

`$ git for-each-ref --sort=-committerdate refs/heads/` sort branches by date

`$ git branch | grep -v "master" | xargs git branch -D` delete all local branches except master

`$ git branch -D [branchName]` delete branch

`$ git checkout [branchName]` return to latest commit on branch

### Posts

[How to write a good commit message](https://juffalow.com/other/write-good-git-commit-message) by Matej Jellus
