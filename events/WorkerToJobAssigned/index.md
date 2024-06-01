---
name: WorkerToJobAssigned
version: 1.0.0
summary: |
    Event represents when a worker is assigned to a job.  
producers:
    - ResidentInfo
consumers:
    - JobCenter
owners:
    - tmogdans
---

<Admonition>tbd</Admonition>

### Details

This event is produced by the Resident script when a resident is clicked with left mouse button.
It should deliver the data of the resident to the Resident Info UI Script.

<NodeGraph title="Consumer / Producer Diagram" />

<Schema />
