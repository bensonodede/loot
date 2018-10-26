#!/usr/bin/env bash

APP_CONSTANT_FILE=$APPCENTER_SOURCE_DIRECTORY

if [ "$APPCENTER_BRANCH" == "master" ];
then 
    echo "Checking app directory..."
    cat APP_CONSTANT_FILE

fi
#sed -i 's/storeFile file(project.env.get("MYAPP_RELEASE_STORE_FILE"))/${System.env.MYAPP_RELEASE_STORE_FILE}/g' 