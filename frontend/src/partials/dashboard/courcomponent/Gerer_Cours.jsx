// Import useState, useEffect, and Link from React
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import { listcour,deletecour } from '../../../services/Coura';
import Sidebar from '../../Sidebar';
import Header from '../../Header';
import Alert from 'react-bootstrap/Alert';

const Gerer_Cours = () => {
    const [cours, setCour] = useState([]);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        listcour()
            .then((response) => {
                setCour(response.data);
            })
            .catch((err) => console.log(err));
    }, []);

    function removeCour(id) {
        // Confirm before deleting
        const confirmDelete = window.confirm("Are you sure you want to delete this note?");
        if (confirmDelete) {
            deletecour(id)
                .then(() => {
                    listcour()
                        .then((response) => {
                            setCour(response.data);
                        })
                        .catch((err) => console.log(err));
                })
                .catch((error) => {
                    console.error('Error deleting actualite:', error);
                });
        }
    }

    return (
        <>
            <div className="flex h-screen overflow-hidden">
                {/* Sidebar */}
                <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                {/* Content area */}
                <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                    {/* Site header */}
                    <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

                    <div className='main-container'>
                        <div className='text-center mt-3'>
                            <h3>Liste des cours</h3>
                        </div>
                        <Link to="/CreateCour" className='btn btn-success ml-12'>Add course</Link>
                        <div className='mt-3 text-center ml-10'>
                            <div className="container-fluid">
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>titre</th>
                                            <th>description</th>
                                            <th>status</th>

                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cours.map((e) => (
                                            <tr key={e.id}>
                                                <td>{e.id}</td>
                                                <td>{e.titre}</td>
                                                <td>{e.contenu}</td>
                                                <td>{e.status}</td>
                                                <td>
                                                    <Link
                                                        to={`/UpdateCour/${e.id}`}
                                                        className="btn btn-primary btn-sm me-2"
                                                    >
                                                        Edit
                                                    </Link>
                                                    <button
                                                        className="btn btn-danger btn-sm"
                                                        onClick={() => removeCour(e.id)}
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Gerer_Cours;
