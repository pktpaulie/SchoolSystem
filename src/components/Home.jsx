import React from 'react'

export default function Home() {
  return (
    <div>
         <header className="header text-center">
        <h1>Welcome to Our School</h1>
        <p>Let's Code!</p>
        <a href="#features" className="btn btn-primary btn-lg">Learn More</a>
      </header>

      <section id="features" className="features text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="feature-item">
                <i className="fas fa-code fa-4x"></i>
                <h3>Campuses</h3>
                <p>We have both the online and physical Campuses.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-item">
                <i className="fas fa-laptop fa-4x"></i>
                <h3>Branches</h3>
                <p>We have Branches in Different Regions of the Country.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-item">
                <i className="fas fa-heart fa-4x"></i>
                <h3>Management</h3>
                <p>The Management and Staff of our school are well qualified and perform their tasks professionally.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
