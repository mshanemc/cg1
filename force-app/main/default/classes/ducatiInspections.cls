public with sharing class ducatiInspections {


    @AuraEnabled
    public static list<account> getDealers(){
        return [select id,name, ShippingCity from account where Type = 'Dealer'];
    }


    @AuraEnabled
    public static list<Lead> getLeads(){
        return [select id, FirstName, LastName, Email, City, Phone from Lead];
    }


}
