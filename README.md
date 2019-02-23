This is a simple app for how to redirect in react app.

## Problem

I am trying to do redirect action in an non-component class. For example:

If the server responded with a 401, I want to redirect to the login page from within my fetch utility method which is in an non-component class.

## First try

I saw a good idea from Dominic who posted to https://github.com/ReactTraining/react-router/issues/5237#issuecomment-376685224 

Just wrap the app in an extended BrowserRouter:
```js
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
export const history = createBrowserHistory();
export default class YourBrowserRouter extends BrowserRouter {
  history;
}
```
And `import { history } ...` where you need it outside of react components.

I think that is a good idea and I tried it. However, there is a problem which is when history.push() is updating url but not navigating to it in browser.

Then I went to [history](https://www.npmjs.com/package/history) document and see this.

> Forcing Full Page Refreshes in createBrowserHistory
> By default createBrowserHistory uses HTML5 pushState and replaceState to prevent reloading the entire page from the server while navigating around. If instead you would like to reload as the URL changes, use the forceRefresh option.

```
const history = createBrowserHistory({
  forceRefresh: true
})
```

I trid `forceRefresh: true` but after a simple `history.push()`, it then reloads the whole page. I don't like that.

## Solution

Forturenately, I found another solution here. https://stackoverflow.com/questions/42941708/react-history-push-is-updating-url-but-not-navigating-to-it-in-browser

For a custom history object, you should use <Router> to synchronize it with react-router instead of <BrowserRouter>.

```
import React, {Component} from 'react';
import { Router } from 'react-router';
import { Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();   

class App extends Component {
   constructor(props){
      super(props);
   }

   render(){
       return (
           <Router history={history}>   //pass in your custom history object
                <Route exact path="/" component={Home} />
                <Route path="/other" component={Other} />
           <Router />
       )
   }
}
```
> Once your custom history object is passed in via Router's history prop, history.push should work just as expected in anywhere of your app. (you might want to put your history object in a history config file and import it at places where you want to route programmatically).
> 
> For more info, see: [React Router history object](https://reacttraining.com/react-router/web/api/Router/history-object)

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.
