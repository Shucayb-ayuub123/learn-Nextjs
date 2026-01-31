"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import './style.css'
const navLink = [
  { name: "Register", href: "/Register" },
  { name: "Login", href: "/Login" },
  { name: "ForgetPassword", href: "/ForgetPassword" },
];

 const authRootLayout = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname()

  return (
    <div>
      <input type="text"  />
      {navLink.map((link) => {
        const isactive = pathname.startsWith(link.href)
        return <Link href={link.href} key={link.name} className={`${isactive ? 'font-bold mr-4' : 'text-blue-500'}`}>{link.name}</Link>;
      })}
      {children}
    </div>
  );
};

export default authRootLayout