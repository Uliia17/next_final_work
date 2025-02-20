import {FC} from 'react';
import {IUser} from '@/models/IUser';
import UserComponent from '@/components/user/UserComponent';

interface UsersComponentProps {
    users: IUser[];
}

const UsersComponent: FC<UsersComponentProps> = ({users}) => {
    return (
        <div>
            {users.map((user) => (
                <UserComponent key={user.id} item={user}/>
            ))}
        </div>
    );
};

export default UsersComponent;
