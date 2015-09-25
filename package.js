Package.describe({
    name: 'rishatmuhametshin:slackbot-remote-control',
    version: '0.0.1_1',
    summary: 'A Meteor package that wraps Slack basic feature, Slackbot remote control, that allows posting messages into any channel on behalf of @slackbot.',
    git: 'https://github.com/taxigy/meteor-slackbot-remote-control',
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.2.0.1');
    api.use('ecmascript');
    api.use('http');
    api.addFiles('slackbot-remote-control.js');

    if (api.export) {
        api.export('Slackbot');
    }
});

Package.onTest(function(api) {
    api.use('ecmascript');
    api.use('tinytest');
    api.use('http');
    api.use('taxigy:slackbot-remote-control');
    api.addFiles('slackbot-remote-control-tests.js');
});

