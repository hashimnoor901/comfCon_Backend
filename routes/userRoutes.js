const express = require('express')
const router = express.Router()

const User = require('../models/person')

router.post('/signup', (req,res)=>{
  try {
    const data = req.body
    const newUser = new User(data)
    const response = newUser.save()
    console.log('data saved')
    res.status(200).json({response})
    
  } catch (error) {
    console.log(error)
    res.status(500).json({error:'internal server error'})

  }
} )

module.exports = router
