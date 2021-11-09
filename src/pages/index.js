import { Link } from "gatsby";
import * as React from "react";

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <div style={{ color: 'tomato' }}>
        <h1>Hello world!</h1>
        {/* // Your new paragraph or content */}
        <p>Welcome to my first Gatsby site</p>
        <Link to='/Home/'>Home</Link>
        <br />
        <Link to='/Counter/'>Counter</Link>
      </div>

    </main>
  )
}

export default IndexPage
