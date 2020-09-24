---
path: blog
date: 2020-08-22T22:43:45.078Z
lastUpdated: 2020-08-22T22:43:45.119Z
title: 'GraphQL Dependencies '
description: GraphQL dependency tree for Entity Resolver Service Mutator Finder
tags:
  - graphql
---
GraphQL can be confusing. This dependency graph helped me visualize the architecture.

`Entity` has a dependency on `Resolver`
`Service` has a dependency on `Resolver`
`Mutator` and `Finder` have a dependency on `Service`
