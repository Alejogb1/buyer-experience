// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getValidSubdomain } from '~/utils/subdomain';

// RegExp for public files
const PUBLIC_FILE = /\.(.*)$/; // Files

export async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const host = req.headers.get('host');
  const subdomain = getValidSubdomain(host);
  console.log("attributes: ", url.pathname,)
    if (subdomain) {
      if (PUBLIC_FILE.test(url.pathname) || url.pathname.includes('_next')) return;
      // Subdomain available, rewriting
      console.log(`>>> Rewriting: ${url.pathname} to /s/${subdomain}${url.pathname}`); 
      if (host && host.includes('salesmeetings') && url.pathname == "/") {
        console.log(1)
        url.pathname = `/s/${subdomain}${url.pathname}`
        console.log("new pathname: ", `/s/${subdomain}${url.pathname}`)
        return NextResponse.rewrite(url);
      } 
      else {
        console.log("next response")
        return NextResponse.rewrite(req.nextUrl);
      }
    } else {
      url.pathname = '/'
      console.log(3)
      return NextResponse.rewrite(req.nextUrl);
    }
}