const User = require('../model/User')

module.exports = {
  async index(req, res) {
    const user = await User.findAll()

    return res.json(user)
  },

  async store(req, res) {
    try {
      const { name, email } = req.body
      
      const user = await User.create({ name, email })
      
      return res.json(user)

    } catch (error) {
      console.log(error)
    }
  }
}