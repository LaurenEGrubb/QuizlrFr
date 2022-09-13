import '../styles/App.css'

function Study (){
    return (
      <div>
         <h4>Study</h4>
         <div>
        {flashcard?.map((flashcard) => (
          <div className="flash-card" key={flashcard.id}>
            <h3>{flashcard.term}</h3>
            <p>{flashcard.definition}</p>

    
            <Link className="editbutton"to={`/edit/${flashcard.id}`}>Edit Flashcard</Link>
            {/* <EditPost posts={posts} /> */}

            <div>
              <button onClick={() => deleteFlashcard(flashcard.id)} className="delete">X</button>
              <div></div>
            </div>
          </div>
        ))}
      </div>
          
      </div>
  
    )
  }
  export default Study