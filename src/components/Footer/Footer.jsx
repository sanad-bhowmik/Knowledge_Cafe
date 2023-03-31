import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        // <footer className='footer-container'>
        //     <div>
        //         <h2>Question:Props vs state</h2>
        //         <p></p>
        //         <h3>ddd</h3>
        //         <h3>dd</h3>
        //         <h3>dd</h3>
        //     </div>
        //     <div>
        //         <h4>Copyright || Sanad Bhowmik || 2023</h4>
        //     </div>
        // </footer>
        <footer>
            <div className="container">
                <div className="row">
                    <h1><u>Questions</u></h1>
                    <div className="col-md-3">
                        <h4>Props vs state</h4>
                        <p>Ans:Props are used to pass data from one component to another, while state is used to manage data within a component.</p>
                    </div>
                    <div className="col-md-3">
                        <h4>How does useState work?</h4>
                        <p>Ans:useState is a built-in Hook in React that returns a state variable and a function to update it, allowing functional components to manage state by updating it in response to user events or other changes in the application. It is typically used to handle simple, local state within a component.</p>
                    </div>
                    <div className="col-md-3">
                        <h4>Purpose of useEffect other than fetching data.</h4>
                        <p>Ans:The purpose of useEffect in React is to perform side effects, such as updating the DOM, in response to changes in the component's props or state.</p>
                    </div>
                    <div className="col-md-3">
                        <h4>How Does React work?</h4>
                        <p>Ans:React works by creating a virtual representation of the UI, which is then rendered efficiently to the real DOM, minimizing the number of actual changes made to the page.</p>
                    </div>
                    <h3>Copyright || <span style={{color:"orange"}}>Sanad Bhowmik</span> || 2023</h3>
                </div>
            </div>
        </footer>

    );
};

export default Footer;