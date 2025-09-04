import {Router} from 'express';
import { crearUsuario,obtenerUsuarioPorId,obtenerUsuarios } from './usuarios.js';
const router = Router();

router.post('/crear', crearUsuario);
router.get('/obtener', obtenerUsuarios);
router.get('/obtener/:id', obtenerUsuarioPorId);

export default router;