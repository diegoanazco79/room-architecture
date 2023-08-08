/* Urls for projects types */
export const homeDesignUrl = 'home-design'
export const interiorDesignUrl = 'interior-design'
export const executedProjectsUrl = 'executed-projects'

export const projectsTypes = [
  {
    subHeader: '01',
    title: 'Diseño de Viviendas',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
    link: `/projects/${homeDesignUrl}`
  },
  {
    subHeader: '02',
    title: 'Diseño de Interiores',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
    link: `/projects/${interiorDesignUrl}`
  },
  {
    subHeader: '03',
    title: 'Proyectos Ejecutados',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
    link: `/projects/${executedProjectsUrl}`
  }
]
