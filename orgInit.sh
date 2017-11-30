#!/bin/bash

sfdx force:org:create -f config/project-scratch-def.json -s -d 1
sfdx force:source:push
sfdx force:user:permset:assign -n DucatiEvents

# bigger files--get them going first
sfdx force:data:bulk:upsert -f data/Reporting_1__c.csv -s Reporting_1__c -i ID
sfdx force:data:bulk:upsert -f data/Reporting_2__c.csv -s Reporting_2__c -i ID

# smaller files
sfdx force:data:tree:import -f data/Account.json
sfdx force:data:tree:import -f data/Dealer__c.json
sfdx force:data:tree:import -f data/Motorcycle__c.json
sfdx force:data:tree:import -f data/Lead.json

# creating a user to chatter to
sfdx force:user:create -f data/userDef/jason-user-def.json
# chatter photos
sfdx msm:user:photo -f assets/JasonChonnock.jpeg -g Jason -l Chinnock
sfdx msm:user:photo -f assets/stefania.jpeg -g User -l User

sfdx force:apex:execute -f scripts/setup.cls

sfdx force:org:open