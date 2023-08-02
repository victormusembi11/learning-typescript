# Learning TypeScript

Typescript is a superset of javascript. It allows you to write javascript in a more precise manner so your code faces less errors in the runtime.

```txt
Typescript is all about Type Safety. 
```

**Example**: *The below happens because type safety is missing.*

```js
2 + "2" // is "22"
```

## What typescript does for you:

**Static checking** - whenever you are running the code it will check for errors and tell you as you are writing the code. Tells you are there is a potential error before you run the code.

## How the development process work

1. you first write your code in typescript
2. then it's compiled to javascript

```txt
Remember: Typescript is just a development tool. It's just used to help you write better javascript.
```

## How to install typescript

Install typescript globally. Remember to use sudo if you are on a mac.

```bash
sudo npm install -g typescript
```

Check if typescript is installed by checking the version.

```bash
tsc -v
```