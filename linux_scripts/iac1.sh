#!/bin/bash 

echo "criando diretórios..."

mkdir /publico
mkdir /adm
mkdir /ven
mkdir /sec

echo "Criando grupos de usuário..."

groupadd GRP_ADM
groupadd GRP_VEN
groupadd GRP_SEC

echo "criando usuários..."

useradd fifacup -m -s /bin/bash -p $(openssl passwd senha123) -G GRP_ADM
useradd fifacop -m -s /bin/bash -p $(openssl passwd senha123) -G GRP_ADM
useradd fifamod -m -s /bin/bash -p $(openssl passwd senha123) -G GRP_ADM


useradd nikecup -m -s /bin/bash -p $(openssl passwd senha123) -G GRP_VEN
useradd nikecop -m -s /bin/bash -p $(openssl passwd senha123) -G GRP_VEN
useradd nikemod -m -s /bin/bash -p $(openssl passwd senha123) -G GRP_VEN

useradd cristiano -m -s /bin/bash -p $(openssl passwd senha123) -G GRP_SEC
useradd messi -m -s /bin/bash -p $(openssl passwd senha123) -G GRP_SEC
useradd neymar -m -s /bin/bash -p $(openssl passwd senha123) -G GRP_ADM

echo "Especificando permissões dos diretórios..."

chown root:GRP_ADM /adm
chown root:GRP_VEN /ven
chown root:GRP_SEC /sec

chmod 770 /adm
chmod 770 /ven
chmod 770 /sec
chmod 777 /publico

echo "acaou!"








