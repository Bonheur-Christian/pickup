"use client";

import { Home, Users, Users2, CreditCard, FileText, HelpCircle, LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const navigationItems = [
  { title: "Overview", url: "/dashboard", icon: Home },
  { title: "Buddis", url: "/buddis", icon: Users },
  { title: "Parents", url: "/parents", icon: Users2, badge: "9" },
  { title: "Payments", url: "/payments", icon: CreditCard },
  { title: "Reports", url: "/reports", icon: FileText },
  { title: "Support", url: "/support", icon: HelpCircle },
  { title: "Sign Out", url: "/signout", icon: LogOut },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const pathname = usePathname();
  const collapsed = state === "collapsed";

  const isActive = (path: string) => {
    if (path === "/dashboard" && pathname === "/") return true;
    return pathname === path;
  };

  const getNavClassName = (path: string) => {
    const baseClasses = "w-full justify-start transition-colors";
    if (isActive(path)) {
      return `${baseClasses} bg-orange-50 text-orange-600 border-r-2 border-orange-500`;
    }
    return `${baseClasses} text-gray-700 hover:bg-gray-100 hover:text-gray-900`;
  };

  return (
    <Sidebar className={`border-r border-gray-200 bg-white ${collapsed ? "w-16" : "w-64"}`}>
      <SidebarContent className="p-4">
        {/* User Profile Section */}
        <div className={`flex items-center mb-6 ${collapsed ? "justify-center" : ""}`}>
          <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-sm font-medium text-gray-700">
            BF
          </div>
          {!collapsed && (
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">Brian Ford</p>
              <p className="text-xs text-gray-500">(ADMIN ROLE)</p>
              <p className="text-xs text-gray-400">brianford@jak.com</p>
            </div>
          )}
        </div>

        <SidebarGroup>
          {!collapsed && (
            <SidebarGroupLabel className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">
              Management
            </SidebarGroupLabel>
          )}
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="p-0">
                    <Link href={item.url} className={getNavClassName(item.url)}>
                      <div className={`flex items-center ${collapsed ? "justify-center w-full" : ""}`}>
                        <item.icon className={`h-5 w-5 ${collapsed ? "" : "mr-3"}`} />
                        {!collapsed && (
                          <div className="flex items-center justify-between w-full">
                            <span className="text-sm font-medium">{item.title}</span>
                            {item.badge && (
                              <span className="bg-gray-100 text-gray-600 text-xs rounded-full px-2 py-1 min-w-[20px] text-center">
                                {item.badge}
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
