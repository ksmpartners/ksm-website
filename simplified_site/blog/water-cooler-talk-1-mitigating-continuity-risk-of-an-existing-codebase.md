# Water Cooler Talk #1: Mitigating Continuity Risk of an Existing Codebase

Welcome to the KSM Water Cooler, where our associates come to the forefront of our company to give you an inside look at what we do and how we do it! This week we posed the question: When you take over an existing code base, what are the first things you do to ensure the project succeeds?

Here’s what our team had to say!

### Determine Business Requirements

Steve Caggiano:Understand the business purpose of the code. You cannot possibly expect to add business value if you don’t understand what business problems the code is supposed to solve.

Informal conversations can help identify any challenges that led to design and implementation tradeoffs since it’s not always evident by looking at the existing code base, the backlog, or existing documentation itself. It’s one of the first avenues we take when approaching a project with an existing code base to ensure we’re working as efficiently as possible.

Matt Schwartz:If possible, track down the previous development team and identify components or functions that are “pain points.”

If the previous development team is not available – and they often are not – we shift to the documentation they left behind.

Steve Kirsch:I’ll add that you should attempt to find any documentation related to the code and its functionality – e.g., requirement documents, design specs, wiki pages. I’d also verify that it’s up to date. Nonexistent documentation, or documentation that has gone to seed, is a bad sign, and you have your work cut out for you.

Focusing on the business requirementsand the documentation is extremely helpful in getting an existing code base back on track, but the users are just as important!

[Focusing on the business requirements](http://ksmpartners.com/case_study/web-services-for-self-service-order-management/)

Martin Cortez:Understand how the users actually use the code – not just how you or the previous owner think they use it.

These concerns reflect an unfortunate reality: keeping the requirements up to date is only a priority during the early green-field phase. Once the project enters maintenance and enhancement mode, developers update the code, but no one updates the requirements. As a result, the code itself becomes the only reliable documentation of what it’s supposed to do.

### Planned Obsolescence of Existing Codebase

Kent Piland:I also try to get a handle on near- and long-term goals for the project/code base as that can inform what you do with older legacy code.

Dean Zimmerman:Right – If it’s going to be completely redone, it’s no use spending any time fixing the old code base.

Planned obsolescence is often the product of shifting regulations or sea changes in technology.  Knowing the timeline of a project gives us insight into how the existing code base needs to operate and for how long until it will need replacing.

Andy Albrecht:“I’d treat an app that just needs to live long enough to reach its scheduled retirement differently than one in full-blown enhancement mode.

### Building the Code

Andy Albrecht:Assuming the code is in version control, I will browse the commit-graph to see what recent changes were made, in the hopes this might yield some ticket IDs. I’ll also make sure the build is working, stable, and (relatively) quick – if it isn’t already.

Mike Harnish:Early on, I’d verify that the source code I’ve been given powers what’s actually running in production. If the last development team didn’t commit their changes to version control, the best I can do is attempt to reverse engineer the code from what’s in production. If I can’t do that, the client has no choice but to take a few steps backward before moving forward. Been burned before.

### Ensure Repeatability and Reliability of Existing Code Base

Once we have established that we can build the code, the next step is to ensure we can do it repeatedly and reliably, and are confident we’re not introducing regressions. To this end, automated unit and system tests are invaluable – but they are not always up to date if they exist at all.

Martin Cortez:The discussion we had a few months ago about stability testing also fits here. If there are no unit tests, then implement some stability tests so that you can safely make changes to the codebase.

Bud Lefkof:I’ll apply a formatter on the code to make sure it’s readable, then run static analysis tools like Spotbugs, PMD, or SonarQube – not to fix anything, but to get a feel for how quality the code base is and also sniff out egregious code like unclosed database connections or file handles.

Mike Richardson:After implementing many of the suggestions above, I would look into dockerizing the app if not done already. This makes it easier to do automated testing.

### Final Steps

Kent Piland:“Investigate dependencies to see what is out of date and contains potential vulnerabilities.”

The longer a codebase lies dormant, the more likely it is that the versions of any third-party or open-source libraries on which it depends go obsolete. Until we ensure that those dependencies are on versions that are actively maintained, we can’t benefit from any ongoing enhancements or bug fixes. At worst, the existing code base is exposed to common security vulnerabilities of those libraries – vulnerabilities patched in later releases the code is not using.

Depending on the tooling used, we will frequently add automated checks that compare the libraries’ versions against public common vulnerability andexposure (CVE) databases.

Watch out for our next Water Cooler Talk.

Jan 6, 2022

KSM Technology Partners

## Related Posts

[3 Reasons Excel Is a Poor Choice for Safeguarding GxP Data IntegrityRead More](https://ksmpartners.com/3-reasons-excel-is-a-poor-choice-for-safeguarding-gxp-data-integrity/)

### 3 Reasons Excel Is a Poor Choice for Safeguarding GxP Data Integrity

Read More

[Security Hardening for Create-React-App (CRA)Read More](https://ksmpartners.com/security-hardening-for-create-react-app-cra/)

### Security Hardening for Create-React-App (CRA)

Read More

[Single Tenancy? Multi Tenancy? Questions for Your GxP SaaS VendorRead More](https://ksmpartners.com/single-tenancy-multi-tenancy-questions-for-your-gxp-saas-vendor/)

### Single Tenancy? Multi Tenancy? Questions for Your GxP SaaS Vendor

Read More
