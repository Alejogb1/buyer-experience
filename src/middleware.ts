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

  if (subdomain) {
    if (PUBLIC_FILE.test(url.pathname) || url.pathname.includes('_next')) return;
    // Subdomain available, rewriting
    console.log(`>>> Rewriting: ${url.pathname} to ${subdomain}${url.pathname}`);
    url.pathname = `/s/${subdomain}${url.pathname}`;
    return NextResponse.rewrite(url);
  } 
  return NextResponse.next();
}
