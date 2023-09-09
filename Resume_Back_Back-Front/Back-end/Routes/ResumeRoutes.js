import {Router} from"express"
import ResumeContro from "../Controllers/ResumeControllers.js"
import authmiddle from "../middlewares/authmiddlewares.js"
const ResumeRoutes=Router()
ResumeRoutes.post('/Create',authmiddle,ResumeContro.CreateResume)
ResumeRoutes.get('/Get',authmiddle,ResumeContro.GetAllResume)
export default ResumeRoutes