public without sharing class parentSearchController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList(String accName,Integer recordNumber){
        String nameKey = '%' + accName + '%';
        system.debug('nameKey>>'+nameKey+'recordNumber>>'+recordNumber);
       return [SELECT Id,Name from Account where Name LIKE :nameKey LIMIT :recordNumber ];
    }
    
}