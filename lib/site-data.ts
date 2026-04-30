import {
  ArrowRightIcon,
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
  { label: "Products", href: "#products" },
  { label: "Security", href: "#security" },
  { label: "AI Assistant", href: "#ai-assistant" },
  { label: "Contact", href: "#contact" },
] as const;

export const heroHighlights = [
  "Multi-asset support (BTC, ETH, stablecoins)",
  "Institutional-grade security infrastructure",
  "Built for businesses and financial teams",
] as const;

export const overviewPoints = [
  {
    title: "Unified visibility across fiat and crypto balances",
    description:
      "Atlas Crypto gives institutional clients a secure operating environment to monitor fiat balances, stablecoins, and selected crypto assets through one controlled interface.",
  },
  {
    title: "Operating model aligned with custody partners",
    description:
      "Account structures are designed to work alongside custody partners, internal approvals, and compliance processes that support institutional financial workflows.",
  },
  {
    title: "Settlement infrastructure for business treasury activity",
    description:
      "Funding, treasury movements, and counterparty settlement can be coordinated through infrastructure shaped around professional operating requirements.",
  },
  {
    title: "API integrations and reporting pathways",
    description:
      "Documented API integrations help businesses connect balances, transaction events, and reporting data into treasury, ERP, and reconciliation systems.",
  },
] as const;

export const featureCards = [
  {
    icon: LayersIcon,
    title: "Multi-asset support",
    description:
      "Support for BTC, ETH, and selected stablecoins helps businesses manage digital asset operations with clearer asset-level visibility.",
  },
  {
    icon: WalletIcon,
    title: "Unified client console",
    description:
      "Bring fiat balances and crypto positions together in one client console built for finance, treasury, and operations teams.",
  },
  {
    icon: LinkIcon,
    title: "API integrations",
    description:
      "API integrations support internal connectivity for reporting, reconciliation, balance monitoring, and workflow automation.",
  },
  {
    icon: BoltIcon,
    title: "Settlement infrastructure",
    description:
      "A business-oriented settlement model helps institutional clients coordinate funding and movement instructions more efficiently.",
  },
  {
    icon: ShieldIcon,
    title: "Secure custody model",
    description:
      "Assets can sit within secure structures supported by custody partners, defined approvals, and a more disciplined control framework.",
  },
] as const;

export const securityCards = [
  {
    icon: ShieldIcon,
    title: "Compliance workflows",
    description:
      "Structured onboarding, documentation review, and policy-aware oversight support a more controlled client operating model.",
  },
  {
    icon: UsersIcon,
    title: "Role-based access control",
    description:
      "Permission layers help separate viewing, approval, and operational responsibilities across treasury, finance, and compliance teams.",
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
      "Activity records help teams review account changes, operational approvals, and movement instructions with greater accountability.",
  },
  {
    icon: LockIcon,
    title: "Risk monitoring",
    description:
      "Monitoring controls help identify unusual activity patterns and support escalation inside a secure operating environment.",
  },
] as const;

export const customerFlowSteps = [
  {
    label: "SMS / WhatsApp Campaign",
    description: "Future outbound message",
    icon: SendIcon,
  },
  {
    label: "Personalized Link",
    description: "Tracked prospect entry",
    icon: LinkIcon,
  },
  {
    label: "Landing Page",
    description: "Product-specific destination",
    icon: BrowserIcon,
  },
  {
    label: "AI Chat",
    description: "Hermes first response",
    icon: MessageIcon,
  },
  {
    label: "Human Sales",
    description: "Qualified handoff",
    icon: UsersIcon,
  },
] as const;

export const aiAssistantCapabilities = [
  "Answer client questions about product scope and onboarding",
  "Qualify leads automatically before human review",
  "Handle 80-90% of routine conversations",
  "Transfer serious prospects to human sales teams",
] as const;

export const aiConversation = [
  { speaker: "Client", message: "I want more information" },
  { speaker: "AI", message: "I can help. Are you a business or individual?" },
  { speaker: "Client", message: "Business." },
  {
    speaker: "AI",
    message: "Understood. Which account structure or asset support are you evaluating?",
  },
] as const;

export const aiSummaryPoints = [
  "Lead type: business prospect",
  "Interest: crypto account infrastructure",
  "Next step: route to sales",
] as const;

export const infrastructureFlow = [
  { label: "Client Onboarding", icon: BuildingIcon },
  { label: "Unified Account Console", icon: WalletIcon },
  { label: "Custody Partners", icon: ShieldIcon },
  { label: "Settlement Rails", icon: BoltIcon },
  { label: "API Integrations", icon: LinkIcon },
  { label: "Reporting", icon: ClipboardIcon },
] as const;

export const developerHighlights = [
  "API integrations for treasury, ERP, and reconciliation tooling",
  "Structured data outputs aligned with finance and compliance review",
  "Operational event visibility designed for internal reporting and oversight",
] as const;

export const footerPrimaryLinks = [
  { label: "Products", href: "#products" },
  { label: "Solutions", href: "#solutions" },
  { label: "Developers", href: "#developers" },
  { label: "Contact", href: "#contact" },
] as const;

export const footerLegalLinks = [
  { label: "Legal", href: "#" },
  { label: "Privacy Policy", href: "#" },
] as const;

export const decorativeIcons = {
  arrow: ArrowRightIcon,
  bot: BotIcon,
} as const;
