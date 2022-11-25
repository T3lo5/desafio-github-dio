#!/bin/bash

apt-get update
apt-get upgrade -y
aptget install apache2 -y
ap-get install unzip -y
cd /tmp
wget https://github.com/denilsonbonatti/linux-site-dio/archive/refs/heads/main.zip
unzip main.zip
cd linux-site-dio-main
cp -R * /var/www/html/


echo "fim do script!!"


