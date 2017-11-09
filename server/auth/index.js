// auth login for bnet and psn

const router = require('express').Router
const rp = require('request-promise')

module.exports = router

const BUNGIE = "https://www.bungie.net/en/User/Signin/Psnid"
const PSN = "https://auth.api.sonyentertainmentnetwork.com/login.do"
const PSN_OAUTH = "https://auth.api.sonyentertainmentnetwork.com/2.0/oauth/authorize"

rp(BUNGIE)
	.then(res => console.log(res))