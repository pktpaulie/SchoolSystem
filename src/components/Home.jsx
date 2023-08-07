import React from 'react'

export default function Home() {
  return (
    <div>
         <header className="header text-center">
        <h1>Welcome to Our School</h1>
        <p>Your Awesome Tagline Goes Here</p>
        <a href="#features" className="btn btn-primary btn-lg">Learn More</a>
      </header>

      <section id="features" className="features text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="feature-item">
                <i className="fas fa-code fa-4x"></i>
                <h3>Feature 1</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-item">
                <i className="fas fa-laptop fa-4x"></i>
                <h3>Feature 2</h3>
                <p>Quisque euismod orci ut nisl suscipit, in volutpat urna mollis.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-item">
                <i className="fas fa-heart fa-4x"></i>
                <h3>Feature 3</h3>
                <p>Nulla cursus turpis ac turpis interdum, at bibendum arcu feugiat.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
