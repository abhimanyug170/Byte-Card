import React, { Component } from "react";
import avatar from "../images/avatar.png";
import history from "../history";

class CardDisplay extends Component {
  state = {
    name: "Nandi",
    phone: "+919999883388",
    email: "s@gmail.com",
    address: "sksk",
    thumbnail: avatar,
    instagram: "http://instagram.com/_u/_sourabh.tripathi_",
    facebook:
      "fb://facewebmodal/f?href=https://www.facebook.com/abhimanyu.gupta.10420321",
    skype:
      "fb://facewebmodal/f?href=https://www.facebook.com/abhimanyu.gupta.10420321",
    pinterest:
      "fb://facewebmodal/f?href=https://www.facebook.com/abhimanyu.gupta.10420321",
    snapchat: "https://www.snapchat.com/add/jesse_onomiwo",
    twitter: "https://twitter.com/Abhimanyug170",
    linkedIn: "https://www.linkedin.com/in/abhimanyu-gupta007/",
    angelList: "https://www.linkedin.com/in/abhimanyu-gupta007/",
    workAddress: "bjjj99",
    status: "Just Chillin"
  };

  render() {
    return (
      <div>
        <div
          style={{ height: "20vh", background: "#1e88e5", textAlign: "center" }}
        >
          <div style={{ transform: "translateY(15%)" }}>
            <img
              src={avatar}
              alt="avatar"
              style={{
                height: "27vh",
                width: "25vh",
                borderRadius: "50%"
              }}
            />
            <h2>Akshat Jain</h2>
          </div>
        </div>
        <div
          className="ui container"
          style={{ marginTop: "40%", marginBottom: "20%", textAlign: "center" }}
        >
          <form className="ui form">
            <div class="three fields">
              <div class="field">
                <label style={{ fontSize: "15px" }}>Name</label>
                <input
                  disabled
                  value={this.state.name}
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div class="field">
                <label style={{ fontSize: "15px" }}>Phone</label>
                <input
                  disabled
                  value={this.state.phone}
                  type="tel"
                  placeholder="Phone"
                />
              </div>
              <div class="field">
                <label style={{ fontSize: "15px" }}>Email</label>
                <input
                  disabled
                  value={this.state.email}
                  type="email"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="three fields">
              <div class="field">
                <label style={{ fontSize: "15px" }}>Address</label>
                <input
                  disabled
                  value={this.state.address}
                  type="text"
                  placeholder="Address"
                />
              </div>
              {/* <div class="field">
                <label style={{ fontSize: "15px" }}>Thumbnail</label>
                <input
                  disabled  value={this.state.thumbnail}
                  type="text"
                  placeholder="Thumbnail"
                />
              </div> */}
              <div class="field">
                <label style={{ fontSize: "15px" }}>Work Address </label>
                <input
                  disabled
                  value={this.state.workAddress}
                  type="text"
                  placeholder="Work Address "
                />
              </div>
            </div>
            <div className="three fields">
              <div class="field">
                <label style={{ fontSize: "15px" }}>Status</label>
                <input
                  disabled
                  value={this.state.status}
                  type="text"
                  placeholder="Status"
                />
              </div>
              <div
                class="field"
                onClick={() => history.push(this.state.facebook)}
              >
                {/* <label style={{ fontSize: "15px" }}>Facebook</label> */}
                <i style={{ fontSize: "3rem" }} className="icon facebook" />
              </div>
              <div
                class="field"
                onClick={() => history.push(this.state.facebook)}
              >
                {/* <label style={{ fontSize: "15px" }}>Pinterest</label> */}
                <i style={{ fontSize: "3rem" }} className="icon pinterest" />
              </div>
            </div>
            <div className="three fields">
              <div
                class="field"
                onClick={() => history.push(this.state.facebook)}
              >
                {/* <label style={{ fontSize: "15px" }}>Skype</label> */}
                <i style={{ fontSize: "3rem" }} className="icon skype" />
              </div>
              <div
                class="field"
                onClick={() => history.push(this.state.facebook)}
              >
                {/* <label style={{ fontSize: "15px" }}>Snapchat</label> */}
                <i style={{ fontSize: "3rem" }} className="icon snapchat" />
              </div>
              <div
                class="field"
                onClick={() => history.push(this.state.facebook)}
              >
                {/* <label style={{ fontSize: "15px" }}>Twitter</label> */}
                <i style={{ fontSize: "3rem" }} className="icon twitter" />
              </div>
            </div>
            <div className="three fields">
              <div
                class="field"
                onClick={() => history.push(this.state.facebook)}
              >
                {/* <label style={{ fontSize: "15px" }}>LinkedIn</label> */}
                <i style={{ fontSize: "3rem" }} className="icon linkedin" />
              </div>
              <div
                class="field"
                onClick={() => history.push(this.state.facebook)}
              >
                {/* <label style={{ fontSize: "15px" }}>AngelList</label> */}
                <i style={{ fontSize: "3rem" }} className="icon angellist" />
              </div>
              <div
                class="field"
                onClick={() => history.push(this.state.instagram)}
              >
                {/* <label style={{ fontSize: "15px" }}>Instagram</label> */}
                <i style={{ fontSize: "3rem" }} className="icon instagram" />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CardDisplay;
