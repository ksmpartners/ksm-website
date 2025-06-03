# Comparing the React Hooks API to Redux for State Management

By Jim Coates, KSM associate

In v16.8.0, the React development team released the Hooks API, a functional way of interacting with state inside React components. With the introduction of hooks, do we still need libraries like Redux for global state management, or can we manage our application state exclusively through the Hooks API?

I recently worked on a team building a React application where I had the opportunity to work with both of these techniques. In this article, I want to share my experience, including:

- Initial state setup with the Hooks API

- How hooks can simplify state management

- Why we decided to switch to Redux

- Converting Hooks to Redux

- Why Hooks can’t fully replace Redux

### INITIAL STATE SETUP WITH THE HOOKS API

Our team built a timekeeping application designed specifically for consultants. For our initial proof of concept, we only needed to manage the state of two components: a list of time entries in reference to clients, and the time entries displayed to the user.

Although I had some React experience prior to this project, I had never used Redux or the Hooks API for front-end state management. Others on our team had some prior Redux experience. Intrigued by its simplicity and promise, we elected to use the Hooks API when we began development.

When working with multiple reducers, in our case two, it is necessary to combine them into a single reducer to be passed to your application, in order that any inheriting classes have the ability to dispatch actions through those reducers. The Hooks API didn’t provide any methods for combining reducers, so we wrote our own logic to manually combine these reducers into a single constant to be exported.

After defining actions and reducers for our two desired states, it was time to create our store. This is where we had the chance to try our first state management hook called useReducer(). This takes in two parameters, an initial state (our combined application state), and a reducer (our combined application reducer), and returns two variables called state and dispatch. State is the representation of your application’s global state, while dispatch is used for accessing reducers to dispatch actions. These two variables were used to create a React context to wrap our app, and hence our store was born.

### HOW HOOKS CAN SIMPLIFY STATE MANAGEMENT

Once the initial setup of our store and reducers was complete, we dove into the heart of interacting with state and dispatching actions. This was where the React Hooks API shone the brightest, thanks to the useContext() hook.

I enjoyed working with the Hooks API so much here because of the simplicity of accessing state and dispatching actions that it provided. React’s new useContext() hook takes in a single parameter of a React context and returns the context’s value.

Remember that  when we created our context, we passed it our application’s state and the dispatch containing our reducers. Now, in order to reference state or dispatch actions from any of our React components, all we need to do is call useContext() and pass in our storeContext to gain access to both the state and the dispatch. Hooks effectively bring accessing state management to a single line, providing a simple and elegant solution.

You will see in the upcoming sections why this solution is a seemingly more concise one, but first, let’s talk about what drove us to make the switch to Redux.

### WHY WE DECIDED TO SWITCH TO REDUX

At this point, we had the basic functionality of our proof of concept working with the React Hooks API. We had reached the point where we were going to expand our application with more components, meaning more reducers and state to manage. Before beginning this expansion however, we wanted to evaluate Hooks against the features that Redux could provide us. If we were unhappy with the current solution, now would be the time to replace it, before the application grew too large. After some deliberation, we elected to replace the context provided by hooks with Redux, here’s why.

As we were working on creating and combining our stores and reducers, we had to write methods to manually accomplish this. We realized that we were duplicating logic that Redux would provide for us. Redux comes with two very handy functions we were forced to recreate ourselves, combineReducers() and createStore(). These two methods were designed specifically to accomplish combining reducers and creating stores. As our app was growing, we preferred to use prebuilt single line functions versus writing our own code to duplicate Redux features.

Redux has a middleware add-on called Redux DevTools. DevTools provides an add on to the browser that allows a developer to track dispatched actions and visualize how the reducer logic has changed the state. The larger an application, the more layers and the greater the complexity it will have. When debugging actions without DevTools, it can be difficult to pinpoint which layer of your structure is having issues. DevTools allows a developer to quickly narrow down the source of state issues greatly reducing debugging time. I’ll go into more detail later about how we specifically used this tool, but this alone is almost worth using Redux for.

Redux offers a performance advantage over the Hooks API through more efficient re-rendering. When using the Hooks API, any mutation of state will cause components to re-render. Redux, in contrast, is more selective about the state changes that will cause a re-render. It does shallow object reference checks, meaning unless the actual object reference to state is changed, simply mutating it will not be enough to cause React to rerender. This advantage became more pronounced as our application grew beyond the initial proof of concept.

### CONVERTING HOOKS TO REDUX

The process of converting our application from using the Hooks API for state management to Redux was not a complicated one. It was however, an excellent exercise in comparing both state management techniques side by side. The description and code below will paint a clear picture of the steps taken.

As I previously mentioned, Redux comes with its own methods for creating stores and combining reducers. You can see in the code below it was as simple as swapping out our own functions for the ones provided by Redux.

We did encounter an issue related to the  aforementioned shallow reference checks that Redux does when re-rendering. Our original logic within our reducers was only mutating state, not reassigning it. Thanks to those Redux DevTools, we were quickly able to determine that our actions were getting dispatched, but state was just not being updated. We fixed this by using the Object.assign() method on our state, which copies the enumerable properties of one object to another. By assigning the updated state to a new object and returning it, we were able to provide Redux with the change it required to re-render.

The conversion of individual components from the Hooks API to Redux was a little more complicated. As stated earlier, I found that the Hooks API provided a very simplistic solution to accessing state and dispatch from it’s useContext() hook. In lieu of this, Redux supplies a function for each; mapStateToProps() and mapDispatchToProps(). Each of these two functions are required depending on whether you need state, dispatch or both. Once defined, these functions are joined to the store via the Redux connect method as shown below.

Although I found having to repeat this process cumbersome for each one of our components that needed to utilize global state, I did like the ability for data reformatting with mapStateToProps. When pulling state from useContext, you receive back the state in whatever shape it is stored in. Where as mapState provides the opportunity to reformat the incoming data using any manner of filters, maps, etc. This allows you to tailor the shape of the data to fit the needs of the component that you are working in. It also reduces the number of re-renders needed, as manipulating data inside these functions will not cause components to re-render the way that changing state in Hook based component will – so long as you’re not creating new objects in the process. This was an unforeseen benefit in switching to Redux, but it did help to improve our application’s efficiency.

### WHY HOOKS CAN’T FULLY REPLACE REDUX

During my brief foray into working with these two forms of state management, it’s been my experience that Redux has more to offer for state management, simply because that’s what it’s designed to do. Hooks provide an excellent, functional, compact way for managing state within a component, and holding simple data – if you’re keeping your application extremely small.

For anything larger, Redux has an undoubted edge in the tools it provides and the efficiency it is designed to foster within an application. MapState provides an effective, render-efficient way to access and manipulate state data from any component. This method also allows for separation of component and container, as it moves the responsibility of state handling from the component, to a singular method that can then provide the needed information to the components it wraps. This allows components to stay modular, and therefore more extensible. Combining this with Redux’s DevTools, and the inbuilt methods for combining state and reducers, and you have a complete, and efficient state management solution.

I hope you’ve learned something from hearing about my experience, please feel free to share yours as well!

Jan 31, 2020

KSM Technology Partners

## Related Posts

[Should You Store Requirements In Jira?Read More](https://ksmpartners.com/should-you-store-requirements-in-jira/)

### Should You Store Requirements In Jira?

Read More

[3 Reasons Excel Is a Poor Choice for Safeguarding GxP Data IntegrityRead More](https://ksmpartners.com/3-reasons-excel-is-a-poor-choice-for-safeguarding-gxp-data-integrity/)

### 3 Reasons Excel Is a Poor Choice for Safeguarding GxP Data Integrity

Read More

[Water Cooler Talk #1: Mitigating Continuity Risk of an Existing CodebaseRead More](https://ksmpartners.com/water-cooler-talk-1-mitigating-continuity-risk-of-an-existing-codebase/)

### Water Cooler Talk #1: Mitigating Continuity Risk of an Existing Codebase

Read More
