import { casaArias, casaLeon, casaMontesOca } from '@/app/helpers/projects-ids'

export const getProjectData = (id: string) => {
  const projectData = {
    name: '',
    firstDescription: '',
    secondDescription: '',
    typology: '',
    country: '',
    year: ''
  }

  switch (id) {
    case casaArias:
      projectData.name = 'CASA ARIAS'
      projectData.firstDescription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
      projectData.secondDescription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type."
      projectData.typology = 'Residencial'
      projectData.country = 'Arequipa - Perú'
      projectData.year = '2018'
      break

    case casaLeon:
      projectData.name = 'CASA LEÓN'
      projectData.firstDescription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
      projectData.secondDescription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type."
      projectData.typology = 'Residencial'
      projectData.country = 'Colombia - Bogotá'
      projectData.year = '2020'
      break

    case casaMontesOca:
      projectData.name = 'CASA MONTES DE OCA'
      projectData.firstDescription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
      projectData.secondDescription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type."
      projectData.typology = 'Residencial'
      projectData.country = 'Argentina - Buenos Aires'
      projectData.year = '2023'
      break

    default:
      projectData.name = ''
      projectData.firstDescription = ''
      projectData.secondDescription = ''
      projectData.typology = ''
      projectData.country = ''
      projectData.year = ''
      break
  }

  return projectData
}
