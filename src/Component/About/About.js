import React from 'react'



class About extends React.Component
{
    render()
    {
        return(
            <div>
                <legend style={{fontSize:"30px", fontStyle:"oblique", fontFamily:"Times New Roman"}}>Welcome to Style Shop.</legend>
                 
                 <div id="carousel-id" className="carousel slide" data-ride="carousel">
                     <ol className="carousel-indicators">
                         <li data-target="#carousel-id" data-slide-to="0" className="active"></li>
                         <li data-target="#carousel-id" data-slide-to="1" ></li>
                         <li data-target="#carousel-id" data-slide-to="2" ></li>
                     </ol>
                     <div className="carousel-inner">
                         <div className="item active">   
                            <div className="text-center">
                                <img src="https://scontent.fdad1-1.fna.fbcdn.net/v/t1.0-9/73390809_513180512619100_7458626561122500608_o.jpg?_nc_cat=106&_nc_oc=AQlaE1viAItXuOdOSSMBP5xNrRT6z1U6pqzMxKJeQ0IdqRoSDiNImJcAqEvbsx0t0oE&_nc_ht=scontent.fdad1-1.fna&oh=f0f4c549a99e055d0cd0d9cd59fa7f85&oe=5E4F2AAC" alt="First slide" style={{width:"50%", height:"50%"}} className="rounded"/>
                            </div>      
                             
                             <div className="container">
                                 <div className="carousel-caption">
                                     <h1>Always by your side, anytime, anywhere.</h1>
                                     <p style={{fontSize:"20px"}}>Style shop always provides the best cosmetic, instructions and care for our lovely beauties. </p>
                                     <p><a className="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p>
                                 </div>
                             </div>
                         </div>
                         <div className="item">
                         <div className="text-center">
                                <img src="https://prd-v3-i.chanel.com/content/dam/fnb/widgets/boy-widget-lee/img/Header_desktop_KO.jpg?v=030120182192" alt="Second slide" style={{width:"99%", height:"99%"}} className="rounded"/>
                            </div> 
                             <div className="container">
                                 <div className="carousel-caption">
                                     <h1>For all people.</h1>
                                     <p style={{fontSize:"20px"}}>We do not only provide our service for our beautiful woman but also our handsome man.</p>
                                     <p><a className="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p>
                                 </div>
                             </div>
                         </div>
                         <div className="item">
                         <div class="text-center">
                                <img src="https://scontent.fdad2-1.fna.fbcdn.net/v/t1.0-9/69744351_2362328567183836_6170893995963580416_o.jpg?_nc_cat=109&_nc_oc=AQkYFT9MYu0Lay4XtjxxuAyfkhg8mcRELcmh32-Mkcw6eC1zKqZqym6ddqXjveBi_G0&_nc_ht=scontent.fdad2-1.fna&oh=e904b74873b19d070e8090cd8d5b246a&oe=5E56A00C" alt="Second slide" style={{width:"68%", height:"68%"}} className="rounded"/>
                            </div> 
                             <div className="container">
                                 <div className="carousel-caption">
                                     <h1>One step for shopping.</h1>
                                     <p style={{fontSize:"20px"}}>Just sign in and buy everything you want.</p>
                                     <p><a className="btn btn-lg btn-primary" href="#" role="button">Sign up for today</a></p>
                                 </div>
                             </div>
                         </div>
                     </div>
                    
                 </div>
                 
                
            </div>
        );
    }
}
export default About;