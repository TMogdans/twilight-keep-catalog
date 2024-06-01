---
name: JobListSubmitted
version: 1.0.0
summary: |
    Event represents when a job list is submitted.
producers:
    - JobCenter
consumers:
    - JobsList
owners:
    - tmogdans
---

<Admonition>tbd</Admonition>

### Details

This event is produced by the JobCenter when a new room was registered, altered or destroyed to update
the JobList UI.

<NodeGraph title="Consumer / Producer Diagram" />

<Schema />
