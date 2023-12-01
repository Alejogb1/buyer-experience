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

}
