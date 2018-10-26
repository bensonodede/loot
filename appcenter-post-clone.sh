#!/usr/bin/env bash

APP_CONSTANT_FILE=$APPCENTER_SOURCE_DIRECTORY
echo "Current branch is $APPCENTER_BRANCH"

if [ "$APPCENTER_BRANCH" == "master" ];
then 
    echo "Current branch is $APPCENTER_BRANCH"
    #sed -i 's/storeFile file(project.env.get("MYAPP_RELEASE_STORE_FILE"))/${System.env.MYAPP_RELEASE_STORE_FILE}/g' 
    echo "Checking app directory"
    cat "$APP_CONSTANT_FILE"

fi