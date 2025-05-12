import React from 'react';
const CaseStudyWebServices = () => {
    return (
        <div id="Web-Services" className='grid-row grid-item full story'>
        <div className='story-header'>Web Services for Self Service Order Management</div>
        <div className='story-part-left'>Our client, a leader in risk management and property-casualty insurance education, partnered with KSM to deliver enhanced self-service ordering of education products over the internet. Key features included contact and account maintenance, catalog browsing, and an ordering system that incorporated a shopping cart metaphor.           
        </div>
        <div className='story-part-right'>KSM implemented a web service layer in Spring Boot to safely externalize strategic data and services. The stateless architecture enabled horizontal scalability, and a loose coupling to the underlying data enabled enhancements to the underlying structure of that data without impacting consumers. The web services feature the rich instrumentation, monitoring, and administration interface built into Spring Boot. The web services were a key component of the successful relaunch of their customer-facing website with a modern user interface.
        </div>
        <div className='story-part-left'>Key benefits to this successful project include more maintainable code; faster, more stable deployments; better overall performance; and a lower cost of enhancements. For over three years since initial delivery, this client has maintained a continuous relationship with KSM to enhance these web services, as well as advise on other strategic integration initiatives, such as implementing a robust single sign-on solution.
        </div>
        </div>


);
}

export default CaseStudyWebServices;