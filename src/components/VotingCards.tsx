import Col from 'react-bootstrap/Col';

const VotingCards = (props:any) =>{


    const candidate = props.candidate;

    return (
    
    
    <Col md={4} className='d-flex justify-content-center mb-5 pb-5 howToContainer' onClick={()=>props.vote(candidate)}>
        <div className="d-flex w-75 text-white howToCard rounded-5 " style={{backgroundImage:`url(${props.Background})`}} />
    </Col>
    )




}


export default VotingCards;