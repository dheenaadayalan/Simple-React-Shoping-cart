import React from 'react';

function MainBody({ btn, setBtn,btn1, setBtn1,btn2, setBtn2,btn3, setBtn3,btn4, setBtn4,btn5, setBtn5,btn6, setBtn6,btn7, setBtn7, counter, setcount }) {
    return (
        
        <>
        {console.log(btn, btn1)}
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        <div className="col mb-5">
                            <div className="card h-100">

                                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />

                                <div className="card-body p-4">
                                    <div className="text-center">

                                        <h5 className="fw-bolder">Fancy Product</h5>

                                        $40.00 - $80.00
                                    </div>
                                </div>

                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    {btn ? 
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" onClick={ ()=>{
                                        setBtn(false);
                                        setcount((count)=> count + 1)
                                    }
                                        
                                    }>Add to cart</a></div> 
                                    : <div className="text-center"><a className="btn btn-outline-danger mt-auto" onClick={() => {
                                        setBtn(true);
                                        setcount((count)=> count - 1)
                                    }}>Remove from Cart</a></div>}
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">

                                <div className="badge bg-dark text-white position-absolute">Sale</div>

                                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />

                                <div className="card-body p-4">
                                    <div className="text-center">

                                        <h5 className="fw-bolder">Special Item</h5>

                                        <div className="d-flex justify-content-center small text-warning mb-2">
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                        </div>

                                        <span className="text-muted text-decoration-line-through">$20.00</span>
                                        $18.00
                                    </div>
                                </div>

                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                {btn1 ? 
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" onClick={ ()=>{
                                        setBtn1(false);
                                        setcount((count)=> count + 1)
                                    }
                                        
                                    }>Add to cart</a></div> 
                                    : <div className="text-center"><a className="btn btn-outline-danger mt-auto" onClick={() => {
                                        setBtn1(true);
                                        setcount((count)=> count - 1)
                                    }}>Remove from Cart</a></div>}
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">

                                <div className="badge bg-dark text-white position-absolute" >Sale</div>

                                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />

                                <div className="card-body p-4">
                                    <div className="text-center">

                                        <h5 className="fw-bolder">Sale Item</h5>

                                        <span className="text-muted text-decoration-line-through">$50.00</span>
                                        $25.00
                                    </div>
                                </div>

                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                {btn2 ? 
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" onClick={ ()=>{
                                        setBtn2(false);
                                        setcount((count)=> count + 1)
                                    }
                                        
                                    }>Add to cart</a></div> 
                                    : <div className="text-center"><a className="btn btn-outline-danger mt-auto" onClick={() => {
                                        setBtn2(true);
                                        setcount((count)=> count - 1)
                                    }}>Remove from Cart</a></div>}
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">

                                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />

                                <div className="card-body p-4">
                                    <div className="text-center">

                                        <h5 className="fw-bolder">Popular Item</h5>

                                        <div className="d-flex justify-content-center small text-warning mb-2">
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                        </div>

                                        $40.00
                                    </div>
                                </div>

                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                {btn3 ? 
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" onClick={ ()=>{
                                        setBtn3(false);
                                        setcount((count)=> count + 1)
                                    }
                                        
                                    }>Add to cart</a></div> 
                                    : <div className="text-center"><a className="btn btn-outline-danger mt-auto" onClick={() => {
                                        setBtn3(true);
                                        setcount((count)=> count - 1)
                                    }}>Remove from Cart</a></div>}
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">

                                <div className="badge bg-dark text-white position-absolute" >Sale</div>

                                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />

                                <div className="card-body p-4">
                                    <div className="text-center">

                                        <h5 className="fw-bolder">Sale Item</h5>

                                        <span className="text-muted text-decoration-line-through">$50.00</span>
                                        $25.00
                                    </div>
                                </div>

                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                {btn4 ? 
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" onClick={ ()=>{
                                        setBtn4(false);
                                        setcount((count)=> count + 1)
                                    }
                                        
                                    }>Add to cart</a></div> 
                                    : <div className="text-center"><a className="btn btn-outline-danger mt-auto" onClick={() => {
                                        setBtn4(true);
                                        setcount((count)=> count - 1)
                                    }}>Remove from Cart</a></div>}
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">

                                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />

                                <div className="card-body p-4">
                                    <div className="text-center">

                                        <h5 className="fw-bolder">Fancy Product</h5>

                                        $120.00 - $280.00
                                    </div>
                                </div>

                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                {btn5 ? 
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" onClick={ ()=>{
                                        setBtn5(false);
                                        setcount((count)=> count + 1)
                                    }
                                        
                                    }>Add to cart</a></div> 
                                    : <div className="text-center"><a className="btn btn-outline-danger mt-auto" onClick={() => {
                                        setBtn5(true);
                                        setcount((count)=> count - 1)
                                    }}>Remove from Cart</a></div>}
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">

                                <div className="badge bg-dark text-white position-absolute" >Sale</div>

                                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />

                                <div className="card-body p-4">
                                    <div className="text-center">

                                        <h5 className="fw-bolder">Special Item</h5>

                                        <div className="d-flex justify-content-center small text-warning mb-2">
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                        </div>

                                        <span className="text-muted text-decoration-line-through">$20.00</span>
                                        $18.00
                                    </div>
                                </div>

                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                {btn6 ? 
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" onClick={ ()=>{
                                        setBtn6(false);
                                        setcount((count)=> count + 1)
                                    }
                                        
                                    }>Add to cart</a></div> 
                                    : <div className="text-center"><a className="btn btn-outline-danger mt-auto" onClick={() => {
                                        setBtn6(true);
                                        setcount((count)=> count - 1)
                                    }}>Remove from Cart</a></div>}
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">

                                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />

                                <div className="card-body p-4">
                                    <div className="text-center">

                                        <h5 className="fw-bolder">Popular Item</h5>

                                        <div className="d-flex justify-content-center small text-warning mb-2">
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                        </div>

                                        $40.00
                                    </div>
                                </div>

                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                {btn7 ? 
                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" onClick={ ()=>{
                                        setBtn7(false);
                                        setcount((count)=> count + 1)
                                    }
                                        
                                    }>Add to cart</a></div> 
                                    : <div className="text-center"><a className="btn btn-outline-danger mt-auto" onClick={() => {
                                        setBtn7(true);
                                        setcount((count)=> count - 1)
                                    }}>Remove from Cart</a></div>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default MainBody;