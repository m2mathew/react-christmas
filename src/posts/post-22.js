import marked from 'marked';
export default {
  title: 'The definite guide to lifecycle events!',
  lead: `
If you've been using React for any period of time, you've probably seen what React calls lifecycle methods. This
article will give you a firm grip on when you want to use what.
  `,
  body: marked(`
Class based components have something called lifecycle events that help you set up new components, tear down old ones
and react to changes. But why are they there, and when should you use them? And what is a lifecycle?

## What _is_ a component lifecycle?

Components are the bread and butter of React. They're created, mounted, updated and removed from the DOM, and this cycle
of events is what is called the component lifecycle. These major events can be interesting for several reasons - you
might want to fetch some data, remove some global event listeners or initialize some third-party libraries.

Since React is your buddy, it provides some nice hooks for these major events, which we'll go through quickly in this
article. I've split them up in four parts: creation, mounting, updating and removal. Let's have a look:

## Creating components

### \`constructor\`

The first thing that happens in your React component is that its constructor is called right before it's mounted. This
is where you typically specify your initial state (if any), and bind callback methods if you're not specifying them with
[class property initializors](/17). This is how it looks:

\`\`\`javascript
class SomeComponent extends React.Component {
  constructor(props) {
      super(props);
      this.state = { some: 'state' };
      this.onSomething = this.onSomething.bind(this);
  }
}
\`\`\`

Note that you have to call \`super()\` at the very beginning of the method. \`super\` calls \`React.Component\`'s
constructor and sets up \`this\` for us. Some people provides \`props\` as a parameter, but all it'll do is make
\`this.props\` available for you in the constructor, and you already have \`props\` as an argument, so there's not
really any point most times. However, the React docs argues for doing it - so follow my advice at your own risk.

The most important thing to remember about a component's constructor is that you should only set up state and bind
callback methods here - no data fetching or other shenanigans. We have other methods for that.

### \`componentWillMount\`

The very first "lifecycle method" that runs is \`componentWillMount\`. This one runs before \`render\` is called for
the first time, and is _the only lifecycle method_ that's run when you render on the server. This is how it looks:

\`\`\`javascript
class SomeComponent extends React.Component {
  componentWillMount() {
    // Do stuff, I guess?
  }
}
\`\`\`

In practice though, I rarely (if ever) use it. The core React team is even [considering deprecating
it](https://github.com/facebook/react/issues/7671)! My advice - just use \`componentDidMount\` instead.

### \`componentDidMount\`

After the initial mount of a component, you might want to do stuff. You might want to fetch data, trigger some kind
of action or initialize some third-party library that depends on stuff being mounted to the DOM. Say hello to the
most useful lifecycle method of them all - \`componentDidMount\`:

\`\`\`javascript
class SomeComponent extends React.Component {
  state = { isPending: false };
  async componentDidMount() {
    this.setState({ isPending: true });
    const data = await server.fetchSomeData();
    this.setState({ isPending: false, data })
  }
}
\`\`\`

In this example, I update the state to remember the component is waiting for data. Then, I ask my API for some data,
and when I receive it, I update the state with it (and remember to tell the component it's no longer waiting for data).
If you're wondering about this \`async\` / \`await\` stuff, it's just a fancy way of writing promises.

Another example I often encounter is setting up third-party libs, like jQuery plugins or chart libraries not initially
written for React. There are totally valid use cases for this, and I'm sure you'll see it in the next legacy app you
work on.

The most important thing about this lifecycle method is that it's only run on the initial mount of the component - not
on subsequent renders. This is why this method is a great place to fetch data!

## Updating components

So now our component is mounted and happy. But what happens when something changes? And what do we think of as a change?

A component is updated whenever it parent component is re-rendered, or you call \`this.setState\` in your own code. Note
that the props sent from the parent component doesn't need to change for this to happen - it will happen whenever
\`render\` is called in the component that renders your component.

### \`componentWillReceiveProps\`

The first thing that happens in an update cycle is that the \`componentWillReceiveProps\` is triggered. Note that it's
only called whenever the parent component is updating - not due to calls to \`this.setState\`.

\`\`\`javascript
class SomeComponent extends React.Component {
  componentWillReceiveProps(nextProps) {
    // do stuff
  }
}
\`\`\`

I don't use this one a lot either, but it can be useful to update your local state with incoming props. Now, there has
[been some discussion](https://medium.com/@justintulk/react-anti-patterns-props-in-initial-state-28687846cc2e) about
whether or not this is an anti-pattern, but use it if it fits your use case.

### \`shouldComponentUpdate\`

This special little snowflake is next up - and both incredibly important and incredibly simple. It returns a boolean -
if \`true\`, the component update cycle continues, and if \`false\`, it aborts the entire cycle for both its component
and its children. It's great for performance tuning - and you can read more about performance tuning [in this
article](/19).

### \`componentWillUpdate\`
If \`shouldComponentUpdate\` is implemented and returns true, the next lifecycle method to trigger is
\`componentWillUpdate\`. It looks like this:

\`\`\`javascript
class SomeComponent extends React.Component {
  componentWillUpdate(nextProps, nextState) {
    // ...
  }
}
\`\`\`

Yet again, this is a method I usually don't end up using. Truth be told, it's not a lot of use cases where I want to
do something in my component based on props or state change. You can sync your props and state, but besides from that,
there isn't really much to do here. Let's move on.

### \`componentDidUpdate\`

This method is called whenever a full render cycle is complete, for both your component and its children. It receives
the previous props, state and context for you to react to.

\`\`\`javascript
class SomeComponent extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    // ...
  }
}
\`\`\`

If you need to, you can do side-effects here, since this is the only lifecycle method that's only going to be called
once per render cycle. I usually don't because using less lifecycle methods equals simpler components, and that's a
good thing.

## Destructuring

Once your component is done with being displayed (i.e. the parent component removes it from its \`render\` method),
you might need to do some cleanup. What tools do we have available?

### \`componentWillUnmount\`

The last lifecycle method that'll be called on your component is \`componentWillUnmount\`. It's called directly before
React removes your component from the DOM, and it's a great place for removing any global event handlers you might have
attached to the DOM, or clear any timeouts or intervals that might be running.

\`\`\`javascript
class SomeComponent extends React.Component {
  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }
}
\`\`\`

If you forget to do stuff like this, you might see errors like "Can't call setState on an unmounted component". That's
totally fine - I see them all the time. But it typically means you forgot something - and this is the method for
cleaning that stuff up.

## Also, \`componentDidCatch\`

There's actually one more lifecycle method we haven't discussed in this article - namely \`componentDidCatch\`. This is
kind of a special one, and deals with something called error boundaries. I wrote an article about it [here](/8) - it's
pretty powerful stuff!

## What about functional components?

As you can see, there are a lot of different lifecycle methods available for your consumption. That means you can make
your components pretty powerful, but also very complex. If you don't need any of them - consider a functional component.
They don't have lifecycle methods at all, which makes them incredibly easy to create, test and maintain. I wrote [a
longer comparison between the two](/16) of them if you're interested in when you should use what.

## And that's lifecycles!

There are a ton of these lifecycle methods available, but as you could tell from above, I don't tend to use many of
them. I use \`componentDidMount\` if I need to fetch data (or otherwise trigger an action), and I use
\`componentWillUnmount\` whenever I need to clean up after myself. Those two tools are powerful enough to create pretty
cool stuff - so don't use more than you need. Chances are - you only need a functional component anyway.
  `),
  resources: [
    {
      title: 'Understanding lifecycles',
      link: 'https://medium.com/@baphemot/understanding-reactjs-component-life-cycle-823a640b3e8d',
      body: 'An in-depth article that goes into detail about the render lifecycles, with some cool graphs!',
    },
    {
      title: 'Lifecycle simulator',
      link: 'https://reactarmory.com/guides/lifecycle-simulators',
      body: 'Want to play around with lifecycles? This interactive guide lets you step by them all - one by one',
    },
    {
      title: 'React docs on component lifecycles',
      link: 'https://reactjs.org/docs/react-component.html#the-component-lifecycle',
      body: 'My go-to reference whenever I forget which method is fired when. A lot of great best-practice advice!',
    },
  ],
};
