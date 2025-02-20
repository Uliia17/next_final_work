import {NextResponse} from 'next/server';

export async function POST() {
    const response = NextResponse.json({message: 'Вихід успішний'});

    response.headers.set('Set-Cookie', 'authToken=; Path=/; HttpOnly; Max-Age=0');
    response.headers.append('Set-Cookie', 'user=; Path=/; HttpOnly; Max-Age=0');

    return response;
}






