import React from 'react';

const DoctorRow = ({ doctor, refetch, index,setDeletingDoctor }) => {
    const { name, image, email, speciality } = doctor
    return (
        <tr>
            <td>{index + 1}</td>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} alt={name} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                        <div className="text-sm opacity-50">{email}</div>
                    </div>
                </div>
            </td>
            <td>
                {speciality}
            </td>
            <td>
            <label onClick={()=>setDeletingDoctor(doctor)} for="delete-confirm-modal" class="btn btn-error btn-xs">Delete</label>
            </td>
        </tr>
    );
};

export default DoctorRow;