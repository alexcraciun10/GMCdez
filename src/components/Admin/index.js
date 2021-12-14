import { useState, useEffect } from 'react';
import { useAuth } from '../Firebase/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { SIGNIN } from '../../constants/routes';
import { db } from '../Firebase/firebase';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';

export default function Admin() {
    const [error, setError] = useState('');
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();

    const [piese, setPiese] = useState([]);
    const pieseCollectionRef = collection(db, 'piese');

    useEffect(() => {
        const getPiese = async () => {
            const data = await getDocs(pieseCollectionRef);
            setPiese(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getPiese();
    }, []);

    async function handleLogout() {
        setError('');

        try {
            await logout();
            navigate(SIGNIN);
        } catch {
            setError('Failed to log out');
        }
    }

    return (
        <div>
            {currentUser.email}
            <h1>Admin</h1>
            <Button variant="outlined" disableRipple="true" onClick={handleLogout}>
                Sign out
            </Button>
            {piese.map((piesa) => {
                return (
                    <div>
                        <h3>{piesa.id}</h3>
                        {' '}
                        <h4>cod piesa: {piesa.cod_piesa}</h4>
                        <h4>model: {piesa.model}</h4>
                    </div>
                );
            })}
        </div>
    );
}
