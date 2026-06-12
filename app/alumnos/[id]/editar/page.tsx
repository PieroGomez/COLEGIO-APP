export default function Page({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Editar alumno</h1>
      <p>ID del alumno: {params.id}</p>
    </div>
  );
}