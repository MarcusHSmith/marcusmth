---
path: blog
date: 2021-02-17T22:34:16.789Z
lastUpdated: 2021-02-17T22:34:16.833Z
title: SwiftUI Toggle call function on change
description: How to set Toggle value and send requests after changes
tags:
  - swift
  - swiftui
  - ios13
isPublished: true
---
## Setup a SwiftUI Toggle in iOS 13

Pass in property to a `@State`

Use this state in a `Binding` to get value

Update the state's value after change

```
struct CarView: View {
    @State var car: CarDetails
    var body: some View {
      Toggle(
        isOn: Binding(
          get: { car.hasWheels },
          set: { value in
            car.hasWheels = value
            // call function to send network request
          }
        ), 
        label: {
          Text("Does car have wheels?").bold()
        }
      )
    }
```