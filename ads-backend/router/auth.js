const express = require('express');
const router = express.Router();
const Ads= require('../model/adsSchema');

router.get('/', (req,res)=>{
    res.send('home page')
});

//check if a email or phone already exists 
router.post('/fetchAds',async(req,res)=>{
    try{
    const {key} = req.body;
    if(!key && key!=="") return  res.status(400).json({error:"keyword not provided/Invalid keyword"})
    const keyword= new RegExp(key,'i');

    Ads.aggregate([
        {
          $lookup: {
            from: 'companyInfo',
            localField: 'companyId',
            foreignField: 'companyId',
            as: 'companyInfo'
          }
        },
        { $unwind : "$companyInfo" },
        { $match : { $or: [{primaryText : keyword}, {headline : keyword}, {description : keyword}, {'companyInfo.name':keyword}] } }
      ]).exec().then((ads)=>{
          console.log(ads);
          res.json({matchedAds:ads})
      }).catch((err)=>{
        return  res.status(500).json({error:"Unable to fetch with keyword "+key})
      })

    }catch(err){
        console.log(err);
        if(!key) return  res.status(500).json({error:err})
    }
})

module.exports = router;