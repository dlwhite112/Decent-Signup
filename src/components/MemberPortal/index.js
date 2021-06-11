import React from "react";

export default function MemberPortal(props) {
  return (
    <div>
      <h1>Member Portal</h1>
      <p>
        Hi {props.userEmail}, you're in! Unless you want to{" "}
        <a href="http://">Sign Out.</a>
      </p>
    </div>
  );
}
