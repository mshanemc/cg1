/* globals _ */
({
    doInit: function (component) {
        var columns = [
            { label: 'First', fieldName: 'FirstName' },
            { label: 'Last', fieldName: 'LastName' },
            { label: 'Phone', fieldName: 'Phone', type: 'phone' },
            { label: 'Email', fieldName: 'Email', type: 'email' }
        ];

        component.set('v.columns', columns);

        var action = component.get('c.getLeads');

        action.setCallback(this, function (a) {
            var state = a.getState();
            if (state === 'SUCCESS') {
                console.log(a);
                component.set('v.leads', a.getReturnValue());
            } else if (state === 'ERROR') {
                console.log(a.getError());
            }
        });
        $A.enqueueAction(action);
    },

    shuffle: function (component, event) {
        if (
            event.getParam('channel') === 'ducatiEventBox' &&
            component.get('v.leads')
        ) {
            component.set('v.leads', _.shuffle(component.get('v.leads')));
        }
    }
});
