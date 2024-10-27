import React, { useState, useEffect } from 'react';
// import { listnote, deletenote } from '../../../services/Noteservices';
import NewService from '../../../services/newService';
import MainContent from './MainContent';
const Newsboard = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const newService = new NewService();
        const response = await newService.getAll();
        setArticles(response.data); // Assuming data is in response.data
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, []);

  return (
    // Dans cet exemple, j'ai enveloppé tout le contenu dans une div avec les classes flex flex-col justify-center items-center h-screen. Cela centre verticalement et horizontalement le contenu de la page. Ensuite, j'ai ajouté la classe text-center à l'élément <h2> pour centrer son texte horizontalement.

<div className="flex flex-col justify-center items-center h-screen">
      <h2 className="text-center">Latest <span className='badge bg-danger'>News</span></h2>
  
      <div className="flex justify-center items-center">
        {articles.map((news, index) => (
          <MainContent key={index} titre={news.titre} contenu={news.contenu} statut={news.statut} />
        ))}
      </div>
    </div>
  );
  
};


export default Newsboard;