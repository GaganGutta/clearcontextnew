import React from "react"

import TopNav from "../components/TopNav"

import { motion } from "framer-motion"

import { ReactComponent as JumbotronImage } from "../assets/jumbotron.svg"

import AlternatingContentSection from "../components/AlternatingContentSection"
import CopyrightFooter from "../components/CopyrightFooter"

import ProductShotVideo1 from "../assets/productShotVideo1.mp4"
import ProductShotImage2 from "../assets/productShotImage2.png"
import ProductShotImage3 from "../assets/productShotImage3.png"
import ProductShotImage4 from "../assets/productShotImage4.png"

const fadeInProps = (delay=0, transform="") => ({
    transition: { duration: 0.6, delay, ease: "easeInOut" },
    initial: { opacity: 0, transform: "translateY(40px)" + transform },
    whileInView: { opacity: 1, transform: "translateY(0px)" + transform },
    viewport: { once: true }
})

const LandingPage = () => {
    return (
      <React.Fragment>

        <TopNav darkBg />

        <div className={"landing-page-jumbotron"}>
          <motion.div className={"backdrop"} {...fadeInProps(0.4)} >
            <motion.div className={"image-widescreen"} {...fadeInProps(1.0)} >
              <JumbotronImage />
            </motion.div> 
            <motion.h1 {...fadeInProps(0.6)} >Never Miss the <br /> Full Story</motion.h1>
            <motion.p {...fadeInProps(0.8)} >Our chrome extension analyzes countless sources <br /> in real time, filling in gaps and uncovering <br /> the full picture behind every news article.</motion.p>
            <motion.div className={"image-narrowscreen"} {...fadeInProps(1.0)} >
              <JumbotronImage />
            </motion.div> 
            <motion.div className={"spacer"} />
            <motion.a href={"https://chromewebstore.google.com/detail/pjanafpopoamfdjepgkkjlbianjaegnp"} target={"_blank"} className={"download-button"} {...fadeInProps(1.2)} >
              <div className={"button-text"}>Get Chrome Extension</div>
              <motion.div className={"under-text"} {...fadeInProps(1.4, " translateX(-50%)")} >IT'S FREE!</motion.div>
            </motion.a>
          </motion.div>
        </div>

        <AlternatingContentSection flip
          customText={(
            <React.Fragment>
              <motion.h2 {...fadeInProps()} >Tired of Clickbait Headlines, Biased News, and Missing Facts?</motion.h2>
              <br />
              <motion.p {...fadeInProps()} >Our web extension works in the background while you browse, analyzing articles and providing an unbiased, comprehensive summary.</motion.p>
              <br />
              <motion.p {...fadeInProps()} >It pulls information from a wide range of sources to ensure you get the whole story—no misinformation, no missing context, just the truth.</motion.p>
            </React.Fragment>
          )}
          ImageComponent={() =>
            <video className={"image"} controls autoPlay >
              <source src={ProductShotVideo1} />
            </video>
          } />
          
        <AlternatingContentSection darkBg
          customText={(
            <React.Fragment>
              <motion.h2 {...fadeInProps()} >Context</motion.h2>
              <motion.p {...fadeInProps()} >Provides essential background information to help you understand the bigger picture behind the news.</motion.p>
              <motion.h2 {...fadeInProps()} >Key Points</motion.h2>
              <motion.p {...fadeInProps()} >Directly Quotes the most important details from multiple sources to give you a balanced perspective.</motion.p>
            </React.Fragment>
          )}
          imgSrc={ProductShotImage2} />

        <AlternatingContentSection flip
          customText={(
            <React.Fragment>
              <motion.h2 {...fadeInProps()} >Public Opinion</motion.h2>
              <motion.p {...fadeInProps()} >See real-time public reactions and opinions from platforms like Reddit to understand how people are responding to the news.</motion.p>
            </React.Fragment>
          )}
          imgSrc={ProductShotImage3} />
          
        <AlternatingContentSection darkBg
          customText={(
            <React.Fragment>
              <motion.h2 {...fadeInProps()} >Our Mission</motion.h2>
              <motion.p {...fadeInProps()} >We believe everyone deserves the full truth without hidden agendas or bias.</motion.p>
              <motion.p {...fadeInProps()} >Our mission is to put simple, factual information in front of readers—giving you a clear, unbiased view of the news without having to wonder if key facts are being left out to push a particular narrative.</motion.p>
              <motion.p {...fadeInProps()} >With our tool, you can stay informed with confidence, knowing you're seeing the whole picture, no matter where you're reading from.</motion.p>
            </React.Fragment>
          )}
          imgSrc={ProductShotImage4} />

          <CopyrightFooter />

      </React.Fragment>
    )
}

export default LandingPage