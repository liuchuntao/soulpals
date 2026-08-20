import type { Metadata } from "next";
import { LegalPage } from "../legal-page";

export const metadata: Metadata = { title: "未成年人保护政策｜灵伴", description: "灵伴未成年人保护政策" };

export default function MinorProtectPage() { return <LegalPage type="minor" />; }
