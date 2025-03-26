# Just another ToDo
This is just another implementation of a Todo list. It is made using React, nextjs (for easier routing experience), and Redux for state management.    
This project is made as an intership assignment

## Link
This site is deployed using Vercel. [Link](https://todo-five-nu-50.vercel.app)

## Design
Couldn't spend much time designing this website, so the design is minimal but not bad.
### Landing Page
![Homepage](/public/Homepage.png)
### Dashboard (ToDo)
![Dashboard](/public/Dashboard.png)

## Features
- It implements dummy auth without any backend integration (just for the routing)
  - basically storing the auth state in local storage, and checking it on rerender
- It uses local storage to store the Todo items
  - To retain the data between rerenders, and making the site actually usefull
- I made it in a day

## Local setup
Clone the github repo
```sh
git clone git@github.com:Arjunsharmahehe/Todo.git
cd Todo
```
Install the dependencies
```sh
npm install
```
Locally run the server
```sh
npm run dev
```

The site should be up on `localhost:3000` or your local network `192:168.X.XX:3000`

## Final thoughts
It was a fun impromptu project to work on. I was a headache using Redux (why not use Zustand). It was pleasant creating the routes and the design. I tried my best to follow clean code practices. If something is not right, raise an issue. I am learning everyday.