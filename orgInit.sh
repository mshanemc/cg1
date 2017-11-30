#!/bin/bash

sfdx force:org:create -f config/project-scratch-def.json -s
sfdx force:source:push
sfdx force:user:permset:assign -n DucatiEvents

# bigger files--get them going first
sfdx force:data:bulk:upsert -f data/Reporting_1__c.csv -s Reporting_1__c -i ID
sfdx force:data:bulk:upsert -f data/Reporting_2__c.csv -s Reporting_2__c -i ID

# smaller files
sfdx force:data:tree:import -f data/Account.json
sfdx force:data:tree:import -f data/Dealer__c.json
sfdx force:data:tree:import -f data/motorcycle__c.json
sfdx force:data:tree:import -f data/Lead.json

# creatng users

# chatter photos

#sfdx force:apex:execute -f scrips/setup.cls
sfdx force:org:open