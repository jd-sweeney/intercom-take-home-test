# `Intercom/TakeHomeTest`

A small program that produces a list of customers within a specified distance to a lat/long coordinate.

**NOTE:** Submitted output.txt file can be found on the root of this project directory. It's also included in the zipped attachment

## Getting Started

```bash
npm install # First install all required dependencies

npm run generate-customer-list # Execute the task runner to generate customer list -> output.txt file appears under ./taskRunners/
npm run test # Execute tests
```

## Code Architecture

All src code can be found under the `src` directory. `index.ts` acts as the entry point. The `src/utils` folder contains all the utility functions to process each individual operation. With each util file categorically labelled for it's purpose.

Testing framework in use is `jest`. All tests can be found under the `__tests__` folder for each of the src code directories. With each test file matching the relevant file it's particularly testing.

Tested on node `v12.14.1`
