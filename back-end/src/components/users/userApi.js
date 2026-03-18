import express from 'express'
import { userController } from './userController.js'
import { validateUserCreation }from '../../libraries/middlewares/validateUserCreation.js'

const router = express.Router()

router.post('/', validateUserCreation, userController)

export default router