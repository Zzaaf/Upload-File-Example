import multer from 'multer'

const upload = multer({ dest: './public/uploads/' })

export const uploadMid = upload.single('image')

export const postHome = (req, res) => {
  const fileArr = []
  console.log(req.file)
  fileArr.push({ src: `/img/uploads/${req.file.filename}` })
  console.log(fileArr);
  res.render('gallery', { fileArr })
}