import React from 'react'

function Newscoverage() {
    return (
        <div className="news_coverage">
            <div className="row col-md-12 pt-5 pb-5" id="news_coverage_all">

                    <div className="card mb-3" style={{maxWidth: '540px'}}>
                    <div className="row g-0">
                    <div className="col-md-6">
                        <img src="./images/slid1.jpg" className="img-fluid rounded-start w-100" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                        </div>
                    </div>
                    </div>
                    </div>

            </div>
            
        </div>
    )
}

export default Newscoverage
