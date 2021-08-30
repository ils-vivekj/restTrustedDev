// import { Campaign } from "./Campaign";
// import { useState } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import Campaign from './Campaign';



// const campaigns=[
//     {
//         id: 1,
//         cName: 'Java',
//         date:'27-08-2021',
//         cDetails:'This campaign is for looking the candidate for Java',
//         candidateId: [3,1]    
//     },
//     {
//         id: 2,
//         cName: 'React',
//         date:'27-08-2021',
//         cDetails:'This campaign is for looking the candidate for Java',
//         candidateId: [2,4] 

//     },
//     {
//         id: 3,
//         cName: 'Angular',
//         date:'27-08-2021',
//         cDetails:'This campaign is for looking the candidate for Java',
//         candidateId: [5,6]    
//     },
//     {
//         id: 4,
//         cName: 'Bootstrap',
//         date:'27-08-2021',
//         cDetails:'This campaign is for looking the candidate for Java',
//         candidateId: [5,6]    
//     },
//     {
//         id: 5,
//         cName: 'Mysql',
//         date:'27-08-2021',
//         cDetails:'This campaign is for looking the candidate for Java',
//         candidateId: [5,6]    
//     }
// ];

export const LPanel =({campaigns, filterCandidates})=>{

    // const filterCampaignCandidate=(candidateId)=>{
    //     console.log('this is my candidate id' + candidateId);
    //     // {setCampaignCadidate(candidateId)};
    // }

    return(
        <>
            <div>
            {campaigns.map((campaign)=>(
                <Campaign key={campaign.id} campaign={campaign} filterCandidates={filterCandidates}></Campaign>

            ))}
            <Jumbotron>
                <Button>Request a new Campaign</Button>
            </Jumbotron>
            {/* {campaigns.map((campaign)=>{
                <Campaign key={campaign.id} campaign={campaign}></Campaign>
            }} */}
        </div>
        </>
    )
}

// export default LPanel


