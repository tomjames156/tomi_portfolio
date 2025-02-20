import { motion } from 'framer-motion';

type TechnologyUsedProps = {
    technology: string;
}

const item  = {
    initial: { x: 20, opacity: 0},
    whileInView: {
        x: 0,
        opacity: 1
    }
}

export default function TechnologyUsed({technology}: TechnologyUsedProps){
    return (
        <motion.div className='flex items-center gap-3 pl-3' variants={item}>
            <div className='w-[0.5rem] bg-blue-900 h-[0.5rem] rounded-xl'>
            </div>
            <div className='text-base font-medium'>{technology}</div>
        </motion.div>
    )
}