import marked from 'marked';
export default {
  title: 'What is this JSX business?',
  lead: `
One of the weirdest things to me when I started learning React was this JSX syntax. What is it? Where does it come from?
And how can I make really cool stuff with this?
  `,
  body: marked(`
JSX is a syntax extension to JavaScript, based loosely on the now-defunct E4X standard and kind of looks like this:

\`\`\`javascript
<SomeComponent someProp={someValue}>
    <h1 className="heading">Hello world</h1>
</SomeComponent>
\`\`\`

In layman's terms, however, JSX is simply syntactic sugar for \`React.createElement(component, props, children)\`.
That means, the code above is transpiled (or translated) into the following:

\`\`\`javascript
React.createElement(SomeComponent, { someProp: someValue},
    React.createElement('h1', { className: 'heading' },
        'Hello world',
    );
);
\`\`\`

Since the latter is neither very simple to read or particularly user friendly, Facebook came up with this XML-inspired
syntax now known as JSX. You can play with this [babel compiler
example](https://babeljs.io/repl/#?presets=react&code_lz=GYVwdgxgLglg9mABACwKYBt1wBQEpEDeAUIogE6pQhlIA8AJjAG4B8AEhlogO5xnr0AhLQD0jVgG4iAXyJA)
to see how this works with your own code.

## Conditional rendering

If you've used React for any amount of time, you've probably run into situations where you want to render something if
a particular condition is met. JSX has this quirk that it doesn't render \`undefined\`, \`false\`, \`true\` and
\`null\`, and you can use that fact to render something only if your condition is met:

\`\`\`javascript
const ArticleCard = (props) = (
  <div>
    {props.title &&
        <h2>{props.title}</h2>
    }
    {props.lead
        ? <p className="lead">{props.lead}</p>
        : null
    }
    {props.body}
  </div>
);
\`\`\`

Note that I just showed you two different ways of doing the same thing - both with something called logical short
circuting (\`&&\`) and ternaries (\`a ? b : c\`). Both are valid and both works, but I tend to use the first approach
in my own projects.

## Props default to true!

If you've specified a prop, but not given it a value, it defaults to true. That means the following two components are
equal:

\`\`\`javascript
<Button large={true}>Click me</Button>
<Button large>Click me</Button>
\`\`\`

I tend to use the former, just so that I don't have to remember this little detail of the JSX spec, but it's definitely
nice to know about. It can potentially make your code look a lot cleaner as well!

## Components must be capitalized

When you transpile your code, you'll notice that lower case component names are passed as strings to
\`React.createElement\`, while capitalized component names are passed as a reference to the component name:

\`\`\`javascript
<hello /> // becomes React.createElement('hello');
<Hello /> // becomes React.createElement(Hello);
\`\`\`

This might lead to some problems, especially if you have a component that receives the DOM element it's supposed to
render as a prop.

\`\`\`javascript
const Heading = (props) => {
  const { tagName, children } = props;
  return (
    <tagName>{children}</tagName>
  );
};
\`\`\`

However, you can get around this limitation by renaming that constant to have a capitalized first letter:

\`\`\`javascript
const Heading = (props) => {
  const { tagName: TagName, children } = props;
  return (
    <TagName>{children}</TagName>
  );
};
\`\`\`

## Those damn children

JSX handles the \`children\` property a bit different than the rest, in that you can specify it inside the opening
and closing tags of your component. React, however, doesn't really care - it's just props to them.

This means you can send in some other JSX, a string literal or even an array or a function as children. You can also
just specify children as a regular prop, making the following two statements equal:

\`\`\`javascript
<h1>My heading</h1>
<h1 children="My heading" />
\`\`\`

The latter approach is probably not something you'll see a lot in the real world, but the fact that children really just
is a regular property (and not something magic) is great. If you've been following this calendar over the last few days,
you probably remember [the article on HOCs and render props](/7) , which uses this fact to send in a function that
renders JSX instead of plain JSX.

## JSX is yay!

There is tons of more to learn about JSX, but as long as you remember the beginning of this article, you should be good:
JSX is just syntactic sugar for \`React.createElement\`. Now go make something cool!
`),
  resources: [
    {
      title: 'Introducing JSX',
      link: 'https://reactjs.org/docs/introducing-jsx.html',
      body: 'A great intro on JSX that introduces some of the themes in this article in greater detail'
    },
    {
      title: 'JSX in depth',
      link: 'https://reactjs.org/docs/jsx-in-depth.html',
      body: 'A nice deep dive into JSX and some of its more overlooked features. A must read any React-fan, really'
    },
    {
      title: 'The other side of the coin',
      link: 'https://medium.freecodecamp.org/react-s-jsx-the-other-side-of-the-coin-2ace7ab62b98',
      body: 'An in-depth look on why JSX is a good idea and how it came to be',
    },
  ],
};
