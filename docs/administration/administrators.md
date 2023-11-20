---
sidebar_position: 2
sidebar_label: Admins Management
id: admins
---

# Administrators and Permissions

> Work in progress

## Overview

SaaS Video Streaming Resell Platform allows you to create admins who can access and use the [Admin Area](/docs/administration/overview#administration-area). These users are separate from the clients that access the Client Area. You can create individual accounts for each admin and use detailed controls to set what they're able to view and do for each area of functionality.

## Administrator Management

You can create and manage admins, including assigning administrator roles, at `Configuration () > Manage Admins` in the Admin Area.

### List of Admins

The list of admins includes all the admins on your SaaS Video Streaming Resell System installation. This list includes each admin's name, email addres, username, admin role, and any other details you've added to the admin's profile.

### Creating or Managing Admin Users

To create a new admin, click `Add New Admin` at the top of the list of admins. To manage an existing admin, click the admin's name in the list.

To create or manage admin:

1. Create or manage an admin:
    * To create a new admin, click `Add New Admin` at the top of the list of admins.
    * To manage an existing admin, click the admin's name in the list.
2. Select an administrator role.
3. Enter **First Name**, **Last Name**, and **Email Address** values.
4. Enter and confirm a password.
5. Check Disable if you want to disable the account and prevent login.

:::info
Administrators email address can not be changed after creation.
:::

### Creating or Managing Admin Roles {#admin-roles}

The administrator roles allow you to fine tune exactly what each of your admin users can do within your SaaS Video Streaming Resell Platform administration area. Administrator roles allow you to set the permissions for different types of admins.

You can access this feature at `Configuration > System Settings > Administrator Roles`.

You can set up as many different administrator roles as you want and then assign your admins to them. This allows you to have different levels of access for different admins.

:::info
The system include a default administrator role called **admin** with **full access** to all areas of the platform administration area and resources. **This role cannot be edited or deleted**.
:::

To create or update an administrator role:

1. Create or edit a new role:
   * To create a new role, click Add New Role Group link and enter a name for it.
   * To edit a role, click the edit icon for that role. A list of permissions settings will appear.
2. For **Permissions**, check the desired permissions.

:::tip
For all admin roles, you **must** enable **Access Dashboard**. This allows the admin to see main parts of the dashboard.
:::

* **Create**: permissions allow you to create new resource.
* **Read**: permissions allow you to read a resource.
* **List**: permissions allow you to list resources.
* **Update**: permissions allow you to update existing resource.
* **Delete**: permissions allow you to delete existing resource.

:::caution
**Unauthorized Access**
Many **Create** and **Update** permissions require the related **Read** permission. If you see **Unauthorized Access** errors, add the **Read** permission. For example, errors will occur for **Create Room** if you don't also enable **Read Rooms**.
:::

3. For **Notification Messages**, check the email types that you want admins with that role to receive.
4. Click **Save**.