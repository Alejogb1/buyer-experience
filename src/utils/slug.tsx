import Link from 'next/link';
import { NameToSlugLinkProps } from '~/types'

function NameToSlugLink({ name, text }: NameToSlugLinkProps) {
  const convertToSlug = (text: string) => {
    return text
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  };

  const slug = convertToSlug(name);

  return (
    <Link href={`/c/${encodeURIComponent(slug)}`} className='hover:underline'>
      {text}
    </Link>
  );
}

export default NameToSlugLink;
