const Nosotros = () => {
  return (
    <div className="flex flex-col items-center">
      <img src="https://www.google.com/url?sa=i&url=http%3A%2F%2Frecla.org%2Fblog%2Fsostenibilidad-social%2F&psig=AOvVaw3qsXxRMwN-u5vTfypyDTj6&ust=1712541094625000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJCxg-v_roUDFQAAAAAdAAAAABAE" alt="Imagen de encabezado" className="w-full" />
      <div className="flex justify-center w-full py-4 gap-4">
        <div className="block">
          <h2 className="text-xl font-bold">Bloque 1</h2>
          <p>Subtítulo del bloque 1...</p>
          <textarea rows={4} cols={50}></textarea>
        </div>
        <div className="block">
          <h2 className="text-xl font-bold">Bloque 2</h2>
          <p>Subtítulo del bloque 2...</p>
          <textarea rows={4} cols={50}></textarea>
        </div>
        <div className="block">
          <h2 className="text-xl font-bold">Bloque 3</h2>
          <p>Subtítulo del bloque 3...</p>
          <textarea rows={4} cols={50}></textarea>
        </div>
      </div>
    </div>
  );
}

export default Nosotros;

