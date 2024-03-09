---
title: BigBlueButton Service Provider
description: BigBlueButton is a service provider that provides a scalable and reliable BigBlueButton infrastructure.
sidebar_position: 1
sidebar_label: BigBlueButton
---

# BigBlueButton Service Provider

## Overview

The BigBlueButton Service Provider is a specific implementation of the Service Provider feature in the platform. It is designed to manage and interact with the BigBlueButton video conferencing system. When the `provider_type` is set to `bigbluebutton`, the Service Provider represents a **BigBlueButton** service provider.

:::tip

Please refer to [Service Providers Administration](/docs/administration/service-providers) for more information about the Service Providers feature.

:::

## Requirements

The BigBlueButton Service Provider requires a BigBlueButton server installed and configured. StreamWise platform will interact direct with the host server via SSH and API calls. The following requirements must be met:

- BigBlueButton version **2.6 or higher**.
- The BigBlueButton server must be **accessible via SSH**.
- The BigBlueButton server must have the BigBlueButton **API enabled and accessible**.
- The BigBlueButton server must have **webhooks configured**.

## Service Provider: BigBlueButton       

### Properties

The `properties` attribute of the Service Provider stores various data related to the Service Provider. Here are the properties specific to a **BigBlueButton** Service Provider:

|   Property   |  Type   |  Default  | Required | Description                                                 |
|:------------:|:-------:|:---------:|:--------:|:------------------------------------------------------------|
|  `host_url`  | string  |           |   yes    | The host API URL of the BigBlueButton service provider.     |
|   `secret`   | string  |           |   yes    | The host secret of the BigBlueButton service provider.      |
|  `host_ip`   | string  |           |   yes    | The host IP of the BigBlueButton service provider.          |
| `host_port`  | number  |    22     |    no    | The host ssh port of the BigBlueButton service provider.    |
| `host_user`  | string  |           |   yes    | The host ssh user of the BigBlueButton service provider.    |
|  `host_key`  | string  |           |   yes    | The host RSA ssh key of the BigBlueButton service provider. |


#### Host URL

The `host_url` property is the host API URL of the BigBlueButton server. The URL must be accessible from the StreamWise platform server.

* **Key**: `host_url`
* **Example**: `https://bbb.example.com`

:::warning SSL

The BigBlueButton server must have a valid SSL certificate. The platform will not be able to interact with the BigBlueButton server if it does not have a valid SSL certificate.

:::

:::tip

You can omit the `/bigbluebutton/api` part of the URL. The platform will automatically append it to if it is not present.

:::

#### Secret

The `secret` property is the API secret of the BigBlueButton server. The secret will be used along with the host URL to interact with the BigBlueButton API.

* **Key**: `secret`
* **Example**: `1234567890`

#### Host IP

The `host_ip` property is the IP address of the BigBlueButton server. The IP address must be accessible from the StreamWise platform server.

* **Key**: `host_ip`
* **Example**: `1.2.3.4`

#### Host Port

The `host_port` property is the SSH port of the BigBlueButton server. The SSH port must be accessible from the StreamWise platform server.

* **Key**: `host_port`
* **Example**: `22`

#### Host User

The `host_user` property is the user of the remote server where BigBlueButton is installed. This user will be used to authenticate via SSH.

* **Key**: `host_user`
* **Example**: `root`

#### Host Key

The `host_key` property is the RSA SSH key of the remote server where BigBlueButton is installed. This key will be used to authenticate via SSH.

* **Key**: `host_key`
* **Example**: `-----BEGIN RSA PRIVATE KEY-----`

### Settings

The `settings` attribute of the Service Provider stores various settings related to the Service Provider. Here are the settings specific to a **BigBlueButton** Service Provider:

:::info

At the moment, the BigBlueButton Service Provider does not have any specific settings.

:::

### Metadata

:::info

For `metadata` attribute please refer to [Service Providers Administration](/docs/administration/service-providers).

:::

## Provider Management

> work in progress
