import { Button, Jumbotron, Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { CandidateSnippet } from "./CandidateSnippet";
import { useState } from 'react';
import { CandidateDetails } from "./CandidateDetails";





// const showFirstCandidate=()=>({
//     useState
// })

export const CPanel=({candidates})=>{
    const [showSnippet, setShowSnippet] = useState(true);
    const [snippetNumber, setSnippetNumber]=useState(-1); 
    const showCandidateDetails=()=>{
        setShowSnippet(false);
        // setSnippetNumber(-1);
        if(candidates.length >0){
            // setSnippetNumber(snippetNumber+1);
            setSnippetNumber(snippetNumber+1);
        }
        
    }
   // console.log('This are c panel id::', candidateId);
    if(showSnippet){
        
    return(
        <>
        <Navbar bg="secondary" expand="lg">
            {candidates.length>0 ?
                <Navbar.Brand bg="light">{candidates.length } Matches Found</Navbar.Brand> 
                :<Navbar.Brand bg="light">No Matches Found</Navbar.Brand>}
            {candidates.length>0 ?
                <Button variant="outline-info" size='sm' onClick={showCandidateDetails} >Check Them Out</Button> 
                :''} 
        </Navbar>
        <div className="mt-2">
            {candidates.map((candidate)=>(
                <CandidateSnippet key={candidate.id} candidate={candidate}/>
            ))}
        </div>
        </>
    )}
    else{
        return( 
        <> 
            <Jumbotron>
                <div className='mt-5'>        
                    <CandidateDetails key={candidates[snippetNumber].id} candidate={candidates[snippetNumber]} 
                    onClick={()=>{setShowSnippet(true); setSnippetNumber(-1)}}
                    isPrevious={snippetNumber===0?false:true} previous={()=>{setSnippetNumber(snippetNumber-1)}}
                    isNext={snippetNumber===candidates.length-1?false:true} next={()=>setSnippetNumber(snippetNumber+1)}
                    />
                </div>
             </Jumbotron>
         </>
        )
    }
}
    
