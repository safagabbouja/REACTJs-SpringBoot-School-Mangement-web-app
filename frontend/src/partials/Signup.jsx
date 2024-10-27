import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const Signup = () => {
  const [data, setData] = useState({
    cin: '',
    nom: '',
    prénom: '',
    email: '',
    password: '',
    role: '',
  });

  const navigate = useNavigate(); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Data submitted:', data);
    // Add your submission logic here
    
    navigate('/SignIn'); // Navigates to Dashboard page
  };

  return (
    <div className="login-container flex flex-col justify-center items-center h-screen">
      <div className="p-3 rounded w-50 border">
        <form className="my-form" onSubmit={handleSubmit}>
          <div className="flex flex-col mb-4">
            <h2 className="login-text text-center font-bold text-2xl mb-4">Signup</h2>
            <div className="login-image-containerlogin-container flex flex-col justify-center items-center ">
              <img 
                src="https://png.pngtree.com/png-vector/20191003/ourmid/pngtree-user-login-or-authenticate-icon-on-gray-background-flat-icon-ve-png-image_1786166.jpg"
                alt="Login Image"
                width="70"
                height="50"
              />
            </div>
          </div>
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
            <label htmlFor="nom"><strong>Nom</strong></label>
            <input
              type="text"
              name="nom"
              placeholder="Entrez votre nom"
              className="form-control rounded-0"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="prénom"><strong>Prénom</strong></label>
            <input
              type="text"
              name="prénom"
              placeholder="Entrez votre prénom"
              className="form-control rounded-0"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="email"><strong>Email</strong></label>
            <input
              type="email"
              name="email"
              placeholder="Entrez votre email"
              className="form-control rounded-0"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="password"><strong>Mot de passe</strong></label>
            <input
              type="password"
              name="password"
              placeholder="Entrez votre mot de passe"
              className="form-control rounded-0"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="role"><strong>Rôle</strong></label>
            <input
              type="text"
              name="role"
              placeholder="Entrez votre rôle"
              className="form-control rounded-0"
              required
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0 mb-2">
            S'inscrire
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
