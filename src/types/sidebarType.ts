export type pageNameType = "newest" | "bestseller";

export interface SidebarProps {
  pageName?: pageNameType;
  isDomestic: boolean;
  location?: string;
}