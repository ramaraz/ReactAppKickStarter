import { Observable } from "rxjs";
import { combineEpics } from "redux-observable";
import { LOAD_ITEMS, loadItemsDone, CLEAR_ITEMS } from "../actions";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/map";
import "rxjs/add/observable/of";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/delay";
import "rxjs/add/operator/do";
import "rxjs/add/operator/timeout";
import "rxjs/add/operator/ignoreElements";
import "rxjs/add/observable/dom/ajax";
import "rxjs/add/operator/takeUntil";

export const loadStoriesEpic = (action$, state$, { getJSON }) => {
  return action$
    .ofType(LOAD_ITEMS)
    .debounceTime(1000)
    .switchMap(({ payload }) => {
      return getJSON(`https://jsonplaceholder.typicode.com/todos/${payload}`)
        .takeUntil(action$.ofType(CLEAR_ITEMS)) // cancel ajax scenario
        .do(i => console.log(i))
        .map(i => loadItemsDone(i));

      // You can generate multiple actions from switchMap,use Observable.concat(stream1, stream2)
    });
};

export const rootEpic = combineEpics(loadStoriesEpic);
