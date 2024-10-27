import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Sidebar from '../../Sidebar';
import Header from '../../Header';

const AddNote = () => {
    let navigate = useNavigate();
    const [notees, setNote] = useState({
        etudiant: "",
        matiere: "",
        note: "",
    });
    const { etudiant, matiere, note } = notees;
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [showSuccessAlert, setShowSuccessAlert] = useState(false); // State for showing success alert
    const [showErrorAlert, setShowErrorAlert] = useState(false); // State for showing error alert

    const handleInputChange = (e) => {
        setNote({
            ...notees,
            [e.target.name]: e.target.value,
        });
    };

    const saveNote = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8082/notes", notees);
            setShowSuccessAlert(true); // Show success alert on successful addition
            setTimeout(() => {
                setShowSuccessAlert(false); // Hide success alert after 3 seconds
                navigate("/listnote");
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
                                    <h3>Add Note</h3>
                                </div>
                                <form onSubmit={(e) => saveNote(e)} className="my-form">
                                    {/* Form inputs */}
                                    <div className="form-group mb-3">
                                        <label htmlFor="etudiant"><strong>Etudiant</strong></label>
                                        <select name="etudiant" value={etudiant} onChange={(e) => handleInputChange(e)} className="form-control rounded-0" required>
                                            <option value="">Select student</option>
                                            <option value="ahmed">ahmed</option>
                                            <option value="yassin">yassin</option>
                                            <option value="salma">salma</option>
                                            <option value="rahma">rahma</option>
                                        </select>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="matiere"><strong>Cours</strong></label>
                                        <select name="matiere" value={matiere} onChange={(e) => handleInputChange(e)} className="form-control rounded-0" required>
                                            <option value="">Select cours</option>
                                            <option value="Mathématiques">Mathématiques</option>
                                            <option value="Français">Français</option>
                                            <option value="Histoire">Audit</option>
                                            <option value="Histoire">reseau</option>
                                        </select>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="note"><strong>Note</strong></label>
                                        <input type="text" name="note" value={note} placeholder="Enter note" onChange={(e) => handleInputChange(e)} className="form-control rounded-0" required />
                                    </div>
                                    <button type="submit" className="btn btn-success w-100 rounded-0 mb-2">Add Note</button>
                                </form>
                                {/* Success alert */}
                                {showSuccessAlert && (
                                    <div className="alert alert-success" role="alert">
                                        Note added successfully!
                                    </div>
                                )}
                                {/* Error alert */}
                                {showErrorAlert && (
                                    <div className="alert alert-danger" role="alert">
                                        Error adding note. Please try again later.
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

export default AddNote;
