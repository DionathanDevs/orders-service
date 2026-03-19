import  LoginService from "./loginService.js";
import { loginRepository } from "./loginRepository.js";
import loginAPI from "./loginAPI.js"

const loginService = new LoginService(loginRepository)

export {loginService, loginAPI} 