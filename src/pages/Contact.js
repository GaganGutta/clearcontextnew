import React from "react"

import TopNav from "../components/TopNav"
import AlternatingContentSection from "../components/AlternatingContentSection"
import CopyrightFooter from "../components/CopyrightFooter"

import { ReactComponent as ContactImage } from "../assets/contact.svg"

import { motion } from "framer-motion"

const fadeInProps = (delay=0) => ({
    transition: { duration: 0.6, delay, ease: "easeInOut" },
    initial: { opacity: 0, transform: "translateY(40px)" },
    whileInView: { opacity: 1, transform: "translateY(0px)" },
    viewport: { once: true }
})

const ContactPage = () => {
    return (
        <React.Fragment>
            
            <TopNav />

            <div className={"contact-page-jumbotron"}>
                <AlternatingContentSection divider
                    customText={
                        <motion.div className={"text dark-bg"} {...fadeInProps(0.6)} >
                            <motion.h2 {...fadeInProps(0.8)} >Contact Us</motion.h2>
                            <motion.p {...fadeInProps(1.0)} >clearcontext2025@gmail.com</motion.p>
                        </motion.div>
                    }
                    ImageComponent={ContactImage} staggeredFade fadeDelay={0.4} />
            </div>

            <CopyrightFooter />

        </React.Fragment>
    )
}

export default ContactPage