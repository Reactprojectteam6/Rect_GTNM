import React from 'react';
import './Help.css';

class Help extends React.Component
{
    render()
    {
        return(
            <div>
                 <div className="background">
                     
                     <h3 className="label">Hello, how can Style shop help you ?</h3>
                     <input type="text" className="form-control" style={{width:"480px",marginLeft:"140px",marginTop:"35px"}}  placeholder="Search by question..."  />

                </div>
               
                <h2 style={{marginLeft:"240px",marginTop:"30px",fontFamily:"Times New Roman', Times, serif"}}>Top question?</h2>
                <div className="row">
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3" style={{marginLeft:"254PX",marginTop:"20px"}}>
                        <div className="row">
                            <i className="fas fa-circle" style={{fontSize:"60%"}}></i>
                            <span style={{fontSize:"15px",marginLeft:"5px"}}>Shopping tips?</span>
                        </div><br/>
                        <div className="row">
                            <i className="fas fa-circle" style={{fontSize:"60%"}}></i>
                            <span style={{fontSize:"15px",marginLeft:"5px"}}>How to get free delivery?</span>
                        </div><br/>
                        <div className="row">
                            <i className="fas fa-circle" style={{fontSize:"60%"}}></i>
                            <span style={{fontSize:"15px",marginLeft:"5px"}}>How are shipping fees calculated?</span>
                        </div><br/>
                        <div className="row">
                            <i className="fas fa-circle" style={{fontSize:"60%"}}></i>
                            <span style={{fontSize:"15px",marginLeft:"5px"}}>How much does an express order cost?</span>
                        </div><br/>
                        <div className="row">
                            <i className="fas fa-circle" style={{fontSize:"60%"}}></i>
                            <span style={{fontSize:"15px",marginLeft:"5px"}}>What is the delivery policy at Style shop?</span>
                        </div><br/>
                    </div>
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3" style={{marginTop:"20px"}}>
                        <div className="row">
                            <i className="fas fa-circle" style={{fontSize:"60%"}}></i>
                            <span style={{fontSize:"15px",marginLeft:"5px"}}>Handbook for new customers</span>
                        </div><br/>
                        <div className="row">
                            <i className="fas fa-circle" style={{fontSize:"60%"}}></i>
                            <span style={{fontSize:"15px",marginLeft:"5px"}}>How to check the status of my order ?</span>
                        </div><br/>
                        <div className="row">
                            <i className="fas fa-circle" style={{fontSize:"60%"}}></i>
                            <span style={{fontSize:"15px",marginLeft:"5px"}}>How to order easily at Style shop?</span>
                        </div><br/>
                        <div className="row">
                            <i className="fas fa-circle" style={{fontSize:"60%"}}></i>
                            <span style={{fontSize:"15px",marginLeft:"5px"}}>If I suspect your product is fake, can I exchange it?</span>
                        </div><br/>
                    </div>
                </div>
                <hr style={{width:"20%",marginLeft:"450px",borderTop: "1px solid black"}}></hr>
                <div className="row">
                     <h4 style={{marginLeft:"520px"}}>Do you still need help?</h4>
                     <span style={{marginLeft:"420px"}}>We are always here to assist you, Monday - Sunday: 7: 00-22: 00</span>
                </div>
             
            </div>  
             
           
        );
    }
}
export default Help;