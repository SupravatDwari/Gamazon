import {createClient}  from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: '7x0ws9gh',
    dataset: 'production',
    apiVersion: '2023-03-31',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})

const builder = ImageUrlBuilder(client);

export function urlFor(source) {
    if (!source) {
      return '';
    }
    return builder.image(source).auto('format').fit('max').quality(80);
  }
