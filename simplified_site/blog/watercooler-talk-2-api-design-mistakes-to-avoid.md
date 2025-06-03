# Water Cooler Talk #2: API Design Mistakes to Avoid

Welcome to the KSM Water Cooler, where our associates come to the forefront of our company to give you an inside look at what we do and how we do it! This week we posed the question:

Much of our work requires building and consuming application programming interfaces of all sorts: REST/HTTP, SOAP/WS-*, messaging, databases, file exchanges, etc. So, what are some of the code and design “smells” that good API’s avoid?

Here’s what our team had to say!

### API Versioning

The initial conversation focused on versioning:

Steve Caggiano:Rapidly deprecated versions. Being forced to update all the time is a sign of a bad API

Bud Lefkof:Not versioning properly with URLs like /v1, /v2, etc., or some other quality versioning strategy

Andy Albrecht:I cannot stand when the API version and documentation version are not explicit. I spent weeks trying to integrate with an API based on the wrong version of documentation because that’s what I was given.

Many developers design APIs as if the code they represent will never evolve. When it does, they are surprised to find that clients aren’t all ready to update their code simultaneously, and thead hocversioning strategy they back into too often proves cumbersome and kludgy.

Lesson learned: incorporate versioning into the API design and documentation from day one, even if you’re sure no one else will use your API, or you’re sure you’ll never have to write another version, or you know you won’t be around to deal with the fallout if you’re wrong.

### API Construction

The conversation then pivoted to how the API is constructed.

Bud Lefkof:Not using HTTP Status codes properly… aka returning a 200 OK with an error message in it

Steve Caggiano:Misleading or poorly named attributes. I just saw a function where an output value of FALSE means it worked. (False as “no error”?)

Kent Piland:Not using the right HTTP method

Mike Harnish:RESTful API’s that aren’t

Much of this discussion recalls aquoteby Leonard Richardson, author of the eponymousMaturity Modelfor REST services:

- When meaning is constrained, you can optimize around the constraint.

When you build an API on HTTP, you’re signaling to your consumers that you will abide by constraints implied by HTTP and thus that they can safely optimize around those constraints. One common optimization they could reasonably expect to implement for HTTP is caching the results of “safe” methods like GET, because those methods ought not modify the state of the system.

This frames the following exchange between Andy and Mike:

Andy:I once had to integrate with a third-party API that used HTTP GET to create new records, using the query string of the URI to populate data:

GET https://xyz.com/api/person/create?first_name=Andy&last_name=Albrecht

Mike:Using the idempotent cache-friendly GET method to do something that actually modifies state is not just bad form; it’s flat-out dangerous. A client could reasonably expect to make the same call multiple times without creating new resources each time, which is what this does.

Andy:Oh, I 100% agree. When I first saw it, I thought it was a mistake. Here’s another that actually subscribes a user to one mailing list and unsubscribes them from another:

GET https://xyz.com/api/person/8675309/subscriptions?list_15217=1&list_30351=0

Mike:I’d love to test that thing with this query string:

list_30351=0&list_30351=1&list_30351=0&list_30351=2&list_30351=green

Andy:I know it’s not a good sign if I’m quickly asking, “Is there an open-source library that wrappers all these shenanigans?”

### HTTP, Database, and Final Exchange APIs

There’s nothing inherently wrong with building a wrapper client around another API to make it easier to use, but sometimes those wrappers can be frustrating to use:

Dean Zimmerman:It’s a code smell when the client doesn’t log the URL or parameters, making it difficult to debug. I also hate it when the client doesn’t allow for the logging of the full HTTP response. For example, suppose the client tries parsing an expected XML payload which instead is some non-XML error response. This results in a parsing error, but there is no way to log that response prior to parsing.

Finally, the astute reader will realize that most of our responses assumed HTTP-based APIs, even though the question includeddatabase and file-exchange APIs. Kent helpfully explains:

[database and file-exchange APIs](http://ksmpartners.com/comparing-the-react-hooks-api-to-redux-for-state-management/)

Kent Piland:I’d contend that an interface that consists of dropping files in a file folder somewhere is a smell likely indicating an app that hasn’t been maintained or updated forever. If the app can read a file, surely it’s not that hard to have a real API where you give it the same info.

Good API design gives consumers confidence that they won’t go obsolete too soon, and that there will be a sane upgrade path with explicit versioning. They respect and even exploit the constraints of their chosen protocol. They embrace simplicity yet are well-documented. They

aren’t hastily bolted on to an existing product, but thoughtfully planned first-class citizens that expose the product’s full feature set to integration.

Be sure to check out ourpreviousWater Cooler and subscribe to our blog to stay in the loop and hear more from our amazing team at KSM!

[previous](http://ksmpartners.com/water-cooler-talk-1-mitigating-continuity-risk-of-an-existing-codebase/)

Mar 2, 2022

KSM Technology Partners

## Related Posts

[Firefighting and the Fetal Position: A Phased Approach to Continuous DeliveryRead More](https://ksmpartners.com/firefighting-and-the-fetal-position-a-phased-approach-to-continuous-delivery/)

### Firefighting and the Fetal Position: A Phased Approach to Continuous Delivery

Read More

[Security Hardening for Create-React-App (CRA)Read More](https://ksmpartners.com/security-hardening-for-create-react-app-cra/)

### Security Hardening for Create-React-App (CRA)

Read More

[Comparing the React Hooks API to Redux for State ManagementRead More](https://ksmpartners.com/comparing-the-react-hooks-api-to-redux-for-state-management/)

### Comparing the React Hooks API to Redux for State Management

Read More
