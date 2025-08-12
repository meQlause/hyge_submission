"use client";

import { useState } from "react";
import { Instagram } from "lucide-react";
import { motion } from "framer-motion"; // ← add
import { ContactSectionProps } from "@/utils/interfaces";
import { FieldArea } from "../ui/FieldArea";
import { Field } from "../ui/Field";
import { Social } from "../ui/Social";
import { DetailRow } from "../ui/DetailRow";

const ContactSection: React.FC<ContactSectionProps> = ({ eyebrow, title, blurb, officeAddress, email, phone, onSubmit }) => {
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            if (onSubmit) {
                await onSubmit({
                    name: form.name.trim(),
                    email: form.email.trim(),
                    phone: form.phone.trim(),
                    message: form.message.trim(),
                });
            } else {
                console.log("Contact form", form);
                alert("Thanks! We’ll get back to you shortly.");
            }
            setForm({ name: "", email: "", phone: "", message: "" });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="max-w-[1440px] mx-auto w-full px-[20px] min-w-[375px] ">
            <div className="max-w-[1400px] rounded-xl bg-[#101014] text-neutral-100 px-[20px] py-[60px] xxl:px-[80px] xxl:py-[90px] flex flex-col lg2:flex-row justify-between gap-20">

                {/* LEFT column (fade-up) */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.32, ease: "easeOut" }}
                    className="lg2:max-w-[500px]"
                >
                    <div className="flex flex-col gap-[20px] justify-start items-start">
                        <div className="items-center rounded-full bg-neutral-800 text-white text-[16px] px-3 py-1 mb-3">
                            {eyebrow}
                        </div>

                        <h2 className="text-[48px] font-[500] ">
                            {title}
                        </h2>
                        <p className="mt-2 xxl:w-[570px] text-[20px] text-neutral-300 leading-[170%] ">{blurb}</p>
                    </div>

                    <div className="mt-[48px] pb-[31px] space-y-4 border-b border-neutral-800/80 pt-5">
                        <DetailRow label="Office" value={officeAddress} />
                        <DetailRow label="Email" value={email} />
                        <DetailRow label="Telephone" value={phone} />
                    </div>

                    <div className="pt-[48px]">
                        <p className="text-[18px] font-[600] text-neutral-100 mb-2">Follow us</p>
                        <div className="flex items-center gap-3">
                            <Social href="#" label="Instagram">
                                <Instagram className="size-[24px]" />
                            </Social>
                            <Social href="#" label="TikTok">
                                <span className="text-sm font-semibold">♪</span>
                            </Social>
                            <Social href="#" label="X">
                                <span className="text-xs font-bold">X</span>
                            </Social>
                        </div>
                    </div>
                </motion.div>

                {/* RIGHT column (form) (fade-up with slight delay) */}
                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.32, ease: "easeOut", delay: 0.08 }}
                    className="mt-[100px] lg2:w-[422px] xxl:w-[570px] flex flex-col justify-between xs:h-[564px] bg-white text-neutral-900 rounded-lg p-4 xxxl:w-[570px] w-full"
                >
                    <Field
                        label="Name"
                        required
                        placeholder="John Smith"
                        value={form.name}
                        onChange={(v) => setForm((s) => ({ ...s, name: v }))}
                    />
                    <Field
                        type="email"
                        label="Email"
                        required
                        placeholder="johnsmith@gmail.com"
                        value={form.email}
                        onChange={(v) => setForm((s) => ({ ...s, email: v }))}
                    />
                    <Field
                        label="Phone Number"
                        placeholder="+44 7890 123456"
                        required
                        value={form.phone}
                        onChange={(v) => setForm((s) => ({ ...s, phone: v }))}
                    />
                    <FieldArea
                        label="Message"
                        required
                        placeholder="Hello, I’d like to enquire about…"
                        value={form.message}
                        onChange={(v) => setForm((s) => ({ ...s, message: v }))}
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#4c4c4f]  py-[11px] text-white text-[16px] font-[500] disabled:opacity-60"
                    >
                        {loading ? "Sending…" : "Send message"}
                    </button>
                </motion.form>
            </div>
        </section>
    );
};

export default ContactSection;
