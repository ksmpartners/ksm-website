# An Introduction to Continuous Delivery for GxP Quality Professionals

Imagine a revolutionary new software feature that canstreamline your GxP-regulated business processesand save money. Perhaps it is a tweak to a recruitment optimization algorithm that will enable you to start clinical studies faster and finish them sooner. Perhaps it is a new data collection channel that streamlines the collection and analysis of clinical data, reduces cost of acquisition, and shaves weeks off of your study duration. It’s easy to imagine minor changes to existing systems that yield big dividends.

[streamline your GxP-regulated business processes](http://ksmpartners.com/case_study/gxp-delivery-automation-with-azure-devops/)

If your business hosts this software on on-premise infrastructure, you might wait several months, maybe a year, for the vendor to bundle that feature (and several others) in a future planned release. As I explained in an earlier post, the high cost of deployment entailed in an on-premise deployment model incentivizes both vendors and customers to batch new features into less frequent “big bang” releases.

By reducing the cost of deployment for each release,SaaS makes it possible to deliver incremental high-value enhancementsto users’ hands soon after the developers finish them. But SaaS only makes thispossible; alone, it is not sufficient to create and deploy smaller releases on an accelerated schedule.

[SaaS makes it possible to deliver incremental high-value enhancements](http://ksmpartners.com/why-saas-adoption-means-shorter-release-cycles/)

That’s where continuous delivery comes in.

### What is Continuous Delivery?

Continuous delivery (CD)is a set of software engineering practices that make it possible to deploy even the smallest enhancement or bug fix to production. CD relies heavily on automation to build, test, and deploy releases directly to production in a consistent, repeatable way. As soon as a developer commits a fix to version control, a series of automated processes begins. Automated scripts, with little or no human intervention, then:

[Continuous delivery (CD)](http://ksmpartners.com/case_study/gxp-delivery-automation-with-azure-devops/)

- Compile and unit-test the code base, and package it for release

- Create and provision various clean test environments for functional and capacity testing

- Deploy the packaged software to those environments

- Execute fully-automated integration, end-to-end, and capacity tests

- Deploy the fully-tested software into the production environment

These automated scripts comprise what CD practitioners call a build pipeline. A sample pipeline is visualized below.

As changes move from the beginning to the end of the pipeline, they are subjected to a series of tests that increase in cost and complexity. There is no point in unit testing code that doesn’t compile, nor in executing end-to-end functional tests against code that failed relatively inexpensive unit tests. Any change that does survive the entire pipeline has been proven, through objective evidence, to be internally consistent, functionally correct, and capable of handling anticipated production load. It can be deployed to production at the push of a button – often only minutes or hours after the change was first committed.

### Multiple Production Releases per Day

When deployed via SaaS, CD pipelines enable vendors to deploy tens, hundreds, or even thousands of micro-releases per day to production:

- In 2009, Flickr was deploying, on average, over 10 releases to production per day

- In 2017, Etsy was deploying to production 80 times per day

- Amazon.com was averaging over one production deploymentper secondback in 2014

Your mileage may vary. For the GxP-regulated world, CD and SaaS make it possible for your vendors to deliver those high-value features discussed above much faster than in times past. Regulatory and technological change will pressure vendors to continue to pick up the pace. Today’s quarterly releases will become monthly, then weekly, then daily ones.

### Opportunity or Threat?

Unfortunately, for too many quality professionals in regulated companies, this is not an opportunity. It’s a threat.

That’s because configuring that SaaS software, then validating the fitness of that softwareas configured, remains the ultimate responsibility ofthe GxP-regulated company. These activities occupy the true right end of the CD pipeline.

[the GxP-regulated company](http://ksmpartners.com/single-tenancy-multi-tenancy-questions-for-your-gxp-saas-vendor/)

All the agility in the world in the early stages of the pipeline is for nought if later stages are bogged down in cumbersome manual validation activities that take weeks or months to complete.

In a future post I’ll discuss how quality professionals can eliminate this threat by borrowing from CD’s playbook to automate many validation activities. Before I go there, I want to deal with a few anticipated objections: namely, that regulated companies can use the vendor’s own test activities and results as a proxy for their own. Stay tuned.

Feb 7, 2020

KSM Technology Partners

## Related Posts

[Water Cooler Talk #1: Mitigating Continuity Risk of an Existing CodebaseRead More](https://ksmpartners.com/water-cooler-talk-1-mitigating-continuity-risk-of-an-existing-codebase/)

### Water Cooler Talk #1: Mitigating Continuity Risk of an Existing Codebase

Read More

[3 Reasons Excel Is a Poor Choice for Safeguarding GxP Data IntegrityRead More](https://ksmpartners.com/3-reasons-excel-is-a-poor-choice-for-safeguarding-gxp-data-integrity/)

### 3 Reasons Excel Is a Poor Choice for Safeguarding GxP Data Integrity

Read More

[Internet Explorer: Not a Browser, a “Compatibility Solution”Read More](https://ksmpartners.com/internet-explorer-not-a-browser-a-compatibility-solution/)

### Internet Explorer: Not a Browser, a “Compatibility Solution”

Read More
