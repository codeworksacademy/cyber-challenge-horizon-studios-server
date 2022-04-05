import { execute } from '../../db.js'
import BaseController from '../utils/BaseController'

export class ProductsController extends BaseController {
  constructor() {
    super('api/products')
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
      const products = await execute(`
      SELECT * FROM products WHERE quantity > 0;
      `)
      return res.send(products)
    } catch (error) {
      next(error)
    }
  }
}
