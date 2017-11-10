// auth login for bnet and psn

const router = require('express').Router
const rp = require('request-promise')

module.exports = router

const BUNGIE = "https://www.bungie.net/en/User/Signin/Psnid"
const PSN = "https://auth.api.sonyentertainmentnetwork.com/login.do"
const PSN_OAUTH = "https://auth.api.sonyentertainmentnetwork.com/2.0/oauth/authorize"

// searchDestinyPlayer
// Path: /Destiny2/SearchDestinyPlayer/{membershipType}/{displayName}/
// req
// mtype = 2
// displayname = gevurztraminer
// res
// destinyMembershipId = 4611686018433773881
//
// getProfile
// Path: /Destiny2/{membershipType}/Profile/{destinyMembershipId}/
// req
// mtype = 2
// destinyMembershipId = 4611686018433773881
// res
// characterId = multiple keyed values in an array
//
// getCharacter
// Path: /Destiny2/{membershipType}/Profile/{destinyMembershipId}/Character/{characterId}/
// req
// mtype = 2
// destinyMembershipId = 4611686018433773881
// characterId = multiple keyed values in an array
// res
// can get anything, like players characters item
//
//
// membershipType = 2
// destinyMembershipId = 4611686018433773881
// characterIds: [
//   "2305843009260778248",
//   "2305843009260778249",
//   "2305843009268398313" ]

rp(BUNGIE)
	.then(res => console.log(res))
