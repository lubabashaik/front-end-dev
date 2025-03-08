function Card() {
  return (
    <div className="card-box">
      <div className="header">
        <div className="Balance-details">
          <p className="heading">Balance</p>
          <h4 className="content">$5,756</h4>
        </div>
        <img className="image-icon" src="../../chip-icon.png" alt="icon" />
      </div>
      <div className="user-details">
        <div className="user-name">
          <p className="heading">CARD HOLDER</p>
          <h4 className="content">Eddy Cusuma</h4>
        </div>
        <div className="expiry-date">
          <p className="heading">VALID THRU</p>
          <h4 className="content">12/22</h4>
        </div>
      </div>
      <div className="footer">
        <h3 className="Number">3778**** ****1234</h3>
        <span className="footer-icon">
          <div className="crc-1"></div>
          <div className="crc-2"></div>
        </span>
      </div>
    </div>
  )
}

export default Card
