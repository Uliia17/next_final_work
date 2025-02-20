import {IUser} from '@/models/IUser';
import styles from '@/styles/UserPage.module.css';

async function fetchUser(id: string): Promise<IUser> {
    const res = await fetch(`https://dummyjson.com/users/${id}`);
    const user = await res.json();
    return user;
}

const UserPage = async ({params}: {params: {id: string}}) => {
    const {id} = await params;

    const user = await fetchUser(id);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{user.firstName} {user.lastName}</h1>
            <img className={styles.image} src={user.image} alt={`${user.firstName} ${user.lastName}`} />
            <p className={styles.email}>Email: {user.email}</p>
            <p className={styles.phone}>Телефон: {user.phone}</p>
            <p className={styles.address}>Адреса: {user.address.address}, {user.address.city}</p>
            <p className={styles.gender}>Стать: {user.gender}</p>
            <p className={styles.university}>Освіта: {user.university}</p>
            <p className={styles.company}>Місце роботи: {user.company.title}, {user.company.name}</p>
            <p className={styles.companyDetails}>Детальна інформація про місце роботи: {user.company.department}, {user.company.address.city}</p>
        </div>
    );
};

export default UserPage;







