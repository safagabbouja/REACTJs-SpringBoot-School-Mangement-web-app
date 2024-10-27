import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import Sidebar from '../../Sidebar';
import Header from '../../Header';

const Editnote = () => {
    let navigate = useNavigate();
    const { id } = useParams();
    const [notees, setNote] = useState({
        etudiant: "",
        matiere: "",
        note: "",
    });
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [showSuccessAlert, setShowSuccessAlert] = useState(false); // State for showing success alert
    const [showErrorAlert, setShowErrorAlert] = useState(false); // State for showing error alert

    const { etudiant, matiere, note } = notees;

    useEffect(() => {
        loadNote();
        //eslint-disable-next-line
    }, []);

    const loadNote = async () => {
        try {
            const result = await axios.get(`http://localhost:8082/notes/not/${id}`);
            setNote(result.data);
        } catch (error) {
            console.error("Error loading note:", error);
        }
    };

    const handleInputChange = (e) => {
        setNote({
            ...notees,
            [e.target.name]: e.target.value,
        });
    };

    const editNote = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8082/notes/update/${id}`, notees);
            setShowSuccessAlert(true); // Show success alert
            setTimeout(() => {
                setShowSuccessAlert(false); // Hide success alert after 3 seconds
                navigate("/listnote");
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
                                <h2 className="text-center">Edit Note</h2>
                                <form onSubmit={(e) => editNote(e)} className="my-form">
                                    {/* Form inputs */}
                                    <div className="form-group mb-3">
                                        <label htmlFor="etudiant"><strong>Student</strong></label>
                                        <select name="etudiant" value={etudiant} onChange={(e) => handleInputChange(e)} className="form-control rounded-0">
                                            <option value="">Select Student</option>
                                            <option value="ahmed">ahmed</option>
                                            <option value="yassin">yassin</option>
                                            <option value="salma">salma</option>
                                            <option value="rahma">rahma</option>
                                        </select>
                                    </div>

                                    <div className="form-group mb-3">
                                        <label htmlFor="matiere"><strong>Cours</strong></label>
                                        <select name="matiere" value={matiere} onChange={(e) => handleInputChange(e)} className="form-control rounded-0">
                                            <option value="">Select cours</option>
                                            <option value="Mathématiques">Mathématiques</option>
                                            <option value="Français">Français</option>
                                            <option value="Histoire">Audit</option>
                                            <option value="Histoire">Anglais</option>
                                            <option value="Histoire">reseau</option>
                                        </select>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="note"><strong>Note</strong></label>
                                        <input type="number" name="note" value={note} placeholder="Entrer la note" onChange={(e) => handleInputChange(e)} className="form-control rounded-0" required />
                                    </div>
                                    <button type="submit" className="btn btn-primary w-100 rounded-0 mb-2">Edit Note</button>
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

export default Editnote;
