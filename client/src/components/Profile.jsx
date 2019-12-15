import React, { Component } from 'react';
import avatar from '../images/avatar.png';

class Profile extends Component {
	state = {
		name: 'Nandi',
		phone: '+919999883388',
		email: 's@gmail.com',
		address: 'sksk',
		thumbnail: avatar,
		instagram: 'http://instagram.com/_u/_sourabh.tripathi_',
		facebook: 'fb://facewebmodal/f?href=https://www.facebook.com/abhimanyu.gupta.10420321',
		skype: 'fb://facewebmodal/f?href=https://www.facebook.com/abhimanyu.gupta.10420321',
		pinterest: 'fb://facewebmodal/f?href=https://www.facebook.com/abhimanyu.gupta.10420321',
		snapchat: 'https://www.snapchat.com/add/jesse_onomiwo',
		twitter: 'https://twitter.com/Abhimanyug170',
		linkedIn: 'https://www.linkedin.com/in/abhimanyu-gupta007/',
		angelList: 'https://www.linkedin.com/in/abhimanyu-gupta007/',
		workAddress: 'bjjj99',
		status: 'Just Chillin'
	};

	render() {
		return (
			<div>
				<div style={{ height: '20vh', background: '#1e88e5', textAlign: 'center' }}>
					<div style={{ transform: 'translateY(15%)' }}>
						<img
							src={avatar}
							alt="avatar"
							style={{
								height: '27vh',
								width: '25vh',
								borderRadius: '50%'
							}}
						/>
						<h2>Akshat Jain</h2>
					</div>
				</div>
				<div className="ui container" style={{ marginTop: '40%', marginBottom: '20%', textAlign: 'center' }}>
					<form className="ui form">
						<div class="three fields">
							<div class="field">
								<label style={{ fontSize: '15px' }}>Name</label>
								<input value={this.state.name} type="text" placeholder="Name" />
							</div>
							<div class="field">
								<label style={{ fontSize: '15px' }}>Phone</label>
								<input value={this.state.phone} type="tel" placeholder="Phone" />
							</div>
							<div class="field">
								<label style={{ fontSize: '15px' }}>Email</label>
								<input value={this.state.email} type="email" placeholder="Email" />
							</div>
						</div>
						<div className="three fields">
							<div class="field">
								<label style={{ fontSize: '15px' }}>Address</label>
								<input value={this.state.address} type="text" placeholder="Address" />
							</div>
							<div class="field">
								<label style={{ fontSize: '15px' }}>Thumbnail</label>
								<input value={this.state.thumbnail} type="text" placeholder="Thumbnail" />
							</div>
							<div class="field">
								<label style={{ fontSize: '15px' }}>Work Address </label>
								<input value={this.state.workAddress} type="text" placeholder="Work Address " />
							</div>
						</div>
						{/* <hr style={{ border: '1px solid #545151' }} /> */}
						<div className="three fields">
							<div class="field">
								<label style={{ fontSize: '15px' }}>Instagram</label>
								<input value={this.state.instagram} type="text" placeholder="Instagram" />
							</div>
							<div class="field">
								<label style={{ fontSize: '15px' }}>Facebook</label>
								<input value={this.state.facebook} type="text" placeholder="Facebook" />
							</div>
							<div class="field">
								<label style={{ fontSize: '15px' }}>Pinterest</label>
								<input value={this.state.pinterest} type="text" placeholder="Pinterest" />
							</div>
						</div>
						<div className="three fields">
							<div class="field">
								<label style={{ fontSize: '15px' }}>Skype</label>
								<input value={this.state.skype} type="text" placeholder="Skype" />
							</div>
							<div class="field">
								<label style={{ fontSize: '15px' }}>Snapchat</label>
								<input value={this.state.snapchat} type="text" placeholder="Snapchat" />
							</div>
							<div class="field">
								<label style={{ fontSize: '15px' }}>Twitter</label>
								<input value={this.state.twitter} type="text" placeholder="Twitter" />
							</div>
						</div>
						<div className="three fields">
							<div class="field">
								<label style={{ fontSize: '15px' }}>LinkedIn</label>
								<input value={this.state.linkedIn} type="text" placeholder="LinkedIn" />
							</div>
							<div class="field">
								<label style={{ fontSize: '15px' }}>AngelList</label>
								<input value={this.state.angelList} type="text" placeholder="AngelList" />
							</div>
							<div class="field">
								<label style={{ fontSize: '15px' }}>Status</label>
								<input value={this.state.status} type="text" placeholder="Status" />
							</div>
						</div>
						<button className="ui primary button centre">Update</button>
					</form>
				</div>
			</div>
		);
	}
}

export default Profile;
