---
path: blog
date: 2020-08-22T22:43:45.078Z
lastUpdated: 2020-08-22T22:43:45.119Z
title: How to Code Review
description: 'The guide to review any code, but most importantly my own'
tags:
  - swe
---
Reviewing code is the last line of defense before it enters production. I've had my code reviewed and been reviewing code for years now and while both have improved I've never formally documented my steps. This will serve both as a guide of what to review as well as things that have been reviewed in my code. The most embarrassing mistake is to be reviewed on the same thing in multiple pull requests.

I've written a guide for [Code Review Interviews](https://marcusmth.com/how-to-ace-your-code-review-interview/) which details the terminology and steps of a code review. This document provides the concepts to review on.

**General Concepts**
- [ ] Earlier fails and assertions should be logged
- [ ] Public variables that are only used in sets should be set to private and the client should call a public configuration function (aka setter)
- [ ] Empty functions or functions that only call their super
- [ ] Variable names should reflect their value as simply as possible
- [ ] Only change files that are intended to be changed
- [ ] Constant variables should be capitalized
- [ ] Ensure new code is called
- [ ] String manipulation is brittle, regex simplifies it 

**iOS Specific Concepts**
- [ ] TableView datasources should only be set after init() and after registering cells to avoid crashes
- [ ] Autolayout constraints can often be simplified 
- [ ] The name for Views or ViewControllers file and class should end with `View` or `ViewController`

**Web Development Concepts**
- [ ] Use a QueryBuilder when possible when updating the database
- [ ] Scripts with large datasets should have safegaurds like sleeps to ensure the database/server don't get whacked
- [ ] All async functions are called with `await`
- [ ] Use `const` variables whenever possible
- [ ] `let` is code smell, there is enough functional constructs to avoid `let`


