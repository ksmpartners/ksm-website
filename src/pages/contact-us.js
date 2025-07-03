import React from "react";
import "../styles/contactUsPage.css";
import Layout from "../components/Layout/Layout";

const DisplayContactUsPage = () => {

  return (
            <Layout>

    <div className="pal-test-container">
      <h1 className="pal-test-title">Contact Us</h1>
      
      <p className="pal-test-text">This is the placeholder page for our Contact Us route.</p>


      <div className="pal-test-card">
        <h2 className="pal-test-card-heading">Surface + Border</h2>
        <p className="pal-test-muted">This uses surface background and border color.</p>
      </div>

      <div className="pal-test-button-group">
        <button className="pal-test-btn pal-test-btn-accent">Accent</button>
        <button className="pal-test-btn pal-test-btn-accent-hover">Accent Hover</button>
        <button className="pal-test-btn pal-test-btn-error">Error</button>
        <button className="pal-test-btn pal-test-btn-success">Success</button>
      </div>

      <div className="pal-test-input-group">
        <label htmlFor="pal-test-input">Test Input:</label>
        <input id="pal-test-input" className="pal-test-input" placeholder="Try typing..." />
      </div>
    </div>
            </Layout>

  );
};

export default DisplayContactUsPage;
