import React from 'react';
const CaseStudyRealTime = () => {
    return (
        <div id="Real-Time-Engine" className='grid-row grid-item full story'>
        <div className='story-header'>Real-Time power flow calculation engine</div>        
        <div className='story-part-right'>KSM worked with an Independent System Operator (ISO) in the power generation industry  to design and build a highly scalable, mission-critical platform for calculating the real-time flow of electricity across interfaces with neighboring ISO’s.  Working with subject matter experts, KSM designed and delivered a fast nodal calculation engine that allowed users to inspect the data at any step of the calculation and retain all the data for a period of 5 years.             
        </div>
        <div className='story-part-left'>The solution we delivered features flexible scheduling of computing jobs, re-execution of previous jobs, and sophisticated validations and alerting while interfacing with over a dozen other systems in our client’s portfolio. A flexible directed acyclic graph processing engine, combined with agile project control with continuous integration practices, facilitates fast and frequent delivery of high-quality incremental releases. 
        </div>
        <div className='story-part-right'>We have enjoyed a continuous enhancement and maintenance partnership with this client for over 10 years. The platform has been continually expanded from 1 to 27 jobs over that span, and currently ingests, processes, and indexes between 300GB and 400GB of data per day.     
        </div>
        </div>


);
}

export default CaseStudyRealTime;