import { useEffect, useState } from "react";
import RecursoEqComputo from "./RecursoEqComputo";
import RecursoMobiliario from "./RecursoMobiliario";
import RecursoHerramienta from "./RecursoHerramienta";

const Registrorecursos = () => {
  const [recurso, setRecurso] = useState("seleccionRecurso");
  const [renderHerramienta, setRenderHerramienta] = useState(false);
  const [renderEqComputo, setRenderEqComputo] = useState(false);
  const [renderMobiliario, setRenderMobiliario] = useState(false);

  useEffect(() => {
    recurso === "eqcomputo"
      ? setRenderEqComputo(true)
      : setRenderEqComputo(false);
    recurso === "mobiliario"
      ? setRenderMobiliario(true)
      : setRenderMobiliario(false);
    recurso === "herramienta"
      ? setRenderHerramienta(true)
      : setRenderHerramienta(false);
  }, [recurso]);

  const handleOnChange = (e) => {
    setRecurso(e.target.value);
  };

  return (
    <>
    <br/>
      <div style={{ textAlign: "center" }}>
        <h3>Seleccione el tipo de recurso a ingresar al sistema:</h3>
      </div>
      <br/>
      <div style={{ textAlign: "center" }}>
        <select class="custom-select" value={recurso} onChange={handleOnChange}>
          <option value="seleccionRecurso">Selecciona el Recurso</option>
          <option value="herramienta">Herramienta</option>
          <option value="mobiliario">Mobiliario</option>
          <option value="eqcomputo">EQ. de Computo</option>
        </select>
      </div>

      <div>
        <br/>
        {renderHerramienta && <RecursoHerramienta />}
        {renderEqComputo && <RecursoEqComputo />}
        {renderMobiliario && <RecursoMobiliario />}
      </div>
    </>
  );
};
export default Registrorecursos;
