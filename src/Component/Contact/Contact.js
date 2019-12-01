import React from 'react';
//import './Contact.css';

class Contact extends React.Component
{
    render()
    {
        return(
            <div>
                <div>
                    <h2 style={{fontFamily:"ursive",marginLeft:"400px"}}>Contact Style shop</h2>
                    <hr style={{width:"50%",marginLeft:"200px",borderTop: "1px solid black"}}></hr> 
                </div>
                <div>
                    
                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                       <img src="http://laz-img-cdn.alicdn.com/images/ims-web/TB1n6YqdwZC2uNjSZFnXXaxZpXa.png" style={{marginLeft:"200px",marginTop:"20px"}}/>
                       
                    </div>
                    
                    
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <div className="row">
                                <div >
                                    <p style={{marginLeft:"200px",marginTop:"25px",fontFamily:"'Times New Roman', Times, serif",fontSize:"20px"}}>Are you in need of assistance, a solution to your problem, or need to contribute to Customer Service? Please contact Style shop via our customer service hotline or the free Live Chat service. We will provide solutions to solve your problems as quickly as possible!</p>
                                </div>
                        </div>
                     
                        
                    <div className="row" style={{marginLeft:"190px",marginTop:"30px"}}>
                        <p>Customer care hotline 01234567890 (from 9:00 to 18:00, VND 1,000 / minute) </p>
                        <p>Live Chat (from 7:00 - 22:00)</p>
                    </div>
                    </div>  
                    </div>
                    
                    
                </div>
        );
    }
}
export default Contact;