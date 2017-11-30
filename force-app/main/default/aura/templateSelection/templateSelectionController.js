/* globals moment */

({
    doInit : function(component) {
        component.set("v.templates", [
            {
                "name" : "Non-owner invitation",
                "lastModified" : moment().subtract(21, 'days').toDate()
            },
            {
                "name" : "Configurator user invitation",
                "lastModified" : moment().subtract(92, 'days').toDate()
            },
            {
                "name" : "Generic prospect invitation",
                "lastModified" : moment().subtract(12, 'days').toDate()
            },
            {
                "name" : "Current owner dynamic invitation",
                "lastModified" : moment().subtract(174, 'days').toDate()
            },
        ]);

        component.set("v.columns", [
            { label: 'Template Name', fieldName: 'name'},
            { label: 'Modified', fieldName: 'lastModified', type : 'date'},
        ])
    }
})
