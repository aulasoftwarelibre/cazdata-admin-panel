# CazData Admin Panel

Administration panel for the CazData app developed using [react-admin](https://github.com/marmelab/react-admin) with [react-admin-firebase](https://www.npmjs.com/package/react-admin-firebase)

## Get started

You need to add the private Firebase connection file: `src/FIREBASE_CONFIG.js` with the following format from firebase:

```js
export const firebaseConfig = {
  apiKey: 'aaaaaaaaaaaaaaaaaaaaaaaaaaa',
  authDomain: 'aaaaaaaaaaaaaaaaaaaaaaaaaaa',
  databaseURL: 'aaaaaaaaaaaaaaaaaaaaaaaaaaa',
  projectId: 'aaaaaaaaaaaaaaaaaaaaaaaaaaa',
  storageBucket: 'aaaaaaaaaaaaaaaaaaaaaaaaaaa',
  messagingSenderId: 'aaaaaaaaaaaaaaaaaaaaaaaaaaa',
};
```

Don't forget to add the `export` in front of the configuration that Firebase gives you!

Then just run `yarn start`
