import { Request, Response, RequestHandler} from 'express'

const ejemploController: RequestHandler = async (req: Request, res: Response) => {
    try{
        
        let respuestaProceso = "PROCESO EXITOSO";

        res.status(200).json(respuestaProceso)

    }
    catch (err: any) {
        res.status(400).json({
            status: 400,
            info: "Ocurrio un error en la peticion",
            respuesta: err.toString(),
        })
    }
}

export {ejemploController}
