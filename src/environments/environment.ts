// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
export const environment = {
  production: false,
  productionDate: new Date(2021, 9, 6),
  hostUrl: '',
  port: '',
  envName: 'local',
  username: '',
  password: '',
  token: '',

  emailConfig: {
    url: 'https://api.sendgrid.com/v3/mail/send',
    to: [{email: 'kwemo@hotmail.com'}, {email: 'chendjou2016@outlook.fr'}],
    apiKey: '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'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/dist/zone-error';  // Included with Angular CLI.
