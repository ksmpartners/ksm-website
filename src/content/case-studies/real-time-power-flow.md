---
title: Real-Time Power Flow Visualization
client: Investor-Owned Utility
vertical: Utilities
summary: Built a real-time power flow visualization tool integrating SCADA historian data with GIS, enabling grid operators to see live system state on an interactive map.
---

## Background

A large investor-owned utility operating a complex transmission network needed better situational awareness for its grid operations center. Operators were toggling between separate SCADA displays and static GIS maps to understand system state — a time-consuming and error-prone process during high-stress events.

## Challenge

Integrating real-time SCADA data with GIS presented significant technical challenges:

- OSIsoft PI historian data needed to be projected onto GIS geometries in real time
- The GIS (Esri ArcGIS) and SCADA systems had no native integration path
- Data latency requirements were strict — display refresh under 5 seconds
- The solution had to operate on the utility's secure operational network (OT environment) with air-gap constraints

## Solution

KSM designed a bridge service that consumed data from the OSIsoft PI Web API and pushed structured updates to a custom map service layer exposed to the ArcGIS dashboard. We built a lightweight middleware component in Python that handled polling, transformation, and caching.

**Key components:**

- **PI Connector:** Python service polling OSIsoft PI Web API for real-time tag values across 3,400 measurement points
- **GIS Bridge:** Custom ArcGIS dynamic feature service that refreshed from the PI Connector output on a 3-second cycle
- **Operator Dashboard:** ArcGIS Operations Dashboard configured with custom widgets for alarm acknowledgment and equipment detail drill-down
- **Historical Playback:** Time-slider capability allowing operators to replay historical system states for post-event analysis

## Results

- Operator situational awareness significantly improved — confirmed by post-deployment usability study
- System state comprehension time reduced from an average of 4 minutes to under 60 seconds during simulated events
- Deployed in the OT environment with full network segmentation compliance
- Adopted by 100% of shift operators within 30 days of deployment
