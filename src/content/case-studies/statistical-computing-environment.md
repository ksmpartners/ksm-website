---
title: Statistical Computing Environment Modernization
client: Global Top-50 Pharmaceutical Company
vertical: Life Sciences
order: 2
featured: true
summary: We led a full SCE implementation for a top-50 pharma company, delivering a GxP-validated, cloud-hosted platform on Domino Data Lab integrated with Azure and Azure DevOps—remediating a regulatory finding and modernizing how hundreds of statistical programmers work.
image: images/case-studies/sce-modernization.jpg
---

## Overview

A global top-50 pharmaceutical company faced mounting regulatory pressure to overhaul its Statistical Computing Environment (SCE). Operating on a legacy Windows Server–based infrastructure with unmanaged file shares, the organization lacked the data controls, process auditability, and access governance required in a modern GxP environment. KSM Technology Partners led a full SCE implementation, from architecture evaluation through validated deployment, delivering a compliant, cloud-hosted platform built on Domino Data Lab and integrated with the client's enterprise Azure and Azure DevOps (ADO) ecosystem.

## Challenge

### A Regulatory Finding Drives Urgency

The organization's existing SCE consisted of a Windows Server SAS environment backed by an unstructured network file share. There was no systematic auditing of who ran which programs, when, or on what data. Code was stored in directories with limited version control, and access to blinded study data was not consistently restricted. A regulatory finding, which determined that the organization lacked sufficient control and auditability over its statistical data, made the status quo untenable.

The client evaluated several platforms before selecting Domino as the foundation for their new SCE. Their goal was to move away from proprietary SAS infrastructure and toward an open, Python- and R-capable environment that could meet modern GxP standards. The challenge was not simply selecting a platform. It was building a validated, enterprise-grade SCE from the ground up, while changing how hundreds of statistical programmers work every day.

### The Complexity Beneath the Surface

Beyond the regulatory baseline, several intersecting challenges shaped the engagement:

- **Security-first architecture requirements.** The client's IT organization required a fully locked-down deployment. Every compute environment had to be built and managed exclusively through CI/CD pipelines with mandatory vulnerability (CVE) scanning, a deployment model that Domino is not natively optimized for.
- **Firewall restrictions.** Network security requirements added significant complexity to the infrastructure design and extended the implementation timeline.
- **Architectural pivot mid-engagement.** After initial scoping, the client decided to shift from a third-party hosted deployment to a self-hosted, internally managed model, requiring KSM to re-evaluate and replan the infrastructure approach.
- **Scope evolution under delivery pressure.** Executive requirements, including a submission pipeline integration, were added late in the release cycle, requiring careful trade-off discussions to protect the go-live target.
- **Organizational change at scale.** Replacing an SCE is not a technology swap. It requires rethinking how statistical programmers develop code, validate studies, collaborate on programs, and manage production runs.

## Solution

### Step Zero: Scoping Before Building

KSM's engagement began with a structured, paid 12-week scoping phase (what we call Step Zero) designed to evaluate the client's technical and organizational landscape before committing to a fixed-scope implementation.

This phase accomplished several critical things:

- **Architecture assessment.** KSM evaluated the client's existing infrastructure, data flows, and IT security requirements, which directly informed the decision to move to a self-hosted model.
- **Stakeholder alignment.** By engaging business and IT SMEs early, KSM helped the client surface requirements and decision-makers before they could derail delivery. Subject matter experts from the Biostatistics and Data Sciences organization became invested in the new environment before a single line of configuration was written.
- **MVP definition.** Step Zero produced a well-scoped, fixed-cost Release 1 plan. The 80/20 between what was possible and what was practical was negotiated collaboratively, preventing the costly late-stage scope changes that plague large SCE implementations.

For engagements of this complexity, Step Zero is not overhead. It is the mechanism that makes the delivery predictable.

### Release 1: A Validated SCE on Domino

KSM's delivery team designed and implemented a GxP-validated SCE built on Domino, hosted internally and integrated with the client's Azure infrastructure and Azure DevOps environment. The implementation covered:

**Platform Architecture**
- Self-hosted Domino deployment on Azure, aligned to the client's internal infrastructure and IT security standards
- All compute environments built and managed via automated CI/CD pipelines with integrated CVE scanning, eliminating ad-hoc configuration and ensuring every environment is auditable and reproducible
- Integration with Azure Blob Storage for secure output delivery, with a roadmap to direct submission pipeline connectivity

**Data Control & Access Governance**
- Domino project-level access controls replaced the open file share model, restricting data access by study, team, and role
- Unblinded data access is now controlled directly by the business, with a formal process for code-break events that previously required manual coordination and ad-hoc group management
- Audit logging of job execution (who ran what, when, and against which data) is now centralized within the platform

**Development & Validation Workflows**
- Git-based version control (via Azure DevOps Git) replaced unmanaged directory storage, giving every program a full change history
- ADO task boards were implemented as the validation tracking mechanism, enabling lead programmers to assign, track, and verify independent coding and validation tasks, replacing spreadsheet-based tracking
- Validated standard macro libraries were re-evaluated and migrated into Domino as mounted Git repositories, automatically available in every project at the correct validation tier, reducing QC burden on lower-risk, reusable components
- Production run processes were redesigned: production environments are now self-contained and isolated, eliminating the risk of concurrent workspace activity contaminating final runs

**Process Redesign**

KSM facilitated a series of working sessions with the client's SMEs to redesign their ways of working from the ground up. Rather than imposing a standard process, KSM presented best practices and options, discussed trade-offs, and helped the client arrive at workflows that fit their organizational structure. This collaborative approach to change management—meeting the organization where they were rather than forcing a cold-turkey transition—was central to the engagement's success.

## Results

Release 1 was delivered on schedule, with a fully validated SCE in production.

**Regulatory & Compliance**
- The core regulatory finding that initiated the project has been remediated. Audit logging, access controls, and job provenance tracking are now centralized within the SCE.
- Study data access is restricted by role and team, a significant improvement over the prior open-share model.
- The platform is on track for full end-to-end auditability, from SDTM ingestion through submission output, following the planned source submission pipeline integration.

**Operational Improvements**
- Production runs are now isolated and self-contained, eliminating a fragile manual process that required clearing all users before execution.
- Independent coding and validation tasks are tracked on ADO boards, giving lead programmers real-time visibility into validation status across the team.
- Standard macro libraries are available automatically in every Domino project, reducing duplicated effort and lowering QC requirements on validated, reusable components.

**Stakeholder Outcomes**

The client's Biostatistics and Data Sciences organization, the first team onboarded, is actively working in the new environment and is satisfied with the result. Both business and IT stakeholders remained engaged throughout the engagement, navigating significant technical constraints collaboratively rather than treating them as blockers.

## Why This Worked

**Domain expertise in regulated environments.** Building a GxP SCE requires understanding not just the technology, but the regulatory context, validation obligations, and organizational dynamics that shape how statistical programmers work. KSM's team brought hands-on experience from large pharma SCE implementations, allowing us to anticipate challenges and guide trade-off decisions with confidence.

**A structured engagement model.** Step Zero is not a consulting nicety. It is the foundation for predictable delivery. The investment in upfront scoping directly determines how well-defined, and how achievable, Release 1 will be.

**Collaborative process design.** Every organization has a different structure, different team sizes, and different ways of working. KSM's approach is to bring best practices and options, not mandates, and to work alongside client SMEs until the new process feels like theirs.

**Technical depth under constraints.** When standard deployment patterns don't fit, as with this client's pipeline-only compute environment requirement, KSM engineers work through it and document the solution. Templates developed in this engagement are now part of KSM's SCE implementation playbook.

---

*Interested in how KSM approaches SCE implementation for your organization? [Contact us](/contact) to start a conversation.*
