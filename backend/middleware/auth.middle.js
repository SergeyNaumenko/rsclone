const jwt = require('jsonwebtoken')
const config = require('../config')

export default (req, res, next) => {
  if (req.method === 'OPTIONS') {
    return next()
  }

  try {
    const token = req.headers.authorization.split(' ')[1] // "Bearer TOKEN"
    if (!token) {
      return res.status(401).json({ message: 'Нет авторизации 1' ,token:token})
    }
    console.log(token);
    const decoded = jwt.verify(token, config.default.secret)
    req.user = decoded
    next()
  } catch (e) {
    res.status(401).json({ message: 'Нет авторизации 2',token:token})
  }
}