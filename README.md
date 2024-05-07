        REACT - ADVANCED FRONT END TECHNOLOGY
        -------------------------------------
-Basic concepts:-
    - It is not frame work it is a library
    - React app is a collection of library
    - components : part of user interface
    - react app is a collection of components
        - components are arranged in a tree structure
        - there will be root component in React app which is commonly known as 'App'
    - React app is used to create single page application
    - Pure functions : which doesnot cause side effects used to create react functional component
    - Declarative approach
    - virtual DOM : Light weight maemory representation of real DOM
       - Reconsilition
    - Language used to write react is JSX(JAVASCRIPT XML) - used to display content in browser
       - ex : const heading = <h1>Heading 1 </h1>
    - Rules for Using JSX
       - Every JSX elements must be inside a single parent tag
       - Every tag must has a closing tag.ex: <h1>heading</h1> , <br/>(self closing tags)
       - Parent tag can be any container tag/ react fragment (<>...</>)
       - Attribute class is 'className' in react
       - Instead of Attribute 'for' use is 'htmlFor' in JSX
       - use {js-expression} to porvide js expression in JSX
    - React app creation
      - CRA (using create-react-app)
      - vite :build tool for web projects
         - installing globally : npm i -g create-vite
         - React app using vite : npm create vite@latest react-app -- --template react
        
    - React App File & Folder structure
      - package.json : npm configuration file for the project
      - package-lock.json : contains version history allpackages installed in the project
      - .gitingnore file : contain files/folder name which is ignored while adding to git
      - index.html : entry page to react app
      - node modules folder : used to hold copies of dependent libraries of react project(we can install using the        command : npm install)
      - public folder : react project can access data stored in public folder as globally
      - src folder : define react app here
        - asset folder : used to hold media files used in react app
        - main.jsx file : create ReactDOM with parent node as div with id as 'root' , and render the parent (App) component inside the node
        - to run react app : use command 'npm run dev'
        - Babel library : it will transpile jsx code to simple react fnction which is understood by browser
      - *High perfomnce due to virtual DOM
      - *Data Binding : One way Data Binding(from parent to child)
      - components : part of user interface 
        - General rules for creating components
         - create a js/jsx file,file name starts with capital letter
        - Differnt types of components
          - Functional components : use function to create components,return jsx
            - Stateless components : it cannot create state
          - Class based components : use class to create component it can inherit react component class
            - Statefull component / because it can create state
      -Life cycle methods of React Component
          - Mounting phase : Putting JSX to DOM
            - constructor()
            - getDerivedStateFromProps()
            - render()
            - componentDidMount()
            
          - Updating phase : When component is Updating
            - getDerivedStateFromProps()\
            - shouldComponentUpdate()
            - render()
            - getSnapshotBeforeUpdate()
            - componentDidUpdate()
          - Unmounting Phase : Removing component from DOM
            - componentWillUnmount()
      - Difference between functional and class based component
            functional Component                   class component
        -----------------------------------------------------------------
          1. JS Pure dunction to accept props     1.Is class extended  from react component it render function return JSX 
          and return JSX Element                   Element
         2. it executes from top to bottom,once 
         it return JSX,then it cannot be alive                      
      - Props Object : Property of a component, Using props a component can get shared data from its parent, props will be get as an 'argument' of a functional component
      - Styling in React Component - using CSS 
          - Using Inline CSS: using style Attribute
            - syntax : style = {{property:value}}
          - Using External CSS : using external CSS file, import CSS file to component
          - CSS Module file : file with extension as .module.css 
      - React Events 
          - Binding a function without argument : event={function-name}
          - Binding a function with argument : event={()=>function-name(arg)}
          - Binding a function with argument as event : event={(e)=>function-name(arg)}
      -conditional rendering : Based on a condition we can control the jsx element in browser
          - if statement : use operator &&
      -react state : Is an object used to store data/information regarding a component , whenever state changes, the component re-renders
         - use setState() : to update state
      - React Hooks : is a predefined functions used to provide react component features to functional component
         - Hooks are function with function name starts with 'use' keyword
         - to use a hook in functional component, we must call the hook
         - Rule for calling hooks in functional component
           - Import hook from react , in component
           - Hooks can call at the top level of a component
           - Hooks cannot be conditional
         - Types of hooks
           - Predefined Hooks
             - useState(initial-value): to help functional component to create state
             syntax : const [sate-name,state updating function name] = useState(initial-value)
             - useEffect() : used to provide side effects to your component
               - function : used to define side effects applied to component
               - dependency : based on dependency, useEffect will get called, side effect will applied to the component
                 - no dependency : useEffect hook will call all time in component
                 - [] : useEffect hook will call all time in component creation
                 - [data] : useEffect hook will call all time in component creation as well as data changes
           - Customised Hooks:
             - Create a function with name starts with 'use' keyword
          - Handling List using React
            - using 'map' method
            - to uniquely identify each item in a list using 'key' Attribute in component
          - Styling frameworks in React
            - Material UI : npm install @mui/material @emotion/react @emotion/styled
            - React Bootstrap : npm install react-bootstrap bootstrap , we have to add bootstrap theme to properly work bootstrap, bootswatch.com will provide the theme,choose a theme and download its bootstrap.min.css file into project src folder
          - React forms 
           - Controlled Components : data changes in the form is handled by the component by storing its state using change event
           - Uncontrolled Components : form Handeled by Real DOM
           - To submit form, preventDefault()

          - set up path for  component in react
            - install react-router-dom: npm i react-router-dom
            - React app must render inside 'Browser Router'
            - Components needs to set up path must inside 'Routes' Component of react router dom
            - using Route component define each component path
            - Link component used to redirect from one page to another within the page

          Higher Order Component : Route is a HOC that means a component become argument of another component
        - react-toastify : Library for notification in react - npm i react-toastify
        - API call in React
           - Axios library : npn i Axios
           - Create a folder for service

-------------------------------------------------------------------------------------------------------------------------------        
JSON SERVER
----------------------------------------------------------------------------------------------------------------------------
1. Create a folder to hold json file
2. Create package.json file inside the folder using the command : npm init -your
3. Create db.json file
4. Create resources for the file, a resource is a file that to be permenently stored in the json
5. to run json file using json server : npm i json-server/npm i json-server@0.17.4
6. to run json file in local host: npx json-server db.json
------------------------------------------------------------------------------------------------------
Deploying A JSON FILE using node JS
----------------------------------------------------------------------------------
1. Create index.js file in server folder
2.update script in package.json file as "start":"node index.js"
3.create .gitignore file and add node module folder
4. define json-server to run json file in index.js
   -import json-server
   -create server run json file using create() method of json server