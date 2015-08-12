'use strict';

app.dataListView1 = kendo.observable({
    onShow: function() {}
});

// START_CUSTOM_CODE_dataListView1
// END_CUSTOM_CODE_dataListView1
(function(parent) {
    var dataProvider = app.data.progressDataProvider,
        dataSourceOptions = {
            type: 'jsdo',
            transport: {
                jsdo: 'dbo_Accounts'
            },
            schema: {
                model: {
                    fields: {
                        'Id': {
                            field: 'Id',
                            defaultValue: ''
                        },
                    }
                }
            },
        },
        dataSource = new kendo.data.DataSource({
            pageSize: 50
        }),
        dataListView1Model = kendo.observable({
            dataSource: dataSource,
            itemClick: function(e) {
                app.mobileApp.navigate('#components/dataListView1/details.html?uid=' + e.dataItem.uid);
            },
            detailsShow: function(e) {
                var item = e.view.params.uid,
                    itemModel = dataSource.getByUid(item);
                if (!itemModel.Id) {
                    itemModel.Id = String.fromCharCode(160);
                }
                dataListView1Model.set('currentItem', itemModel);
            },
            currentItem: null
        });

    parent.set('dataListView1Model', dataListView1Model);
    parent.set('onShow', function() {
        dataProvider.loadCatalogs().then(function _catalogsLoaded() {
            dataSource = new kendo.data.DataSource(dataSourceOptions);
            dataListView1Model.set('dataSource', dataSource);
        });
    });

})(app.dataListView1);