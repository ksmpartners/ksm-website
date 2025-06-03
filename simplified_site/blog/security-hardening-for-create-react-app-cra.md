# Security Hardening for Create-React-App (CRA)

by Emil Lefkof III, Chief Technology Officer

[y Emil Lefkof III, Chief Technology Officer](https://ksmpartners.com/team/emil-bud-lefkof)

Create React App (a.k.a CRA)by Facebook is one of the most popular ways to bootstrap and build React applications. CRA does an excellent job of shielding developers from the complexities of things such as Webpack, Babel, and ESLint. When producing a production ready build, CRA optimizes and minimizes your CSS and Javascript code to produce the smallest and most efficient bundle for deployment.

However, too often developers are content to assume that  Facebook has done all the hard work and that this is the best build that can be made. The question to ask yourself is:“Can I do more to secure my application from hackers?”.

This article is the result of my research and final decisions on how to harden my production applications’ security. I will show you how to make your CRA application more secure for your organization by implementing:

- Content Security Policy (CSP)

[Content Security Policy (CSP)](https://ksmpartners.com/security-hardening-for-create-react-app-cra/#h-content-security-policy-csp)

- Sanitizing HTML

[Sanitizing HTML](https://ksmpartners.com/security-hardening-for-create-react-app-cra/#h-sanitizing-html)

- Subresource Integrity (SRI)

[Subresource Integrity (SRI)](https://ksmpartners.com/security-hardening-for-create-react-app-cra/#h-subresource-integrity)

- Excluding Source Maps

[Excluding Source Maps](https://ksmpartners.com/security-hardening-for-create-react-app-cra/#h-excluding-source-maps)

### Content Security Policy (CSP)

Content Security Policyis your first line of defense against hackers and CSP Level 2 is supported in all modern browsers. I won’t go into detail on what CSP is but you can read more about thathere.

One of the most common forms of malware infections by hackers is known asdrive-by cryptojacking. Similar to malicious advertising exploits, the scheme involves embedding a piece of JavaScript code into a web page. After that, it performs cryptocurrency mining on user machines that visit the page. If you have the proper CSP configuration on your website it makes this type of malware impossible for hackers to inject on your website.

To enable CSP in your React application do the following steps.

By default, Create-React-App will embed an in-line script intoindex.htmlduring the production build.

This is a small chunk of webpack runtime logic which is used to load and run the application. The contents of this will be embedded in yourbuild/index.htmlfile by default to save an additional network request.

Create/update the.envfile in your project root directory and setINLINE_RUNTIME_CHUNKenvironment variable to false, the script will not be embedded and will be imported as usual. More onGENERATE_SOURCEMAPlater…

Install the development dependencies including theCSP Webpack Plugin:

Install runtime dependencies forDOMPurifyandTrusted Types:

Updatepackage.jsonto useReact App Rewiredso we can inject our Webpack build updates:

Createconfig-overrides.jsfile in the project root directory next topackage.json:

Executenpm run buildto generate a production build and you should be able to see these changes in the productionindex.htmlfile. For each CSS and JS a nonce value is assigned and all in-line styles and scripts are blocked!

You can validate your policy is CSP Level 2/3 compliant using theGoogle CSP Evaluator.

PrimeReactis one of the most popular React UI libraries and it has special handling for responsive design components. PrimeReact injects in-line CSS styles for some components such as theDatatableto handle the responsive features. In-line styles would be a CSP violation, but theCSP Webpack Pluginhas special handling to allow PrimeReact to use its dynamic in-line styles without violating CSP rules.

### Sanitizing HTML

Real-world applications often run into requirements where they need to render dynamic HTML code. Assigning text-based code and data to innerHTML is a common mistake in JavaScript applications. This pattern is so dangerous that React does not expose innerHTML directly but encapsulates it in a property calleddangerouslySetInnerHTML. Improper use of the innerHTML can open you up to across-site scripting (XSS)attack.

Our design philosophy is that it should beeasyto make things safe, and developers should explicitly state their intent when performing unsafe operations. The prop namedangerouslySetInnerHTMLwas intentionally chosen to be frightening.

The above would execute the script in the browser to show you how a simple XSS attack would work. You shouldalwayssanitize your HTML before sending toinnerHTMLusing a library likeDOMPurify.

The code above will be sanitized and the alert script removed from the output. However thanks to the CSP WebPack pluginthis codewas automatically added so your entire codebase is now sanitized anywhereinnerHTMLis being used.

### Subresource Integrity

Subresource Integrity(SRI) is a security feature that enables browsers to verify that files they fetch are delivered without unexpected manipulation.

TheCSP Webpack Pluginautomatically adds SHA384 integrity values to all CSS and JS. This allows the browser to verify that the script has not been tampered with and prevent“man in the middle”attacks.

When you viewindex.htmlof your production build you will see those values now have an integrity attribute as well as a CSP nonce attribute:

### ExcludingSource Maps

Asource mapis a special file that connects a minified/uglified version of an asset (CSS or JavaScript) to the original authored version.

Create-React-App by default will generate source maps for your CSS and JS files. Attackers will most often try to understand your code to hack their way through. Therefore, having a readable source code in the production build increases the attack surface.

Make a hacker go the extra mile and have to decode your uglified source code by addingGENERATE_SOURCEMAP=falseto the.envfile.

Uglified:

This is a simple example…but what if your code was quite complex? It would be much more difficult for a hacker to figure out what your code is doing.

The second and smaller benefit is that not including source maps makes your production build faster. The note inside the Create-React-App source code says as much:

### Conclusion

You can choose to use any of these tips or pick and choose which tips to use. I personally prefer to use all of them in my production applications. If anyone has any more security hardening tips I would be happy to update this article and keep it updated. All of the source code used in this article isavailable on GitHub here.

You can runnpm run buildthenserve -s buildand navigate tohttp://localhost:3000to see this all in action!

About the Author

Emil Lefkof III is CTO and co-founder of KSM Technology Partners LLC.Read more about him here.

[Read more about him here](https://ksmpartners.com/team/emil-bud-lefkof/)

Feb 16, 2022

KSM Technology Partners

## Related Posts

[Single Tenancy? Multi Tenancy? Questions for Your GxP SaaS VendorRead More](https://ksmpartners.com/single-tenancy-multi-tenancy-questions-for-your-gxp-saas-vendor/)

### Single Tenancy? Multi Tenancy? Questions for Your GxP SaaS Vendor

Read More

[Comparing the React Hooks API to Redux for State ManagementRead More](https://ksmpartners.com/comparing-the-react-hooks-api-to-redux-for-state-management/)

### Comparing the React Hooks API to Redux for State Management

Read More

[3 Reasons Excel Is a Poor Choice for Safeguarding GxP Data IntegrityRead More](https://ksmpartners.com/3-reasons-excel-is-a-poor-choice-for-safeguarding-gxp-data-integrity/)

### 3 Reasons Excel Is a Poor Choice for Safeguarding GxP Data Integrity

Read More
