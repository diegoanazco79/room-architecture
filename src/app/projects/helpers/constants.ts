/* Urls for projects types */
export const homeDesignUrl = 'home-design'
export const interiorDesignUrl = 'interior-design'
export const executedProjectsUrl = 'executed-projects'

export const projectsTypes = [
  {
    title: 'Diseño de Viviendas',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
    link: `/projects/${homeDesignUrl}`,
    image: 'https://i.imgur.com/hfk1SgP.jpg'
  },
  {
    title: 'Diseño de Interiores',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
    link: `/projects/${interiorDesignUrl}`,
    image: 'https://i.imgur.com/hfk1SgP.jpg'
  },
  {
    title: 'Proyectos Ejecutados',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
    link: `/projects/${executedProjectsUrl}`,
    image: 'https://i.imgur.com/hfk1SgP.jpg'
  }
]
