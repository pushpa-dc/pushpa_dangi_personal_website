// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyAhJiMRztAOIIEqW9C9VDY2T41mwhcF_nE",
    authDomain: "pushpa-dc.firebaseapp.com",
    databaseURL: "https://pushpa-dc.firebaseio.com",
    projectId: "pushpa-dc",
    storageBucket: "",
    messagingSenderId: "300797533403"
  }
};
