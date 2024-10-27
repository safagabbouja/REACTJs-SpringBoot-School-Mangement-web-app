import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import Sidebar from '../../Sidebar';
import Header from '../../Header';
const Updatenew = () => {
    let navigate = useNavigate();
    const { id } = useParams();
    const [actualite, setActualite] = useState({
        titre: "",
        statut: "",
        contenu: "",
    });
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [showSuccessAlert, setShowSuccessAlert] = useState(false); // State for showing success alert
    const [showErrorAlert, setShowErrorAlert] = useState(false); // State for showing error alert

    const { titre, statut, contenu } = actualite;

    useEffect(() => {
      loadActualite();
        //eslint-disable-next-line
    }, []);

    const loadActualite = async () => {
        try {
            const result = await axios.get(`http://localhost:8082/actualites/act/${id}`);
            setActualite(result.data);
        } catch (error) {
            console.error("Error loading note:", error);
        }
    };

    const handleInputChange = (e) => {
      setActualite({
            ...actualite,
            [e.target.name]: e.target.value,
        });
    };

    const editActualite = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8082/actualites/update/${id}`, actualite);
            setShowSuccessAlert(true); // Show success alert
            setTimeout(() => {
                setShowSuccessAlert(false); // Hide success alert after 3 seconds
                navigate("/Gerer_actualite");
              }, 3000);
        } catch (error) {
            console.error("Error editing note:", error);
            setShowErrorAlert(true); // Show error alert
        }
    };

    return (
        <>
            <div className="flex h-screen overflow-hidden">
                <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                    <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                    <div className='main-container'>
                        <div className="d-flex justify-content-center align-items-center mt-3">
                            <div className="p-3 rounded w-50 border">
                                <h2 className="text-center">Edit Actualite</h2>
                                <form onSubmit={(e) => editActualite(e)} className="my-form">
                                    {/* Form inputs */}
                                    <div className="form-group mb-3">
                                        <label htmlFor="titre"><strong>titre</strong></label>
                                        <input type="boolean" name="titre" value={titre} placeholder="Enter titre" onChange={(e) => handleInputChange(e)} className="form-control rounded-0" required />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="contenu"><strong>contenu</strong></label>
                                        <input type="boolean" name="contenu" value={contenu} placeholder="Enter contenu" onChange={(e) => handleInputChange(e)} className="form-control rounded-0" required />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="note"><strong>Status</strong></label>
                                        <input type="boolean" name="statut" value={statut} placeholder="Enter status" onChange={(e) => handleInputChange(e)} className="form-control rounded-0" required />
                                    </div>
                                    <button type="submit" className="btn btn-primary w-100 rounded-0 mb-2">Edit actualite</button>
                                </form>
                                {/* Success alert */}
                                {showSuccessAlert && (
                                    <div className="alert alert-success" role="alert">
                                        Note edited successfully!
                                    </div>
                                )}
                                {/* Error alert */}
                                {showErrorAlert && (
                                    <div className="alert alert-danger" role="alert">
                                        Error editing note. Please try again later.
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Updatenew;
