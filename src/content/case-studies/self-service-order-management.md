---
title: Self-Service Order Management Portal
client: Specialty Chemical Distributor
vertical: Life Sciences
summary: Replaced a phone/email order process with a self-service portal integrated with SAP, reducing order processing time from days to minutes.
---

## Background

A specialty chemical distributor serving life sciences customers was processing the majority of its orders via phone and email. Customer service representatives manually keyed orders into SAP, creating delays, transcription errors, and significant labor overhead.

Customers were frustrated by the inability to check order status, access certificates of analysis (CoA), and manage standing orders without calling in.

## Challenge

Building a self-service portal for a regulated distributor is more complex than a typical e-commerce project:

- Products required lot-level traceability and CoA document availability
- Customer access had to be controlled at the product and price-list level (not all customers see all products)
- SAP integration needed to support complex pricing logic, credit checking, and availability checking in real time
- The portal needed to satisfy 21 CFR Part 211 requirements for pharmaceutical ingredient purchases

## Solution

KSM built a React-based self-service portal with a Python/FastAPI backend, integrated bidirectionally with the client's SAP S/4HANA instance via the SAP Business Technology Platform (BTP) API layer.

**Key features:**

- **Product Catalog:** Customer-specific catalog with real-time pricing and availability from SAP
- **Order Entry:** Multi-line order entry with real-time SAP credit and availability checking
- **Order Status:** Live order status synchronized from SAP shipment confirmations
- **Document Library:** CoA and safety data sheet (SDS) retrieval linked to lot numbers
- **Standing Orders:** Scheduled recurring orders with email confirmation
- **User Management:** Role-based access for purchasing, lab, and management roles

## Results

- 78% of orders shifted from phone/email to self-service within 6 months
- Order processing time reduced from average 2 days to under 5 minutes
- Customer service call volume reduced by 55%
- Order transcription errors eliminated
- Customer satisfaction scores improved 22 points (NPS) post-launch
