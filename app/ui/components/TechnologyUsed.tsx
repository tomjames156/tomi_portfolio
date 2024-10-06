import React from 'react';

type TechnologyUsedProps = {
    technology: string;
}


export default function TechnologyUsed({technology}: TechnologyUsedProps){
    return (
        <div className='flex items-center gap-3 pl-3'>
            <div className='w-[0.5rem] bg-blue-900 h-[0.5rem] rounded-xl'>
            </div>
            <div className='text-base font-medium'>{technology}</div>
        </div>
    )
}