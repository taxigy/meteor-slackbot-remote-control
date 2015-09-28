Slackbot = function (options) {
    if (!options) {
        throw new Meteor.Error(400, 'Must provide options for new Slackbot remote control instance.');
    }

    if (typeof options !== 'object') {
        throw new Meteor.Error(400, 'Slackbot remote control options must be an object.');
    }

    this.team = options.team;
    this.url = options.url || 'https://'.concat(this.team).concat('.slack.com/services/hooks/slackbot');
    this.token = options.token;
};

Slackbot.prototype.postMessage = function (channel, message) {
    var url;
    var token;

    if (!Meteor.settings.slack) {
        throw new Meteor.Error(500, 'No Slack settings provided.');
    }

    url = this.url || 'https://'.concat(this.team).concat('.slack.com/services/hooks/slackbot') || Meteor.settings.slack.url;
    token = this.token || Meteor.settings.slack.token;

    if (!url) {
        throw new Meteor.Error(404, 'No URL provided for Slackbot.');
    }

    if (!token) {
        throw new Meteor.Error(401, 'No token provided for Slackbot.');
    }

    HTTP.post(url, {
        params: {
            token: String(token),
            channel: String(channel)
        },
        data: String(message || '')
    });
};

