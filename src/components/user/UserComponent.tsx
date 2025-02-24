import Link from "next/link";
import {FC} from "react";
import {IUser} from "@/models/IUser";
import styles from '@/styles/User.module.css';

interface UserComponentProps {
    item: IUser;
}

const UserComponent: FC<UserComponentProps> = ({item}) => {
    return (
        <div className={styles.userContainer}>
            <Link href={`/users/${item.id}`}>
                <h2 className={styles.title}>{item.firstName} {item.lastName}</h2>
            </Link>
            <p className={styles.info}>Вік: {item.age}</p>
            <p className={styles.info}>Дата народження: {item.birthDate}</p>
        </div>
    );
};

export default UserComponent;


