import React from "react"

const CopyrightFooter = ({ darkBg }) => {
    return (
        <footer className={darkBg ? "dark-bg" : ""}>
            © ClearContext 2025. All Rights Reserved.
        </footer>
    )
}

export default CopyrightFooter