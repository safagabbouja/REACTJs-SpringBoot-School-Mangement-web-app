// Import useState, useEffect, and Link from React
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import { listactualite,deleteactualite } from '../../../services/Actualiteservice';
import Sidebar from '../../Sidebar';
import Header from '../../Header';
import Alert from 'react-bootstrap/Alert';

const ListeActualite = () => {
    const [notees, setActualite] = useState([]);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        listactualite()
            .then((response) => {
                setActualite(response.data);
            })
            .catch((err) => console.log(err));
    }, []);

    function removeActualite(id) {
        // Confirm before deleting
        const confirmDelete = window.confirm("Are you sure you want to delete this note?");
        if (confirmDelete) {
            deleteactualite(id)
                .then(() => {
                    listactualite()
                        .then((response) => {
                            setActualite(response.data);
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
                            <h3>Liste of actualite</h3>
                        </div>
                        <Link to="/CreateNew" className='btn btn-success ml-12'>Add News</Link>
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
                                        {notees.map((e) => (
                                            <tr key={e.id}>
                                                <td>{e.id}</td>
                                                <td>{e.titre}</td>
                                                <td>{e.contenu}</td>
                                                <td>{e.status}</td>
                                                <td>
                                                    <Link
                                                        to={`/Updatenew/${e.id}`}
                                                        className="btn btn-primary btn-sm me-2"
                                                    >
                                                        Edit
                                                    </Link>
                                                    <button
                                                        className="btn btn-danger btn-sm"
                                                        onClick={() => removeActualite(e.id)}
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

export default ListeActualite;
