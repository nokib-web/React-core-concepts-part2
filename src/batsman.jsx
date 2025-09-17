import { useState } from "react"

export default function Batsman(){
    const[runs, setRuns] = useState(0);

    const handleSingle =()=>{
        const updateRuns = runs+1;
        setRuns(updateRuns);

    }
    const handleDouble =()=>{
        const updateRuns = runs+2;
        setRuns(updateRuns);

    }
    const handleTripple =()=>{
        const updateRuns = runs+3;
        setRuns(updateRuns);

    }
    const handleFour =()=>{
        const updateRuns = runs+4;
        setRuns(updateRuns);

    }
    const handleSix =()=>{
        const updateRuns = runs+6;
        setRuns(updateRuns);

    }

    return(

          <div>
            <h3>Player:Bangla Batsman</h3>
            {
                runs>=50&& <p>Your Score: 50+</p>
            }
            <h1>Score:{runs}</h1>
            <button onClick={handleSingle}>Single</button>
            <button onClick={handleDouble}>Double</button>
            <button onClick={handleTripple}>Triple</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>

    )
      
    
    
}