const express = require('express')
const UserController = require('./controller/UserController')
const AddressController = require('./controller/AddressController')

const router = express.Router()

router.get('/', (req, res) => {
    return res.json({ hello: "World again" })
})

router.get('/users', UserController.index)
router.post('/users', UserController.store)

router.get('/users/:user_id/addresses', AddressController.index)
router.post('/users/:user_id/addresses', AddressController.store)

module.exports = router