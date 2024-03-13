import express from "express";
import formidable from "express-formidable";

import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  brainTreePaymentController,
  braintreeTokenController,
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productCategoryController,
  productCountController,
  productFilterController,
  productListController,
  productPhotoController,
  relatedProductController,
  searchProductController,
  updateProductController,
} from "../controllers/productController.js";

const router = express.Router();

// routes

router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);
//   routes

router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

// get products

router.get("/get-product", getProductController);

//single product

router.get("/get-product/:slug", getSingleProductController);

// get Photo

router.get("/product-photo/:pid", productPhotoController);

// delete product

router.delete("/delete-product/:pid", deleteProductController);

//Filter Product

router.post("/product-filters", productFilterController);

// product count
router.get("/product-count", productCountController);

// Product Per Page

router.get("/product-list/:page", productListController);

// Search Product

router.get("/search/:keyword", searchProductController);

// similar product

router.get("/related-product/:pid/:cid", relatedProductController);

//category wise product

router.get("/product-category/:slug", productCategoryController)


// payments routes

//token 
router.get('/braintree/token', braintreeTokenController)

// payments 
 router.post('/braintree/payment', requireSignIn , brainTreePaymentController)



export default router;
