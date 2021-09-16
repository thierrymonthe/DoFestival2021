const dateProduction = new Date(2021, 8, 6);
export const environment = {
  production: true,
  productionDate: dateProduction,
  hostUrl: 'https://nullpluseinsfestival.de',
  port: '',
  envName: 'local',
  username: '',
  password: '',
  token: '',
  sendGridKey: '',

  emailConfig: {
    url: 'https://api.sendgrid.com/v3/mail/send',
    from: 'kwemo@hotmail.com',
    bearer: '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'
  }
};
