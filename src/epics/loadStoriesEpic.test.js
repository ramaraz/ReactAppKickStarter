// import { Observable, of } from "rxjs";
// import { ActionsObservable } from "redux-observable";
// import { loadStoriesEpic } from "../epics";
// import { LOAD_ITEMS, LOAD_ITEMS_DONE } from "../actions";
// import "rxjs/add/operator/toArray";
// import "rxjs/add/observable/of";
// import { TestScheduler } from "rxjs/testing";

// const testScheduler = new TestScheduler((actual, expected) => {
//   expect(actual).toEqual(expected);
// });

// testScheduler.run(({ hot, cold, expectObservable }) => {
//   const action$ = hot("-a", {
//     a: { type: LOAD_ITEMS, payload: "1" }
//   });
//   const state$ = null;
//   const deps = {
//     getJSON: of({ type: LOAD_ITEMS_DONE, response: { title: "Lorem" } })
//   };
//   const output$ = loadStoriesEpic(action$, state$, deps);

//   expectObservable(output$).toBe("---a", {
//     a: {
//       type: LOAD_ITEMS_DONE,
//       response: {
//         title: "Lorem"
//       }
//     }
//   });
// });
