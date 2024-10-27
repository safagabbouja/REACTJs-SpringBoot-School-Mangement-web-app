// Import useState, useEffect, and Link from React
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import { listnote, deletenote } from '../../../services/Noteservices';
import Sidebar from '../../Sidebar';
import Header from '../../Header';
import Alert from 'react-bootstrap/Alert';

const ListeNota = () => {
    const [notees, setNote] = useState([]);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        listnote()
            .then((response) => {
                setNote(response.data);
            })
            .catch((err) => console.log(err));
    }, []);

    function ListeNota(id) {
        // Confirm before deleting
        const confirmDelete = window.confirm("Are you sure you want to delete this note?");
        if (confirmDelete) {
            deletenote(id)
                .then(() => {
                    listnote()
                        .then((response) => {
                            setNote(response.data);
                        })
                        .catch((err) => console.log(err));
                })
                .catch((error) => {
                    console.error('Error deleting note:', error);
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
                            <h3>Liste of Notes</h3>
                        </div>
                        <div className='mt-3 text-center ml-10'>
                            <div className="container-fluid">
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Etudiant</th>
                                            <th>Cours</th>
                                            <th>Note</th>
                                         
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {notees.map((e) => (
                                            <tr key={e.id}>
                                                <td>{e.id}</td>
                                                <td>{e.etudiant}</td>
                                                <td>{e.matiere}</td>
                                                <td>{e.note}</td>


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

export default ListeNota;
