import React from 'react';
const CaseStudyDataEngineerPipeline = () => {
    return (
        <div id ="Data-Engineering-Pipeline" className='grid-row grid-item full story'>
        <div className="story-header">
        Data Engineering and Pipelining        
        </div>
        <div className="story-part-right">A client in the pharmaceutical industry engaged KSM to prepare a machine learning/artificial intelligence data engineering proof of concept for production use. The product uses natural language processing to categorize textual data by product, topic, and sentiments, and allows the client to detect emerging signals and preemptively answer questions from healthcare providers and patients.        
        </div>
        <div className="story-part-left">The project was founded on Azure Data Factory (ADF) and Databricks, with data stored in an Azure Data Lake and SQL server.  KSM integrated ADF and Databricks with Azure DevOps to facilitate code review quality checks and pipeline releases. We implemented infrastructure-as-code with Liquibase to ensure structural database changes were delivered by a consistent, reproducible, and reversible process. We instrumented the code with logging and monitoring, and deployed to Azure Kubernetes Service.
        </div>
        <div className="story-part-right">KSM’s contributions enabled the development team to deploy enhancements reliably and continuously, while enhancing quality control over development operations.      
        </div>
        </div>
);
}

export default CaseStudyDataEngineerPipeline;