# 3 Reasons Excel Is a Poor Choice for Safeguarding GxP Data Integrity

A few months ago, over lunch at a quality conference, a fellow attendee shared a story about how his lab had received some rather nasty (by GxP standards) battle scars. While cutting and pasting inputs from equipment-generated files into a Microsoft Excel spreadsheet for quality control analysis, a technician accidentally pasted these inputs into the wrong starting row in the worksheet. The formulas in the spreadsheet were correct, but because the inputs were invalid, the outputs were unusable. The entire lot of manufactured product from which the QC samples were drawn had to be discarded. As if that didn’t sting enough, this error was discovered during a third-party audit.

From there, the lunchtime conversation turned to the controls required to safeguard and demonstrate the integrity of Excel-based calculations. These included:

- Storing the spreadsheet in an access-controlled document repository, to ensure correct attribution of the changes to the person who made them;

- Use of a validated spreadsheet template, containing verified formulas, and also stored in a document repository;

- Locking cells with a worksheet password to prevent unauthorized modification of those formulas (a control that is easy to bypass,even for later versions of Excel);

- Using the built-in change tracking feature of later versions of Excel to generate an audit trail, to track who changed what (a control that is only enabled for shared workbooks, a feature thatMicrosoft has deprecatedin recent versions);

- Purchasing commercial add-ons to provide more robust audit trails, and even electronic signatures.

(TheGAMP Good Practice Guide: Data Integrity – Key Conceptsbriefly discusses all of these controls, and a few others, in a case study in an appendix. We were not breaking any new ground.)

Are these controls sufficient to ensure the integrity of data generated in Excel spreadsheets? Probably. But the more pressing question “Is Excel really the best tool for the job?” Looking back on that conversation, I wish I had asked it. Excel is a powerful tool for exploring, segmenting, summarizing, and visualizing complex data. Where safeguarding and demonstrating the integrity of that data is of paramount concern, however, Excel is fundamentally ill-suited to the task.

First, like Visicalc and Lotus 1-2-3 before it, Excel is intended for interactive use. The great advantage these products had over their batch-oriented predecessors is their ability to quickly perform ad-hoc calculations. You could create and modify formulas on the fly, and view the results immediately. Revolutionary (for its time) as these features were, phrases like “ad-hoc” and “on the fly” ought to make any conscientious data steward nervous. Even a locked-down access-controlled spreadsheet that reads all of its data from external files won’t execute any calculations or generate any output until a user opens it. The output won’t persist until the user saves it. Excel requires human interaction, and humans make mistakes.

Second, Excel requires the user to import, or even copy and paste, input data from source records into the spreadsheet. Not only is this step error prone, as my lunch companion discovered, but it also represents a discontinuity in the audit trail for that data. The trail for the original record (the input data) ends, and a new one begins, but absent purchased or bespoke add-ons, the copy or import step that links them is lost to history.

Finally, Excel combines input data, formulas, macros, and output data and graphs in a single file. Whether the input is valid or invalid, whether the calculations used verified formulas or unverified ones, the file changes just the same. We must apply integrity controls at the cell level to distinguish and audit a legal change, such as entering input, from an illegal one, such as fudging the formulas or tweaking the output. Once again, these cell-level controls can only be applied through purchased or bespoke add-ons; they are not supported by Excel out of the box.

These three features of Excel are fundamental to its design and, arguably, its success. They are not going to change anytime soon. The necessity of building procedural and external controls, together with the imperative to build or purchase (and, lest we forget, validate) add-ons to implement those controls, suggests that Excel is not well-suited where data integrity is a concern. At the very least, IT professionals should count the cost of the training, add-ons, and infrastructure required, and balance that against the very real risks of doing nothing: audit findings, recalled product, or invalidated research.

Jan 24, 2019

KSM Technology Partners

## Related Posts

[Security Hardening for Create-React-App (CRA)Read More](https://ksmpartners.com/security-hardening-for-create-react-app-cra/)

### Security Hardening for Create-React-App (CRA)

Read More

[Internet Explorer: Not a Browser, a “Compatibility Solution”Read More](https://ksmpartners.com/internet-explorer-not-a-browser-a-compatibility-solution/)

### Internet Explorer: Not a Browser, a “Compatibility Solution”

Read More

[Should You Store Requirements In Jira?Read More](https://ksmpartners.com/should-you-store-requirements-in-jira/)

### Should You Store Requirements In Jira?

Read More
