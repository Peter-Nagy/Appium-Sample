exports.android = {
  browserName: '',
  'appium-version': '1.4.10',
  platformName: 'Android',
  platformVersion: '8.1',
  deviceName: '*',
  app: undefined, // will be set later
};

exports.ios = {
  platformName: 'iOS',
  platformVersion: '11.2',
  deviceName: 'iPhone 8 Plus',
  useNewWDA: true,
  showXcodeLog: true,
  autoAcceptAlerts: true,
}
