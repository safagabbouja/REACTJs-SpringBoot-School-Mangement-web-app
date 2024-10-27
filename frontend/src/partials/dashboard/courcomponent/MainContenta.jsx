import React from "react";
import bd from "../../../images/bd.pdf";
const MainContenta = ({ titre, contenu, statut }) => {
  return (

    <div className="flex justify-center items-center h-full">

      <div
        className="card  mb-3 d-inline-block my-3 mx-3 px-2 py-2"
        style={{ width: "18rem" }}
      >
        {/* ... rest of your card content */}
        <img
          src="https://www.webhopers.in/uploads/1/web-development-course-in-panchkula.png"
          style= {{height:"200px",width:"360px"}}className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{titre.slice(0,50)}</h5>
          <p className="card-text">{contenu.slice(0,90)}</p>
          <p className="card-status">{statut}</p>
           {/* Ajoutez un lien vers le fichier PDF */}
           <button><a href={bd} download='bd'>Télécharger Cour </a></button>
        </div>
      </div> 
    </div>
   
  );
};

export default MainContenta;
