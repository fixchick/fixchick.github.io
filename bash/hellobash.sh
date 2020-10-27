#!/bin/bash

# if a directory exists, print result

for i in $@
do
    DIR=$i

    if  [ -d "$DIR" ]
    then 
        echo "$DIR exists"
    else
        echo "$DIR does not exist"
    fi
done
