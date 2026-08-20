import type { Metadata } from "next";
import { LegalPage } from "../legal-page";

export const metadata: Metadata = { title: "用户服务协议｜灵伴", description: "灵伴用户服务协议" };

export default function TermsPage() { return <LegalPage type="terms" />; }
