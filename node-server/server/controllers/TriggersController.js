import { exec } from 'child_process'
import BaseController from '../utils/BaseController'
import { Forbidden } from '../utils/Errors.js'
import { logger } from '../utils/Logger.js'

export class TriggersController extends BaseController {
  constructor() {
    super('triggers')
    this.router
      .post('/git_push_trigger', this.pull)
  }

  /**
   * Sends found values to a client by request
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  async pull(req, res, next) {
    try {
      if (!req.body.config || req.body.config.secret !== 'horizon-studios') {
        throw new Forbidden('Invalid Secret')
      }
      res.send('Thanks 👍')
      logger.warn('[ATTEMPTING REMOTE TRIGGERED PULL]')
      exec('git pull', (err, stdout, stderr) => {
        if (err) {
          return logger.error('[TRIGGER_GIT_PULL_FAILURE]', { err })
        }
        logger.warn('[SUCCESSFULLY_PULLED]')
      })
    } catch (error) {
      next(error)
    }
  }
}
