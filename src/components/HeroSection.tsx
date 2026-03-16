import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Youtube, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Typewriter } from "react-simple-typewriter";
import { FaReact, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { useState } from "react";

export default function HeroSection() {

const [mouse, setMouse] = useState({ x:0, y:0 });

const handleMouseMove = (e:any) => {
setMouse({ x:e.clientX, y:e.clientY });
};

const scrollToAbout = () => {
const element = document.querySelector("#about");
if(element) element.scrollIntoView({ behavior:"smooth" });
};

return (

<section
id="home"
onMouseMove={handleMouseMove}
className="relative min-h-screen flex items-center justify-center overflow-hidden
bg-gradient-to-br from-blue-100 via-indigo-200 to-purple-300"
>

{/* mouse spotlight */}

<div
className="pointer-events-none absolute -z-10 h-[500px] w-[500px] rounded-full bg-cyan-400/40 blur-[200px]"
style={{ left: mouse.x-250, top: mouse.y-250 }}
/>

{/* grid background */}

<div className="absolute inset-0 -z-20 opacity-30
bg-[linear-gradient(#00000010_1px,transparent_1px),linear-gradient(90deg,#00000010_1px,transparent_1px)]
bg-[size:40px_40px]" />

{/* animated gradient blobs */}

<motion.div
animate={{ x:[0,120,0], y:[0,80,0] }}
transition={{ duration:24, repeat:Infinity }}
className="absolute -z-10 w-[650px] h-[650px] bg-blue-400/40 blur-[200px] rounded-full top-[-250px] left-[-250px]"
/>

<motion.div
animate={{ x:[0,-140,0], y:[0,-100,0] }}
transition={{ duration:28, repeat:Infinity }}
className="absolute -z-10 w-[650px] h-[650px] bg-purple-500/40 blur-[200px] rounded-full bottom-[-250px] right-[-250px]"
/>

<div className="container mx-auto px-6">

<div className="max-w-4xl mx-auto text-center">

{/* badge */}

<motion.span
initial={{ opacity:0,scale:0.9 }}
animate={{ opacity:1,scale:1 }}
transition={{ duration:0.6 }}
className="inline-block px-5 py-2 rounded-full backdrop-blur bg-white/40 text-gray-800 text-sm mb-6 shadow"

>

👋 Selamat datang di portfolio saya
</motion.span>

{/* name */}

<motion.h1
initial={{ opacity:0,y:30 }}
animate={{ opacity:1,y:0 }}
transition={{ delay:0.2 }}
className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4"

>

Hafizh Akbar Saida
</motion.h1>

{/* typing title */}

<motion.h2
initial={{ opacity:0,y:30 }}
animate={{ opacity:1,y:0 }}
transition={{ delay:0.4 }}
className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6"

>

<Typewriter
words={[
"Student Web Developer",
"Frontend Developer",
"React Learner",
"Future Software Engineer"
]}
loop
cursor
cursorStyle="|"
typeSpeed={70}
deleteSpeed={40}
delaySpeed={2000}
/>
</motion.h2>

{/* description */}

<motion.p
initial={{ opacity:0,y:30 }}
animate={{ opacity:1,y:0 }}
transition={{ delay:0.6 }}
className="text-lg text-gray-700 max-w-2xl mx-auto mb-10"

>

Saya adalah siswa MAN yang sedang belajar membuat website
menggunakan HTML, CSS, dan React.
</motion.p>

{/* buttons */}

<motion.div
initial={{ opacity:0,y:30 }}
animate={{ opacity:1,y:0 }}
transition={{ delay:0.8 }}
className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"

>

<Button
size="lg"
className="rounded-full px-8 bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg hover:scale-105 transition"

>

Lihat Portofolio </Button>

<Button
variant="outline"
size="lg"
className="rounded-full px-8 backdrop-blur border-gray-300 hover:bg-white/60"

>

Hubungi Saya </Button>

</motion.div>

{/* floating tech icons */}

<div className="flex justify-center gap-8 text-4xl text-gray-800 mb-12">

<motion.div animate={{ y:[0,-10,0] }} transition={{ duration:3, repeat:Infinity }}> <FaReact/>
</motion.div>

<motion.div animate={{ y:[0,-10,0] }} transition={{ duration:3, repeat:Infinity, delay:0.5 }}> <FaJs/>
</motion.div>

<motion.div animate={{ y:[0,-10,0] }} transition={{ duration:3, repeat:Infinity, delay:1 }}> <FaHtml5/>
</motion.div>

<motion.div animate={{ y:[0,-10,0] }} transition={{ duration:3, repeat:Infinity, delay:1.5 }}> <FaCss3Alt/>
</motion.div>

</div>

{/* social icons */}

<div className="flex justify-center gap-6">

{[
{ icon: Github },
{ icon: Linkedin },
{ icon: Youtube },
{ icon: Instagram }
].map((social,i)=>(
<motion.a
key={i}
whileHover={{ scale:1.15 }}
className="p-3 rounded-full bg-white/50 backdrop-blur shadow hover:bg-white transition"

>

<social.icon size={20}/>
</motion.a>
))}

</div>

</div>

</div>

{/* scroll indicator */}

<motion.button
onClick={scrollToAbout}
className="absolute bottom-10 left-1/2 -translate-x-1/2 p-3 rounded-full bg-white/60 backdrop-blur shadow"
animate={{ y:[0,12,0] }}
transition={{ repeat:Infinity, duration:1.5 }}

>

<ArrowDown/>
</motion.button>

</section>

);
}
