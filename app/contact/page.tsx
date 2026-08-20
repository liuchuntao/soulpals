import type { Metadata } from "next";
import { LegalPage } from "../legal-page";

export const metadata: Metadata = { title: "联系我们｜灵伴", description: "联系灵伴" };

export default function ContactPage() { return <LegalPage type="contact" />; }
