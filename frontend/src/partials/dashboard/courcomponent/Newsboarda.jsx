import React, { useState, useEffect } from 'react';
import CourService from '../../../services/courService';
import MainContenta from './MainContenta';
const Newsboarda = () => {
  const [art, setArt] = useState([]);

  useEffect(() => {
    const fetchArt = async () => {
      try {
        const courService = new CourService();
        const response = await courService.getAll();
        setArt(response.data); // Assuming data is in response.data
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArt();
  }, []);

  return (
    // Dans cet exemple, j'ai enveloppé tout le contenu dans une div avec les classes flex flex-col justify-center items-center h-screen. Cela centre verticalement et horizontalement le contenu de la page. Ensuite, j'ai ajouté la classe text-center à l'élément <h2> pour centrer son texte horizontalement.

<div className="flex flex-col justify-center items-center h-screen">
      <h2 className="text-center">telecharger <span className='badge bg-danger'>Cours</span></h2>
  
      <div className="flex justify-center items-center">
        {art.map((news, index) => (
          <MainContenta key={index} titre={news.titre} contenu={news.contenu} statut={news.statut} />
        ))}
      </div>
    </div>
  );
  
};


export default Newsboarda;