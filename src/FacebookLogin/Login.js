// import React from 'react'
// import {LoginSocialFacebook} from 'reactjs-social-login'
// import {FacebookLoginButton} from 'react-social-login-buttons'

// function Login() {
//   return (
//     <LoginSocialFacebook
//     appId=' 974144510608849'
//     onResolve={(Response) => {
//         console.log(Response);
//     }}
//     onReject={(error) => {
//         console.log(error);
//     }}
//     >
//         <FacebookLoginButton />
//     </LoginSocialFacebook>
//   )
// }

// export default Login




import React,{useState} from 'react';
import { LoginSocialFacebook } from 'reactjs-social-login';
import { FacebookLoginButton } from 'react-social-login-buttons';

function Login() {
    const [profile, setprofile] = useState(null)

  return (
    <div>
    {!profile ? <LoginSocialFacebook
      appId='974144510608849'
      onResolve={(response) => {
        console.log(response);
        setprofile(Response.data)
      }}
      onReject={(error) => {
        console.log(error);
      }}
    >
      <FacebookLoginButton />
    </LoginSocialFacebook> : ""}

    {profile ? <div>
            <h1>{profile.name}</h1>
            <img src={profile.picture.data.url} alt='#'/>
        </div> : ""
    }
    </div>
  );
}

export default Login;
