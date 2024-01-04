---
title: BigBlueButton Service Provider
description: BigBlueButton is a service provider that provides a scalable and reliable BigBlueButton infrastructure.
sidebar_position: 1
sidebar_label: BigBlueButton
---

# BigBlueButton Service Provider

## Overview

The BigBlueButton Service Provider is a specific implementation of the Service Provider feature in the platform. It is designed to manage and interact with the BigBlueButton video conferencing system. When the `provider_type` is set to `bigbluebutton`, the Service Provider represents a **BigBlueButton** service provider.

## Server Requirements

The BigBlueButton Service Provider requires a BigBlueButton server installed and configured. StreamWise platform will interact direct with the host server via SSH and API calls. The following requirements must be met:

- BigBlueButton version **2.6 or higher**.
- The BigBlueButton server must be **accessible via SSH**.
- The BigBlueButton server must have the BigBlueButton **API enabled and accessible**.
- The BigBlueButton server must have **webhooks configured**.

## Properties

The `properties` attribute of the Service Provider stores various data related to the Service Provider. Here are the properties specific to a **BigBlueButton** Service Provider:

| Property    | Type   | Description                                                 |
|:------------|:-------|:------------------------------------------------------------|
| `host_url`  | string | The host API URL of the BigBlueButton service provider.     |
| `secret`    | string | The host secret of the BigBlueButton service provider.      |
| `host_ip`   | string | The host IP of the BigBlueButton service provider.          |
| `host_port` | string | The host ssh port of the BigBlueButton service provider.    |
| `host_user` | string | The host ssh user of the BigBlueButton service provider.    |
| `host_key`  | string | The host RSA ssh key of the BigBlueButton service provider. |


#### Host URL

The `host_url` property is the host API URL of the BigBlueButton server. The URL must be accessible from the StreamWise platform server.

* **Key**: `host_url`
* **Type**: `string`
* **Required**: `true`
* **Default**: `null`
* **Example**: `https://bbb.example.com/bigbluebutton/api`

#### Secret

The `secret` property is the API secret of the BigBlueButton server. The secret will be used along with the host URL to interact with the BigBlueButton API.

* **Key**: `secret`
* **Type**: `string`
* **Required**: `true`
* **Default**: `null`
* **Example**: `1234567890`

#### Host IP

The `host_ip` property is the IP address of the BigBlueButton server. The IP address must be accessible from the StreamWise platform server.

* **Key**: `host_ip`
* **Type**: `string`
* **Required**: `true`
* **Default**: `null`
* **Example**: `1.2.3.4`

#### Host Port

The `host_port` property is the SSH port of the BigBlueButton server. The SSH port must be accessible from the StreamWise platform server.

* **Key**: `host_port`
* **Type**: `number`
* **Required**: `true`
* **Default**: `22`
* **Example**: `22`

#### Host User

The `host_user` property is the user of the remote server where BigBlueButton is installed. This user will be used to authenticate via SSH.

* **Key**: `host_user`
* **Type**: `string`
* **Required**: `true`
* **Default**: `null`
* **Example**: `root`

#### Host Key

The `host_key` property is the RSA SSH key of the remote server where BigBlueButton is installed. This key will be used to authenticate via SSH.

* **Key**: `host_key`
* **Type**: `string`
* **Required**: `true`
* **Default**: `null`
* **Example**: `-----BEGIN RSA PRIVATE KEY-----`

## Settings

The `settings` attribute of the Service Provider stores various settings related to the Service Provider. Here are the settings specific to a **BigBlueButton** Service Provider:

:::info

At the moment, the BigBlueButton Service Provider does not have any specific settings.

:::


## Configuration


