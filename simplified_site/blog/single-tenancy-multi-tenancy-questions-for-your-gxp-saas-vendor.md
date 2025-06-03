# Single Tenancy? Multi Tenancy? Questions for Your GxP SaaS Vendor

In myprevious post, I explained how the adoption of SaaS increases the frequency of software releases. I described the challenge this poses to regulated companies who must validate each release to establish its continued fitness for purpose. The options available to address this challenge vary according to the specific deployment model the vendor chooses. Regulated companies would do well to understand the differences between single- and multi-tenancy deployment models. Armed with this understanding, they can ask pertinent questions when selecting vendors, negotiating contracts, and planning their internal QA activities and resource needs to keep the SaaS software in a validated state.

[previous post](http://ksmpartners.com/why-saas-adoption-means-shorter-release-cycles/)

### MULTI-TENANCY

Multi-tenancy describes a scenario where the vendor hosts multiple customers on shared infrastructure (databases, servers, etc.). When the vendor deploys a software release to that infrastructure, all customers sharing that infrastructure receive it. This reduces the effort to execute each deployment and greatly simplifies application monitoring to ensure smooth operation.

These gains in deployment efficiency come at a cost: in a multi-tenant deployment, there is no way to deploy the release to some customers and not others. Either the infrastructure is upgraded, or it is not. For this reason, multi-tenancy deployments are triggered on a push model – that is, the vendor pushes them out to everyone at the  time of the vendor’s choosing, ready or not.

For SaaS deployed on the multi-tenancy model, skipping releases is not an option. Regulated companies that must validate every release must keep pace with the vendor’s release schedule, or find themselves out of compliance.  If the vendor deploys new releases monthly, then the regulated company has less than a month to perform risk analysis and plan and execute acceptance testing to stay in compliance.

### SINGLE-TENANCY

Single-tenancy describes a scenario where the vendor hosts every customer on dedicated infrastructure. That infrastructure is provisioned and managed by the vendor. Single-tenancy theoretically allows each customer to run separate releases of the software; their choice to upgrade or stand pat has no effect on other customers. It represents a greater management burden on the vendor, who must cope with supporting multiple releases.

Single-tenancy theoretically affords the customer flexibility on the precise timing of deploying the release. The customer may apply the release on-demand, schedule it in advance with the vendor, or skip it completely. The customers’ validation activities need not be completely dictated by the vendor’s release schedule, as it is with multi-tenant deployments.

In practice, there are limits to this flexibility. To manage the costs associated with supporting multiple releases across their customer base, single-tenant vendors often insist on contractual limits on the number of releases the customer can fall behind. They may limit the time window for accepting a release, and force customers who miss that window to wait for the next release.

### QUESTIONS FOR SAAS VENDORS

These differences between multi- and single-tenancy deployment models suggest the following questions to ask of SaaS vendors:

- Do you utilize a multi- or single-tenant deployment model?

- Can we skip releases? If so, are there any limits on the number of releases we can fall behind?

- Can we defer releases to a time that is convenient for us? If so, do you have a policy restricting the length of time a release can be deferred?

- Do you publish a release schedule? Are there separate schedules for bug-fixes and functional enhancements?

- How far in advance do you provide release notes for bug fixes? For feature enhancements?

- Can you provide us with a sample of the release notes for previous releases?

- Do you provide a test environment for new releases where we can perform acceptance testing?

- How far in advance of the scheduled release do you make that test environment available to us?

- If we ask you to, can you migrate our production data into the test environment to facilitate meaningful acceptance testing?

- Do you provide sample test scripts that exercise new or modified features, or bug fixes? If so, what is the format of those tests?

- Do you provide professional services to assist with acceptance testing for new releases?

Asking these questions during the vendor selection and contract negotiation phase will facilitate ongoing compliance with applicable regulations. Achieving continuous validation of SaaS software is ultimately the regulated company’s responsibility, but it helps to start with a clear understanding of how your SaaS vendor will help you achieve it.

Jan 17, 2020

KSM Technology Partners

## Related Posts

[Water Cooler Talk #1: Mitigating Continuity Risk of an Existing CodebaseRead More](https://ksmpartners.com/water-cooler-talk-1-mitigating-continuity-risk-of-an-existing-codebase/)

### Water Cooler Talk #1: Mitigating Continuity Risk of an Existing Codebase

Read More

[Water Cooler Talk #2: API Design Mistakes to AvoidRead More](https://ksmpartners.com/watercooler-talk-2-api-design-mistakes-to-avoid/)

### Water Cooler Talk #2: API Design Mistakes to Avoid

Read More

[An Introduction to Continuous Delivery for GxP Quality ProfessionalsRead More](https://ksmpartners.com/an-introduction-to-continuous-delivery-for-gxp-quality-professionals/)

### An Introduction to Continuous Delivery for GxP Quality Professionals

Read More
