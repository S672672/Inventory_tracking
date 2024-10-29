import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [file, setFile] = useState(null);
    const [profileImage, setProfileImage] = useState('');
    const [previewImage, setPreviewImage] = useState('');
    const [isUploading, setIsUploading] = useState(false); // New loading state for upload

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/auth/profile', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });
                setUser(response.data.user);
                setProfileImage(response.data.user.profileImage);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching user profile:', error.response?.data || error.message);
            }
        };

        fetchUserProfile();
    }, []);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
        if (selectedFile) {
            const url = URL.createObjectURL(selectedFile);
            setPreviewImage(url);
        }
    };

    const handleUpload = async () => {
        if (!file) {
            alert('Please select a file first.');
            return;
        }

        const formData = new FormData();
        formData.append('profileImage', file);

        setIsUploading(true); // Set loading state to true

        try {
            const response = await axios.put('http://localhost:5000/api/auth/profile', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            setUser((prev) => ({ ...prev, profileImage: response.data.user.profileImage }));
            setProfileImage(response.data.user.profileImage);
            setPreviewImage('');
            alert('Profile picture updated successfully!');
        } catch (error) {
            console.error('Error updating profile picture:', error);
            alert('Could not update profile picture. Please try again.');
        } finally {
            setIsUploading(false); // Reset loading state regardless of success or error
        }
    };

    if (loading) return <div className='flex items-center justify-center'><img src='./src/assets/pictures/loading.gif' alt="Loading" /></div>;

    return (
        <div className="container mx-auto p-4 bg-gray-100 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-6 text-center">Welcome, {user.username}!</h1>
            <div className="flex justify-center mb-4">
                <div className="relative">
                    <img
                        src={previewImage ? previewImage : `http://localhost:5000/${profileImage}`}
                        alt="Profile"
                        className="w-32 h-32 rounded-full border-4 border-gray-300"
                    />
                    <label className="absolute bottom-0 right-0 bg-blue-700 text-white rounded-full p-2 cursor-pointer">
                        <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
                        🖉
                    </label>
                </div>
            </div>
            <div className="text-center mb-4">
                <h2 className="text-xl font-semibold">{user.username}</h2>
                <p className="text-gray-600">{user.email}</p>
                <p className="text-gray-400">{user.isAdmin ? 'Role: Admin' : 'Role: User'}</p>
            </div>
            <div className="flex flex-col items-center mt-4">
                <button onClick={handleUpload} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition mb-2" disabled={isUploading}>
                    {isUploading ? (
                        <div className="animate-spin inline-block w-5 h-5 border-4 border-white border-t-transparent rounded-full"></div>
                    ) : (
                        "Update Profile Picture"
                    )}
                </button>
                {!isEditing ? (
                    <button onClick={() => setIsEditing(true)} className="bg-red-300 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition">
                        Edit Profile
                    </button>
                ) : (
                    <>
                        <input
                            type="text"
                            placeholder="Update Name"
                            value={newName}
                            onChange={(e) => setNewName(e.target.value)}
                            className="p-2 border border-gray-300 rounded mb-2 w-full max-w-xs"
                        />
                        <input
                            type="email"
                            placeholder="Update Email"
                            value={newEmail}
                            onChange={(e) => setNewEmail(e.target.value)}
                            className="p-2 border border-gray-300 rounded mb-2 w-full max-w-xs"
                        />
                        <button
                            onClick={handleUpdateInfo}
                            className="bg-red-300 text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-green-500 transition mb-2"
                        >
                            Update
                        </button>
                        <button
                            onClick={() => setIsEditing(false)}
                            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500 transition"
                        >
                            Cancel
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Profile;
