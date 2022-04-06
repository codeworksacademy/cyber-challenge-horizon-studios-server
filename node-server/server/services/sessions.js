import md5 from 'md5'

export class WeakSessionStore {
  sessions = {}
  addSession(user) {
    const sessionKey = md5(`${user.id}`)
    const session = this.sessions[sessionKey] = {
      expires: Date.now() + 9000000,
      user: user
    }
    return { key: sessionKey, expires: session.expires }
  }

  clearSession(sessionKey) {
    delete this.sessions[sessionKey]
  }

  checkSessionKey(sessionKey) {
    const session = this.sessions[sessionKey]
    if (!session) { return false }
    if (session.expires <= Date.now()) { return false }
    return session
  }
}
