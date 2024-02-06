import { useState } from 'react';
import Mensaje from './Mensaje';
import CerrarBtn from '../img/cerrar.svg';

const Modal = ({ setModal, animarModal, setAnimarModal, guardarGasto }) => {

  const [mensaje, setMensaje] = useState('');

  const [nombre, setNombre] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [categoria, setCategoria] = useState('');

  const ocultarModal = () => {
    setModal(false);
    setAnimarModal(false);

    setTimeout(() => {
      setModal(false);
    }, 500);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if([cantidad,nombre, cantidad].includes('')) {
      setMensaje('Todos los campos son obligatorios');

      setTimeout(() => {
        setMensaje('');
      }, 3000);
      return;
    }

    // generando el objeto de gasto
    guardarGasto({nombre, cantidad, categoria});
  }

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img 
          src={CerrarBtn} 
          alt="cerrar modal"
          onClick={ocultarModal}
        />
      </div>

      <form 
        className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}
        onSubmit={handleSubmit}
      >
        <legend>Nuevo Gasto</legend>
        {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}

        <div className="campo">
          <label htmlFor="nombre">Nombre Gasto</label>
          <input 
            type="text"
            id="nombre"
            placeholder="Añade el Nombre del Gasto"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="campo">
          <label htmlFor="cantidad">Cantidad</label>
          <input 
            type="number"
            id="cantidad"
            placeholder="Añade la Cantidad del Gasto: ej. 300"
            value={cantidad}
            onChange={(e) => setCantidad(Number(e.target.value))}
          />
        </div>

        <div className="campo">
          <label htmlFor="categoria">Categoria</label>
          <select 
            id="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="">---SELECCIONE---</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="gastos">Gastos Varios</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
          </select>

          <input type="submit" value="Añadir Gasto" />

        </div>
      </form>
    </div>
  )
}

export default Modal;