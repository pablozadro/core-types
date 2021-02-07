# Core-Types

Core-Types is a utility to check the type of an object.


## Getting started

```bash
# Install as a local package
npm link
```


## Example

```javascript
import coreTypes from 'core-types';

coreTypes.is('some string').string(); // true
coreTypes.is(1).number(); // true
coreTypes.is([]).array(); // true
coreTypes.is({}).object(); // true
coreTypes.is(()=>{}).function(); // true
```


## Test

```bash
npm run test
```


## Documentation

- [Overview](/docs/overview.md)