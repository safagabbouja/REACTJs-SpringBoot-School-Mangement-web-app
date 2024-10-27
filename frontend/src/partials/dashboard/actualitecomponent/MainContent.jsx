import React from "react";

const MainContent = ({ titre, contenu, statut }) => {
  return (

    <div className="flex justify-center items-center h-full">

      <div
        className="card  mb-3 d-inline-block my-3 mx-3 px-2 py-2"
        style={{ width: "18rem" }}
      >
        {/* ... rest of your card content */}
        <img
          src="https://media.gettyimages.com/id/1340766096/fr/photo/belle-%C3%A9tudiante-souriante.jpg?s=612x612&w=gi&k=20&c=acc5K9B56fj5uMlLRGoNPCl5XgWCoxjyOdVzw5TvUzQ="
          style= {{height:"200px",width:"360px"}}className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{titre.slice(0,50)}</h5>
          <p className="card-text">{contenu.slice(0,90)}</p>
          <p className="card-status">{statut}</p>
          <a href="/" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div> 
    </div>
   
  );
};

export default MainContent;
