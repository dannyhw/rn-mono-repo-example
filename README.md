# React Native Mono repo example

This an example of how storybook and react native can be used together in a mono repo.

The key to using local dependencies with react native without running into issues is to avoid multiple react native instances within the watch folders and managing those dependencies to avoid clashes.

In this example there are 3 packages

### App

This is a react native app that would be the main deliverable or a test project depending on the situation.

This package has the react native project files and is generated using react-native cli.

### UI

This is the component library, this project has only js/ts and no react native project files.

Most importantly React native and react are peer dependencies that are also listed as dev dependencies to allow for typechecking and eslint etc.

By making react native a peer dependency it makes it possible to include components from this library without clashes in node-modules.

This package is transpiled with typescript to a dist folder that could be used to publish this to npm if you wanted, however I didn't test this yet.

Stories are exported in @rncl/components/stories but storybook is a peer/dev dependency with the idea being that its only imported by the storybook package or if potentially could be used to add to a users storybook to experiment with the ui package.

### Storybook

This is the package used to display the component library and can be provided as a stand alone app to provide to stake holders or designers to validate individual components.

In this case this package is just acting as a runtime for the ui package being separate so that the ui package can be small and not require react native dependencies directly.
