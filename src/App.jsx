import { Button, Card, CardBody, Col, Container, Form, Row } from "react-bootstrap";
import "./App.css";
import { use, useState } from "react";


function App() {

  const [originalPrice , setOriginalPrice] = useState('')
  const [discountPercent , setDiscountPercent] = useState('')
  const [payAmount, setPayAmount] = useState(null)
  const [discount, setDiscount] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')
  

  const Calculate = (e) => {
    e.preventDefault();
    if(originalPrice === '' ||  discountPercent === ''){
      setErrorMessage('Please enter original price and discount %')
      setDiscount(null)
      setPayAmount(null)
      return
    }

    setErrorMessage('')

    const savedAmount = (originalPrice*discountPercent)/100
    setDiscount(savedAmount.toFixed(2))
    const payamount = originalPrice - savedAmount
    setPayAmount(payamount.toFixed(2))
    
  }

  const reset = (e) => {
    setOriginalPrice('')
    setDiscountPercent('')
    setDiscount(null)
    setPayAmount(null)
    setErrorMessage('')
  }

  return (
    <>
      <div className="App d-flex align-items-center justify-content-center vh-100">
        <div className="Container Row bg-white d-flex rounded-4 shadow-lg">
          <Col lg={6} className="p-3 align-items-center">
            <img
              className="rounded-5 img-fluid"
              src="https://items.epicpxls.com/uploads/photo/78ac5b533b03c2dbf463232848463be2.gif"
              alt=""
            />
          </Col>

          {/* Form */}
          <Col lg={6} className="text-center p-5 ">
            <h1 className="fw-bold fs-1">
              Discount{" "}
              <span style={{ color: "rgb(115 29 207)" }}>Calculator</span>
            </h1>
            <Form className="mt-5">

              <Form.Group className="mb-3"controlId="exampleForm.ControlInput1">
                <Form.Label className="fw-bold fs-5">Original Price (₹)</Form.Label>
                <Form.Control type="number" placeholder="Enter Original Price" value={originalPrice||""}  onChange={(e) => setOriginalPrice(e.target.value)}/>
              </Form.Group>

              <Form.Group className="mb-3"controlId="exampleForm.ControlInput1">
                <Form.Label className="fw-bold fs-5">Discount (%)</Form.Label>
                <Form.Control type="number" placeholder="Enter Discount %" value={discountPercent || ""} onChange={(e) => setDiscountPercent(e.target.value)} />
              </Form.Group>

              {errorMessage ? <p style={{color:'red'}}>{errorMessage}</p> : ''}

            </Form>
            <Button className="me-5 mt-4 fw-bold" style={{minWidth:"100px",backgroundColor:"rgb(115 29 207)",border:"none"}} onClick={(e) => Calculate(e)}>Calculate</Button>
            <Button className="mt-4 fw-bold" style={{minWidth:"100px", backgroundColor:"rgb(250, 97, 196)",border:"none",color:"white" }} onClick={(e)=> reset(e)}>Reset</Button>
            {payAmount !== null && discount !== null &&(
              <Card className=" mt-5 w-50 mx-auto shadow-sm border border-none" style={{backgroundColor:"#eff4fb"}}>
                <CardBody className="fw-bold">
                  <Card.Text><i className="fa-solid fa-sack-dollar me-4" style={{color: "#16d423"}}></i>Amount to pay : ₹{payAmount}</Card.Text>
                  <Card.Text><i className="fa-solid fa-piggy-bank me-4" style={{color: "#fe4dc6"}}></i>You Save : ₹{discount}</Card.Text>
                </CardBody>
              </Card>
            )}
          </Col>
        </div>
      </div>
    </>
  );
}

export default App;
