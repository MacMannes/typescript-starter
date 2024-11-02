# Typescript Starter

This is my personal TypeScript starter project with Typescript/Prettier/ESLint/Vitest

## Unit tests

Run the unit test with this command:

```shell
npm run test
```

## Coverage of unit tests

You can check the code coverage and view the html results by running this command:

```shell
npm run test:coverage && open coverage/index.html

```

## Using this project

1. Clone the repository into a new folder:

```shell
git clone https://github.com/MacMannes/typescript-starter folder-name
```

2. Squash all commits and remove the git origin with the following commands:

```shell
git reset --soft $(git rev-list --max-parents=0 HEAD)
git add -A
git commit --amend --reset-author -m "Initial commit"
git remote rm origin
```
