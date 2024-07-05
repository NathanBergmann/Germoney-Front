import {NextRequest} from "next/server";
import { NextResponse } from 'next/server'
import { cookies } from "next/headers";

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}

export function middleware(request: NextRequest) {
	const authToken = cookies().get('authToken')

	if (request.nextUrl.pathname.startsWith('/user') && authToken !== undefined) {
		return NextResponse.redirect('http://localhost:3000/catalog')
	}

	if (request.nextUrl.pathname.startsWith('/product') && !authToken) {
		return NextResponse.redirect('http://localhost:3000/catalog')
	}
}