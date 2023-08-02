export default function ProjectInfoPage ({ params }: { params: { id: string } }) {
  return (
    <main className='flex flex-col items-center justify-between min-h-screen px-24 py-32 text-black bg-white'>
      {params.id}
      HOLA
    </main>
  )
}
