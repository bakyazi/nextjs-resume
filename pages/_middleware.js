import { NextResponse, NextRequest } from 'next/server'
export async function middleware(req, ev) {
    const { pathname } = req.nextUrl
    if (pathname == '/blog') {
        return NextResponse.redirect('https://blog.imberkay.com/', 302)
    }

    if (pathname == '/twitter') {
        return NextResponse.redirect('https://twitter.com/berkyzi', 302)
    }

    if (pathname == '/github') {
        return NextResponse.redirect('https://github.com/bakyazi', 302)
    }

    if (pathname == '/linkedin') {
        return NextResponse.redirect('https://www.linkedin.com/in/berkay-akyaz%C4%B1-a8b56310a/', 302)
    }


    if (pathname == '/instagram') {
        return NextResponse.redirect('https://www.instagram.com/berkyzi/', 302)
    }
    return NextResponse.next()
}