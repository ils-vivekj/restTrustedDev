// import { Container } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { CandidateGraph } from "./CandidateGraph";
import { TotalCampaign } from "./TotalCampaign";

export const RPanel=({candidates, campaigns})=>(
    <>
    <Container>
    <div> 
        <h3>{candidates.length} Candidate Match</h3>
    </div>
    </Container>
    <Container>
    <div>
        
    </div>

    <CandidateGraph candidates={candidates}/>
    </Container>
    <Container>
        <h3>Total Campign : {campaigns.length}</h3>
        <h2>Active: {(campaigns.filter(camp=>camp.status==='Active')).length}</h2>
        <h2>New:{campaigns.filter(camp=>camp.status==='New').length}</h2>
        <h3>Archived :{campaigns.filter(camp=>camp.status==='Archived').length}</h3>
    </Container>
    </>
)
    
