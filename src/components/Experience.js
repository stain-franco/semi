import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({position, company, companyLink, time, address, work}) =>{
    const ref = useRef(null);
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center 
    justify-between md:w-[80%]'>
        
        <LiIcon reference={ref}/>
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration: 0.5, type: "spring"}}
        >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                {position}&nbsp;<a href={companyLink}
                target='_blank'
                className='text-primary dark:text-primaryDark capitalize'
                >@{company}</a>
            </h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {address}
            </span>
            <p className='font-medium w-full md:text-sm'> 
                {work}
            </p>
        </motion.div>
    </li>
}

const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"] //center start
        }
    )
  return (
    <div className='my-64 '>
        <h2 className='font-bold text-8xl mb-32 w-full text-center dark:text-light md:text-6xl xs:text-4xl md:md-16'>
            Experiencias 
        </h2>

        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

            <motion.div 
            style={{scaleY: scrollYProgress}}
            className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
            md:w-[2px] md:left-[30px] xs:left-[20px]" />

            <ul className='w-full flex flex-col items-start justify-between ml-4
            xs:ml-2'>
                <Details
                position="Sector Logístico" company="Google" companyLink="www.google.com"
                time="2022-Present" address="Mountain View, CA"
                work="Diseñamos un software de gestión de inventarios y distribución que redujo los errores logísticos en un 40%, optimizando la trazabilidad y el control de stock en una empresa local."
                />

                <Details
                position="Sector Salud" company="Google" companyLink="www.google.com"
                time="2022-Present" address="Mountain View, CA"
                work="Desarrollamos una plataforma médica personalizada que automatiza las citas y las historias clínicas, reduciendo las pérdidas por inasistencia en un 25% y mejorando la atención al paciente."
                />

                <Details
                position="Sector Educativo" company="Google" companyLink="www.google.com"
                time="2022-Present" address="Mountain View, CA"
                work="Creamos un sistema de control académico y pagos que centraliza la información de estudiantes y docentes, facilitando la gestión administrativa de instituciones educativas en Rionegro."
                />
            </ul>
        </div>
    </div>
  )
}

export default Experience