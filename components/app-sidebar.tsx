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
        { title: "Summary", url: "#s" },
        { title: "Quick Links", url: "#" },
        { title: "Notifications", url: "#" },
      ],
    },
    {
      title: "Portfolio Builder",
      url: "#",
      items: [
        { title: "Personal Information", url: "#" },
        { title: "Projects", url: "#" },
        { title: "Work Experience", url: "#" },
        { title: "Education", url: "#" },
        { title: "Certifications", url: "#" },
        { title: "Live Preview", url: "#" },
      ],
    },
    {
      title: "Resume Builder",
      url: "#",
      items: [
        { title: "Templates Gallery", url: "#" },
        { title: "Contact Information", url: "#" },
        { title: "Objective/Professional Summary", url: "#" },
        { title: "Skills", url: "#" },
        { title: "Work Experience", url: "#" },
        { title: "Education", url: "#" },
        { title: "Additional Sections", url: "#" },
        { title: "Export Options", url: "#" },
      ],
    },
    {
      title: "Theme & Design Customization",
      url: "#",
      items: [
        { title: "Themes", url: "#" },
        { title: "Fonts", url: "#" },
        { title: "Color Palettes", url: "#" },
        { title: "Layouts", url: "#" },
        { title: "Preview", url: "#" },
      ],
    },
    {
      title: "Saved Drafts & Templates",
      url: "#",
      items: [
        { title: "Manage Drafts", url: "#" },
        { title: "Reuse Templates", url: "#" },
      ],
    },
    {
      title: "Analytics",
      url: "#",
      items: [
        { title: "Portfolio Visits", url: "#" },
        { title: "User Interactions", url: "#" },
        { title: "Insights", url: "#" },
      ],
    },
    {
      title: "Settings",
      url: "#",
      items: [
        { title: "Profile Settings", url: "#" },
        { title: "Account Management", url: "#" },
        { title: "Privacy Settings", url: "#" },
      ],
    },
    {
      title: "Help Center",
      url: "#",
      items: [
        { title: "FAQs", url: "#" },
        { title: "Tutorials", url: "#" },
        { title: "Support Request", url: "#" },
      ],
    },
    {
      title: "Feedback & Suggestions",
      url: "#",
      items: [
        { title: "Submit Feedback", url: "#" },
        { title: "Feature Suggestions", url: "#" },
      ],
    },
    {
      title: "Payment Management",
      url: "#",
      items: [
        { title: "Subscriptions", url: "#" },
        { title: "Payment History", url: "#" },
        { title: "Upgrade Options", url: "#" },
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
