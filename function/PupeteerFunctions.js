const puppeteer = require('puppeteer');
const fetch = require('node-fetch');
const {JSDOM} = require('jsdom');
const express = require('express');
const router = express.Router();
router.post('/MetaData',async(req,res)=>{
    try{
        const browser = await puppeteer.launch({ headless:true });
        const page = await browser.newPage();
        page.setDefaultNavigationTimeout(0);
        var data = [];
        for await(url of req.body.urls){
            console.log(url);
            await page.goto(url);
            var title = await page.evaluate(()=>{
                if(document.getElementsByTagName('title').length > 0){
                    return document.getElementsByTagName('title')[0].textContent;
                }else{
                    return null;
                }
            })
            data.push([url,title]);
        }
        await browser.close();
        console.log("Done 12");
        res.send({status:200,array:data});
    }catch(err){
        console.log(err);
        res.send({status:400,err:err.message,message:'Try Again !'});
    }
})
router.post('/RssReader',async(req,res)=>{
    try{
        var json = JSON.parse(JSON.stringify({}));
        const browser = await puppeteer.launch({ headless:true });
        const page = await browser.newPage();
        json['websiteUrl'] = req.body.url;
        await page.goto(req.body.url);
        var result = await page.evaluate(()=>{
        var rssLinks =  document.querySelectorAll('link[type="application/rss+xml"]');
        var list = [...rssLinks];
        return list.map(link => link.getAttribute('href'));
        })
        await browser.close();
        json['WEBSITE_RSS_CONTENT'] = [];
        for await (var url of result){
            var RSS_JSON = JSON.parse(JSON.stringify({}));
            console.log("For this RSS URL :- " + url);
            RSS_JSON['url'] = url;
            RSS_JSON['items'] = [];
            await fetch(url)
            .then(result =>{return result.text()})
            .then( (text) =>{
                let doc = new JSDOM(text,{contentType:"text/xml"}).window.document;
                let items = doc.querySelectorAll('item');
                console.log("No of <item> tags :- " + items.length);
                items.forEach((item)=>{
                    var item_JSON = JSON.parse(JSON.stringify({}));
                    item_JSON['title'] = item.querySelector('title').textContent
                    RSS_JSON.items.push(item_JSON);
                })
            })
            .catch((err)=>{console.log(err);res.send({status:400,err:err.message,message:"Try Once Again !"});})
            json.WEBSITE_RSS_CONTENT.push(RSS_JSON);
        }
        console.log("Done Successfully");
        res.send({status:200,'RSSReader':json});
    }catch(err){
        console.log(err);
        res.send({status:400,err:err.message,message:"Try Once Again !"});
    }
})
module.exports = router;