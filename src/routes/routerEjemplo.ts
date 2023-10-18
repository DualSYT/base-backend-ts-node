import { Router } from "express";
import { ejemploController } from "../controllers/ejemploController";

const routerEjemplo = Router();

routerEjemplo.post("/ejemploController", ejemploController);

// Para el resto
routerEjemplo.post("/*", function (req, res) {
  res.status(404).json({
    status: 404,
    info: "URL Desconocida",
    respuesta: "Dirección URL no válida",
  });
});

export { routerEjemplo };
