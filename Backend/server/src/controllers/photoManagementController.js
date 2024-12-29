// Upload Photo:
// POST /photos/upload - This endpoint allows admins to upload new photos to the website.
async function uploadPhoto(req, res) {
  const { session } = req;

  const {
    imgTitle,
    description,
    imageURL,
    category,
    keyword,
    visibility,
    event,
    dimensions,
    fileSize,
  } = req.body;

  let uploadDate = new Date();
  let uploader = session.user.user_id;
  let role = session.user.role;

  if (role === "admin") {
    try {
      const { pool } = req;
      if (pool.connected) {
        let results = await pool
          .request()
          .input("imgTitle", imgTitle)
          .input("description", description)
          .input("imageURL", imageURL)
          .input("category", category)
          .input("keyword", keyword)
          .input("visibility", visibility)
          .input("event", event)
          .input("fileSize", fileSize)
          .input("dimensions", dimensions)
          .input("uploadDate", uploadDate)
          .input("uploader", uploader)
          .execute("addPhoto");

        if (results.rowsAffected[0] === 0) {
          res.status(400).send({
            success: false,
            data: "Image not Uploaded",
          });
        } else {
          res.status(201).send({
            success: true,
            data: results,
          });
        }
      } else {
        res
          .status(500)
          .send({ success: false, message: "Internal server error" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Internal server error",
      });
    }
  } else {
    res
      .status(401)
      .send({ success: false, message: "Only admins can Upload Photos" });
  }
}
// View All Photos:
// GET /photos - Retrieve a list of all photos, typically paginated.
async function getPaginatedPhotos(req, res) {
  const { page = 1, pageSize = 10 } = req.query;

  try {
    const { pool } = req;
    if (pool.connected) {
      const offset = (page - 1) * pageSize;
      let results = await pool
        .request()
        .input("Page", page)
        .input("PageSize", pageSize)
        .input("Offset", offset)
        .execute("GetPaginatedPhotos");

      console.log(results);

      if (results.recordset.length === 0) {
        res.status(404).send({
          success: true,
          data: [],
          message: "No Photos found for the given page",
        });
      } else {
        res.status(200).send({
          success: true,
          data: results.recordset,
        });
      }
    } else {
      res.status(500).send({
        success: false,
        message: "Internal server Error",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Internal server error",
    });
  }
}

// View All Photos:
// GET /photos - Retrieve a list of all photos
async function getAllPhotos(req, res) {
  try {
    const { pool } = req;
    if (pool.connected) {
      let results = await pool.request().execute("GetAllPhotos");
      console.log(results);

      if (results.recordset.length === 0) {
        res.status(400).send({
          success: false,
          data: "Unable to fetch all photos",
        });
      } else {
        res.status(201).send({
          success: true,
          data: results,
        });
      }
    } else {
      res
        .status(500)
        .send({ success: false, message: "Internal server Error " });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Internal server error",
    });
  }
}

// View Photo by ID:
// GET /photos/{photoID} - Retrieve a specific photo by its unique ID.
async function viewPhotoById(req, res) {
  const { pool } = req;
  let { photoID } = req.params;
  try {
    if (pool.connected) {
      let results = await pool
        .request()
        .input("photoID", photoID)
        .execute("GetPhotoByID");
      console.log("this is ", photoID);
      if (results.recordset.length === 0) {
        res.status(400).send({
          success: false,
          message: `Unable to fetch image with id ${photoID}`,
        });
      } else {
        res.status(201).send({
          success: true,
          data: results,
        });
      }
    } else {
      res
        .status(500)
        .send({ success: false, message: "Internal server Error" });
    }
  } catch (error) {
    console.log(error);
  }
}

// Edit Photo:
// PUT /photos/{photoID} - Update the details of a specific photo.
async function editPhoto(req, res) {
  const { session } = req;

  const {
    photoID,
    imgTitle,
    description,
    category,
    keyword,
    visibility,
    event,
    dimensions,
  } = req.body;

  let role = session.user.role;

  if (role === "admin") {
    try {
      const { pool } = req;
      if (pool.connected) {
        let results = await pool
          .request()
          .input("photoID", photoID)
          .input("imgTitle", imgTitle)
          .input("description", description)
          .input("category", category)
          .input("keyword", keyword)
          .input("visibility", visibility)
          .input("event", event)
          .input("dimensions", dimensions)
          .execute("EditPhoto");

        if (results.rowsAffected[0] === 0) {
          res.status(400).send({
            success: false,
            message: "Unable to update image details try again",
          });
        } else {
          res.status(201).send({
            success: true,
            data: results,
          });
        }
      } else {
        res.status(500).send({
          success: false,
          message: "internal server error",
        });
      }
    } catch (error) {
      console.log(error);
    }
  } else {
    res.status(401).send({
      success: false,
      message: "Only admins can Edit Photos",
    });
  }
}

// Delete Photo:
// DELETE /photos/{photoID} - Delete a specific photo.

async function deletePhoto(req, res) {
  const { session } = req;

  const { photoID } = req.body;

  let role = session.user.role;

  if (role === "admin") {
    try {
      const { pool } = req;
      if (pool.connected) {
        let results = await pool
          .request()
          .input("photoId", photoID)
          .execute("DeletePhoto");

        if (results.rowsAffected[0] === 0) {
          res.status(400).send({
            success: false,
            message: "Unable to delete the selected Photo",
          });
        } else {
          res.status(201).send({
            success: true,
            data: results,
          });
        }
      } else {
        res.status(500).send({
          success: false,
          message: "Internal server error",
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Internal server error",
      });
    }
  } else {
    res.status(401).send({
      success: false,
      message: "Only admins can Delete photos",
    });
  }
}
// Like Photo:
// POST /photos/{photoID}/like - Allow users to like a specific photo.

// Comment on Photo:
// POST /photos/{photoID}/comment - Allow users to add comments to a specific photo.

// Get Comments for Photo:
// GET /photos/{photoID}/comments - Retrieve comments associated with a specific photo.

// Search Photos by Keyword:
// GET /photos/search?keyword={keyword} - Search for photos using keywords.

async function searchPhotos(req, res) {
  const { keyword } = req.query;

  try {
    const { pool } = req;
    if (pool.connected) {
      const request = pool.request();

      // Execute the stored procedure with the keyword parameter
      request.input("Keyword", keyword);
      const result = await request.execute("SearchPhotosByKeyword");

      const photos = result.recordset;

      if (photos.length > 0) {
        res.status(200).json({
          success: true,
          data: photos,
        });
      } else {
        res.status(404).json({
          success: false,
          data: [],
          message: `No photos found matching the keyword: ${keyword}`,
        });
      }
    } else {
      res.status(500).send("Internal server error");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
}

// Filter Photos by Category:
// GET /photos/filter?category={category} - Filter photos by category or album.

async function filterPhotosByCategory(req, res) {
  const { category } = req.query;

  try {
    const { pool } = req;
    if (pool.connected) {
      const request = pool.request();

      // Execute the stored procedure with the category parameter
      request.input("Category", category);
      const result = await request.execute("FilterPhotosByCategory");

      const photos = result.recordset;

      if (photos.length > 0) {
        res.status(200).json({
          success: true,
          data: photos,
        });
      } else {
        res.status(404).json({
          success: true,
          data: [],
          message: "No photos found in the specified category.",
        });
      }
    } else {
      res.status(500).send("Internal server error");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
}

// Get User's Uploaded Photos:
// GET /photos/user/{userID} - Retrieve photos uploaded by a specific user.

// Get Popular Photos:
// GET /photos/popular - Retrieve a list of popular or most-liked photos.

// Get Recent Photos:
// GET /photos/recent - Retrieve a list of the most recent photos.

async function getRecentPhotos(req, res) {
  try {
    const { pool } = req;
    if (pool.connected) {
      const request = pool.request();

      // Execute the stored procedure to get recent photos
      const result = await request.execute("GetRecentPhotos");

      const recentPhotos = result.recordset;

      if (recentPhotos.length > 0) {
        res.status(200).json({
          success: true,
          data: recentPhotos,
        });
      } else {
        res.status(404).json({
          success: true,
          data: [],
          message: "No recent photos found.",
        });
      }
    } else {
      res.status(500).send("Internal server error");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
}

// Download Photo:
// GET /photos/{photoID}/download - Allow users to download a specific photo.

// Flag Inappropriate Photo:
// POST /photos/{photoID}/flag - Allow users to report inappropriate photos for moderation.

// Manage Photo Visibility:
// PUT /photos/{photoID}/visibility - Update the visibility status of a photo (public, private, etc.).

// Get Photo Metadata:
// GET /photos/{photoID}/metadata - Retrieve metadata associated with a specific photo, such as resolution and file size.

// Get Photo Likes:
// GET /photos/{photoID}/likes - Retrieve the list of users who liked a specific photo.

module.exports = {
  uploadPhoto,
  getAllPhotos,
  viewPhotoById,
  editPhoto,
  deletePhoto,
  getPaginatedPhotos,
  getRecentPhotos,
  filterPhotosByCategory,
  searchPhotos,
};
