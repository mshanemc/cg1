public with sharing class ducatiInspections {


    @AuraEnabled
    public static list<account> getDealers(){
        return [select id,name, ShippingCity from account where Type = 'Dealer'];
    }


    @AuraEnabled
    public static list<Lead> getLeads(){
        return [select id, FirstName, LastName, Email, City, Phone from Lead];
    }

    @AuraEnabled
    public static list<Motorcycle__c> getBikes(){
        return [select id, Name, ImageURL__c from Motorcycle__c];
    }

}
