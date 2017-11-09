const path = require('path')
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const compression = require('compression')
const session = require('express-session')
const cookie = require('cookie')
const PORT = process.env.PORT || 4444
const app = express()
const socketio = require('socket.io')
const rp = require('request-promise')
// const passport = require('passport')
// const SequelizeStore = require('connect-session-sequelize')(session.Store)
// const db = require('./db')
// const sessionStore = new SequelizeStore({ db })

module.exports = app

const BUNGIE = "https://www.bungie.net/en/User/Signin/Psnid"
const PSN = "https://auth.api.sonyentertainmentnetwork.com/login.do"
const PSN_OAUTH = "https://auth.api.sonyentertainmentnetwork.com/2.0/oauth/authorize"

if (process.env.NODE_ENV !== 'production') require('../secrets')

// body-parser
// morgan log


// app.use(express.static(path.join(__dirname, '..', 'public')))
// 	.use((req, res, next) => {
// 		if (path.extname(req.path).length) {
// 			const err = new Error('Not found')
// 			err.status = 404
// 			next(err)
// 			return null
// 		} else {
// 			next()
// 			return null
// 		}
// 	})

app.use('/login', (req, res, next) => {
	rp(BUNGIE)
		.then( res => {
			console.log(res);
		})
})

app.use('*', (req, res) => {
	res.sendFile(path.join(__dirname, '..', 'public/index.html'))
})

app.use((err, req, res, next) => {
	console.error(err)
	console.error(err.stack)
	res.status(err.status || 500).send(err.message || 'Internal server error.')
})

app.listen(PORT, () => {
	console.log(`Being veisty on port ${PORT}`)
})
