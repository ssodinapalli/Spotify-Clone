import React from 'react'

function Premium() {
    return (
        <>
            <div>
                <section id="premium" />
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="fs-5 text-center mb-0">Premium Benefits</h3>
                            <h1 className="display-6 text-center mb-4">
                                Get a Premium Account
                            </h1>
                            <hr className="w-25 mx-auto" />
                        </div>
                        <div class="card-group">
                            <div class="row row-cols-1 row-cols-md-3 g-4">
                                <div class="col">
                                    <div class="card h-100">
                                        <img src="..." class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">
                                                This is a wider card with supporting text below as a
                                                natural lead-in to additional content. This content is a
                                                little bit longer.
                                            </p>
                                        </div>
                                        <div class="card-footer">
                                            <small class="text-muted">Listen Now!</small>{" "}
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card h-100">
                                        <img src="..." class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">
                                                This card has supporting text below as a natural lead-in
                                                to additional content.
                                            </p>
                                        </div>
                                        <div class="card-footer">
                                            <small class="text-muted">Listen Now!</small>
                                        </div>
                                    </div>
                                </div>
                                <div class="col ">
                                    <div class="card h-100">
                                        <img src="..." class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">
                                                This is a wider card with supporting text below as a
                                                natural lead-in to additional content. This card has
                                                even longer content than the first to show that equal
                                                height action.
                                            </p>
                                        </div>
                                        <div class="card-footer">
                                            <small class="text-muted">Listen Now!</small>{" "}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Premium;
