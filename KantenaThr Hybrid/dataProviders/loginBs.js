'use strict';

(function() {
    app.data.loginBs = new Everlive({
        offlineStorage: true,
        apiKey: 'AeswXxi2Uo68fGiq',
        url: '//platform.telerik.com/bs-api/v1/',
        scheme: 'https'
    });

    document.addEventListener('online', function() {
        app.data.loginBs.offline(false);
        app.data.loginBs.sync();
    });

    document.addEventListener('offline', function() {
        app.data.loginBs.offline(true);
    });

}());

// START_CUSTOM_CODE_loginBs
// END_CUSTOM_CODE_loginBs