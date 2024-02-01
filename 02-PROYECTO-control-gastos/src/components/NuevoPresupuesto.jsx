const NuevoPresupuesto = () => {
  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form className="formulario">
        <div className="campo">
          <label htmlFor="">Definir Presupuesto</label>
          <input 
            type="text"
            name="" 
            id=""
            className="nuevo-presupuesto"
            placeholder="Añade tu Presupuesto"
          />
        </div>

        <input type="submit" value="Añadir" />

      </form>
    </div>
  )
}

export default NuevoPresupuesto;