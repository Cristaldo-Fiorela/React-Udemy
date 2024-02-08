import Gasto from "./Gasto";

const ListadoGastos = ({ gastos }) => {
  return (
    <div className="listado-gastos contenedor">
      <h2>{gastos.length ? 'Gastos' : 'No hay Gastos'}</h2>

      {gastos.map( gasto => (
        <Gasto
          gasto={gasto}
          key={gasto.id}
        />
      ))}

    </div>
)
}
export default ListadoGastos;