const express = require('express')
const UserController = require('./controller/UserController')
const router = express.Router()

router.get('/', (req, res) => {
    return res.json({ hello: "World again" })
})

router.get('/users', UserController.index)
router.post('/users', UserController.store)

module.exports = router