import { execute } from '../../db.js'
import { WeakSessionStore } from '../services/sessions.js'
import BaseController from '../utils/BaseController'
import { BadRequest, UnAuthorized } from '../utils/Errors.js'

const sessions = new WeakSessionStore()

export class AccountController extends BaseController {
  constructor() {
    super('account')
    this.router
      .get('/auth', this.getUserFromSessionKey)
      .post('', this.login)
      .post('/create', this.create)
  }

  getUserFromSessionKey(req, res, next) {
    try {
      const sessionId = req.query.sessionid
      if (!sessionId) {
        throw new BadRequest('Invalid SessionId provided')
      }
      const session = sessions.checkSessionKey(sessionId)
      if (!session) {
        throw new UnAuthorized('Invalid session or expired please login to continue')
      }
      res.send(session.user)
    } catch (e) {
      next(e)
    }
  }

  /**
   * Sends found values to a client by request
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  async login(req, res, next) {
    try {
      const account = await execute(`SELECT * FROM accounts WHERE email = '${req.body.email}' AND password = '${req.body.password}' LIMIT 1;`)
      if (!account.length) {
        throw new UnAuthorized('Invalid Username or Password')
      }
      delete account[0].password
      const session = sessions.addSession(account[0])
      account[0].key = session.key
      res.cookie('authsession', session.key, { maxAge: session.expires, httpOnly: true })
      return res.send(account[0])
    } catch (error) {
      next(error)
    }
  }

  /**
   * Creates a value from request body and returns it
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  async create(req, res, next) {
    try {
      const id = `a${Math.floor(Math.random() * 999999)}b${Math.floor(Math.random() * 999999)}`
      const account = await execute(`
        INSERT INTO accounts(id, email, name, password, picture)
        VALUES("${id}","${req.body.email}", "${req.body.name}", "${req.body.password}", "https://codeworks.blob.core.windows.net/public/assets/img/anonymous.jpg");
      `)
      delete account.password
      res.send(account)
    } catch (error) {
      next(error)
    }
  }
}
