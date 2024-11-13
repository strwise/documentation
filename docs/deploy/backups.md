---
sidebar_position: 5
sidebar_label: Backup
slug: /backups
---

# Backups

## Database Backups

Database backup policies are important to ensure that data is not lost in the event of a disaster. If standalone database container is used, all data is persisted in a specified volume. This volume can be backed up using the standard Docker volume backup tools. If a database cluster is used, the database cluster should be backed up using the standard database backup tools.

If external database is used, the database should be backed up using the standard database backup tools and policies.

:::note

No database backup tools are provided by StreamWise.

:::

## Volume Backups

StreamWise uses many standard Docker volumes to persist data. Some of these volumes are mapped to the host machine or to a shared storage. These volumes can be backed up using the standard Docker volume backup tools or the standard shared storage backup tools.

:::note

No volume backup tools are provided by StreamWise.

:::