import { execute } from '../../db.js'
import BaseController from '../utils/BaseController'

export class EmployeesController extends BaseController {
  constructor() {
    super('employees')
    this.router
      .get('', this.getAll)
  }

  /**
   * Sends found values to a client by request
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  async getAll(req, res, next) {
    try {
      const employees = await execute(`
      SELECT * FROM accounts WHERE employee = 1;
      `)
      employees.forEach(e => {
        delete e.password
      })
      return res.send(employees)
    } catch (error) {
      next(error)
    }
  }
}
