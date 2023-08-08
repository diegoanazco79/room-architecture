import { casaArias, casaLeon, casaMontesOca } from '@/app/helpers/projects-ids'
import { casaAriasProject, casaLeonProject, casaMontesOcaProject, initialProject } from './constants'

export const getProjectData = (id: string) => {
  switch (id) {
    case casaArias:
      return casaAriasProject
    case casaLeon:
      return casaLeonProject
    case casaMontesOca:
      return casaMontesOcaProject
    default:
      return initialProject
  }
}
