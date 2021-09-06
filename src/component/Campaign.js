import React from "react";
import { Container } from "react-bootstrap";


 const Campaign = ({campaign, filterCandidates})=>{
         //alert(campaign.candidateId);
         return(
                 <Container >
               <div onClick={()=>{filterCandidates(campaign.id)} }>
                       <div>{campaign.name}</div><div>{campaign.creation_date}</div>
                       <p>{campaign.description}</p>
               </div>
               </Container>
         );
 }
      
    
//  onClick={()=>deleteTask(task.id)

export default Campaign;