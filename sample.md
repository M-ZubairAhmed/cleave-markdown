# Preface

## Prerequities

Experience with the basic web technologies ie. HTML, CSS & JavaScript will help.

## Choosing ReactJS ?

### Introduction

React is an open source javaScript library for building user interfaces by Facebook inc.

* **View in MVC** – ReactJS is the view layer in our applications and it does this job really well without trying to achieve anything more.

* **Virtual DOM** – This is probably why most developers are so attracted to React. React manages its own DOM in memory. The most expensive operation most web apps suffer is mutating the DOM. React's approach is to maintain a virtual representation of the DOM which allows it to calculate differences in the DOM so that it only mutates the part of the DOM that actually needs to be updated. This is a huge benefit!

* **Declarative** – Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

* **Component-Based** – Build encapsulated components that manage their own state, then compose them to make complex UIs.

* **Server Side Rendering** – Combining a NodeJS server and ReactJS helps us build even more complex applications by pre-rendering the initial state of our ReactJS components.

* **Javascript** – It is JavaScript after all. We can use latest JavaScript goodies by transpiling our code with the tools we prefer like webpack, browserify, rollup, babel etc

* **Non-Opinitated** – It doesnt make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.

* **Testability** – React components simplify testing greatly. As a proof of it's simplicity, our new web client has more tests than any of our other clients.

* **Functional Programming** – ReactJS stateless components act like pure functions while composition is highly enforced instead of inheritance to reuse code between components.

## Philosophy

### Resources

| Concept                   |                   Best Video Resource                    |                                     Best Text Resource                                     |                                Documentation                                 | Duration |
| :------------------------ | :------------------------------------------------------: | :----------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------: | :------: |
| Best practices with react | [JSConf EU](https://www.youtube.com/watch?v=x7cQ3mrcKaY) | [Medium](https://medium.com/@nimelrian/thinking-in-react-a-paradox-statement-33c19e2eb9e2) | [ReactJS/thinking-in-react](https://reactjs.org/docs/thinking-in-react.html) | 1 hours  |

### Tasks :

* Take an application like Instagram and plan on what parts of it are re-usable and make a component.

# Getting Started

## Trying React

### Resources

| Concept          |                                Best Video Resource                                |                                Best Text Resource                                |                                    Documentation                                    | Duration |
| :--------------- | :-------------------------------------------------------------------------------: | :------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------: | :------: |
| Trying out React | [EggHead](https://egghead.io/lessons/react-write-hello-world-with-raw-react-apis) | [React Armory](http://jamesknelson.com/learn-raw-react-no-jsx-flux-es6-webpack/) | [ReactJS/installation](https://reactjs.org/docs/installation.html#trying-out-react) | 6 hours  |

### Tasks :

* Make a HTML file with ReactJS as script tag in the head.

- Make a simple km to miles converter in that one file.

## Create React App

### Resources

| Concept                      |                                     Best Video Resource                                      |                                        Best Text Resource                                        |                                         Documentation                                         | Duration |
| :--------------------------- | :------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------: | :------: |
| Create-React-App boilerplate | [EggHead](https://egghead.io/lessons/react-react-fundamentals-development-environment-setup) | [FacebookIncubator/cra](https://github.com/facebookincubator/create-react-app#create-react-app-) | [ReactJS/installation](https://reactjs.org/docs/installation.html#creating-a-new-application) | 2 hours  |

### Tasks :

* Use `create-react-app` and create a sample React app.
* Convert km to miles converter that you built previously into this application that you created now.
* Build the application using `create-react-app`
* Install serve by `npm i -g serve` and `serve build` to test the appliction that you built.

## JavaScript XML Syntax

### Resources

| Concept |                      Best Video Resource                       |                            Best Text Resource                             |                        Documentation                         | Duration |
| :------ | :------------------------------------------------------------: | :-----------------------------------------------------------------------: | :----------------------------------------------------------: | :------: |
| JSX     | [EggHead](https://egghead.io/lessons/react-use-jsx-with-react) | [ReactEnlightment](https://www.reactenlightenment.com/react-jsx/5.1.html) | [ReactJS/jsx](https://reactjs.org/docs/introducing-jsx.html) | 6 hours  |
