const {validatorResult} = require('express-validator');
const BlogPost = require('../models/blog');

exports.createBlogPost = (req, res, next) => {
  const errors = validatorResult(req);

  if(!errors.isEmpty()){
    const err = new Error('Input value tidak sesuai');
    err.errorStatus = 400;
    err.data = errors.array();
    throw err;
  }

    if(!req.file) {
      const err = new Error('Image Harus Di Upload');
      err.errorStatus = 422;
      throw err;
    }

  const title = req.body.title;
  const image = req.file.path;
  const body = req.body.body;

  const Posting = new BlogPost({
    title: title, 
    body: body,
    image: image,
    author: {uid: 1, name: 'Chendy'}
  })

  Posting.save()
      .then(result => {
        res.status(201).json({
          message: 'Create Blog Success',
          data: result
        });
   })
  .catch(err => {
      console.log('err', err);
  });
}
 