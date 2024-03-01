/*Styles*/
import '../styles/Lyrics.scss';
/*Necessary Imports*/
import React from 'react'
import { motion } from "framer-motion";

function Lyrics() {

  return (
    <article class="section-lyrics">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          ease: "linear",
          opacity: { duration: 6 },
          y: { duration: 2 }
        }}
      >
        <h1 class="first-text">When you close your eyes,</h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          ease: "linear",
          opacity: { duration: 6 },
          y: { duration: 2 }
        }}
      >
        <h1 class="second-text">what do you see?</h1>
      </motion.div>
    </article >
  )
}

export default Lyrics