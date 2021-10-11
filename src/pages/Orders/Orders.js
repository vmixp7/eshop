import React, { useEffect, useState, useRef, Fragment } from 'react';
import { Link } from 'react-router-dom';
import ContainerDimensions from 'react-container-dimensions';

import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import 'antd/dist/antd.css';
import './styles.css';
import { Steps, Collapse, Progress ,Popover} from 'antd';
import { UserOutlined, AreaChartOutlined, SolutionOutlined, LoadingOutlined, ShoppingCartOutlined, SmileOutlined, FileDoneOutlined, EnvironmentOutlined, ShopOutlined } from '@ant-design/icons';
import Icon from '@ant-design/icons';


const { Panel } = Collapse;

const { Step } = Steps;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const thisIndex = [getRandomInt(1, 5), getRandomInt(1, 5), getRandomInt(1, 5), getRandomInt(1, 5), getRandomInt(1, 5), getRandomInt(1, 5), getRandomInt(1, 5), getRandomInt(1, 5), getRandomInt(1, 5), getRandomInt(1, 5)];

const Orders = () => {
  const cartProducts = JSON.parse(localStorage.getItem('cartProducts'));
  const totalprice = localStorage.getItem('totalprice');
  let nowTime = new Date().getTime();

  let date = new Date();
  let options = {
    weekday: "long", year: "numeric", month: "short",
    day: "numeric", hour: "2-digit", minute: "2-digit"
  };
  nowTime = date.toLocaleTimeString("en-us", options);
  console.log(date.toLocaleTimeString("en-us", options));
  //接收訂單=>廠商出貨=>貨運運輸=>中繼站檢貨=>分配物流=>分配運輸=>貨運運輸=>到達目的-會員取貨


  return (
    <div>
      <Row>
        <Col>Date</Col>
        <Col>Order Number</Col>
        <Col>Total</Col>
      </Row>
      <Row>
        <Col>{nowTime}</Col>
        <Col>ORDER00000001</Col>
        <Col>{totalprice}</Col>
      </Row>
      <Row>
        <Col>
          <div style={{ paddingTop: 5, paddingBottom: 5 }}>
            <Collapse accordion>
              <Panel header="order details" key="1">
                <div className="card-body">
                  {cartProducts.map(({ product, quantity }, i) => (

                    <Fragment key={i}>
                      <div className="row">
                        <div className="col-12 col-sm-12 col-md-2 text-center">
                          <Link to={`/product-details/${product.id}`}>
                            <img
                              className="img-responsive cart-img-obj-fit"
                              src={require(`../../static/products/${product.image}`)}
                              alt="prewiew"
                              height="80"
                            />
                          </Link>
                        </div>
                        <div className="col-12 text-sm-center col-sm-12 text-md-left col-md-6">
                          <h4 className="product-name">{product.name}</h4>
                          <p>{product.description}</p>
                        </div>
                        <div className="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row">
                          <div
                            className="col-3 col-sm-3 col-md-6 text-md-right"
                            style={{ paddingTop: 5 }}
                          >
                            <h5>
                              <strong>${product.price.toFixed(2)}</strong>
                            </h5>
                          </div>
                          <div className="col-4 col-sm-4 col-md-4">
                            <div className="quantity">
                              <span className="quantity-number">{quantity}</span>
                            </div>
                          </div>
                        </div>
                        <Steps current={thisIndex[i]} size="small">

                          <Step title="Factory" icon={<img width={30} src={require(`../../static/products/factory1_after.png`)} alt="" />} description="Left 00:00:08 0xd74343f3*********" />

                          {(thisIndex[i] === 1 || thisIndex[i] > 1) ?
                            <Step title="Logistics A" icon={<img width={30} src={require(`../../static/products/logistics1_after.png`)} alt="" />} description={(thisIndex[i] === 1) ? "In Transit" : "Left 00:03:08 0xd71243f3*********"} />
                            : <Step title="Logistics A" icon={<img width={30} src={require(`../../static/products/logistics1.png`)} alt="" />} description="" />
                          }
                          {(thisIndex[i] === 2 || thisIndex[i] > 2) ?
                            <Step title="Exporter" icon={<img width={30} src={require(`../../static/products/export_after.png`)} alt="" />} description={(thisIndex[i] === 2) ? "In Transit" : "Left 00:04:08 0xd73343f3*********"} />
                            : <Step title="Exporter" icon={<img width={30} src={require(`../../static/products/export.png`)} alt="" />} description="" />
                          }
                          {(thisIndex[i] === 3 || thisIndex[i] > 3) ?
                            <Step title="International Logistics" icon={<img width={30} src={require(`../../static/products/logistics2_after.png`)} alt="" />} description={(thisIndex[i] === 3) ? "In Transit" : "Left 09:06:12 0xd72143f3*********"} />
                            : <Step title="International Logistics" icon={<img width={30} src={require(`../../static/products/logistics2.png`)} alt="" />} description="" />
                          }
                          {(thisIndex[i] === 4 || thisIndex[i] > 4) ?
                            <Step title="Importer" icon={<img width={30} src={require(`../../static/products/import_after.png`)} alt="" />} description={(thisIndex[i] === 4) ? "In Transit" : "Left 12:09:33 0xd70014b3f6*********"} />
                            : <Step title="Importer" icon={<img width={30} src={require(`../../static/products/import.png`)} alt="" />} description="" />
                          }
                          {(thisIndex[i] === 5 || thisIndex[i] > 5) ?
                            <Step title="Logistics B" icon={<img width={30} src={require(`../../static/products/logistics1_after.png`)} alt="" />} description={(thisIndex[i] === 5) ? "In Transit" : "Left 13:12:08 0xd71114b3f6*********"} />
                            : <Step title="Logistics B" icon={<img width={30} src={require(`../../static/products/logistics1.png`)} alt="" />} description="" />
                          }
                          {(thisIndex[i] === 6 || thisIndex[i] > 6) ?
                            <Step title="Clinic" icon={<img width={30} src={require(`../../static/products/hospital_after.png`)} alt="" />} description={(thisIndex[i] === 6) ? "In Transit" : "Left 15:30:02 0xd713324b3f6*********"} />
                            : <Step title="Clinic" icon={<img width={30} src={require(`../../static/products/hospital.png`)} alt="" />} description="" />
                          }





                        </Steps>


                      </div>
                      <hr />
                    </Fragment>
                  ))}
                </div>
              </Panel>

            </Collapse>
          </div>
        </Col>
      </Row>


    </div>
  );
};

export default Orders;
