# Contract Shark Core Spec

> @contractshark/core-spec

## Overview

The core test functionality is provided by the @contractshark/core-spec module.

It automatically attaches to your project at initialization.

### Initializing specs

The framework provides a `spec` class which holds basically the whole testing
power. You start your test by creating an instance of that class.

```typescript
import { Spec } from '@contractshark/core-spec';

const spec = new Spec();
```

### Testing features

The Spec instance provide methods that you can use when writting tests. Most of
the time you will use the test method which performs the test you write.

```typescript
spec.test('is true', async (ctx) => {
  // promise | function
  ctx.true(true);
});
```

There is also the skip method which prevents a test te be performed, and the
only method which includes itself into the test process but excludes all other
tests.

### Nested specs

Tests can be nested using the spec method.

```js
const colors = new Spec();
...
spec.spec('colors', colors);
```

### Using callbacks

The framework provides before and after methods which are execute at the
beginning and at the end of the spec case.

```js
spec.before((stage) => {
  // execute before all tests
});
...
spec.after((stage) => {
  // execute after all tests
});
```

These methods have access to the stage of the spec instance. The stage is global
to the whole spec stack which means that all settings are always preserved.

There are also the `beforeEach` and `afterEach` methods which are triggered before
and after each test. 

These methods have access to the context and stage of the `spec`. 

#### Atomic Tests

The context represents a copy of a stage and is preserved between `beforeEach`, test and `afterEach` methods. 

This allows for testing atomic tests where the context is always reset for each test.

```js
spec.beforeEach((context, stage) => {
  // execute before all tests
});
...
spec.afterEach((context, stage) => {
  // execute after all tests
});
```

Callback functions can be called multiple times and the execution will happen in
a defined sequence.

### Shared data

The context and the stage both provide a way to set and get values with proper
TypeScript types.

```typescript
interface Data {
  id: number;
  name: string;
}

const spec = new Spec<Data>();

spec.beforeEach((ctx) => {
  ctx.set('id', 100);
  ctx.set('name', 'Satoshi');
});

spec.test('is Satoshi with id=100', (ctx) => {
  const id = ctx.get('id');
  const name = ctx.get('name');
  ctx.is(id, 100);
  ctx.is(name, 'Satoshi');
});
```

Values set inside the before and after blocks are available to all spec methods.
Values set in the `beforeEach` and `afterEach` blocks are available only on the
context stack of each test.

## License 

MIT
