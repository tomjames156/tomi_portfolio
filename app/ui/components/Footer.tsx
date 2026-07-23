import { libre_franklin } from "../fonts"

export default function Footer (){
    return (<footer className="mt-32 pb-6 pt-6 border border-[#ffffff25] !border-t-[1px] border-r-0 border-b-0 border-l-0">
        <p className={`${libre_franklin.className} antialiased text-center text-xs dark:text-white `}>Developed by Tomisin Akinwande<br/>&copy; 2026</p>
    </footer>)
}