This is an example to show the fix for https://github.com/nrwl/nx/issues/22866.

Now that Rollup is building in one pass rather than two passes, the `output` property from the configuration object is an array, not an object.

Thus, what used to work before when extending `output`:

```js
config.output = {
  ...config.output,
  // customize
};
```

Now needs to use map:

```js
config.output = config.output.map((out) => ({
  ...out,
  // customize
}));
```

Otherwise you run into a error like:

```shell
You must specify "output.file" or "output.dir" for the build.
RollupError: You must specify "output.file" or "output.dir" for the build.
    at getRollupError (/private/tmp/rollup-example/node_modules/rollup/dist/shared/parseAst.js:282:41)
    at Object.error (/private/tmp/rollup-example/node_modules/rollup/dist/shared/parseAst.js:278:42)
    at /private/tmp/rollup-example/node_modules/rollup/dist/shared/rollup.js:21090:36
    at async catchUnfinishedHookActions (/private/tmp/rollup-example/node_modules/rollup/dist/shared/rollup.js:20558:16)
    at async rollupExecutor (/private/tmp/rollup-example/node_modules/@nx/rollup/src/executors/rollup/rollup.impl.js:82:21)
    at async getLastValueFromAsyncIterableIterator (/private/tmp/rollup-example/node_modules/nx/src/utils/async-iterator.js:15:19)
    at async iteratorToProcessStatusCode (/private/tmp/rollup-example/node_modules/nx/src/command-line/run/run.js:44:29)
    at async handleErrors (/private/tmp/rollup-example/node_modules/nx/src/utils/params.js:9:16)
    at async process.<anonymous> (/private/tmp/rollup-example/node_modules/nx/bin/run-executor.js:59:28)
Bundle failed: example
```
