import {NextResponse} from 'next/server';

export async function POST(request: Request) {
    const {username, password} = await request.json();

    const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username, password}),
    });

    if (!response.ok) {
        return NextResponse.json({message: 'Невірні дані'}, { status: 401 });
    }

    const data = await response.json();

    const responseWithCookies = NextResponse.json({message: 'Успішний вхід', user: data}, {status: 200});

    responseWithCookies.headers.set(
        'Set-Cookie',
        `authToken=${data.token}; Path=/; HttpOnly; Secure; SameSite=Strict`
    );

    responseWithCookies.headers.append(
        'Set-Cookie',
        `user=${encodeURIComponent(JSON.stringify(data))}; Path=/; HttpOnly; Secure; SameSite=Strict`
    );

    return responseWithCookies;
}




