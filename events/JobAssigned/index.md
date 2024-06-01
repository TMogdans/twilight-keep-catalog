---
name: JobAssigned
version: 1.0.0
summary: |
    Event represents when a job is assigned to a resident.
producers:
    - JobsList
consumers:
    - JobCenter
    - ResidentInfo
owners:
    - tmogdans
---

<Admonition>tbd</Admonition>

### Details

This event is produced by the JobsList when a job is assigned to a resident.

<NodeGraph title="Consumer / Producer Diagram" />

<Schema />
