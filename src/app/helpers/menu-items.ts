interface MenuItem {
  label: string;
  url: string;
}

export const menuItems: MenuItem[] = [
  {
    label: 'Inicio',
    url: '/'
  },
  {
    label: 'Proyectos',
    url: '/projects'
  },
  {
    label: 'Nosotros',
    url: '/about'
  },
  {
    label: 'Contacto',
    url: '/contact'
  }
]
