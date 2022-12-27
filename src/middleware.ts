import type { NextFetchEvent, NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export async function middleware(req: NextRequest, _ev: NextFetchEvent) {
  const ContentSecurityPolicy = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' giscus.app *.honghong.me data:;
    style-src 'self' 'unsafe-inline' fonts.googleapis.com;
    img-src * blob: data:;
    media-src;
    connect-src *;
    font-src 'self' fonts.gstatic.com;
    frame-src giscus.app *.youtube.com;
  `

  const response = NextResponse.next()

  response.headers.set(
    'Content-Security-Policy',
    ContentSecurityPolicy.replace(/\n/g, '')
  )
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  /* response.headers.set( */
  /*   'Permissions-Policy', */
  /*   'camera=(), microphone=(), geolocation=()' */
  /* ) */
  /* response.headers.set( */
  /*   'Strict-Transport-Security', */
  /*   'max-age=31536000; includeSubDomains; preload' */
  /* ) */
  /*   response.headers.set('X-Frame-Options', 'DENY') */
  /*   response.headers.set('X-Content-Type-Options', 'nosniff') */
  /*   response.headers.set('X-DNS-Prefetch-Control', 'on') */

  const { pathname } = req.nextUrl;

  const node_env = process.env.NODE_ENV;
  const baseURL = node_env === 'production' ? 'https://pharma-interface.vercel.app' : 'http://localhost:3000';

  if (pathname === '/admin') {
    return NextResponse.redirect(`${baseURL}/admin/index.html`);
  }

  if (pathname === '/product') {
    return NextResponse.redirect(`${baseURL}/product/medicalEquipment`);
  }

  if (pathname === '/blog') {
    return NextResponse.redirect(`${baseURL}/blog/health`);
  }

  return response;

}
