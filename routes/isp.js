const express = require("express");
const phantom=require("phantom");

const router = express.Router();

//name, lowest_price, rating, max_speed, description, contact_number, email, image, url 
isps=[
    {name:"BSNL",lowest_price:100,rating:3,max_speed:'50mbps',description:"BSNL",contact_number:9876543210,email:"bsnl@co.in",image:"",url:""},
    {name:"JIO",lowest_price:110,rating:5,max_speed:'50mbps',description:"JIO",contact_number:9876543210,email:"bsnl@co.in",image:"",url:""},
    {name:"Vodafone-Idea",lowest_price:120,rating:4,max_speed:'50mbps',description:"Vodafone-Idea",contact_number:9876543210,email:"bsnl@co.in",image:"",url:""},
    {name:"Tata",lowest_price:90,rating:3,max_speed:'50mbps',description:"Tata",contact_number:9876543210,email:"bsnl@co.in",image:"",url:""},
    {name:"MTNL",lowest_price:140,rating:3,max_speed:'50mbps',description:"MTNL",contact_number:9876543210,email:"bsnl@co.in",image:"",url:""},
    {name:"Hathway",lowest_price:80,rating:4,max_speed:'50mbps',description:"Hathway",contact_number:9876543210,email:"bsnl@co.in",image:"",url:""},
    {name:"Reliance",lowest_price:160,rating:2,max_speed:'50mbps',description:"Reliance",contact_number:9876543210,email:"bsnl@co.in",image:"",url:""}
]

router.get("/getIsp",(req, res, next) => {
    res.send(isps);
})

router.get("/getIspPdf",(req,res,next)=>{
    phantom.create().then(function(ph) {
        ph.createPage().then(function(page) {
            page.open("http://www.google.com").then(function(status) {
                page.render('google.pdf').then(function() {
                    console.log('Page Rendered');
                    ph.exit();
                });
            });
        });
    });
})

module.exports = router;