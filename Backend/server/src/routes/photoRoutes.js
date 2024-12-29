const express=require('express')

const photosRouter=express.Router()

const {uploadPhoto,getAllPhotos,viewPhotoById,editPhoto,deletePhoto,getPaginatedPhotos,searchPhotos, filterPhotosByCategory, getRecentPhotos}=require('../controllers/photoManagementController')

const { sessionAuthorization } = require('../middlewares/sessionAuthorization').default

photosRouter.use(sessionAuthorization)
photosRouter.post("/uploadPhoto",uploadPhoto)
photosRouter.get("/getAllPhotos",getAllPhotos)
photosRouter.get("/getPhotoByID/:photoID", viewPhotoById)
photosRouter.put("/editPhoto", editPhoto)
photosRouter.delete("/deletePhoto", deletePhoto)
photosRouter.get("/getPaginatedPhotos",getPaginatedPhotos)
photosRouter.get("/searchPhotos",searchPhotos)
photosRouter.get("/filterPhotosByCategory",filterPhotosByCategory)
photosRouter.get("/getRecentPhotos",getRecentPhotos)



module.exports=photosRouter