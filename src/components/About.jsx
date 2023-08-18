import { moonlight } from "../assets"

const About = () => {
   return (
      <section id="about" className="flex flex-col sm:flex-row justify-center items-center w-full p-5 h-[380px]">
         <div>
            <img src={moonlight} alt="about" className="w-[800px]" />
         </div>
         <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo veritatis eveniet ipsum impedit amet, itaque earum maxime, ullam culpa facilis error ab debitis molestiae doloribus optio recusandae deleniti neque. Ab.</p>
         </div>
      </section>
   )
}

export default About