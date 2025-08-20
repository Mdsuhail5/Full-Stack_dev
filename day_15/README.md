## Todo app
This project contains a simple TODO application it has the following features -

- Anyone can create a todo
- Anyone can see their existing todos
- Anyone can mark a todo as done

// For Backend:
- Intialize node by creating a backend folder
- cd backend/
- npm init or npm init -y                    # Creates package.json
- npm install express mongoose jsonwebtokens  # Installs dependencies
or npm install (if have dependencies are listed in package.json)

//For Frontend:
- create a frontend folder 
- cd frontend/
- npm create react-app .         # Or npm create vite@latest
- npm install                    # Installs React dependencies

day_15/
├── backend/
│   ├── package.json     ← Backend dependencies
│   ├── node_modules/    ← Backend packages
│   ├── index.js
│   ├── db.js
│   └── types.js
└── frontend/
    ├── package.json     ← Frontend dependencies  
    ├── node_modules/    ← Frontend packages
    └── src/
        ├── App.css
        ├── App.jsx
        ├── index.css
        ├── main.jsx
        └── components/
            |── CreateTodo.jsx
            └── Todos.jsx