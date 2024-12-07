import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect } from "react";

gsap.registerPlugin(useGSAP);
function Scroller({ sentence }) {
  const [arr, setArr] = useState([]);

  const ref = useRef(null);
  const catSentences = [
    "Cats love cozy spots.",
    "Furry cats are adorable.",
    "Cats nap all day.",
    "Curious cats chase shadows.",
    "Fluffy cats look majestic.",
    "Cats enjoy sunny windows.",
    "Playful cats love strings.",
    "Cats purr when happy.",
    "Sleepy cats curl up.",
    "Hungry cats meow loudly.",
    "Cats climb trees gracefully.",
    "Loving cats cuddle often.",
    "Mischievous cats steal socks.",
    "Cats hate loud noises.",
    "Cats have sharp claws.",
    "Friendly cats follow owners.",
    "Cats enjoy birdwatching daily.",
    "Independent cats roam freely.",
    "Cats groom themselves constantly.",
    "Chubby cats look hilarious.",
    "Cats leap high fences.",
    "Feral cats avoid humans.",
    "Cats are expert hunters.",
    "Silly cats chase lasers.",
    "Cats love fresh tuna.",
    "Sneaky cats hide everywhere.",
    "Cats observe with curiosity.",
    "Lazy cats prefer cushions.",
    "Fast cats dart quickly.",
    "Cats bring endless joy.",
    "Cats bring endless joy.",
    "Fast cats dart quickly.",
    "Lazy cats prefer cushions.",
    "Cats observe with curiosity.",
    "Cats love fresh tuna.",
    "Silly cats chase lasers.",
    "Cats are expert hunters.",
    "Feral cats avoid humans.",
    "Cats leap high fences.",
    "Chubby cats look hilarious.",
    "Cats groom themselves constantly.",
    "Independent cats roam freely.",
    "Cats enjoy birdwatching daily.",
    "Friendly cats follow owners.",
    "Cats have sharp claws.",
    "Cats hate loud noises.",
    "Mischievous cats steal socks.",
    "Loving cats cuddle often.",
    "Cats climb trees gracefully.",
    "Hungry cats meow loudly.",
    "Sleepy cats curl up.",
    "Cats purr when happy.",
    "Playful cats love strings.",
    "Cats enjoy sunny windows.",
    "Fluffy cats look majestic.",
    "Curious cats chase shadows.",
    "Cats nap all day.",
    "Furry cats are adorable.",
    "Cats love cozy spots.",
  ];

  useEffect(() => {
    if (sentence) {
      setArr(sentence);
    } else {
      setArr(catSentences);
    }
  },[]);

  console.log(sentence);

  useGSAP(() => {
    // const totalWidth = ref.scrollWidth
    gsap.to(".scroller", {
      x: -1000,
      yoyo: true,
      duration: 10,
      // ease: "power1.out",
      stagger: 0.5,
      repeat: -1,
    });
  }, []);

  // console.log(catSentences.reverse());

  return (
    <div
      ref={ref}
      className="scroller h-[10vh] bg-slate-300 flex w-max items-center gap-5 px-2"
    >
      {arr.map((title, index) => {
        return (
          <p
            key={index}
            className="text-center text-2xl sm:text-3xl font-medium text-black "
          >
            {title}
          </p>
        );
      })}
    </div>
  );
}

export default Scroller;
