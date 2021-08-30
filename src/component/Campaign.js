import React from "react";
import { Container } from "react-bootstrap";


 const Campaign = ({campaign, filterCandidates})=>{
         //alert(campaign.candidateId);
         return(
                 <Container >
               <div onClick={()=>{filterCandidates(campaign.id)} }>
                       <div>{campaign.cName}</div><div>{campaign.date}</div>
                       <p>{campaign.cDetails}</p>
               </div>
               </Container>
         );
 }
      
    
//  onClick={()=>deleteTask(task.id)

export default Campaign;