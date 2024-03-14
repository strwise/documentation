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

## Providers: BigBlueButton  {#providers}     

### Properties {#provider-properties}

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

### Provider Management

Assim como outros provedores, a administracao do BigBlueButoon se dá através do recurso de provedores de servico. Através deste recurso, é possível criar, editar e excluir provedores de serviço BigBlueButton. Acesse [Provedores de Serviço](/docs/administration/service-providers) para mais informações sobre a administracao de provedores de servico.

## Packages: BigBlueButton {#packages}

Pacotes de servico do tipo `meet` podem ser associados a provedores de servico BigBlueButton. Estes pacotes de servico irao determinar o comportamento do servico ao utilizar o provedor BigBlueButton através dos recursos de pacotes de servico.

Os recursos disponiveis no pacote de servico serao associados aos recursos disponibilizados pelo servidor do BigBlueButton.

Considerando um pacote do tipo `meet`, que possui um provedor BigBluButton como o padrao para prover servicos de web conferencia para os seus assinantes e que possui entre seus recursos definidos o recurso `public_chat`, quando um assinante criar uma nova sala, o respectivo recurso estará habilitado na sala do BigBlueButton.

Outro exemplo seria um pacote que possui o recurso `recording` habilitado. Neste caso a sala do BigBlueButton poderá ter suas sessões gravadas.

## Subscriptions: BigBlueButton {#subscriptions}

Assim como os pacotes, as assinaturas podem possuir recursos especificos que nao definidos no seu pacote de referencia. A lógica por detrás dos recursos de assinatura é a mesma dos recursos de pacote, ou seja, os recursos disponiveis na assinatura serao associados aos recursos disponibilizados pelo servidor do BigBlueButton.

## Rooms: BigBlueButton {#rooms}

Salas que utilizam o provedor BigBlueButton podem receber uma série de configurações e recursos específicas. Estas configuracoes e recursos irao determinar o comportamento da sala ao utilizar o provedor BigBlueButton.

### Settings

Como descrito em Room Settings, dependendo do provedor de servico, a sala pode possuir configuracoes especificas. Estas configuracoes irao determinar o comportamento da sala ao utilizar o provedor BigBlueButton.

A tabela a seguir mostra os recursos que poderao ser utilizados no provedor e o respectivo parametro associado no BigBlueButton.

|          Room Setting           |      BigBlueButton Parameter       |    Default     |                                                                              Description                                                                              |
|:-------------------------------:|:----------------------------------:|:--------------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
|  `allow_start_stop_recording`   |     `allowStartStopRecording`      |      true      |                                                           Allow the moderator to start and stop recording.                                                            |
|     `auto_start_recording`      |        `autoStartRecording`        |     false      |                                                        Automatically start recording when the meeting starts.                                                         |
|  `webcams_only_for_moderator`   |     `webcamsOnlyForModerator`      |     false      |                                        Cause all webcams shared by viewers during this meeting to only appear for moderators.                                         |
|          `banner_text`          |            `bannerText`            |                |                                                             The text to be displayed in the banner area.                                                              |
|         `banner_color`          |           `bannerColor`            |                |                                                              The color of the banner area in hex format.                                                              |
|         `mute_on_start`         |           `muteOnStart`            |     false      |                                                              Mute all users when they join the meeting.                                                               |
|  `allow_mods_to_unmute_users`   |      `allowModsToUnmuteUsers`      |     false      |                                                                Allow moderators to unmute other users.                                                                |
|  `allow_mods_to_eject_cameras`  |     `allowModsToEjectCameras`      |     false      |                                                     Allow moderators to close other users cameras in the meeting.                                                     |
|          `disable_cam`          |      `lockSettingsDisableCam`      |     false      |                                                        Prevent users from sharing their camera in the meeting.                                                        |
|          `disable_mic`          |      `lockSettingsDisableMic`      |     false      |                                                      Prevent users from sharing their microphone in the meeting.                                                      |
|     `disable_private_chat`      |  `lockSettingsDisablePrivateChat`  |     false      |                                                       Prevent users from using the private chat in the meeting.                                                       |
|      `disable_public_chat`      |  `lockSettingsDisablePublicChat`   |     false      |                                                       Prevent users from using the public chat in the meeting.                                                        |
|         `disable_notes`         |     `lockSettingsDisableNotes`     |     false      |                                                          Prevent users from using the notes in the meeting.                                                           |
|        `welcome_message`        |             `welcome`              |                |                                                     The message to be displayed when the user joins the meeting.                                                      |
|    `moderator_only_message`     |       `moderatorOnlyMessage`       |                |                                               The message to be displayed when a non-moderator user joins the meeting.                                                |
|       `camera_as_content`       |         `cameraAsContent`          |     false      |                                                                 Enables/Disables camera as a content.                                                                 |
|        `external_videos`        |          `externalVideos`          |     false      |                                                         Enables/Disables share an external video in the room.                                                         |
|      `hide_viewers_cursor`      |  `lockSettingsHideViewersCursor`   |     false      |                                                                 Hide the viewers cursor in the room.                                                                  |
|        `hide_user_list`         |     `lockSettingsHideUserList`     |     false      |                                                                    Hide the user list in the room.                                                                    |
|     `end_when_no_moderator`     |        `endWhenNoModerator`        |     false      |                                                       End the meeting when no moderators join after a timeout.                                                        |
| `end_when_no_moderator_timeout` | `endWhenNoModeratorDelayInMinutes` |       1        |                               The timeout in minutes to end the meeting when no moderators join. (default value based on BBB defaults)                                |
|        `meeting_layout`         |          `meetingLayout`           | `SMART_LAYOUT` | Will set the default layout for the meeting. Possible values are: CUSTOM_LAYOUT, SMART_LAYOUT, PRESENTATION_FOCUS, VIDEO_FOCUS. (default value based on BBB defaults) |
| `notify_recording_is_on`        | `notifyRecordingIsOn`              |     false      |                                                              Notify the users when the recording is on.                                                               |
| `user_camera_cap` | `userCameraCap` |       3        |                            Defines the max number of webcams a single user can share simultaneously. (default value based on BBB defaults)                            |
| `meeting_camera_cap` | `meetingCameraCap` |       0        |                                Defines the max number of webcams a meeting can have simultaneously, `0` will disable this threshold. (default value based on BBB defaults)                                 |
| `presentation_url` | `presentationUrl` |                |                                The URL of the presentation to be displayed when the meeting starts. (default value based on BBB defaults)                                 |
| `presentation_description` | `presentationDescription` |                |                                The description of the presentation to be displayed when the meeting starts. (default value based on BBB defaults)                                 |