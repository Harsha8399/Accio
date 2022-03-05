import React from 'react';
import ChildComponent from './ChildComponent';
import './Component1.css';

function Component1(){
    return(
        <div className='Component1'> 
            <h1>Heading 1</h1>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur totam, illum, animi mollitia quam dignissimos commodi recusandae veniam excepturi architecto doloribus iusto quae? Dolore ratione necessitatibus cumque maxime sequi odio?
            </p>
            <img src='https://lh6.googleusercontent.com/8jT4jFQGSNAkUGmkLRT_CI2-B860uz8dHNNdjw9hjiSUBpap1qIeANGNVPWtLaGrCYLGenRLsVsQ36kU06O6qkubFW5BQtHw0FdtTqvqF-VfCw_rq9Y4Yhv69AAcIB2E-4kjh9VR' alt='developer'></img>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, obcaecati exercitationem? Doloremque perferendis ipsa voluptatem quibusdam blanditiis tenetur eos vel molestiae, reiciendis, est dolorum? Voluptas nostrum esse animi nam asperiores?</p>
            <ChildComponent/>
        </div>

    )
           
    }

export default Component1