import type { Metadata } from "next";
import { LegalPage } from "../legal-page";

export const metadata: Metadata = { title: "隐私政策｜灵伴", description: "灵伴隐私政策" };

export default function PrivacyPage() { return <LegalPage type="privacy" />; }
