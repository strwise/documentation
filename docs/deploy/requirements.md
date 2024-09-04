---
sidebar_position: 2
sidebar_label: Requirements
id: requirements
slug: /requirements
title: Requirements
---

# Requirements

StreamWise is entirely based on Docker and Docker Compose. This means that you can install StreamWise on any operating system that supports Docker and Docker Compose. However, we recommend some minimum system requirements to ensure that the platform runs smoothly.

## Server Requirements

Server requirements are the minimum required to run StreamWise. However, we recommend that you use a server with higher specifications to ensure the best performance and user experience.

### Minimum System Resources

Please make sure that your system has at least the following resources:

| Resource | Minimum | Recommended |
|----------|---------|-------------|
| CPU      | 4 Cores | 6 Cores     |
| RAM      | 8GB     | 16GB        |
| Disk     | 40GB    | 100GB       |

:::info
Info 1: resources are shared between all containers. Therefore, the more containers you have, the more resources you will need.
:::

:::info
Info 2: CPU and RAM is not considered for the database container.
:::

:::info

Info 3: CPU and RAM is not considered for video encoding containers.

:::

:::info

Info 4: Disk space is not considered for video or recording storage.

:::

### Supported OS

Basically, StreamWise can be used on any distribution that is supported by Docker CE (see https://docs.docker.com/install/). However, in some cases there may be incompatibilities between the operating systems and the platform components.

The following table contains all operating systems officially supported and tested by us (as of June 2023):

| Operating System | Compatibility |
|------------------|---------------|
| Ubuntu 20.04     | ✅             |
| Ubuntu 18.04     | ✅             |
| Debian 10        | ✅             |

## System Requirements

### Database

#### PostgreSQL

StreamWise supports PostgreSQL as the database engine. The following table contains all versions officially supported and tested by us (as of June 2023):

| Database Version | Compatibility |
|------------------|---------------|
| PostgreSQL 15    | ✅             |
| PostgreSQL 14    | ✅             |

The standalone deployment of platform come with a PostgreSQL database container. However, you can use an external PostgreSQL database if you want.

:::tip

We strongly recommend that you use a external PostgreSQL database for best performance and stability.

:::

#### Redis

StreamWise uses Redis as a cache and queue system. The following table contains all versions officially supported and tested by us (as of June 2023):

| Redis Version | Compatibility |
|---------------|---------------|
| Redis 6       | ✅             |

The standalone deployment of platform come with a Redis container. However, you can use an external Redis if you want.

:::tip

We strongly recommend that you use a external Redis for best performance and stability.

:::

### Web Server

###

### API

Most of the system requirements are automatically checked during the installation process. However, you should make sure that your system meets the following requirements:

| Requirement            | Minimum                                                                                                                       | Recommended                                                           |
|------------------------|-------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------|
| PHP Version            | 8.0                                                                                                                           | 8.1                                                                   |
| PHP Memory Limit       | 256MB                                                                                                                         | 1GB                                                                   |
| PHP Max Upload         | 128MB                                                                                                                         | 1GB                                                                   |
| PHP Max Post           | 128MB                                                                                                                         | 1GB                                                                   |
| PHP Database Extension | pgsql, pdo, phpredis                                                                                                          | pgsql, pdo, phpredis                                                             |
| PHP Extensions         | curl, gettext, mbstring, reflection, openssl, sodium, tokenizer, zip, zlib, xml, xsl, intl, json, simplexml, phpredis, bcmath | Fileinfo, GMP, Iconv, Intl, MBString, SOAP, PHPRedis, OPCache |

## Firewall & Ports

Please check if any of standard ports are open and not in use by other applications:

```bash
ss -tlpn | grep -E -w '80|443'
# or:
netstat -tulpn | grep -E -w '80|443'
```

:::danger

There are several problems with running StreamWise on a firewalld/ufw enabled system. You should disable it (if possible) and move your ruleset to the DOCKER-USER chain, which is not cleared by a Docker service restart, instead. See this (blog.donnex.net) or this (unrouted.io) guide for information about how to use iptables-persistent with the DOCKER-USER chain. As StreamWise runs dockerized, INPUT rules have no effect on restricting access to platform. Use the FORWARD chain instead.

:::

If this command returns any results please remove or stop the application running on that port.

### Default Ports

If you have a firewall in front of application, please make sure that these ports are open for incoming connections:

| Service | Protocol | Port   | Container | Variable |
|---------|----------|--------|-----------|----------|
| HTTP(S) | TCP      | 80/443 | nginx     |          |

## Date and Time

To ensure that you have the correct date and time setup on your system, please check the output of `timedatectl status`:

```bash
timedatectl status
      Local time: Sat 2017-05-06 02:12:33 CEST
  Universal time: Sat 2017-05-06 00:12:33 UTC
        RTC time: Sat 2017-05-06 00:12:32
       Time zone: Europe/Berlin (CEST, +0200)
     NTP enabled: yes
NTP synchronized: yes
 RTC in local TZ: no
      DST active: yes
 Last DST change: DST began at
                  Sun 2017-03-26 01:59:59 CET
                  Sun 2017-03-26 03:00:00 CEST
 Next DST change: DST ends (the clock jumps one hour backwards) at
                  Sun 2017-10-29 02:59:59 CEST
                  Sun 2017-10-29 02:00:00 CET
```

The lines `NTP enabled: yes` and `NTP synchronized: yes` indicate whether you have NTP enabled and if it's synchronized.

To enable NTP you need to run the command `timedatectl set-ntp true`. You also need to edit your `/etc/systemd/timesyncd.conf`:

```bash
# vim /etc/systemd/timesyncd.conf
[Time]
NTP=0.pool.ntp.org 1.pool.ntp.org 2.pool.ntp.org 3.pool.ntp.org
```

## System Environment Guide

> Work in progress