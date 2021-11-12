const {validatorResult} = require('express-validator');


exports.createBlogPost = (req, res, next) => {
  const title = req.body.title;
  //const image = req.body.image;
  const body = req.body.body;

  const errors = validatorResult(req);

  if(!errors.isEmpty()){
    const err = new Error('Input value tidak sesuai');
    err.errorStatus = 400;
    err.data = errors.array();
    throw err;
  }

  const result = {
    message: 'Create Blog Success',
    data: {
      post_id : 1,
      title : "Title Blog",
      image: "imagefile.png",
      body : "Lorem Ipsum is simply.....",
      created_at : "11/11/2021",
      author : {
          uid: 1,
          name : "Testing"
      }
    }
  }
  res.status(201).json(result);
}