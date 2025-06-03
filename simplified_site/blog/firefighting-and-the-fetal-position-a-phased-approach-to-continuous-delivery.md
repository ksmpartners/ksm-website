# Firefighting and the Fetal Position: A Phased Approach to Continuous Delivery

When I recently asked a friend to describe the working cadence in the IT department where he works, he deadpanned “alternating between firefighting and the fetal position.”

Every new release that fixed one defect introduced two more. Instead of delivering valuable new features, they spent all their time bandaging self-inflicted wounds. The business had lost faith in their ability to deliver, and morale among the developers was low. A few had resigned, and it was hard to replace lost talent in a tight labor market.

My friend’s story is all too common. Unless management proactively addresses the cause of those production issues, the organization will spiral into full-time firefighting mode, and developers will seek greener pastures.

Top-flight development shops have been retooling their software architecture and deployment pipelines for over a decade to support frequent, incremental production releases. As a result, many are deploying to production tens of times per day or more. They have achieved continuous delivery.

Research has shown, perhaps counterintuitively, that higher deployment frequencies correlate to lower change failure rates. The process automation that enables rapid deployment rates also displaces the error-prone manual processes that introduce regressions. It breaks developers out of firefighting mode and enables them to focus on delivering high-value features. They regain the trust of the business, streamline delivery, and see improvements in morale.

### Continuous Delivery

Continuous delivery (CD) comprises a set of automated practices and controls. Depending on your starting point, it may entail:

- Replacing an ancient version control system (VCS)

- Choosing and integrating a build pipelining tool that’s integrated with your new VCS

- Choosing and integrating automated code quality tools to spot potential problems and enforce coding standards

- Automating unit tests and enforcing minimum code coverage requirements

- Automating functional regression checks at the API and user interface level

- Scanning for Common Vulnerabilities and Exposures (CVE’s) in build pipelines

- Automating environment provisioning via infrastructure-as-code

- Automating deployment via configuration-as-code

- Replacing monolithic application architectures with microservices

- Replacing bare-metal hosting infrastructure with a virtualized environment, whether on-premise (Rancher, OpenShift) or in the cloud (Amazon EKS, Microsoft AKS)

This is a tall order, and most organizations cannot afford to halt development and implement these practices at once. Moreover, they are often unable to split their already-understaffed team into “maintenance” and “rewrite” teams. Instead, KSM recommends an iterative, phased approach, starting with continuous delivery practices that yield the highest value for the least cost and moving on.

Our approach comprises four phases:

- Discovery:We review your specific needs, starting with analyzing what commonly starts the fires you are continuously fighting. Is it an inconsistent build process? A failure to properly test changes in a production-like environment?

- Control Identification:We identify the automated continuous delivery controls that will best prevent future failures in the short term. We limit these to controls that can be implemented in a reasonable timeframe and have the greatest potential to prevent those fires identified in the discovery phase.

- Control Implementation:We help you implement those continuous delivery controls we identified in the previous phase. Whether it’s automated code quality checks, automated environment provisioning, or simple process changes to your VCS workflow, we help you break out of firefighting mode one step at a time.

- Assessment:We help you identify the success or failure of the implemented controls. When you put out one fire, another one flares up to take its place. You might solve the problem of inconsistent deployment environments with infrastructure-as-code, only to find that problem was masking another caused by a lack of meaningful testing. For this reason, we recommend starting again at discovery and repeating the process.

### Implementing Continuous Delivery Controls

As you implement these controls, you will automate much of your deployment process, reducing the amount of work required to package and deploy a release. This helps to shrink your deployment cycles. You will reduce the number of failed deployments – slowly at first, then more rapidly as time goes on – and gain confidence in their stability. When it’s time to deploy, you’ll stop asking, “What will go wrong this time?” and start asking, “Why not?” You will be moving down the road toward continuous delivery.

Finally, a word of warning: this continuous improvement cycle never ends. It becomes an integral part of your software development lifecycle.

KSM can help you get started with establishing continuous delivery, but our goal is to make you self-sufficient to implement these practices on your own. It’s a lot of work, but it beats getting trapped in a “firefighting and the fetal position” cadence.

May 12, 2022

KSM Technology Partners

## Related Posts

[Firefighting and the Fetal Position: A Phased Approach to Continuous DeliveryRead More](https://ksmpartners.com/firefighting-and-the-fetal-position-a-phased-approach-to-continuous-delivery/)

### Firefighting and the Fetal Position: A Phased Approach to Continuous Delivery

Read More

[Security Hardening for Create-React-App (CRA)Read More](https://ksmpartners.com/security-hardening-for-create-react-app-cra/)

### Security Hardening for Create-React-App (CRA)

Read More

[Should You Store Requirements In Jira?Read More](https://ksmpartners.com/should-you-store-requirements-in-jira/)

### Should You Store Requirements In Jira?

Read More
