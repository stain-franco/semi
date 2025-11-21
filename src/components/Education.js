import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({type, time, place, info }) =>{
    const ref = useRef(null);
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center
    justify-between md:w-[80%]'>
        
        <LiIcon reference={ref}/>
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration: 0.5, type: "spring"}}
        >
            <h3 className='capitalize font-bold text-2x sm:text-xl xs:text-lgl'>
                {type}
            </h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {place}
            </span>
            <p className='font-medium w-full md:text-sm'> 
                {info}
            </p>
        </motion.div>
    </li>
}

const Education = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"] //center start
        }
    )
  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:md-16'>
            Reseñas 
        </h2>

        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

            <motion.div 
            style={{scaleY: scrollYProgress}}
            className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
            md:w-[2px] md:left-[30px] xs:left-[20px]" />

            <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                <Details
                type="Sector Logístico: LogiSmart" 
                time="2016-2020" 
                place="Massachusetts Institute Of Technology (MIT)"
                info="“Antes de implementar LogiSmart, teníamos muchos errores en la distribución y un control deficiente de inventarios. El sistema nos permitió automatizar las rutas y tener trazabilidad en tiempo real. Hoy, nuestras entregas son más rápidas y eficientes.”
— Juan Carlos Restrepo, Gerente de Operaciones – TransRío S.A.S.
"
                />
                <Details
                type="Sector Salud: MediTrack" 
                time="2016-2020" 
                place="Massachusetts Institute Of Technology (MIT)"
                info="“El software desarrollado nos ayudó a centralizar toda la información de pacientes, citas y pagos en un solo lugar. La atención se volvió más fluida y el equipo médico trabaja con mayor organización. Sin duda, una herramienta esencial para nuestra clínica.”
— Dra. Marcela Gómez, Directora Médica – Clínica Vida Plena
"
                />
                <Details
                type="Sector Educativo: EduControl" 
                time="2016-2020" 
                place="Massachusetts Institute Of Technology (MIT)"
                info="“La plataforma cambió completamente la forma en que gestionamos nuestra institución. Ahora los docentes, estudiantes y administrativos pueden acceder fácilmente a la información académica. Es un sistema intuitivo y muy confiable.”
— Andrés Vélez, Coordinador Académico – Instituto Formar
"
                />
            </ul>
        </div>
    </div>
  )
}

export default Education