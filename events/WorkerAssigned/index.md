---
name: WorkerAssigned
version: 1.0.0
summary: |
    Event represents when a worker is assigned to a task.
producers:
    - JobCenter
consumers:
    - Gamemaster
    - Resident
    - Arkanatorium
owners:
    - tmogdans
---

<Admonition>tbd</Admonition>

### Details

This event is produced by the JobCenter when a worker is assigned to a task.

<NodeGraph title="Consumer / Producer Diagram" />

<Schema />
