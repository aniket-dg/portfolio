import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <>
    
  <footer id="footer">
    <div className="container">
      <div className="copyright">
      </div>
      <div className="credits">
        {/* Designed by <a href="#">AniketG</a> */}
      </div>
    </div>
  </footer>

  <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

      </>
    )
  }
}

export default Footer