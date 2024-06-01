module.exports = {
  title: 'EventCatalog',
  tagline: 'Discover, Explore and Document your Event Driven Architectures',
  organizationName: 'Your Company',
  projectName: 'Event Catalog',
  editUrl: 'https://github.com/boyney123/eventcatalog-demo/edit/master',
  trailingSlash: true,
  primaryCTA: {
    label: 'Explore Events',
    href: '/events'
  },
  secondaryCTA: {
    label: 'Getting Started',
    href:"https://www.eventcatalog.dev/"
  },
  logo: {
    alt: 'EventCatalog Logo',
    // found in the public dir
    src: 'logo.svg',
  },
  headerLinks: [
    { label: 'Services', href: '/services' },
    { label: 'Events', href: '/events'},
    { label: 'Users', href: '/users'},
    { label: 'Visualiser', href: '/visualiser' },
    { label: '3D Node Graph', href: '/overview' },
  ],
  footerLinks: [
    { label: 'Services', href: '/services' },
    { label: 'Events', href: '/events' },
    { label: 'Visualiser', href: '/visualiser' },
    { label: '3D Node Graph', href: '/overview' },
    { label: 'GitHub', href: 'https://github.com/boyney123/eventcatalog-demo/edit/master' }
  ],
  users: [
    {
      id: 'tmogdans',
      name: 'Tobias Mogdans',
      avatarUrl: 'https://2.gravatar.com/avatar/2d37471b3b3d7ef8cfe25e47f4d1ba901249a6fccbd629f02e5f6335de9de523?size=512',
      role: 'Developer',
    }
  ],
}
