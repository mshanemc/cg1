/* globals _ */
({
    doInit: function (component) {
        var action = component.get('c.getBikes');
        action.setParams({
            customerId: component.get('v.recordId')
        });
        action.setCallback(this, function (a) {
            var state = a.getState();
            if (state === 'SUCCESS') {
                console.log(a.getReturnValue());
                component.set('v.bikes', a.getReturnValue());
            } else if (state === 'ERROR') {
                console.log(a.getError());
            }
        });
        $A.enqueueAction(action);
    },

    shuffle: function (component, event) {
        if (
            event.getParam('channel') == 'ducatiEventBox' &&
            component.get('v.bikes')
        ) {
            component.set('v.bikes', _.shuffle(component.get('v.bikes')));
        }
    }
});
