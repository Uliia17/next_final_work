import {getUser} from '@/utils/getUser';

export async function GET() {
    const user = await getUser();
    if (!user) {
        return new Response(JSON.stringify({message: 'Користувач не авторизований'}), {
            status: 401,
        });
    }

    return new Response(JSON.stringify({user}), {status: 200});
}


