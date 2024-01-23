const Paciente = () => {
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {""}
        <span className="font-normal normal-case">Donna</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {""}
        <span className="font-normal normal-case">Fio</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">Email: {""}
        <span className="font-normal normal-case">correo@correo.com</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {""}
        <span className="font-normal normal-case">23 enero de 2024</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {""}
        <span className="font-normal normal-case">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae pariatur, alias ab veritatis excepturi at impedit veniam culpa magnam totam velit quaerat.</span>
      </p>
    </div>  
  )
}

export default Paciente