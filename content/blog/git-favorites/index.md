---
title: Git CLI Cheatsheet
date: "2019-10-27T22:12:03.284Z"
lastUpdated: "2020-01-12T19:43:03.284Z"
description: "My favorite Git Commands"
tags: ["Cheatsheet"]
---

If I need to look up multiple times, I should just record it in my own cheatsheet.

`$ git commit --amend` incldues current staged commit with last commit

`$ git clean -f` removes untracked files

To squash commits `$ git rebase -i HEAD~10` (or however many commits are specific to the branch). Change `pick` to `squash` or `s`. Merge Commits will update the SHA so avoid rebasing over more commits than neccessary

`$ git branch -m new-name` renames the current branch

`$ git commit --amend` renames the last commit

If I found a read useful, I should maintain a link to it.

[How to write a good commit message](https://juffalow.com/other/write-good-git-commit-message) by Matej Jellus

[SKStoreReviewController](https://medium.com/@kavithakumarasamy89/skstorereviewcontroller-apple-way-to-request-review-and-rating-inside-ios-app-in-ios-10-3-453a6f897e9d) by Kavitha K