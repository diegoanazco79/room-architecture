import ProjectType from './components/ProjectType'

import { projectsTypes } from './helpers/constants'

export default function ProjectsPage () {
  return (
    <main className='min-h-screen py-32 text-black bg-white'>
      <div className='max-w-screen-xl mx-auto responsive-px-4'>
        <h1 className='my-10 text-5xl font-semibold text-center'>Nuestros proyectos</h1>
        <div className='grid gap-8 gap-y-12 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14'>
          {projectsTypes.map((project, idx) => (
            <ProjectType
              key={idx}
              subHeader={project.subHeader}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </main>
  )
}
