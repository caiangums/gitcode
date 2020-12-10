![GitCode](./gitcode-logo.png?raw=true)

# GitCode

> See your GitHub info!

**Note**: There are some [Known Issues](#known-issues) described in the respective section.

## Summary

- [Docs](https://caiangums.github.io/gitcode/)
- [Repo](https://github.com/caiangums/gitcode)
- [Dependencies](#dependencies)
- [Specs for the Project](#specs-for-the-project)
- [Screens](SCREENS)
- [Env Vars](#env-vars)
- [Development and Running](#development-and-running)
- [Known Issues](#known-issues)

## Dependencies

- [React Native v0.63.3](https://reactnative.dev/)
- [React Native CLI v4.13.1](https://github.com/react-native-community/cli)
- [Yarn v1.22.10](https://classic.yarnpkg.com/lang/en/)
- [NodeJS v12](https://nodejs.dev/)

## Specs for the project

The screens, icons and images for the project can be found at [this link](https://www.figma.com/file/yixGFyAquQZNPhoTTTgvzQ/GitCode?node-id=0%3A1)

## Env Vars

For running this project you should [create an OAuth App at GitHub](https://github.com/settings/applications/new) and place a dotfile named `.env` (see `.env.example`) with the respective credentials.

There is one other option from using this approach on sensitive data such as OAuth Apps: Creating a Server for retreiving the correct and updated Env Vars.

### GitCode Env Vars

For validation, you can use the env vars from our **Test App** (they will not work forever...). Remember to create your own app and to change them

```
GITHUB_APP_CLIENT_ID=88e3f52f4e08341e8866
GITHUB_APP_CLIENT_SECRET=1ad5f4cefa9eae23bd8dacece8a908388a2d5c17
```

**Note:** Env Vars shuold never be placed here or commited. Those are just for guidance. If you want, you can read more about how to create an OAuth App inside GitHub [here](https://docs.github.com/en/free-pro-team@latest/developers/apps/building-oauth-apps)

## Development and Running

1. Clone the repo
2. Add ENV vars (see [this section](#env-vars))
3. Install dependencies: `yarn`/`npm install`
4. For iOS using CocoaPods: `cd ios && pod install`

After clone the repo and this initial setup, there are some few steps to be made before running the project.

1. Follow the steps described in the [OAuth lib config](#oauth-lib-config) section ([or just see this doc](https://github.com/FormidableLabs/react-native-app-auth#setup))
2. Due some issues with the Wrapped lib for OAuth (AppAuth-iOS) and the GitHub implementation of it, there are some changes to be made at the `OIDTokenRequest.m` file too (see [this PR](https://github.com/openid/AppAuth-iOS/pull/206/files)). Read more about [here](#the-library-used-for-authentication-does-not-fully-support-github-oauth-in-ios)

Finally, it is possible to:

1. Open a terminal and run `yarn start`
2. Open another terminal and run `yarn ios`/`yarn android`

### OAuth lib config

In order to fully use, the doc changes should be made as follow directly inside the [lib docs](https://github.com/FormidableLabs/react-native-app-auth#setup).

Note that you should also make the change described at the [known issue section](#the-library-used-for-authentication-does-not-fully-support-github-oauth-in-ios), for correct using the flow and the App.

### Token Storage

Using the Async Storage is not the best place for sensitive information. Instead, following [this guide](http://github.com/FormidableLabs/react-native-app-auth/blob/main/docs/token-storage.md), there are some options for libs. The [choosen one](https://github.com/oblador/react-native-keychain) is used to wrap Keychain/Keystore access.

### Logout can be done in 2 ways

As described at the [logout known issue](#the-logout-needs-revoke-directly-from-github-oauth-app), the Logout flow is not "correctly" implemented by GitHub. Some options are offered to the end user:

- Just clear the actual `accessToken` and next time entering the app the app will remember your credentials
- Go to GitHub Apps Page and revoke the permission

The first one result in not needing to insert the username and password at the next authentication flow. The second one asks for username and password on when user tries to login. **It is possible to acheive both ones** with the same `Logout` button:

- **normal press** for clearing `accessToken`
- **long press** for accessing the Revoke OAuth Permission

## Knwon Issues

> There are some known issues during the development. Here are the solutions taken and some information about them

### The library used for Authentication does not fully support GitHub OAuth in iOS

- Platform: iOS
- [Related Issue](https://github.com/FormidableLabs/react-native-app-auth/issues/194)

It that the GitHub API doesn't fully support the RFC proposal and instead of returning an XML with the credentials, returns a JSON. This is an issue due to the AppAuth-iOS lib does not support this data type.

The solution was after instaling/updating Pods in the project, make some changes as described in [this PR](https://github.com/openid/AppAuth-iOS/pull/206/files), made by one of the lib maintainers. Another possible solution is fork the library, make the changes and use the fork. This can be considered for future implementations in case of the project usage.

Note: Those changes should be make after **each update** of the Pods and reinstall the App at device (emulator or physical)

### The Logout needs revoke directly from GitHub OAuth App

- Platform: iOS
- [Related Issue](https://github.com/FormidableLabs/react-native-app-auth/issues/487)

There issues with AppAuth-iOS too related to the Logout flow not fully making the App ask for the User and just getting the `accessToken` without sending any credentials. The proposed solutions for it seems too "tricky" and probably needs a fork from the library or more specific knowledge.

There are some "solutions" described in the issues and one the one related inside [this issue](https://github.com/openid/AppAuth-iOS/issues/209#issuecomment-404353236) seems to work but the revoke token was choosen for this case.
