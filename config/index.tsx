export const config = {
  NAV_LINKS: [
    { label: 'Home', route: '/' },
    { label: 'Help', route: '/help' },
    { label: 'About', route: '/about' },
    { label: 'Courses', route: '/courses' },
    { label: 'Contact', route: '/contact' },
  ],

  SOCIAL_NETWORKS: [
    {
      label: 'facebook',
      link: 'https://www.facebook.com/coachlailafuenmayor',
      icon: <img src='/icons/facebook.svg' width='64' height='64' alt='facebook' />
    },
    {
      label: 'instagram',
      link: 'https://www.instagram.com/lailafuenmayor/',
      icon: <img src='/icons/instagram.svg' width='64' height='64' alt='instagram' />
    },
    {
      label: 'phone',
      link: 'https://api.whatsapp.com/send?phone=15203036074&text=%C2%A1Hola%2C%20Laila!%20Estuve%20viendo%20tu%20perfil%20en%20Instagram.%20Quisiera%20conversar%20contigo.%20Mi%20nombre%20es%20',
      icon: <img src='/icons/phone.svg' width='64' height='64' alt='phone-whatsapp' />
    },
  ],

  EMAIL_OWNER: 'script.kev@gmail.com'
}
