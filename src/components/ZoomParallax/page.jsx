import styles from "./styles.module.scss";
// ../../../public/PastEvents/8.webp
// import Picture6 from "../../../public/PastEvents/8.webp";
import Picture1 from "../../../public/History/2015.webp";
import Picture5 from "../../../public/History/2016.webp";
import Picture3 from "../../../public/History/2017.webp";
import Picture4 from "../../../public/History/2019.webp";
import Picture2 from "../../../public/History/img12.webp";
import Picture6 from "../../../public/History/2023.webp";
import Picture7 from "../../../public/History/img10.webp";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function ZoomParallax() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    {
      src: Picture6,
      scale: scale4,
    },
    {
      src: Picture2,
      scale: scale5,
    },
    {
      src: Picture3,
      scale: scale6,
    },
    {
      src: Picture4,
      scale: scale5,
    },
    {
      src: Picture5,
      scale: scale6,
    },
    {
      src: Picture1,
      scale: scale8,
    },
    {
      src: Picture7,
      scale: scale9,
    },
  ];

  return (
    // <div id="past" className="bg-gradient-to-b from-[#1a001a] via-[#4b0082] to-[#d8b4fe] ">
    <div
      id="past"
      className="items-center justify-center "
    >
      <div className="flex h-40  items-center justify-center">
        <h1
          className="md:text-6xl text-5xl uppercase font-bold z-10 text-center px-4"
          style={{
            background: "linear-gradient(to right, #ffffff,rgb(232, 182, 16))", // white to gold
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "1px 1px 5px rgba(255, 244, 202, 0.7)", // bold shadow for glow
          }}
        >
          Past Genero
        </h1>
      </div>
      <div ref={container} className={styles.container}>
        <div className={styles.sticky}>
          {pictures.map(({ src, scale }, index) => {
            return (
              <motion.div key={index} style={{ scale }} className={styles.el}>
                <div className={styles.imageContainer}>
                  <h1 className="relative top-0 z-10 ">{}</h1>
                  <Image src={src} fill alt="image" placeholder="blur" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
