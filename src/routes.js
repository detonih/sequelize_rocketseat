const express = require('express')
const UserController = require('./controller/UserController')
const AddressController = require('./controller/AddressController')
const TechController = require('./controller/TechController')

const router = express.Router()

router.get('/', (req, res) => {
    return res.json({ hello: "World again" })
})

router.get('/users', UserController.index)
router.post('/users', UserController.store)

router.get('/users/:user_id/addresses', AddressController.index)
router.post('/users/:user_id/addresses', AddressController.store)

router.get('/users/:user_id/techs', TechController.index)
router.post('/users/:user_id/techs', TechController.store)
router.delete('/users/:user_id/techs', TechController.delete)

module.exports = router