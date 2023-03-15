import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirm = ({ deletingDoctor, refetch, setDeletingDoctor }) => {
    const { name, email } = deletingDoctor
    const handleDelete = () => {
        fetch(`https://doctors-portal-jzhn.onrender.com/doctor/${email}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`Doctor: ${name} was removed`)
                    setDeletingDoctor(null)
                    refetch()
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-500">Are you sure you want to remove Dr.{name}?</h3>
                    <div class="modal-action">
                        <button onClick={() => handleDelete()} className='btn btn-error'>Yes</button>
                        <label for="delete-confirm-modal" class="btn">Cancel</label>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default DeleteConfirm;