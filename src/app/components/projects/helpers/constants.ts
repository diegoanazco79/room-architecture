import { casaArias, casaLeon, casaMontesOca } from '@/app/helpers/projects-ids'

import { homeDesignUrl, interiorDesignUrl, executedProjectsUrl } from '@/app/projects/helpers/constants'

export const mainProjects = [
  {
    name: 'Diseño para Julia',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,    when an unknown printer took a galley of type and scrambled it to make a type    specimen book. It has survived not only five centuries, but also the leap into    electronic typesetting, remaining essentially unchanged.",
    caption: 'Diseño de interiores',
    desktopImage: 'https://i.imgur.com/pYWnXar.jpg',
    mobileImage: 'https://i.imgur.com/hfk1SgP.jpg',
    url: `${executedProjectsUrl}/${casaLeon}`
  },
  {
    name: 'Casa con amplio jardín',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,    when an unknown printer took a galley of type and scrambled it to make a type    specimen book. It has survived not only five centuries, but also the leap into    electronic typesetting, remaining essentially unchanged.",
    caption: 'Diseño de proyecto',
    desktopImage: 'https://i.imgur.com/mDa8RUN.jpg',
    mobileImage: 'https://i.imgur.com/CKsLQfF.jpg',
    url: `${homeDesignUrl}/${casaMontesOca}`
  },
  {
    name: 'Casa con jardín lateral',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,    when an unknown printer took a galley of type and scrambled it to make a type    specimen book. It has survived not only five centuries, but also the leap into    electronic typesetting, remaining essentially unchanged.",
    caption: 'Proyecto construido',
    desktopImage: 'https://i.imgur.com/RxR2yqE.jpg',
    mobileImage: 'https://i.imgur.com/a6fl4WK.jpg',
    url: `${interiorDesignUrl}/${casaArias}`
  }
]
