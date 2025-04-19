const Url = require('../models/Url');
const generateCode = require('../utils/generateCode');
const createShortUrl = async (req, res) => {
    const {url} =req.body;
    if(!url){
        return res.status(400).json({ error: 'Bad Request' });
    }
    let shortCode;
    let check;
    do{
        shortCode=generateCode();
        check = await Url.findOne({ shortCode });

    }while(check);
    try {
        const newUrl = new Url({ url, shortCode });
        await newUrl.save();
        res.status(200).json({
            id: newUrl._id,
            url: newUrl.url,
            shortCode: newUrl.shortCode,
            createdAt: newUrl.createdAt,
            updatedAt: newUrl.updatedAt,
            message: "Created"

          });
      } catch (err) {
        res.status(500).json({ error: 'Failed to create short URL' });
      }
}
const getOrignalUrl= async (req, res) => {
    const url =await Url.findOne({ shortCode:req.params.shortCode });
    if(!url){
        return res.status(404).json({ error: 'ShortUrl not found' });
    }

    try {
        url.accessCount++;
        // url.updatedAt=new Date();
        await url.save();
        res.status(201).json({
            id: url._id,
            url: url.url,
            shortCode: url.shortCode,
            createdAt: url.createdAt,
            updatedAt: url.updatedAt,
            message: "OK"
          });
      } catch (err) {
        res.status(500).json({ error: 'Failed to Retrive Orignal URL' });
      }
}
const urlController = {
    createShortUrl: createShortUrl,
    getOriginalUrl:getOrignalUrl,

  };
  
  module.exports = urlController;