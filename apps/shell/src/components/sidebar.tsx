import React from 'react';

import {
  Sidebar,
  SidebarProvider,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarContent,
  SidebarRail,
  SidebarInset,
  SidebarTrigger,
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Separator,
  Badge,
} from '@mf-poc/ui';
import { useCartStore } from '@mf-poc/store';
import { useLocation } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

type SidebarProps = {
  children: React.ReactNode;
};

const data = {
  versions: ['1.0.1', '1.1.0-alpha', '2.0.0-beta1'],
  navMain: [
    {
      title: 'Getting Started',
      url: '/',
      items: [
        {
          title: 'Home',
          url: '/',
        },
        {
          title: 'About',
          url: '/about',
        },
        {
          title: 'Shop',
          url: '/shop',
        },
        {
          title: 'Cart',
          url: '/cart',
        },
      ],
    },
  ],
};

export const DashboardSidebar: React.FC<SidebarProps> = ({ children }) => {
  const { items } = useCartStore();
  const location = useLocation();
  const isActive = (url: string) => {
    return location.pathname === url;
  };

  const findBreadcrumbPage = (path: string) => {
    const item = data.navMain.find((item) =>
      item.items.some((i) => i.url === path)
    );
    return item?.items.find((i) => i.url === path)?.title;
  };

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent>
          {data.navMain.map((item) => (
            <SidebarGroup key={item.title}>
              <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {item.items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild isActive={isActive(item.url)}>
                        <a href={item.url}>{item.title}</a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </SidebarContent>
        <SidebarRail />
      </Sidebar>
      <SidebarInset>
        <header className="flex justify-between pr-8 border-b">
          <div className="flex h-16 shrink-0 items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href={data.navMain[0].url}>
                    Testnis
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>
                    {findBreadcrumbPage(location.pathname)}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex items-center gap-2">
            <Badge className="flex gap-x-1">
              <ShoppingCart size={16} />
              {items.length}
            </Badge>
          </div>
        </header>
        <div className="p-4">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
};
