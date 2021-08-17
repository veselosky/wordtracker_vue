# Word Tracker: Track and Analyze Your Writing Activity

For years I have tediously tracked my writing productivity by pasting
numbers into a giant spreadsheet. Did I mention how tedious that is? I
decided to build a tool to do it better! And since I was building it for
myself, I thought, why not build it in the cloud and share it with the
world?

This will be my first production-grade "JAM Stack" application. It is
constructed as:

- A browser-based front-end built in VueJS
- A "serverless" back-end provisioned with AWS Amplify
- Authentication and user database using Cognito
- Cloud data storage using DynamoDB and S3
- Any server-side functions handled by Lambda
- Analytics and Email Newsletters using Pinpoint

Why build this on the "JAM Stack"?

- Scaling to zero: if nobody uses the app, it effectively costs me nothing.
- Scaling up: if the app becomes popular, the architecture will scale without
  requiring me to do any additional work.
- I have no servers to maintain. I like sleeping at night.

The project is just getting started, but should progress week to week
as I learn these technologies.

## Project setup

```
npm install
```

Compiles and hot-reloads for development:

```
npm run serve
```

Compiles and minifies for production:

```
npm run build
```

Lints and fixes files:

```
npm run lint
```

Customize configuration:

See [Configuration Reference](https://cli.vuejs.org/config/).
