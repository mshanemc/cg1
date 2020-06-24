({
    doInit: function (component) {
        var action = component.get('c.getDealers');
        action.setCallback(this, function (a) {
            var state = a.getState();
            if (state === 'SUCCESS') {
                console.log(a);
                component.set('v.dealers', a.getReturnValue());
            } else if (state === 'ERROR') {
                console.log(a.getError());
            }
        });
        $A.enqueueAction(action);
        //get a new record to populate the event
        component.find('frd').getNewRecord(
            'Live_Event__c', // sObject type (objectApiName)
            null, // recordTypeId
            false, // skip cache?
            $A.getCallback(function () {})
        );
    },

    shuffle: function () {
        $A.get('e.ltng:sendMessage')
            .setParams({ message: 'shuffle', channel: 'ducatiEventBox' })
            .fire();
    },

    done: function (component) {
        component.set('v.showButton', true);
    },

    createEvent: function (component, event, helper) {
        console.log('create event fired');
        component.find('frd').saveRecord(
            $A.getCallback(function (saveResult) {
                //console.log(saveResult);
                if (saveResult.state === 'SUCCESS') {
                    //happy logic here
                    //component.find("frd").reloadRecord();
                    $A.get('e.force:showToast')
                        .setParams({
                            type: 'success',
                            message: 'Live Event Created!'
                        })
                        .fire();
                } else if (saveResult.state === 'INCOMPLETE') {
                    console.log(
                        "User is offline, device doesn't support drafts."
                    );
                } else if (saveResult.state === 'ERROR') {
                    console.log(saveResult.error);
                }
            })
        );
    }
});
