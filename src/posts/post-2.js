import marked from 'marked';

export default {
    title: 'Testing your code',
    lead: `
        Avoiding bugs in your code is important for the end user experience. Choosing the right way to test your code
        is paramount!
    `,
    body: marked(`
Unit testing your code is important to avoid introducing bugs whenever you are writing new code or refactoring legacy.
When you do it right, you can feel comfortable that edge cases are covered and mission critical components work as they
were intended.

Although there are many test frameworks to choose from, [\`jest\`](https://facebook.github.io/jest/) have risen up as a
very attractive candidate. Unlike most test frameworks, there is no setup required, and you can get straight to writing
your unit tests.

## But didn't Jest suck?

Jest didn't enjoy its current popularity ratings in its first iterations. However, in 2016 it was totally rewritten to
provide a top notch developer experience, focusing on speed, stability and a super well designed CLI. So you can rest
assured - it's nothing like the bad things you might have heard anymore. And Christmas is about forgiveness and all
that, right?

## Setup? Done.

As mentioned in [yesterday's article](/1), Jest is included with \`create-react-app\`. If you have an existing
application, however, setting up Jest is easy as peas. Run \`npm i --save-dev jest\` and add the following to your
\`package.json\` file:

\`\`\`javascript
"scripts": {
    // Run your test suite
    "test": "jest",
    // Start an iterative test watcher
    "test:watch": "jest --watch",
    // Run tests, outputting a test coverage overview
    "test:coverage": "jest --coverage"
}
\`\`\`

That's it! There's no cumbersome setup (although
[you can tweak it](https://facebook.github.io/jest/docs/en/configuration.html#content) to fit your needs), and you can
get straight to writing your tests. Boom!

## Snapshots

A huge feature that puts Jest apart from the rest is something called snapshot testing. Simply put it's a way to record
a snapshot of the React component tree currently being tested, and then check future tests against the saved result.

In other words - you no longer have to write endless assertions or expects, and instead can check two complete rendering
results against each other. Huge time saver! You can read more about snapshot testing
[here](http://facebook.github.io/jest/docs/en/snapshot-testing.html#content).
`),
    resources: [
        {
            title: 'Official site for Jest',
            link: 'https://facebook.github.io/jest/',
            body: 'The offical web site of Jest has a ton of great tutorials, docs and videos!',
        },
        {
            title: 'From Mocha to Jest',
            link: 'https://medium.com/airbnb-engineering/unlocking-test-performance-migrating-from-mocha-to-jest-2796c508ec50',
            body: 'A very well written article from Gary Borton @ AirBnB about their migration from Mocha to Jest, and what benefits it brought',
        },
        {
            title: 'Snapshot testing',
            link: 'https://blog.callstack.io/unit-testing-react-native-with-the-new-jest-i-snapshots-come-into-play-68ba19b1b9fe',
            body: 'Using snapshots might give your tests tons of more value, especially if you\'re into react-native. This is a great article series about just that.',
        },
    ],
};
