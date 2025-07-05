// "use client";

// import {
//   Home,
//   Users,
//   Users2,
//   CreditCard,
//   FileText,
//   HelpCircle,
//   LogOut,
// } from "lucide-react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import {
//   Sidebar,
//   SidebarContent,
//   SidebarGroup,
//   SidebarGroupContent,
//   SidebarGroupLabel,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
//   useSidebar,
// } from "@/components/ui/sidebar";

// const navigationItems = [
//   { title: "Overview", url: "/dashboard", icon: Home },
//   { title: "Buddis", url: "/buddis", icon: Users },
//   { title: "Parents", url: "/parents", icon: Users2, badge: "9" },
//   { title: "Payments", url: "/payments", icon: CreditCard },
//   { title: "Reports", url: "/reports", icon: FileText },
//   { title: "Support", url: "/support", icon: HelpCircle },
//   { title: "Sign Out", url: "/signout", icon: LogOut },
// ];

// export function AppSidebar() {
//   const { state } = useSidebar();
//   const pathname = usePathname();
//   const collapsed = state === "collapsed";

//   const isActive = (path: string) => {
//     if (path === "/dashboard" && pathname === "/") return true;
//     return pathname === path;
//   };

//   const getNavClassName = (path: string) => {
//     const baseClasses =
//       "rounded-none  justify-start transition-all duration-300 ml-[-1.5rem] ps-6 py-6 w-full";
//     if (isActive(path)) {
//       return `${baseClasses} bg-orange-50  text-orange-600 border-l-3 border-orange-500 mr-[4rem]`;
//     }
//     return `${baseClasses} text-gray-700 hover:bg-gray-100 hover:text-gray-900`;
//   };

//   return (
//     <Sidebar
//       className={`border-r border-gray-200 bg-white ${
//         collapsed ? "w-16" : "w-64"
//       }`}
//     >
//       <SidebarContent className="p-4">
//         {/* User Profile Section */}
//         <div
//           className={`flex items-center mb-6 ${
//             collapsed ? "justify-center" : ""
//           }`}
//         >
//           <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-sm font-medium text-gray-700">
//             BF
//           </div>
//           {!collapsed && (
//             <div className="ml-3">
//               <p className="text-xs text-gray-900">Brian Ford <span>(ADMIN ROLE)</span></p>
//               <p className="text-xs text-gray-400">brianford@jak.com</p>
//             </div>
//           )}
//         </div>

//         <SidebarGroup>
//           {!collapsed && (
//             <SidebarGroupLabel className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">
//               Management
//             </SidebarGroupLabel>
//           )}
//           <SidebarGroupContent>
//             <SidebarMenu className="space-y-1">
//               {navigationItems.map((item) => (
//                 <SidebarMenuItem key={item.title}>
//                   <SidebarMenuButton asChild className="p-0">
//                     <Link href={item.url} className={getNavClassName(item.url)}>
//                       <div
//                         className={`flex items-center ${
//                           collapsed ? "justify-center w-full" : ""
//                         }`}
//                       >
//                         <item.icon
//                           className={`h-5 w-5 ${collapsed ? "" : "mr-3"}`}
//                         />
//                         {!collapsed && (
//                           <div className="flex items-center justify-between w-full">
//                             <span className="text-sm font-medium">
//                               {item.title}
//                             </span>
//                             {item.badge && (
//                               <span className="bg-gray-100 text-gray-600 text-xs rounded-full px-2 py-1 min-w-[20px] text-center">
//                                 {item.badge}
//                               </span>
//                             )}
//                           </div>
//                         )}
//                       </div>
//                     </Link>
//                   </SidebarMenuButton>
//                 </SidebarMenuItem>
//               ))}
//             </SidebarMenu>
//           </SidebarGroupContent>
//         </SidebarGroup>
//       </SidebarContent>
//     </Sidebar>
//   );
// }

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState, useEffect } from "react";
import { RxDashboard } from "react-icons/rx";
import { IoDocumentsOutline } from "react-icons/io5";
import { FiFlag } from "react-icons/fi";
import { BsPeople } from "react-icons/bs";
import { RxSpeakerLoud } from "react-icons/rx";
import { LuCalendarDays } from "react-icons/lu";
import { IoNotificationsOutline } from "react-icons/io5";
import { TbScan } from "react-icons/tb";
import { MdMiscellaneousServices } from "react-icons/md";
import { TbSquareToggle } from "react-icons/tb";

interface SidebarProps {
  className?: string;
  isMobileOpen?: boolean;
  setIsMobileOpen?: (open: boolean) => void;
}

export default function Sidebar({
  className,
  isMobileOpen,
  setIsMobileOpen,
}: SidebarProps) {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if we're on mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Add event listener
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Close mobile sidebar when navigating
  useEffect(() => {
    if (isMobile && setIsMobileOpen) {
      setIsMobileOpen(false);
    }
  }, [pathname, isMobile, setIsMobileOpen]);

  const navItems = [
    {
      title: "Overview",
      href: "/overview",
      icon: <RxDashboard size={20} />,
    },
    {
      title: "Buddis",
      href: "/buddis",
      icon: <IoDocumentsOutline size={20} />,
    },
    {
      title: "Parents",
      href: "/parents",
      icon: <FiFlag size={20} />,
      badge:4
    },
    {
      title: "Payments",
      href: "/payments",
      icon: <BsPeople size={20} />,
    },
    {
      title: "Reports",
      href: "/reports",
      icon: <RxSpeakerLoud size={20} />,
    },
    {
      title: "Support",
      href: "/support",
      icon: <LuCalendarDays size={20} />,
    },
    {
      title: "Sign Out",
      href: "/signout",
      icon: <MdMiscellaneousServices size={20} />,
    },
 
  ];

  // If mobile and not open, don't render the sidebar
  if (isMobile && !isMobileOpen) return null;

  return (
    <div
      className={cn(
        "flex flex-col bg-white transition-all duration-300 overflow-y-auto hide-scrollbar border-r border-gray-200",
        isCollapsed ? "w-[80px]" : "w-[18rem]",
        isMobile ? "fixed inset-y-0 left-0 z-50 shadow-xl" : "h-screen",
        className
      )}
    >
      <div
        className={cn(
          "py-5 px-6 sticky top-0 bg-white ",
          isCollapsed && "flex justify-center px-0"
        )}
      >
        <Link href="/" className="flex items-center gap-2">
          <div
          className={`flex items-center mb-6 ${
            isCollapsed ? "justify-center" : ""
          }`}
        >
          <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-sm font-medium text-gray-700">
            BF
          </div>
          {!isCollapsed && (
            <div className="ml-3">
              <p className="text-xs text-gray-900">Brian Ford <span>(ADMIN ROLE)</span></p>
              <p className="text-xs text-gray-400">brianford@jak.com</p>
            </div>
          )}
        </div>
        </Link>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                pathname === item.href
                  ? "bg-orange-50 text-orange-500 py-3"
                  : "text-gray-700  hover:bg-orange-50  hover:text-orange-500 py-3 duration-300 transition-all ",
                isCollapsed && "justify-center px-0"
              )}
            >
              {item.icon}
              {!isCollapsed && <span>{item.title}</span>}
              {!isCollapsed && item.badge && (
                <span className="ml-auto bg-gray-200 rounded-full px-1.5 py-0.5 text-xs font-medium border border-gray-400">
                  {item.badge}
                </span>
              )}
              {isCollapsed && item.badge && (
                <span className="absolute top-0 right-0 bg-gray-200  px-1.5 py-0.5 text-xs font-medium border border-gray-500">
                  {item.badge}
                </span>
              )}
            </Link>
          ))}
        </ul>
      </nav>

      {!isMobile && (
        <div className="p-4 space-y-3">
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="flex items-center gap-3 px-3 py-2 w-full rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <TbSquareToggle size={20} />
            {!isCollapsed && <span>Toggle sidebar</span>}
          </button>
        </div>
      )}

      {/* Mobile close overlay */}
      {isMobile && (
        <div
          className="fixed inset-0 bg-black/20 z-40"
          style={{ zIndex: -1 }}
          onClick={() => setIsMobileOpen?.(false)}
        />
      )}
    </div>
  );
}
