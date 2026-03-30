---
title: "Water Cooler Talk #2: API Design Mistakes to Avoid"
date: 2022-03-02
author: "KSM Technology Partners"
tags: ["Software Quality", "API Design"]
excerpt: "Our team shares the API design smells that good APIs avoid — from versioning pitfalls to HTTP method misuse."
---

Welcome to the KSM Water Cooler, where our associates come to the forefront of our company to give you an inside look at what we do and how we do it! This week we posed the question: Much of our work requires building and consuming application programming interfaces of all sorts: REST/HTTP, SOAP/WS-\*, messaging, databases, file exchanges, etc. So, what are some of the code and design "smells" that good APIs avoid?

## API Versioning

**Steve Caggiano** warns against "rapidly deprecated versions. Being forced to update all the time is a sign of a bad API."

**Bud Lefkof** criticizes "not versioning properly with URLs like /v1, /v2, etc., or some other quality versioning strategy."

**Andy Albrecht** describes his frustration: "I cannot stand when the API version and documentation version are not explicit. I spent weeks trying to integrate with an API based on the wrong version of documentation because that's what I was given."

Developers often design APIs assuming they'll never evolve, which leads to ad-hoc versioning strategies when changes become necessary. The lesson: incorporate versioning into the API design and documentation from day one, even if you're sure no one else will use your API, or you're sure you'll never have to write another version.

## API Construction

**Bud Lefkof** objects to improper HTTP status codes: "Not using HTTP Status codes properly… aka returning a 200 OK with an error message in it."

**Steve Caggiano** notes "misleading or poorly named attributes. I just saw a function where an output value of FALSE means it worked."

**Kent Piland** identifies "not using the right HTTP method" as a common smell.

**Mike Harnish** calls out "RESTful APIs that aren't."

The discussion references Leonard Richardson's observation that "when meaning is constrained, you can optimize around the constraint" — HTTP's signaling creates consumer expectations about optimization possibilities, particularly for safe methods like GET.

**Andy Albrecht** shares a frustrating real-world example: "I once had to integrate with a third-party API that used HTTP GET to create new records, using the query string of the URI to populate data: `GET https://xyz.com/api/person/create?first_name=Andy&last_name=Albrecht`"

**Mike Harnish** responded: "Using the idempotent cache-friendly GET method to do something that actually modifies state is not just bad form; it's flat-out dangerous."

## Logging and Debugging

**Dean Zimmerman** highlights problems that arise at integration time: "It's a code smell when the client doesn't log the URL or parameters, making it difficult to debug. I also hate it when the client doesn't allow for the logging of the full HTTP response before it's parsed."

## File-Based Interfaces

**Kent Piland** takes a firm stance: "I'd contend that an interface that consists of dropping files in a file folder somewhere is a smell likely indicating an app that hasn't been maintained or updated forever."

## Conclusion

Good API design gives consumers confidence that they won't go obsolete too soon, and that there will be a sane upgrade path. It incorporates explicit versioning, respects the constraints of its chosen protocol, embraces simplicity with proper documentation, and represents features that were planned — not hastily bolted on.
