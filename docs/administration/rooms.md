---
sidebar_position: 6
sidebar_label: Rooms Management
---

# Rooms

> Work in progress

## Overview

The notion of a Room is central to SaaS Video Streaming Resell Platform. Intuitively, a Room represents a virtual space where end-users communicate. Technically, a Room is a computing resource that provides Real-time Communications (RTC) services to client applications through a set of APIs. A Room is a container for a set of Participants, and each Participant is a client application that connects to a Room.

A Room is a resource that can be created, read, updated, and deleted. A Room is identified by a unique id, and each Room has a set of properties that can be configured.

## Adding a Room

> Work in progress

To add a new room, click `Add New Room` at the top of the list of rooms.

To create a new room:

1. Select a room type.
2. Enter a room name.
3. Enter a room description.
4. Enter a room access code.
5. Enter a moderator access code.
6. Enter a participant access code.
7. Click `Save`.

## Editing a Room

## Room Properties

|       Property        | Type   | Description              | Example          |
|:---------------------:|--------|--------------------------|------------------|
|       room_name       | string | Human-readable Room Name | Business Meeting |
|       room_type       | string | Room Type                | meet             |
|    moderator_token    | string | Moderator Token          | 1234567890       |
|   participant_token   | string | Participant Token        | 1234567890       |
|   room_access_code    | string | Room Access Code         | 1234567890       |
| moderator_access_code | string | Moderator Access Code    | 1234567890       |
| room_settings         | array  | Room Settings            |                  |
| room_metadata         | array  | Room Metadata            |                  |


### Room Name

The name of the room is a human-readable string that can be used to identify the room. The name is not unique and can be changed at any time.

* **Key:** `room_name`
* **Type:** string
* **Example:** `Business Meeting`

### Room Type

Depending on the room type, the platform will provide different features and capabilities. Each room can be created with a specific type, and the type cannot be changed after the room is created.

* **Key:** `room_type`
* **Type:** string
* **Example:** `meet`

The platform supports the following room types:

* **video:** Stream Video.
* **live:** Stream Live.
* **meet:** Stream Meet.
* **simulcast:** Stream Simulcast.

#### Stream Video

Stream Video rooms are used for video on demand services, where the customer upload a video, it is transcoded and made available to the participants to watch in the room. Rooms of type `video` serve as interface to watch video on demand (VoD).


#### Stream Live

Stream Live rooms are used for live-streaming/broadcasting video services, where there is no interaction between the broadcaster and the participants, like webinars, live broadcasts etc. Rooms of type `live` serve as interface to watch live streams by participants.


:::info
Depending on the vendor configured as the service provider for Stream Live room, real-time chat can be available for the participants.
:::

#### Stream Meet

Stream Meet rooms are used for web conferencing, meetings or there will be interaction between participants. Rooms of type `meet` serve as interface to participants join a meeting.

#### Stream Simulcast

Stream Simulcast rooms are used for retransmission, where there is nothing other than the necessary resources and settings to perform the simulcast (restream). Stream Simulcast rooms perform as broker between the ingestor (input source) and the retransmitters (output destinations).

### Moderator Token

The moderator token is a string that is used to identify a moderator URL room. This token is managed by the platform and can be regenerated at any time.

* **Key:** `moderator_token`
* **Type:** string
* **Example:** `1234567890`

:::info
If you regenerate the moderator token, the old token will be invalidated and a new moderator URL will be generated with the new token. This will invalidate/break the old moderator URL.
:::

### Participant Token

The participant token is a string that is used to identify a participant URL room. This token is managed by the platform and can be regenerated at any time.

* **Key:** `participant_token`
* **Type:** string
* **Example:** `1234567890`

:::info
If you regenerate the participant token, the old token will be invalidated and a new participant URL will be generated with the new token. This will invalidate/break the old participant URL.
:::

### Room Access Code

The room access code is a string that can be used to authenticate a participant in the room. The access code is not unique and can be changed at any time. Use this as a pin/password room.

* **Key:** `room_access_code`
* **Type:** string
* **Example:** `1234567890`

### Moderator Access Code

The moderator access code is a string that can be used to authenticate a moderator in the room. The access code is not unique and can be changed at any time. Use this as a pin/password room for moderator access.

* **Key:** `moderator_access_code`
* **Type:** string
* **Example:** `1234567890`

## Room Attributes

### Room Settings {#settings}

The `room_settings` attribute is a key-value pairs that store additional structured data. The `room_settings` attribute is used internally to configure the room with specific settings.


:::info
`room_settings` is read-only and can't be changed.
:::


### Room Metadata {#metadata}

The `room_metadata` is a set of key-value pairs that can attached to a room. This can be useful for storing additional information or third-party data, such as a external room ID or any other information that you want to store.

The metadata is stored as a JSON object. The keys are strings and the values can be strings, numbers, booleans, or null.

| Key                                    | Type    | Value  | Description            |
|----------------------------------------|---------|--------|------------------------|
| `room_metadata['external_billing_id']` | integer | `123`  | Third-party billing id |
| `room_metadata['external_crm_id']`     | integer | `456`  | Third-party CRM id     |

:::note
This is an example of how to set the `room_metadata` attribute. The `room_metadata` attribute can be set to any key-value pair.
:::

## Room Limits and Quotas {#limits-quotas}

Any room can have limits and quotas set on it. These limits and quotas are used to control the resource usage of the room by the customer, enforcing restrictions in determined resources like the number of participants, the duration of the room, the storage used, etc. You can use this limits as part of billing or subscription plans.

:::info
Room limits and quotas are managed through [Subscriptions](/docs/administration/subscriptions).
:::

## Room Management {#management}

### Rooms List

### Rooms Details

### Rooms Editing
