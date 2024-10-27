import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Sidebar from '../../Sidebar';
import Header from '../../Header';
const CreateNew = () => {
    let navigate = useNavigate();
    const [data, setNew] = useState({
        titre: "",
        statut: "",
        contenu: "",
    });
    const { titre, statut, contenu } = data;
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [showSuccessAlert, setShowSuccessAlert] = useState(false); // State for showing success alert
    const [showErrorAlert, setShowErrorAlert] = useState(false); // State for showing error alert

    const handleInputChange = (e) => {
        setNew({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const saveNew = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8082/actualites", data);

            setShowSuccessAlert(true); // Show success alert on successful addition
            setTimeout(() => {
                setShowSuccessAlert(false); // Hide success alert after 3 seconds
                navigate("/Gerer_actualite");
            }, 3000);
        } catch (error) {
            console.error("Error adding note:", error);
            setShowErrorAlert(true); // Show error alert on error
            setTimeout(() => {
                setShowErrorAlert(false); // Hide error alert after 3 seconds
            }, 3000);
        }
    };

    return (
        <>
            <div className="flex h-screen overflow-hidden">
                <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                    <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                    <div className='main-container'>
                        <div className="d-flex justify-content-center align-items-center mt-5">
                            <div className="p-3 rounded w-50 border">
                                <div className='text-center mb-3'>
                                    <h3>Ajouter Actualité</h3>
                                </div>
                                <form onSubmit={(e) => saveNew(e)} className="my-form">
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
                                    <button type="submit" className="btn btn-success w-100 rounded-0 mb-2">Ajouter actualité</button>
                                </form>
                                {/* Success alert */}
                                {showSuccessAlert && (
                                    <div className="alert alert-success" role="alert">
                                        News added successfully!
                                    </div>
                                )}
                                {/* Error alert */}
                                {showErrorAlert && (
                                    <div className="alert alert-danger" role="alert">
                                        Error adding news. Please try again later.
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

export default CreateNew;
