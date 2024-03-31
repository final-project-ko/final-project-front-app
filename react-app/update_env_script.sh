##!/bin/bash
#
## Function to fetch internal IP address
#fetch_internal_ip() {
#    internal_ip=$(ifconfig | grep "inet " | grep -Fv 127.0.0.1 | awk '{print $2}')
#    echo "$internal_ip"
#}
#
## Fetch internal IP address
#internal_ip=$(fetch_internal_ip)
#
## Check if .env file exists
#if [ ! -f .env ]; then
#    echo "Error: .env file not found."
#    exit 1
#fi
#
### Backup .env file
##cp .env .env.bak
#
## Update IP address in .env file
#sed -i.bak "s/REACT_APP_REDIRECT_URL=.*/REACT_APP_REDIRECT_URL=http:\/\/$internal_ip:8082\/api\/login\/oauth/" .env
#sed -i.bak "s/REACT_APP_REDIRECT_URL_NAVER=.*/REACT_APP_REDIRECT_URL_NAVER=http:\/\/$internal_ip:8082\/api\/naver\/oauth/" .env
#
#echo "Internal IP address updated in .env file: $internal_ip"
