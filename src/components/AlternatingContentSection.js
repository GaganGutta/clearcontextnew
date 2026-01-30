import React from "react"

import { motion } from "framer-motion"

const fadeInProps = (delay=0) => ({
    transition: { duration: 0.6, delay, ease: "easeInOut" },
    initial: { opacity: 0, transform: "translateY(40px)" },
    whileInView: { opacity: 1, transform: "translateY(0px)" },
    viewport: { once: true }
})

const AlternatingContentSection = ({ darkBg, flip, customText, heading, description, imgSrc, ImageComponent, staggeredFade, fadeDelay=0 }) => {
    let className = "alternating-content-section"

    if (darkBg) className += " dark-bg"
    if (flip) className += " flip"

    if (staggeredFade) {
        const Image = () => {
            if (typeof imgSrc == "string") return (
                <motion.img className={"image"} src={imgSrc} {...fadeInProps(fadeDelay + 1.2)} />
            )
    
            return (
                <motion.div {...fadeInProps(fadeDelay + 1.2)} >
                    <ImageComponent className={"image"} />
                </motion.div>
            )
        }

        const descriptionParagraphs = (Array.isArray(description) ? description : [ description ]).map((descriptionText, index) => (
            <motion.p key={index} {...fadeInProps(fadeDelay + 0.3)} >
                {
                    descriptionText
                }
            </motion.p>
        ))

        return (
            <section className={className}>
                {
                    customText || (
                        <div className={"text"}>
                            <motion.h2 {...fadeInProps(fadeDelay + 0.0)} >
                                {
                                    heading
                                }
                            </motion.h2>
                            {
                                descriptionParagraphs
                            }
                        </div>
                    )
                }
                <div className={"visual"}>
                    <Image />
                </div>
            </section>
        )
    } else {
        const Image = () => {
            if (typeof imgSrc == "string") return (
                <motion.img className={"image"} src={imgSrc} {...fadeInProps(fadeDelay)} />
            )
    
            return (
                <motion.div {...fadeInProps(fadeDelay)} >
                    <ImageComponent className={"image"} />
                </motion.div>
            )
        }

        const descriptionParagraphs = (Array.isArray(description) ? description : [ description ]).map((descriptionText, index) => (
            <motion.p key={index} {...fadeInProps(fadeDelay)} >
                {
                    descriptionText
                }
            </motion.p>
        ))

        return (
            <motion.section className={className} {...fadeInProps(fadeDelay)} >
                <div className={"text"}>
                    {
                        customText || (
                            <React.Fragment>
                                <motion.h2 {...fadeInProps(fadeDelay)} >
                                    {
                                        heading
                                    }
                                </motion.h2>
                                {
                                    descriptionParagraphs
                                }
                            </React.Fragment>
                        )
                    }   
                </div>
                <div className={"visual"}>
                    <Image />
                </div>
            </motion.section>
        )
    }
}

export default AlternatingContentSection