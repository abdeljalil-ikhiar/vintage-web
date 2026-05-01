import {
  BoltIcon,
  BotIcon,
  BrowserIcon,
  BuildingIcon,
  ClipboardIcon,
  LayersIcon,
  LinkIcon,
  LockIcon,
  MessageIcon,
  SendIcon,
  ShieldIcon,
  SlidersIcon,
  UsersIcon,
  WalletIcon,
} from "@/components/icons";

export const navLinks = [
  { label: "Solutions", href: "#solutions" },
  { label: "Products", href: "#products" },
  { label: "Security", href: "#security" },
  { label: "Developers", href: "#developers" },
  { label: "Contact", href: "#contact" },
] as const;

export const heroHighlights = [
  "Multi-asset support",
  "Secure infrastructure",
  "Built for businesses",
] as const;

export const overviewPoints = [
  {
    title: "Unified visibility for treasury and operations teams",
    description:
      "Atlas Crypto is presented as a secure environment where business teams can monitor account activity, selected digital assets, and operational status from one interface.",
  },
  {
    title: "Operational workflows designed for internal policy",
    description:
      "The operating model is designed to fit alongside approvals, custody relationships, and internal review steps that support disciplined financial operations.",
  },
  {
    title: "Settlement coordination for business activity",
    description:
      "Funding instructions, treasury movements, and settlement workflows are framed around practical business requirements rather than consumer-style crypto experiences.",
  },
  {
    title: "Integration pathways for reporting and reconciliation",
    description:
      "API integrations and structured exports help internal teams connect account data into treasury, ERP, compliance, and reconciliation workflows.",
  },
] as const;

export const featureCards = [
  {
    icon: LayersIcon,
    title: "Multi-asset support",
    description:
      "Support for BTC, ETH, and selected stablecoins gives businesses a clearer operating view across core digital asset balances.",
  },
  {
    icon: WalletIcon,
    title: "Unified interface",
    description:
      "A single interface brings balance visibility, account status, and operational checkpoints together for finance and operations teams.",
  },
  {
    icon: LinkIcon,
    title: "API integrations",
    description:
      "Integration pathways support internal connectivity for reporting, reconciliation, balance monitoring, and downstream operational workflows.",
  },
  {
    icon: BoltIcon,
    title: "Settlement workflows",
    description:
      "Settlement workflows are designed to help business teams coordinate funding, transfers, and counterparties inside a more structured environment.",
  },
  {
    icon: ShieldIcon,
    title: "Secure custody model",
    description:
      "A secure custody model can be aligned with custody partners, defined approvals, and internal control expectations.",
  },
] as const;

export const securityCards = [
  {
    icon: UsersIcon,
    title: "Role-based access control",
    description:
      "Permission layers separate viewing, approval, and operational responsibilities across treasury, finance, and compliance roles.",
  },
  {
    icon: SlidersIcon,
    title: "Transaction limits",
    description:
      "Thresholds and approval rules can be aligned with internal treasury policy and operational risk tolerances.",
  },
  {
    icon: ClipboardIcon,
    title: "Audit logs",
    description:
      "Activity records help teams review account changes, approvals, and movement instructions with stronger accountability.",
  },
  {
    icon: LockIcon,
    title: "Risk monitoring",
    description:
      "Monitoring controls help surface unusual activity patterns and support escalation inside a secure operating environment.",
  },
  {
    icon: ShieldIcon,
    title: "Compliance workflows",
    description:
      "Structured onboarding, documentation review, and policy-aware oversight support a more controlled client operating model.",
  },
] as const;

export const customerFlowSteps = [
  {
    label: "Campaign",
    description: "Targeted outreach introduces the service to relevant business prospects.",
    icon: SendIcon,
  },
  {
    label: "Landing Page",
    description: "A focused institutional page explains the platform, controls, and operating model.",
    icon: BrowserIcon,
  },
  {
    label: "Contact",
    description: "Prospects submit an enquiry through a structured contact form.",
    icon: MessageIcon,
  },
  {
    label: "Sales Team",
    description: "The sales team follows up with qualification, product context, and next steps.",
    icon: UsersIcon,
  },
] as const;

export const futureCapabilityCards = [
  {
    icon: BotIcon,
    title: "Guided product education",
    description:
      "Optional assisted walkthroughs could help explain product scope and onboarding requirements in a more consistent format.",
  },
  {
    icon: ClipboardIcon,
    title: "Document preparation support",
    description:
      "Future workflows may help organise initial information requests before a human review begins.",
  },
  {
    icon: UsersIcon,
    title: "Sales routing assistance",
    description:
      "Qualified enquiries could be routed to the appropriate sales contact once those workflows are implemented.",
  },
] as const;

export const infrastructureFlow = [
  {
    label: "Client onboarding",
    description: "Business intake, documentation review, and account setup planning.",
    icon: BuildingIcon,
  },
  {
    label: "Unified interface",
    description: "Shared visibility for treasury, finance, and operations users.",
    icon: WalletIcon,
  },
  {
    label: "Custody model",
    description: "Operational structures aligned with custody partners and internal controls.",
    icon: ShieldIcon,
  },
  {
    label: "Settlement workflows",
    description: "Controlled funding and movement instructions across business processes.",
    icon: BoltIcon,
  },
  {
    label: "API integrations",
    description: "Connectivity for ERP, treasury, reporting, and reconciliation tooling.",
    icon: LinkIcon,
  },
  {
    label: "Reporting outputs",
    description: "Structured exports for finance, audit, and compliance review.",
    icon: ClipboardIcon,
  },
] as const;

export const developerHighlights = [
  "API integration pathways for treasury, ERP, and reconciliation systems",
  "Structured reporting outputs designed for finance and compliance review",
  "Operational event visibility to support internal controls and downstream workflows",
] as const;

export const footerLinks = [
  { label: "Products", href: "#products" },
  { label: "Solutions", href: "#solutions" },
  { label: "Security", href: "#security" },
  { label: "Developers", href: "#developers" },
  { label: "Legal", href: "#" },
  { label: "Privacy Policy", href: "#" },
] as const;
