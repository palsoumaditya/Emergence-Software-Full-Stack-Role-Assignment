import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Soumaditya Pal - Full Stack Developer Portfolio',
    short_name: 'Soumaditya Pal',
    description: 'Portfolio website of Soumaditya Pal, a Full Stack Developer and Computer Science student showcasing projects, skills, and experience.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#6C47FF',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
