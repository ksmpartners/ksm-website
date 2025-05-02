import React from 'react';
const CaseStudyGxP = () => {
    return (
        <div id="GxP" className='grid-row grid-item full story'>
        <div className="story-header">
        GxP Delivery Automation With Azure DevOps        
        </div>
        <div className="story-part-left">KSM partnered with a pharmaceutical client to reduce deployment cycle times for mission critical custom software, while injecting additional quality safeguards to the deployment process. By implementing the practices of continuous delivery with a Gitops-based deployment flow, we replace feature deployment cycles measured in years with those measured in weeks. </div>
        <div className="story-part-right">Automation was critical to the success of this project. By converting infrastructure configuration from manually-executed checklists to code, we reduced the time it takes to build new hosting environments from weeks to minutes. By converting static Word-based requirements documents on file shares to behavior-driven development specifications stored alongside the code in version control, we simplified traceability from product feature to design to requirement. By replacing manual test scripts with automated ones, we reduced testing cycles from weeks to hours and enabled full regression testing for even the smallest code change.</div>
        <div className="story-part-left">We built this solution using Azure DevOps. It is currently in use to deliver GxP software that meets the rigorous requirements of both internal quality assurance and external regulatory agencies.        
        </div>
        </div>


);
}

export default CaseStudyGxP;
