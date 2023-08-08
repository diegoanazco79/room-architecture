import { homeDesignProjects, interiorDesignProjects, executedProjects } from './constants'
import { homeDesignUrl, interiorDesignUrl, executedProjectsUrl } from '../../helpers/constants'

/**
 * Returns the title of the project type
 * @param {string} projectType
 * @returns {string}
 */
export const getTitle = (projectType: string) => {
  switch (projectType) {
    case homeDesignUrl:
      return 'Diseño de Viviendas'
    case interiorDesignUrl:
      return 'Diseño de Interiores'
    case executedProjectsUrl:
      return 'Proyectos Ejecutados'
    default:
      return ''
  }
}

/**
 * Returns the list of projects of the project type
 * @param {string} projectType
 * @returns {Array}
 */
export const getProjectsList = (projectType: string) => {
  switch (projectType) {
    case homeDesignUrl:
      return homeDesignProjects
    case interiorDesignUrl:
      return interiorDesignProjects
    case executedProjectsUrl:
      return executedProjects
    default:
      return []
  }
}
