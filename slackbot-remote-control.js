Slackbot = function (options) {
};

Slackbot.post = function (channel, message) {
    var url;
    var token;

    if (!Meteor.settings.slack) {
        throw new Meteor.Error(500, 'No Slack settings provided.');
    }

    url = Meteor.settings.slack.url;
    token = Meteor.settings.slack.token;

    if (!url) {
        throw new Meteor.Error(404, 'No URL provided for Slackbot.');
    }

    if (!token) {
        throw new Meteor.Error(401, 'No token provided for Slackbot.');
    }

    if (!message && message != 0) {
        message = '';
    }

    HTTP.post(url, {
        params: {
            token: String(token),
            channel: String(channel)
        },
        data: String(message)
    });
};

