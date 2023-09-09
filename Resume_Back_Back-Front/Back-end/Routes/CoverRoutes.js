import {Router} from"express"
import CoverContro from"../Controllers/CoverControllers.js"
import authmiddle from "../middlewares/authmiddlewares.js"
const CoverRoutes=Router()
CoverRoutes.post('/Create',authmiddle,CoverContro.CreateCover)
CoverRoutes.get('/Get',authmiddle,CoverContro.GetAllCover)
export default CoverRoutes