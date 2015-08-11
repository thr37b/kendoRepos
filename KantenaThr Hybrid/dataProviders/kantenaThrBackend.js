'use strict';

(function() {
    app.data.kantenaThrBackend = new Everlive({
        offlineStorage: true,
        apiKey: 'sOG93mBBHZd1v49o',
        url: '//platform.telerik.com/bs-api/v1/',
        scheme: 'https'
    });

    document.addEventListener('online', function() {
        app.data.kantenaThrBackend.offline(false);
        app.data.kantenaThrBackend.sync();
    });

    document.addEventListener('offline', function() {
        app.data.kantenaThrBackend.offline(true);
    });

}());

// START_CUSTOM_CODE_kantenaThrBackend
// END_CUSTOM_CODE_kantenaThrBackend