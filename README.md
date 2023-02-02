# command-light

## Motivation

互联网产品在不断满足用户需求的同时，信息架构、功能也在变的更加复杂，对于新用户来说，复杂的界面以及设置会增加上手的难度，而对于熟悉产品的用户，更快捷的去操作功能，而不是重复的去来回点击，成为他们的诉求。

经过 Linear 和 mac os 的启发，command line 以及 spotlight 的这种操作和交互方式似乎可以在不改变产品信息架构和页面交互的情况下，成为一种用户操作的一种快捷方式。

因此我们构建了 command light，希望 command light 可以帮助到众多的产品。

## Design 

开发者可以通过 npm/yarn 的形式，将 command light 引入到代码中，command light 采用 headless ui 的设计形式，开发者可以对其样式进行自定义，同时开发者还可以利用提供的 Api 进行组合，开发出自己想用的功能。

## Feature

command light v0.0.1 计划支持的 Feature

- [ ] 按照 headless 组件设计理念来进行开发
- [ ] 支持多种唤起方式
- [ ] 支持自定义 item 展示
- [ ] 支持自定义跳转
