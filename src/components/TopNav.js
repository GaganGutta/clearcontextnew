import React, { useState } from "react"

import { motion } from "framer-motion"
import { Link } from "react-router"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faXmark, faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons"

const TopNav = ({ darkBg }) => {
    const [showLinksMenu, setShowLinksMenu] = useState(false)

    const toggleShowLinksMenu = () => setShowLinksMenu(!showLinksMenu)

    return (
        <div className={darkBg ? "dark-bg" : ""}>
            <motion.div transition={{ duration: 0.8, ease: "easeInOut" }} initial={{ opacity: 0, transform: "translateY(-20px)" }} whileInView={{ opacity: 1, transform: "translateY(0px)" }} viewport={{ once: true }}>
                <nav>
                    <div className={"header"}>
                        <Link to={"/"} className={"brand"}>ClearContext</Link>
                        <FontAwesomeIcon onClick={toggleShowLinksMenu} icon={showLinksMenu ? faXmark : faBars} className={"menu-button"} />
                    </div>
                    <div className={"links"}>
                        <Link to={"/"} className={"page-link"}>HOME</Link>
                        <Link to={"/contact"} className={"page-link"}>CONTACT</Link>
                    </div>
                    {/* make buttons have same fixed width as header to keep links centered properly */}
                    {/* <div className={"buttons"}>
                        <Link to={""} className={"link-button"}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} className={"icon"} />
                        </Link>
                        <Link to={""} className={"link-button"}>
                            <FontAwesomeIcon icon={faUser} className={"icon"} />
                        </Link>
                    </div> */}
                </nav>
                <div className={showLinksMenu ? "nav-dropdown-menu show" : "nav-dropdown-menu hide"}>
                    <Link to={"/"} className={"menu-link"}>
                        <span>HOME</span>
                    </Link>
                    <Link to={"/contact"} className={"menu-link"}>
                        <span>CONTACT</span>
                    </Link>
                </div>
            </motion.div>
        </div>
    )
}

export default TopNav