# Should You Store Requirements In Jira?

“No, we can’t change that requirement. The ticket has already been closed in Jira.”

This is why we advise against storing requirements in ticketing systems likeJiraorAzure DevOps.

I have nothing against these systems. They’re both fine tools for maintaining a software development work backlog but misusing them as a requirements store militates against agility and creates unnecessary accounting work. These problems are especially painful on projects where traceability from requirement to solution counts, such as thosebuilding GxP software.

[building GxP software](http://ksmpartners.com/case_study/gxp-delivery-automation-with-azure-devops/)

Whether requirements are expressed as user stories or Gherkin behaviors or “the system shall” imperatives, storing the “gold copy” within the Jira ticket ties the lifecycle of the requirement to the lifecycle of the ticket.

Tickets usually move through some variation of a “New > In Progress > Done” workflow, but the requirement they described lives on in working and evolving software.

### When Requirements Change

What happens when requirements change? Should we create a new ticket by cloning the old one and tweaking the contents? If so, how do we trace the evolution of the requirement over time, from old tickets to new ones?

If we just reopen the old ticket, how do we link the old version of the requirement to the old and superseded release of the software that implements it? Auditors will want to know!

The answers to these questions usually involve a cumbersome workaround, such as manually updating a Microsoft Word document to document the evolution of the requirement over time, with reference to requirement after requirement. However, that requires a lot of work and is extremely error-prone.

Another solution is to use the ticketing system’s API to automate requirements extraction into a version-controlled snapshot document at each release. That involves piling complexity on top of complexity and using technology to atone for a bad strategic decision.

### The Solution

There is an easier way:

- Store your requirements in the same version control system (VCS) that houses the code they describe and version them together

- Store them in a textual format because your VCS is good at tracking differences over time.

- Use Markdown to express user stories or Gherkin feature files to express behaviors.

This makes it dead simple to identify the requirements that a particular version of the code implemented: they’re both stored under the same tag.

Whether Jira or Azure DevOps or your favorite ticketing system? Use it to track not the system’s requirements but rather the work you’ve identified to make your software product meet those requirements. Then, once the product meets those requirements, mark the ticket as done – and forget about it!

Feb 6, 2022

KSM Technology Partners

## Related Posts

[Water Cooler Talk #3: Refreshing Professional Skill SetsRead More](https://ksmpartners.com/water-cooler-talk-3-refreshing-professional-skill-sets/)

### Water Cooler Talk #3: Refreshing Professional Skill Sets

Read More

[An Introduction to Continuous Delivery for GxP Quality ProfessionalsRead More](https://ksmpartners.com/an-introduction-to-continuous-delivery-for-gxp-quality-professionals/)

### An Introduction to Continuous Delivery for GxP Quality Professionals

Read More

[Single Tenancy? Multi Tenancy? Questions for Your GxP SaaS VendorRead More](https://ksmpartners.com/single-tenancy-multi-tenancy-questions-for-your-gxp-saas-vendor/)

### Single Tenancy? Multi Tenancy? Questions for Your GxP SaaS Vendor

Read More
