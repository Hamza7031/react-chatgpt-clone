
const App=()=> {
  const getMessages=async()=>{
  const options={
    method:"POST",
    body: JSON.stringify({
      message:"hello how are you?"
    }),
    headers: {
      "Content-Type": "application/json"
    }
  }
  
    try{
    const response= await fetch('https://api.openai.com/v1/chat/completions', options)
    const data= await response.json()
    console.log(data)
    } catch(error){
      console.log(error)
    }
  }
  return (
    <div className="app">

      <section className="side-bar">
        <button> New Chat</button>
        <ul className="history">
          <li>BUGH</li>
        </ul>
        <nav>
          <p>Made by Hamza</p>
        </nav>
      </section>


      <section className="main">
        <h1>Hamza-GPT</h1>
        <ul className="feed">

        </ul>
        <div className="bottom-section">
          <div className="input-container">
            <input/>
            <div className="submit" onClick={getMessages}>➢</div>
          </div>
          <p className="info">
          Free Research Preview. ChatGPT may produce inaccurate information about people, places, or facts. ChatGPT Mar 23 Version
          </p>
        </div>
      </section>
    
    </div>
  );
}

export default App;
