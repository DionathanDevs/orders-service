import express from 'express'
import { userController, userUpdateController } from './userController.js'
import { validateUserCreation } from '../../libraries/middlewares/users/validateUserCreation.js'
import { validateUserUpdate } from '../../libraries/middlewares/users/validateUserUpdate.js'


const router = express.Router()

router.post('/', validateUserCreation, userController)

router.put('/:id', validateUserUpdate, userUpdateController)

export default router