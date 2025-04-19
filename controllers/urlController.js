const Url = require('../models/Url');
const generateCode = require('../utils/generateCode');
const createShortUrl = async (req, res) => {
    const {url} =req.body;
    if(!url){
        return res.status(400).json({ error: 'URL is required' });
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
        res.status(201).json({
            id: newUrl._id,
            url: newUrl.url,
            shortCode: newUrl.shortCode,
            createdAt: newUrl.createdAt,
            updatedAt: newUrl.updatedAt
          });
      } catch (err) {
        res.status(500).json({ error: 'Failed to create short URL' });
      }
}
const urlController = {
    createShortUrl: createShortUrl,

  };
  
  module.exports = urlController;