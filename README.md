# Welcome to The Video Game Encyclopedia

This is an app where a user can see a list of video games. It includes the title, release date, genre, ESRB, a poster, and the company who published the game. A user can also add, update, or delete a video game.

# Heroku link

https://videogameclient.herokuapp.com/

# Technologies and Deployment sites used

1. Ruby on Rails
2. React
3. Heroku
4. Github
5. Netlify

#  Road Blocks

1. I keep getting an error when pulling the JSON data to the website from the array of video games. Sometimes the app works and sometimes it doesn't. To make it work I have to change line 101 in App.js from:

{games.games.length > 0 ? loaded() : <h2>There are no Video Games</h2>}

to:

{games.games > 0 ? loaded() : <h2>There are no Video Games</h2>}

save it and then change it back to:

{games.games.length > 0 ? loaded() : <h2>There are no Video Games</h2>}

and save it again.

This happens during development and after deploying through Heroku.

2. Heroku deployment - When I deployed the backend I ran into some errors. In the package.json scripts- in the build script I had to add "CI= " for it to work.

3. Netlify deployment - The communication between the backend fetch and the frontend was not working with the Heroku link. I had to figure out the links syntax.


# Notes

1. Add styling.
2. Add a login and signup for user experience.
3. Add an edit button on the website for a User.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
