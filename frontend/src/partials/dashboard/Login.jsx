import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [data, setNew] = useState({
    cin: '',
    login: '',
    role: '' 
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNew({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login successful!');
    switch(data.role) {
      case 'adminActualite':
        navigate('/Gerer_actualite');
        break;
      case 'enseignant':
      case 'etudiant':
        navigate('/Newsboard');
        break;
      case 'adminNote':
        navigate('/listnote');
        break;
      default:
        break;
    }
  };

  return (
    <div className="login-container flex flex-col justify-center items-center h-screen">
      <div className="p-3 rounded w-50 border">
        <form className="my-form" onSubmit={handleSubmit}>
          <div className="flex flex-col mb-4">
            <h2 className="login-text text-center font-bold text-2xl mb-4">Login</h2>
            <div className="login-image-containerlogin-container flex flex-col justify-center items-center ">
              <img 
                src="https://png.pngtree.com/png-vector/20191003/ourmid/pngtree-user-login-or-authenticate-icon-on-gray-background-flat-icon-ve-png-image_1786166.jpg"
                alt="Login Image"
                width="70"
                height="50"
              />
            </div>
          </div>
          {/* Form inputs */}
          <div className="form-group mb-3">
            <label htmlFor="cin"><strong>CIN</strong></label>
            <input
              type="text"
              name="cin"
              placeholder="Entrez votre CIN"
              className="form-control rounded-0"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="login"><strong>Mot de passe</strong></label>
            <input
              type="password"
              name="login"
              placeholder="Entrez votre mot de passe"
              className="form-control rounded-0"
              required
              onChange={handleInputChange}
            />
          </div>
          {/* Ajouter le champ de sélection pour le rôle */}
          <div className="form-group mb-3">
            <label htmlFor="role"><strong>Rôle</strong></label>
            <select
              name="role"
              className="form-control rounded-0"
              required
              onChange={handleInputChange}
            >
              <option value="">Sélectionnez un rôle</option>
              <option value="adminActualite">Admin Actualité</option>
              <option value="enseignant">Enseignant</option>
              <option value="etudiant">Étudiant</option>
              <option value="adminNote">Admin Note</option>
            </select>
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0 mb-2">
            Login
          </button>
          {/* Ajouter un lien vers la page d'inscription */}
          <a href="/Signup" className="text-center text-blue-600">S'inscrire</a>
        </form>
      </div>
    </div>
  );
};

export default Login;
