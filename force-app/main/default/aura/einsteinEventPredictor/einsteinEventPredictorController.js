/* globals _ */
({
    doInit: function (component, event, helper) {},

    shuffle: function (component, event) {
        if (
            event.getParam('channel') == 'ducatiEventBox' &&
            event.getParam('message') == 'shuffle'
        ) {
            var factor = _.random(0.9, 1.1);

            component.set('v.revenue', factor * component.get('v.revenue'));
            component.set(
                'v.attendance',
                factor * component.get('v.attendance')
            );
            component.set('v.unitSales', factor * component.get('v.unitSales'));
        }
    }
});
