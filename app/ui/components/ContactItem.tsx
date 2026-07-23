import Link from "next/link";
import { libre_franklin } from "../fonts";
import { ContactMedium } from "@/app/lib/definitions";
import { LuArrowUpRight } from 'react-icons/lu'

export default function ContactItem({contact_medium, link, main_text, sub_text}: ContactMedium) {
    return (
        <Link target="_blank" href={link} className="group flex relative flex-col border border-[1px] p-4 w-full rounded-xl transition transition-all hover:scale-[1.009] hover:border-blue-900 hover:border-[2px] dark:border-white dark:hover:border-blue-400 xxs:max-w-[30rem]">
            <LuArrowUpRight className="absolute right-4 group-hover:text-blue-900 dark:group-hover:text-blue-400"/>
            <p className="uppercase text-xs group-hover:text-blue-900 dark:group-hover:text-blue-400 ">{contact_medium}</p>
            <p className={`mt-[0.5rem] text-lg font-medium ${libre_franklin.className}`}>{main_text}</p>
            <p className="mt-[0.05rem] text-xs">{sub_text}</p>
        </Link>
    )
}