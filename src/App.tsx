import { useEffect, useState } from 'react';
import { backend } from './declarations/backend';
import seal from './assets/Images/seal.jpg';
import Access from './components/Access';
import VotingCards from './components/VotingCards';
import nw from './assets/Images/nw.png';
import tankk from './assets/Images/tankk.png'


interface StateProperties {
  title: string;
  content: string;
}

function App() {

  const [userIC,setUserIC] = useState("");
  const [error,setError] = useState(false);
  const [pass,setPass] = useState(false);

  // votes collector
  const [notWvotes,setNotWvotes] = useState(0);
  const [tanKKBVotes, setTanKKBVotes] = useState(0);


  const gainAccess = ()=>{
    // if user enter something 
    // let them pass
    if (userIC !== "")
    {
      alert("Success....Please Pick Your Candidate");
      setPass(true);
      setError(false);
    }

    // to check for errors
    else{
      setError(true);
    }
  }

  
  const vote = (candidate:any)=>{

    if (candidate==="notWaran")
    {
    
      setNotWvotes(currentVal=>currentVal+1)
      alert("Voted For NotWaran...Success");
      setPass(false);
      setUserIC("");
    }

    else{
      setTanKKBVotes(currentVal=>currentVal+1)
      alert("Voted For TanKKB...Success");
      setPass(false);
      setUserIC("");
    }

  }



  return (
    <div className='App'>
    {!pass && <div className='container d-flex justify-content-center align-items-center'>
      
      <div className='access-head'>
      <img src={seal} width="200px"></img>
      <h1 className='display-1'>Voting 2024</h1>
      <h4 className='fs-2 mb-4'>Please Enter Your NRIC to vote</h4>

      <Access error={error}
              setUserIC={setUserIC}
              gainAccess={gainAccess}/>
      </div>
      </div>
      }

      {pass && 
      <div>
       
      <h1 className='voting-head'>Form 12</h1>
      <h2>PARLIAMENTARY ELECTIONS ACT</h2>
      <h2>(Chapter 218)</h2>
      <hr className='seperater'></hr>

  
      <h1 className='mt-4 mb-4'>Please Tap On Your Choice </h1>
      <div className='d-flex flex-row voting-cards-container justify-content-center align-items-center'>
        <VotingCards Background={nw} candidate={"notWaran"} vote={vote}/>
        <VotingCards Background={tankk} candidate={"tanKKB"} vote={vote}/>
      </div>
      <h3 className='fs-2 pb-4'>Voter Serial Number: 99071</h3>
      </div>}



    </div>
  );
}

export default App;