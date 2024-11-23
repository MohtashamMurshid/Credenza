import * as React from "react";

import { SearchForm } from "@/components/search-form";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  versions: ["1.0.1"],
  navMain: [
    {
      title: "Dashboard Overview",
      url: "#",
      items: [
        { title: "Summary", url: "#s", isActive: false },
        { title: "Quick Links", url: "#", isActive: false },
        { title: "Notifications", url: "#", isActive: false },
      ],
    },
    {
      title: "Portfolio Builder",
      url: "#",
      items: [
        { title: "Personal Information", url: "#", isActive: false },
        { title: "Projects", url: "#", isActive: false },
        { title: "Work Experience", url: "#", isActive: false },
        { title: "Education", url: "#", isActive: false },
        { title: "Certifications", url: "#", isActive: false },
        { title: "Live Preview", url: "#", isActive: false },
      ],
    },
    {
      title: "Resume Builder",
      url: "#",
      items: [
        { title: "Templates Gallery", url: "#", isActive: false },
        { title: "Contact Information", url: "#", isActive: false },
        { title: "Objective/Professional Summary", url: "#", isActive: false },
        { title: "Skills", url: "#", isActive: false },
        { title: "Work Experience", url: "#", isActive: false },
        { title: "Education", url: "#", isActive: false },
        { title: "Additional Sections", url: "#", isActive: false },
        { title: "Export Options", url: "#", isActive: false },
      ],
    },
    {
      title: "Theme & Design Customization",
      url: "#",
      items: [
        { title: "Themes", url: "#", isActive: false },
        { title: "Fonts", url: "#", isActive: false },
        { title: "Color Palettes", url: "#", isActive: false },
        { title: "Layouts", url: "#", isActive: false },
        { title: "Preview", url: "#", isActive: false },
      ],
    },
    {
      title: "Saved Drafts & Templates",
      url: "#",
      items: [
        { title: "Manage Drafts", url: "#", isActive: false },
        { title: "Reuse Templates", url: "#", isActive: false },
      ],
    },
    {
      title: "Analytics",
      url: "#",
      items: [
        { title: "Portfolio Visits", url: "#", isActive: false },
        { title: "User Interactions", url: "#", isActive: false },
        { title: "Insights", url: "#", isActive: false },
      ],
    },
    {
      title: "Settings",
      url: "#",
      items: [
        { title: "Profile Settings", url: "#", isActive: false },
        { title: "Account Management", url: "#", isActive: false },
        { title: "Privacy Settings", url: "#", isActive: false },
      ],
    },
    {
      title: "Help Center",
      url: "#",
      items: [
        { title: "FAQs", url: "#", isActive: false },
        { title: "Tutorials", url: "#", isActive: false },
        { title: "Support Request", url: "#", isActive: false },
      ],
    },
    {
      title: "Feedback & Suggestions",
      url: "#",
      items: [
        { title: "Submit Feedback", url: "#", isActive: false },
        { title: "Feature Suggestions", url: "#", isActive: false },
      ],
    },
    {
      title: "Payment Management",
      url: "#",
      items: [
        { title: "Subscriptions", url: "#", isActive: false },
        { title: "Payment History", url: "#", isActive: false },
        { title: "Upgrade Options", url: "#", isActive: false },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <h1 className="font-bold text-2xl text-purple-600 text-center">
          <a href="#">Credenza</a>
        </h1>
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={item.isActive}>
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
  );
}
