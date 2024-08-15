---
sidebar_position: 4
sidebar_label: Room
robots: noindex
---

# Room

> Work in progress

## Public Rooms

A public room is a room that can be accessed by anyone using the `url` of the room. Public rooms are useful for scenarios where you want to allow anyone to join the room without having to authenticate. Basically public rooms can accept guest participants without using of [Room Tokens](#room-tokens).

When a room is created, it is not public by default. To make a room public, you need to set the `is_public` attribute to `true`.

If a room is indicated as public, a guest token will be created and automatically assigned to users that join the room without a token.

Public rooms can be useful for scenarios where you want to allow anyone to join the room without need to manage individual guest tokens or when the individual access control is not required like broadcasting or streaming scenarios.

When a room is not public, access will only occur through individual access tokens. Non-public rooms can still be accessed by guests by creating a token with this access level.

:::note

To learn more about room access control, see [Room Tokens](#room-tokens).

:::

## Room Tokens

## Room Access Codes