({
    doInit : function(component, event, helper) {
        var action = component.get("c.getDealers");
        action.setCallback(this, function(a){
            var state = a.getState();
            if (state === "SUCCESS") {
                console.log(a);
                component.set("v.dealers", a.getReturnValue());
            } else if (state === "ERROR") {
                console.log(a.getError());
            }
        });
        $A.enqueueAction(action);
        //get a new record to populate the event
        component.find("frd").getNewRecord(
            "Live_Event__c", // sObject type (objectApiName)
            null,      // recordTypeId
            false,     // skip cache?
            $A.getCallback(function() {

            })
        );
    }
})
