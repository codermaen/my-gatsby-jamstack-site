import React from "react"
import { Link } from "gatsby"

export default function Home() {
    return <div style={{ color: 'tomato' }}>
        <h1>Welcome to Page 2</h1>
        {/* // To go back to the homepage */}
        <Link to="/">Back</Link>
    </div>
}