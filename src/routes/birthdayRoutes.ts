import { Router } from 'express';
import { addBirthday, getBirthday,updateBirthday,deleteBirthday } from '../controllers/birthdayController';

const router: Router = Router();

router.post('/', addBirthday);
router.get('/',getBirthday);
router.put('/:name',updateBirthday);
router.delete('/:name',deleteBirthday);



export default router;
