import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteConfirm from './DeleteConfirm';
import DoctorRow from './DoctorRow';

const ManageDoctors = () => {
    const [deletingDoctor,setDeletingDoctor] = useState(null)
    const { isLoading, data: doctors, refetch } = useQuery(['doctors'], () =>
        fetch(`http://localhost:5000/doctor`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className="text-2xl">Manage Doctors:{doctors.length}</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Speciality</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor,index)=><DoctorRow
                            key={doctor._id}
                            index={index}
                            doctor={doctor}
                            setDeletingDoctor={setDeletingDoctor}
                            >
                            </DoctorRow>)
                        }
                    </tbody>
                </table>
            </div>
            {deletingDoctor && <DeleteConfirm
            deletingDoctor={deletingDoctor}
            refetch={refetch}
            setDeletingDoctor={setDeletingDoctor}
            >
            </DeleteConfirm>}
        </div>
    );
};

export default ManageDoctors;