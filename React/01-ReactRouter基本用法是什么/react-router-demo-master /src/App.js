import React, {Component} from 'react';
import {BrowserRouter, Route}from 'react-router-dom'
import Home from './component/home/home'
import Part1 from './component/part1/part1'
import Part2 from './component/part2/part2'
import Part3 from './component/part3/part3'
import Part2Model1 from './component/part2/model1/part2Mode1'
import Async from './component/async/async'
import Sync from './component/sync/sync'

const routes = [
  {path: "/", component: Home},
  {path: "/part1", component: Part1},
  {path: "/part2", component: Part2},
  {path: "/part2/model1", component: Part2Model1},
  {path: "/part3/:name", component: Part3},
  {path: "/async", component: Async},
  {path: "/sync", component: Sync},
];

class App extends Component {
  render() {
    return (<BrowserRouter>
        <div>
          {
            routes.map((page, index) => page.component ?
              <Route key={index} exact path={page.path} component={page.component}/> : "")
          }
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
