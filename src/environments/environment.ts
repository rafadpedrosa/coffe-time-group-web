// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const firebaseConfig = {
  apiKey: 'AAAAyib2edw:APA91bFwRD9oF955HZTbovd-vImuzR7GnxraWBj8ZnJGQzfjYQtJgNy2Pm3MgeJgznSzNCYjV68n9oFLdhWLG2EpnUZT3iDYmv7iP_ovKNRWQ30vgiTU4kdRBWmtIT69p5moLqsyNCLk',
  authDomain: 'coffe-time-company-group.firebaseapp.com',
  databaseURL: 'https://coffe-time-company-group.firebaseio.com',
  projectId: 'coffe-time-company-group',
  storageBucket: 'coffe-time-company-group.appspot.com',
  messagingSenderId: '868237081052'
};

export const environment = {
  production: false,
  firebase: { ...firebaseConfig }
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
