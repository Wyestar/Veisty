// auth login for bnet and psn

import express from 'express'

const router = express.Router()

const BUNGIE = "https://www.bungie.net/en/User/Signin/Psnid"
const PSN = "https://auth.api.sonyentertainmentnetwork.com/login.do"
const PSN_OAUTH = "https://auth.api.sonyentertainmentnetwork.com/2.0/oauth/authorize"

router.get(BUNGIE, (req, res, next) => {
	console.log(res)
}