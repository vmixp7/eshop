import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Redirect } from 'react-router-dom';
import _ from 'lodash';
import ReactImageMagnify from 'react-image-magnify';
import { LinkOutlined } from '@ant-design/icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import MySpinner from '../../components/MySpinner';

import { loadProduct } from '../../store/actions/productDetails';
import { likeProduct, unlikeProduct } from '../../store/actions/liked';
import { showToast, hideToast } from '../../store/actions/toast';
import { Rate, Popover, Button } from 'antd';


import {
  addProductToCart,
  removeProductFromCart,
} from '../../store/actions/cart';

import './styles.css';

const ProductDetails = ({
  productDetails,
  loadProduct,
  match,
  addProductToCart,
  removeProductFromCart,
  likeProduct,
  unlikeProduct,
  cart,
  liked,
  showToast,
  hideToast,
}) => {
  const { product, isLoading, error } = productDetails;



  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    loadProduct(match.params.id);
  }, []);

  function toggleLike() {
    if (!isLiked()) {
      likeProduct(product);
      showToast({ title: 'Notification', text: 'You liked the product.' });
    } else {
      unlikeProduct(product);
      showToast({ title: 'Notification', text: 'You unliked the product.' });
    }
  }

  function isLiked() {
    const isLiked =
      liked.likedProducts.length > 0 &&
      liked.likedProducts.find(p => p.id === product.id);
    return isLiked;
  }

  function toggleAddProduct() {
    if (!isAdded()) {
      addProductToCart(product);
      showToast({
        title: 'Notification',
        text: 'You added product to the cart.',
      });
    } else {
      removeProductFromCart(product);
      showToast({
        title: 'Notification',
        text: 'You removed product from the cart.',
      });
    }
  }

  function isAdded() {
    const isAdded =
      cart.cartProducts.length > 0 &&
      cart.cartProducts.find(p => p.product.id === product.id);
    return isAdded;
  }
  if (error) return <Redirect to={'/error'} />;
  if (isLoading) return <MySpinner key={0} text={'Loading...'} />;

  //console.log(productDetails);
  return (

    product && (

      <div className="card mb-3">
        <div className="row no-gutters">
          <aside className="col-sm-5 border-right">
            <div>
              <img
                className="main-img d-md-none"
                src={require(`../../static/products/${product.image}`)}
              />
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: product.shortDescription,
                    isFluidWidth: true,
                    src: require(`../../static/products/${product.image}`),
                  },
                  largeImage: {
                    src: require(`../../static/products/${product.image}`),
                    width: 1200,
                    height: 1200,
                  },
                  enlargedImageContainerStyle: {
                    zIndex: 9,
                    backgroundColor: 'white',
                    objectFit: 'cover',
                  },
                  enlargedImageContainerDimensions: {
                    width: '150%',
                    height: '120%',
                  },
                  className: 'd-none d-md-block ',
                }}
              />
            </div>
          </aside>
          <aside className="col-sm-7">
            <article className="p-5">
              <h3 className="title mb-3">{product.name}</h3>

              <div className="mb-3">
                <var className="price h3 text-success">
                  <span className="currency">US $</span>
                  <span className="num">{product.price.toFixed(2)}</span>
                </var>
              </div>
              <Rate allowHalf defaultValue={product.rate} />{' '}( {product.rate_num} )<br />
              <h7><b> Inventory : {product.qty_num}</b></h7><br /><br />
              <button
                style={{ marginBottom: 10 }}
                onClick={toggleLike}
                className={isLiked() ? 'btn btn-success' : 'btn btn-primary'}
              >
                {isLiked() ? 'Liked' : 'Like it'}
              </button>
              <button
                style={{ marginBottom: 10 }}
                onClick={toggleAddProduct}
                className={
                  !isAdded()
                    ? 'btn  btn-outline-primary'
                    : 'btn  btn-outline-danger'
                }
              >
                <i className="fa fa-shopping-cart"></i>{' '}
                {!isAdded() ? 'Add to Cart' : 'Added to Cart'}
              </button>

              <Popover placement="bottom" title={"information"} content={<div>

                <ol style={{ listStyle: 'none', marginRight: 10 }}>
                  <li>Block Location: </li>
                  <li> {product.block_id} </li>
                  <li>Contract Account: </li>
                  <li> {product.b1} </li>
                  <li>Factory: </li>
                  <li> {product.b2} </li>
                  <li>Logistic A: </li>
                  <li> {product.b3} </li>
                  <li>Contract Account: </li>
                  <li> {product.b4} </li>
                  <li>Exporter: </li>
                  <li> {product.b5} </li>
                  <li>International Logistics: </li>
                  <li> {product.b6} </li>
                  <li>Importer:</li>
                  <li> {product.b7} </li>
                </ol>
              </div>} trigger="click">
                <Button style={{ marginBottom: 10, marginLeft: 20 }} className="btn btn-outline-dark">
                  <LinkOutlined style={{ fontSize: '20px' }} /> {' '} BlockCain Detail</Button>
              </Popover>



              <dl className="row">

                <dt className="col-sm-3">Color</dt>
                <dd className="col-sm-9">{product.color}</dd>

                <dt className="col-sm-3">Delivery</dt>
                <dd className="col-sm-9">{product.delivery}</dd>
              </dl>

              <hr />
              <div className="row">
                <div className="col-sm-5">
                  <dl className="dlist-inline">
                    <dt>Weight: </dt>
                    <dd className="pl-2">
                      <span className="form-check-label">{`${product.weight}`}</span>
                    </dd>
                  </dl>
                </div>
                <div className="col-sm-7">
                  <dl className="dlist-inline">
                    <dt>Size: </dt>
                    <dd>
                      <span className="form-check-label">{`${product.size}`}</span>
                    </dd>
                  </dl>
                </div>
              </div>
              <hr />
              {product.id === 1 &&
                <div>
                  <h7><b>About this item</b></h7>
                  <ol style={{ listStyle: 'disc' }}>
                    <li>Niosh-Approved N95 for at least 95% filtration efficiency against certain Non-Oil-Based Particles and Aerosols</li>
                    <li>3M cool flow valve helps reduce heat build-up inside the respirator</li>
                    <li>Breathe 30% easier compared to 3M 8200, breathe an easier is defined as initial pressure drop. Flame Resistance : NO</li>
                    <li>ADJUSTABLE M-NOSECLIP: Helps ensure a custom, secure seal with fewer pressure points</li>
                    <li>May not be appropriate for use in certain locations, such as those that do not permit valved respirators</li>
                    <li>Recommended For relief from and certain particles encountered during sanding projects (bare wood, non-lead painted surfaces, or drywall), grinding, sawing, sweeping, installation of fiberglass insulation</li>
                    <li>Also helps filter pollen, spores and particles encountered during outdoor activities such as gardening, cutting firewood, raking, and mowing</li>
                  </ol>
                  <h7><b>Specifications for this item</b></h7>
                  <div className="ritz grid-container" dir="ltr">
                    <table className="waffle" cellspacing="0" cellpadding="0">
                      <tbody>
                        <tr style={{ height: " 20px" }}>
                          <td className="s0" dir="ltr">Brand Name</td>
                          <td className="s1 txtleft" dir="ltr">3M Safety</td>
                        </tr>
                        <tr style={{ height: " 20px" }}>
                          <td className="s0" dir="ltr">Color</td>
                          <td className="s1 txtleft" dir="ltr">White</td>
                        </tr>
                        <tr style={{ height: " 20px" }}>
                          <td className="s0" dir="ltr">Ean</td>
                          <td className="s2 txtleft" dir="ltr">51141904733</td>
                        </tr>
                        <tr style={{ height: " 20px" }}>
                          <td className="s0" dir="ltr">Fabric Type</td>
                          <td className="s1 txtleft" dir="ltr">Other</td>
                        </tr>
                        <tr style={{ height: " 20px" }}>
                          <td className="s3 softmerge" dir="ltr">
                            <div className="softmerge-inner" style={{ width: "256px;left:-136px" }}>Global Trade Identification Number</div>
                          </td>
                          <td className="s4 txtleft" dir="ltr">51141904733</td>
                        </tr>
                        <tr style={{ height: " 20px" }}>
                          <td className="s3 softmerge" dir="ltr">
                            <div className="softmerge-inner" style={{ width: "161px;left:-41px" }}>Included Components</div>
                          </td>
                          <td className="s5 txtleft" dir="ltr">Security &amp; Safety^Personal Protective Equipment^Safety Overalls</td>
                        </tr>
                        <tr style={{ height: " 20px" }}>
                          <td className="s3 softmerge" dir="ltr">
                            <div className="softmerge-inner" style={{ width: "159px;left:-39px" }}>Is Assembly Required</div>
                          </td>
                          <td className="s6 txtleft" dir="ltr">FALSE</td>
                        </tr>
                        <tr style={{ height: " 20px" }}>
                          <td className="s0" dir="ltr">Item Weight</td>
                          <td className="s1 txtleft" dir="ltr">7.7 ounces</td>
                        </tr>
                        <tr style={{ height: " 20px" }}>
                          <td className="s0" dir="ltr">Material</td>
                          <td className="s1 txtleft" dir="ltr">OTHER</td>
                        </tr>
                        <tr style={{ height: " 20px" }}>
                          <td className="s0" dir="ltr">Material Feature</td>
                          <td className="s1 txtleft" dir="ltr">Hypoallergenic</td>
                        </tr>
                        <tr style={{ height: " 20px" }}>
                          <td className="s3 softmerge" dir="ltr">
                            <div className="softmerge-inner" style={{ width: "167px;left:-47px" }}>Measurement System</div>
                          </td>
                          <td className="s5 txtleft" dir="ltr">Metric</td>
                        </tr>
                        <tr style={{ height: " 20px" }}>
                          <td className="s0" dir="ltr">Model Number</td>
                          <td className="s1 txtleft" dir="ltr">8511HB1-C</td>
                        </tr>
                        <tr style={{ height: " 20px" }}>
                          <td className="s3 softmerge" dir="ltr">
                            <div className="softmerge-inner" style={{ width: "128px;left:-8px" }}>Number of Items</div>
                          </td>
                          <td className="s4 txtleft" dir="ltr">10</td>
                        </tr>
                        <tr style={{ height: " 20px" }}>
                          <td className="s0" dir="ltr">Part Number</td>
                          <td className="s1 txtleft" dir="ltr">8511HB1-C</td>
                        </tr>
                        <tr style={{ height: " 20px" }}>
                          <td className="s0" dir="ltr">Pattern</td>
                          <td className="s1 txtleft" dir="ltr">Respirator</td>
                        </tr>
                        <tr style={{ height: " 20px" }}>
                          <td className="s0" dir="ltr">Size</td>
                          <td className="s1 txtleft" dir="ltr">10 Pack</td>
                        </tr>
                        <tr style={{ height: " 20px" }}>
                          <td className="s3 softmerge" dir="ltr">
                            <div className="softmerge-inner" style={{ width: "128px;left:-8px" }}>Specification Met</div>
                          </td>
                          <td className="s5 txtleft"></td>
                        </tr>
                        <tr style={{ height: " 20px" }}>
                          <td className="s0" dir="ltr">Style</td>
                          <td className="s1 txtleft" dir="ltr">Sanding/Fiberglass</td>
                        </tr>
                        <tr style={{ height: " 20px" }}>
                          <td className="s0" dir="ltr">UNSPSC Code</td>
                          <td className="s2 txtleft" dir="ltr">46182008</td>
                        </tr>
                        <tr style={{ height: " 20px" }}>
                          <td className="s0" dir="ltr">UPC</td>
                          <td className="s2 txtleft" dir="ltr">51141904733</td>
                        </tr>
                        <tr style={{ height: " 20px" }}>
                          <td className="s3 softmerge" dir="ltr">
                            <div className="softmerge-inner" style={{ width: "158px;left:-38px" }}>Warranty Description</div>
                          </td>
                          <td className="s5 txtleft" dir="ltr">1 year</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              }
              {product.id === 2 &&
                <div>
                  <h7><b>About this item</b></h7>
                  <ol style={{ listStyle: 'disc' }}>
                    <li>Protective coverall helps protect against certain light liquid splashes and hazardous dusts</li>
                    <li>Lightweight, breathable material helps keep workers cool and comfortable</li>
                    <li>Extra room in arms and legs allow for free movement on the job</li>
                    <li>Seamless shoulders and sleeve tops help provide increased comfort and fewer potential entry points for contaminants</li>
                    <li>Meets government standards for Type 6 Splashes, Type 5 Dust, Anti-Static and Nuclear protection</li>
                    <li>Three panel hood design helps provide a more comfortable fit and a sleek, low-profile style</li>
                  </ol>
                  <h7><b>Specifications for this item</b></h7>
                  <div className="ritz grid-container" dir="ltr">
                    <table className="waffle" cellspacing="0" cellpadding="0">
                      <tbody>
                        <tr style={{ height: " 20px" }}>
                          <td className="s0" dir="ltr">Brand Name</td>
                          <td className="s1 txtleft" dir="ltr">3M</td>
                        </tr>
                        <tr style={{ height: " 20px" }}>
                          <td className="s0" dir="ltr">Color</td>
                          <td className="s1 txtleft" dir="ltr">White</td>
                        </tr>
                        <tr style={{ height: " 20px" }}>
                          <td className="s0" dir="ltr">Ean</td>
                          <td className="s2 txtleft" dir="ltr">4046719632640</td>
                        </tr>
                        <tr style={{ height: " 20px" }}>
                          <td className="s0" dir="ltr">Global Trade Identification Number</td>
                          <td className="s2 txtleft" dir="ltr">04046719632640</td>
                        </tr>
                        <tr style={{ height: " 20px" }}>
                          <td className="s0" dir="ltr">Height</td>
                          <td className="s2 txtleft" dir="ltr">15.813 inches</td>
                        </tr>
                     
                        <tr style={{ height: " 20px" }}>
                          <td className="s3 softmerge" dir="ltr">
                            <div className="softmerge-inner" style={{ width: "161px;left:-41px" }}>Included Components</div>
                          </td>
                          <td className="s5 txtleft" dir="ltr"> work wear</td>
                        </tr>

                        <tr style={{ height: " 20px" }}>
                          <td className="s0" dir="ltr">Item Weight</td>
                          <td className="s1 txtleft" dir="ltr">11.44 pounds</td>
                        </tr>
                        <tr style={{ height: " 20px" }}>
                          <td className="s0" dir="ltr">ILength	</td>
                          <td className="s1 txtleft" dir="ltr">16.375 inches</td>
                        </tr>
                        <tr style={{ height: " 20px" }}>
                          <td className="s0" dir="ltr">Material</td>
                          <td className="s1 txtleft" dir="ltr">SMS Based</td>
                        </tr>
       
                        <tr style={{ height: " 20px" }}>
                          <td className="s3 softmerge" dir="ltr">
                            <div className="softmerge-inner" style={{ width: "167px;left:-47px" }}>Measurement System</div>
                          </td>
                          <td className="s5 txtleft" dir="ltr">US</td>
                        </tr>
                        <tr style={{ height: " 20px" }}>
                          <td className="s0" dir="ltr">Model Number</td>
                          <td className="s1 txtleft" dir="ltr">63264-case</td>
                        </tr>
                        <tr style={{ height: " 20px" }}>
                          <td className="s3 softmerge" dir="ltr">
                            <div className="softmerge-inner" style={{ width: "128px;left:-8px" }}>Number of Items</div>
                          </td>
                          <td className="s4 txtleft" dir="ltr">25</td>
                        </tr>
                        <tr style={{ height: " 20px" }}>
                          <td className="s0" dir="ltr">Part Number</td>
                          <td className="s1 txtleft" dir="ltr">63264-case</td>
                        </tr>
        
                        <tr style={{ height: " 20px" }}>
                          <td className="s0" dir="ltr">Size</td>
                          <td className="s1 txtleft" dir="ltr">25 Pack</td>
                        </tr>
                      
                        <tr style={{ height: " 20px" }}>
                          <td className="s0" dir="ltr">Style</td>
                          <td className="s1 txtleft" dir="ltr">3 Panel Hood</td>
                        </tr>
                        <tr style={{ height: " 20px" }}>
                          <td className="s0" dir="ltr">UNSPSC Code</td>
                          <td className="s2 txtleft" dir="ltr">46181503</td>
                        </tr>
                    
                        <tr style={{ height: " 20px" }}>
                          <td className="s3 softmerge" dir="ltr">
                            <div className="softmerge-inner" style={{ width: "158px;left:-38px" }}>Width</div>
                          </td>
                          <td className="s5 txtleft" dir="ltr">12.438 inches</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              }
            </article>
          </aside>
        </div>
      </div>
    )
  );
};

export default connect(
  state => ({
    productDetails: state.productDetailsReducer,
    cart: state.cartReducer,
    liked: state.likedReducer,
  }),
  {
    loadProduct,
    addProductToCart,
    removeProductFromCart,
    likeProduct,
    unlikeProduct,
    showToast,
    hideToast,
  },
)(withRouter(ProductDetails));
