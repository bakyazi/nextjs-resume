import { NextResponse, NextRequest } from 'next/server'
export async function middleware(req, ev) {
    const { pathname } = req.nextUrl
    if (pathname == '/blog') {
        return NextResponse.redirect('https://blog.imberkay.com/')
    }

    if (pathname == '/twitter') {
        return NextResponse.redirect('https://twitter.com/berkyzi')
    }

    if (pathname == '/github') {
        return NextResponse.redirect('https://github.com/bakyazi')
    }

    if (pathname == '/linkedin') {
        return NextResponse.redirect('https://www.linkedin.com/in/berkay-akyaz%C4%B1-a8b56310a/')
    }


    if (pathname == '/instagram') {
        return NextResponse.redirect('https://www.instagram.com/berkyzi/')
    }
    return NextResponse.next()
}