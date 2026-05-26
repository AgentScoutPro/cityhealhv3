"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Menu,
  X,
  ArrowRight,
  ChevronRight,
  Mail,
  MapPin,
  Phone,
  ArrowUpRight,
  Zap,
  Activity,
  Brain,
  Shield,
  FlaskConical,
  Dumbbell,
  Sparkles,
} from "lucide-react"
import { Button } from "@/tokens/components/ui/button"
import { Input } from "@/tokens/components/ui/input"
import { Textarea } from "@/tokens/components/ui/textarea"
import ScrollCanvasSequencer from "@/components/redesign/ScrollCanvasSequencer"

const PHONE      = "(480) 649-5297"
const PHONE_HREF = "tel:+14806495297"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const itemFadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function DesignAgency() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY]       = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-background via-background to-muted/20">

      {/* ── Header ─────────────────────────────────────────────────── */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ${scrollY > 50 ? "shadow-md" : ""}`}>
        <div className="container flex h-16 items-center justify-between border-x border-muted">
          <Link href="/" className="flex items-center gap-3">
            <motion.div
              whileHover={{ rotate: 5, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="h-10 w-10 rounded-3xl bg-primary flex items-center justify-center">
              <Activity className="h-5 w-5 text-primary-foreground" />
            </motion.div>
            <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, letterSpacing: "0.06em", textTransform: "uppercase", fontSize: "1rem", background: "linear-gradient(90deg,#00F2FE,#4FACFE)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              City Health AZ
            </span>
          </Link>

          <nav className="hidden md:flex gap-6 items-center">
            {["Services", "Locations", "About"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="transition-colors hover:text-primary"
                style={{ fontFamily: "'Space Mono',monospace", fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#7E9BB5" }}>
                {item}
              </Link>
            ))}
            <a
              href={PHONE_HREF}
              className="hover:opacity-80 transition-opacity"
              style={{ fontFamily: "'Space Mono',monospace", fontSize: "0.75rem", fontWeight: 700, color: "#00F2FE", letterSpacing: "0.06em" }}>
              {PHONE}
            </a>
          </nav>

          <div className="hidden md:flex">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-3xl bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90 transition-colors cursor-pointer"
              style={{ fontFamily: "'Space Mono',monospace", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.14em" }}>
              [ SCHEDULE ]
            </a>
          </div>

          <button className="flex md:hidden cursor-pointer" onClick={toggleMenu} aria-label="Toggle menu">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </motion.header>

      {/* ── Mobile Menu ────────────────────────────────────────────── */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-background md:hidden">
          <div className="container flex h-16 items-center justify-between">
            <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, letterSpacing: "0.06em", textTransform: "uppercase", fontSize: "1rem", background: "linear-gradient(90deg,#00F2FE,#4FACFE)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              City Health AZ
            </span>
            <button onClick={toggleMenu} className="cursor-pointer" aria-label="Close menu">
              <X className="h-6 w-6" />
            </button>
          </div>
          <motion.nav
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="container grid gap-3 pb-8 pt-6">
            {["Services", "Locations", "About", "Contact"].map((item, i) => (
              <motion.div key={i} variants={itemFadeIn}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="flex items-center justify-between rounded-3xl px-3 py-2 text-lg font-medium hover:bg-accent cursor-pointer"
                  onClick={toggleMenu}>
                  {item}
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
            <motion.div variants={itemFadeIn} className="pt-4">
              <a
                href={PHONE_HREF}
                className="flex w-full items-center justify-center rounded-3xl bg-primary py-3 text-primary-foreground cursor-pointer"
                style={{ fontFamily: "'Space Mono',monospace", fontSize: "0.75rem", fontWeight: 700 }}>
                {PHONE}
              </a>
            </motion.div>
          </motion.nav>
        </motion.div>
      )}

      <main className="flex-1">

        {/* ── Hero — 200vh sticky scroll with canvas sequence ────── */}
        <section
          id="hero-scroll-container"
          style={{ position: "relative", height: "200vh", background: "#0D1117" }}
          aria-label="Hero — Pain Management Rewired">
          <div
            className="sticky top-0 overflow-hidden"
            style={{ height: "100vh" }}>

            {/* Canvas scroll sequence at z-0 */}
            <div
              style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none", opacity: 0.55, mixBlendMode: "screen" }}
              aria-hidden="true">
              <ScrollCanvasSequencer
                desktopFolder="/assets/scroll-sequences/hero-neural/desktop"
                mobileFolder="/assets/scroll-sequences/hero-neural/mobile"
                framePrefix="hero-frame"
                totalDesktopFrames={240}
                totalMobileFrames={120}
                triggerId="hero-scroll-container"
              />
            </div>

            {/* Grid dot overlay */}
            <div
              style={{ position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none", backgroundImage: "radial-gradient(circle,rgba(0,242,254,.08) 1px,transparent 1px)", backgroundSize: "40px 40px" }}
              aria-hidden="true" />

            {/* Content */}
            <div
              className="container h-full px-4 md:px-6 border-x border-muted flex items-center"
              style={{ position: "relative", zIndex: 10 }}>
              <div className="grid gap-8 w-full lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_520px] items-center">

                {/* Left: copy */}
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={fadeIn}
                  className="flex flex-col justify-center space-y-6 py-10">
                  <div className="space-y-5">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="inline-flex items-center rounded-3xl bg-muted px-3 py-1"
                      style={{ fontFamily: "'Space Mono',monospace", fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#00F2FE" }}>
                      <Zap className="mr-2 h-3 w-3" />
                      MESA, AZ — EAST VALLEY CLINICAL NETWORK
                    </motion.div>

                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: 0.2 }}
                      style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "clamp(3rem,9vw,7.5rem)", fontWeight: 900, lineHeight: 0.93, letterSpacing: "-0.05em", textTransform: "uppercase" }}>
                      PAIN MANAGEMENT,
                      <br />
                      <span style={{ background: "linear-gradient(90deg,#00F2FE 0%,#4FACFE 55%,#43E97B 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                        REWIRED.
                      </span>
                    </motion.h1>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: 0.4 }}
                      className="text-muted-foreground"
                      style={{ fontSize: "clamp(0.9rem,2vw,1.1rem)", lineHeight: 1.75, maxWidth: "560px", fontWeight: 300 }}>
                      Advanced neuropathy repair, physical medicine, metabolic optimization, and regenerative therapies — engineered around your biology, not around your symptoms.
                    </motion.p>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    className="flex flex-col gap-3 sm:flex-row">
                    <a
                      href="#contact"
                      className="inline-flex items-center justify-center rounded-3xl bg-primary px-7 py-3 text-primary-foreground hover:bg-primary/90 transition-all hover:shadow-[0_0_32px_rgba(0,242,254,0.4)] cursor-pointer group"
                      style={{ fontFamily: "'Space Mono',monospace", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.16em" }}>
                      [ INITIALIZE RECOVERY ]
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                    <a
                      href={PHONE_HREF}
                      className="inline-flex items-center justify-center rounded-3xl border border-muted px-7 py-3 hover:bg-muted/40 transition-colors cursor-pointer"
                      style={{ fontFamily: "'Space Mono',monospace", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em", color: "#00F2FE" }}>
                      {PHONE}
                    </a>
                  </motion.div>
                </motion.div>

                {/* Right: stats glass card */}
                <motion.div
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="hidden lg:flex items-center justify-center">
                  <div
                    className="rounded-3xl border border-muted p-8 w-full"
                    style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }}>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { value: "94%",      label: "Pain Reduction Rate" },
                        { value: "2",        label: "East Valley Clinics" },
                        { value: "15+",      label: "Clinical Specialties" },
                        { value: "Same-Day", label: "New Patient Access" },
                      ].map((stat, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                          className="text-center py-5 rounded-3xl border border-muted"
                          style={{ background: "rgba(0,242,254,0.04)" }}>
                          <p style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "2rem", fontWeight: 900, color: "#00F2FE", letterSpacing: "-0.03em", lineHeight: 1 }}>
                            {stat.value}
                          </p>
                          <p className="text-muted-foreground mt-2"
                            style={{ fontFamily: "'Space Mono',monospace", fontSize: "0.58rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                            {stat.label}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                    <div className="mt-6 pt-6 border-t border-muted text-center">
                      <p className="text-muted-foreground"
                        style={{ fontFamily: "'Space Mono',monospace", fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                        Accepting New Patients — Mesa &amp; East Mesa
                      </p>
                    </div>
                  </div>
                </motion.div>

              </div>
            </div>
          </div>
        </section>

        {/* ── Conditions We Treat ────────────────────────────────── */}
        <section id="conditions" className="w-full py-12 md:py-16 lg:py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="container px-4 md:px-6 border border-muted rounded-3xl bg-muted/20">
            <div className="flex flex-col items-center justify-center space-y-4 text-center py-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-block rounded-3xl bg-muted px-3 py-1"
                style={{ fontFamily: "'Space Mono',monospace", fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#00F2FE" }}>
                CONDITIONS WE TREAT
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, textTransform: "uppercase" }}>
                Your Pain Has a Name.
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                We specialize in conditions that other practices struggle to resolve
              </motion.p>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mx-auto grid grid-cols-2 gap-3 py-8 md:grid-cols-3 lg:grid-cols-6">
              {["Chronic Pain", "Neuropathy", "Fibromyalgia", "Back & Spine", "Joint Pain", "Sports Injury"].map((condition, i) => (
                <motion.div
                  key={i}
                  variants={itemFadeIn}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center justify-center cursor-pointer">
                  <div className="rounded-3xl border p-5 bg-background/80 hover:border-primary/40 hover:shadow-md transition-all text-center w-full">
                    <p style={{ fontFamily: "'Space Mono',monospace", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#7E9BB5" }}>
                      {condition}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* ── Clinical Services ──────────────────────────────────── */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="container px-4 md:px-6 border border-muted rounded-3xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center py-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-block rounded-3xl bg-muted px-3 py-1"
                style={{ fontFamily: "'Space Mono',monospace", fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#00F2FE" }}>
                CLINICAL SERVICES
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, textTransform: "uppercase" }}>
                Precision Medicine Protocols
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Evidence-based therapies combining advanced technology with personalized treatment plans
              </motion.p>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mx-auto grid max-w-5xl gap-3 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: <Brain className="h-10 w-10 text-primary" />,      title: "Pain Management",        description: "Comprehensive chronic and acute pain management using interventional and regenerative approaches that treat the root cause." },
                { icon: <Activity className="h-10 w-10 text-primary" />,   title: "Neuropathy Treatment",   description: "Advanced peripheral neuropathy protocols combining electrostimulation, nutritional therapy, and targeted rehabilitation." },
                { icon: <Dumbbell className="h-10 w-10 text-primary" />,   title: "Physical Medicine",      description: "Individualized physical therapy, manual therapy, and functional rehabilitation designed for lasting recovery." },
                { icon: <FlaskConical className="h-10 w-10 text-primary" />,title: "IV Therapy",            description: "Medical-grade intravenous nutrient infusions for rapid cellular repair, inflammation reduction, and metabolic support." },
                { icon: <Sparkles className="h-10 w-10 text-primary" />,   title: "Metabolic Optimization", description: "Hormone balancing, weight management, and metabolic health protocols for systemic healing and longevity." },
                { icon: <Shield className="h-10 w-10 text-primary" />,     title: "Regenerative Therapy",   description: "Cutting-edge regenerative medicine using PRP, peptide therapy, and biologic approaches to accelerate tissue repair." },
              ].map((service, i) => (
                <motion.div
                  key={i}
                  variants={itemFadeIn}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="group relative overflow-hidden rounded-3xl border p-6 shadow-sm transition-all hover:shadow-md bg-background/80 cursor-pointer">
                  <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all duration-300" />
                  <div className="relative space-y-3">
                    <div className="mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <a href="#contact" className="text-sm font-medium text-primary underline-offset-4 hover:underline">
                      Learn more
                    </a>
                    <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* ── Locations ─────────────────────────────────────────── */}
        <section id="locations" className="w-full py-12 md:py-24 lg:py-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="container px-4 md:px-6 border border-muted rounded-3xl bg-muted/10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center py-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-block rounded-3xl bg-muted px-3 py-1"
                style={{ fontFamily: "'Space Mono',monospace", fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#00F2FE" }}>
                EAST VALLEY LOCATIONS
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, textTransform: "uppercase" }}>
                Two Clinics. One Mission.
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Conveniently located to serve Mesa, Chandler, Gilbert, and Scottsdale
              </motion.p>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mx-auto grid max-w-4xl gap-6 py-12 md:grid-cols-2">
              {[
                { name: "Longmore Rd Clinic", address: "Mesa, AZ — Longmore Rd", badge: "PRIMARY LOCATION", hours: "Mon–Fri 8am–6pm" },
                { name: "Power Rd Clinic",    address: "Mesa, AZ — Power Rd",    badge: "EAST MESA",        hours: "Mon–Fri 8am–6pm" },
              ].map((loc, i) => (
                <motion.div
                  key={i}
                  variants={itemFadeIn}
                  whileHover={{ y: -8 }}
                  className="group relative overflow-hidden rounded-3xl border p-8 bg-background/80 hover:border-primary/40 transition-all cursor-pointer">
                  <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all duration-300" />
                  <div className="relative space-y-4">
                    <span
                      className="inline-block rounded-3xl bg-muted px-3 py-1"
                      style={{ fontFamily: "'Space Mono',monospace", fontSize: "0.58rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#00F2FE" }}>
                      {loc.badge}
                    </span>
                    <h3 className="text-2xl font-bold"
                      style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.02em" }}>
                      {loc.name}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                      <p className="text-sm">{loc.address}</p>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                      <a href={PHONE_HREF} className="text-sm hover:text-primary transition-colors">{PHONE}</a>
                    </div>
                    <p className="text-xs text-muted-foreground"
                      style={{ fontFamily: "'Space Mono',monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                      {loc.hours}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-2">
                    <a href="#contact" className="text-sm font-medium text-primary underline-offset-4 hover:underline">
                      Get Directions
                    </a>
                    <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                      <ArrowUpRight className="h-4 w-4 text-primary" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* ── About ─────────────────────────────────────────────── */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="container px-4 md:px-6 border border-muted rounded-3xl">
            <div className="grid gap-3 lg:grid-cols-2 lg:gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-4 p-6">
                <div
                  className="inline-block rounded-3xl bg-muted px-3 py-1"
                  style={{ fontFamily: "'Space Mono',monospace", fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#00F2FE" }}>
                  ABOUT CITY HEALTH AZ
                </div>
                <h2
                  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                  style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, textTransform: "uppercase" }}>
                  Where Science Meets Recovery
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  City Health AZ is a premier pain management and physical medicine clinic serving the East Valley. Our multidisciplinary team combines evidence-based interventional techniques with advanced regenerative therapies to deliver outcomes traditional medicine can't match.
                </p>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  We don't just manage your pain — we rewire the systems causing it. Our clinical approach targets the neurological, metabolic, and structural root causes so you can return to the life you deserve.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#services"
                    className="inline-flex items-center justify-center rounded-3xl border border-muted px-6 py-3 hover:bg-muted/40 transition-colors cursor-pointer"
                    style={{ fontFamily: "'Space Mono',monospace", fontSize: "0.68rem", letterSpacing: "0.1em" }}>
                    Our Approach
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-3xl bg-primary px-6 py-3 text-primary-foreground hover:bg-primary/90 transition-colors cursor-pointer"
                    style={{ fontFamily: "'Space Mono',monospace", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em" }}>
                    [ SCHEDULE ]
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center justify-center p-6">
                <div className="grid grid-cols-2 gap-4 w-full">
                  {[
                    { label: "Years in Practice",  value: "10+" },
                    { label: "Patients Treated",   value: "5,000+" },
                    { label: "Specialties",        value: "15+" },
                    { label: "Pain Reduction Rate",value: "94%" },
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="rounded-3xl border border-muted p-6 text-center"
                      style={{ background: "rgba(0,242,254,0.03)" }}>
                      <p style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "2.5rem", fontWeight: 900, color: "#00F2FE", letterSpacing: "-0.03em", lineHeight: 1 }}>
                        {stat.value}
                      </p>
                      <p className="text-muted-foreground mt-2"
                        style={{ fontFamily: "'Space Mono',monospace", fontSize: "0.58rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                        {stat.label}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* ── Patient Testimonials ───────────────────────────────── */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="container px-4 md:px-6 border border-muted rounded-3xl bg-muted/20">
            <div className="flex flex-col items-center justify-center space-y-4 text-center py-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-block rounded-3xl bg-background px-3 py-1"
                style={{ fontFamily: "'Space Mono',monospace", fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#00F2FE" }}>
                PATIENT OUTCOMES
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, textTransform: "uppercase" }}>
                Real Results. Real Lives.
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Patients across the East Valley have reclaimed their lives with City Health AZ
              </motion.p>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mx-auto grid max-w-5xl gap-3 py-12 lg:grid-cols-2">
              {[
                { quote: "After 3 years of chronic neuropathy pain, City Health AZ gave me my life back. The treatment protocols are unlike anything I've experienced in traditional medicine.", author: "Maria T.", company: "Mesa, AZ — Neuropathy Patient" },
                { quote: "I was skeptical about IV therapy, but the results were immediate. The inflammation reduction was remarkable. I now do monthly maintenance sessions.", author: "James K.", company: "Gilbert, AZ — Chronic Pain Patient" },
                { quote: "The team at City Health AZ actually listened. They ran diagnostics that other clinics never considered and found the real source of my back pain.", author: "Sandra M.", company: "Chandler, AZ — Back & Spine Patient" },
                { quote: "Same-day appointment, no waiting, professional staff. The regenerative therapy program has me pain-free for the first time in 5 years.", author: "Robert L.", company: "Scottsdale, AZ — Regenerative Therapy Patient" },
              ].map((t, i) => (
                <motion.div
                  key={i}
                  variants={itemFadeIn}
                  whileHover={{ y: -10 }}
                  className="flex flex-col justify-between rounded-3xl border bg-background p-6 shadow-sm">
                  <div>
                    <div className="flex gap-0.5 text-yellow-500">
                      {[...Array(5)].map((_, s) => (
                        <svg key={s} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                    <blockquote className="mt-4 text-lg font-medium leading-relaxed">"{t.quote}"</blockquote>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="h-10 w-10 rounded-full bg-muted" />
                    <div className="ml-4">
                      <p className="font-medium">{t.author}</p>
                      <p className="text-sm text-muted-foreground">{t.company}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* ── Contact / Booking ─────────────────────────────────── */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="container grid items-center gap-3 px-4 md:px-6 lg:grid-cols-2 border border-muted rounded-3xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-3 p-6">
              <div
                className="inline-block rounded-3xl bg-muted px-3 py-1"
                style={{ fontFamily: "'Space Mono',monospace", fontSize: "0.62rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#00F2FE" }}>
                SCHEDULE APPOINTMENT
              </div>
              <h2
                className="text-3xl font-bold tracking-tighter md:text-4xl/tight"
                style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, textTransform: "uppercase" }}>
                Begin Your Recovery
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                New patients accepted. Same-day appointments available. East Valley locations in Mesa serving Chandler, Gilbert, and Scottsdale.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  { icon: <MapPin className="h-5 w-5 text-primary" />,  title: "Mesa, AZ Clinics",  body: "Longmore Rd + Power Rd — East Valley" },
                  { icon: <Phone className="h-5 w-5 text-primary" />,   title: "Call or Text",      body: <a href={PHONE_HREF} className="hover:text-primary transition-colors">{PHONE}</a> },
                  { icon: <Mail className="h-5 w-5 text-primary" />,    title: "Email Us",          body: "info@cityhealthaz.com" },
                ].map((item, i) => (
                  <motion.div key={i} whileHover={{ x: 5 }} className="flex items-start gap-3">
                    <div className="rounded-3xl bg-muted p-2">{item.icon}</div>
                    <div>
                      <h3 className="font-medium">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.body}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border bg-background p-6 shadow-sm">
              <h3
                className="text-xl font-bold"
                style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.02em" }}>
                Request Appointment
              </h3>
              <p className="text-sm text-muted-foreground">We'll confirm within 1 business hour.</p>
              <form className="mt-6 space-y-3">
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium leading-none">First name</label>
                    <Input id="first-name" placeholder="First name" className="rounded-3xl" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium leading-none">Last name</label>
                    <Input id="last-name" placeholder="Last name" className="rounded-3xl" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone-number" className="text-sm font-medium leading-none">Phone Number</label>
                  <Input id="phone-number" type="tel" placeholder="(480) 000-0000" className="rounded-3xl" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="condition" className="text-sm font-medium leading-none">Primary Concern</label>
                  <Input id="condition" placeholder="e.g. Neuropathy, Chronic Back Pain..." className="rounded-3xl" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium leading-none">Additional Notes</label>
                  <Textarea id="message" placeholder="Tell us about your symptoms or treatment history" className="min-h-[100px] rounded-3xl" />
                </div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    className="w-full rounded-3xl cursor-pointer"
                    style={{ fontFamily: "'Space Mono',monospace", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.14em" }}>
                    [ INITIALIZE RECOVERY ]
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </motion.div>
        </section>
      </main>

      {/* ── Footer ────────────────────────────────────────────────── */}
      <footer className="w-full border-t">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="container grid gap-8 px-4 py-10 md:px-6 lg:grid-cols-4 border-x border-muted">
          <div className="space-y-3">
            <Link href="/" className="flex items-center gap-3">
              <motion.div
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="h-10 w-10 rounded-3xl bg-primary flex items-center justify-center">
                <Activity className="h-5 w-5 text-primary-foreground" />
              </motion.div>
              <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, letterSpacing: "0.06em", textTransform: "uppercase", fontSize: "0.9rem", background: "linear-gradient(90deg,#00F2FE,#4FACFE)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                City Health AZ
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Premier pain management and physical medicine serving Mesa, Chandler, Gilbert, and Scottsdale.
            </p>
            <p className="text-xs text-muted-foreground"
              style={{ fontFamily: "'Space Mono',monospace", letterSpacing: "0.06em", textTransform: "uppercase" }}>
              Accepting New Patients
            </p>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-4"
              style={{ fontFamily: "'Space Mono',monospace", letterSpacing: "0.1em", textTransform: "uppercase", color: "#7E9BB5" }}>
              Services
            </h3>
            <nav className="flex flex-col space-y-2 text-sm">
              {["Pain Management", "Neuropathy Treatment", "Physical Medicine", "IV Therapy", "Metabolic Optimization", "Regenerative Therapy"].map((s) => (
                <a key={s} href="#services" className="text-muted-foreground hover:text-foreground transition-colors">{s}</a>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-4"
              style={{ fontFamily: "'Space Mono',monospace", letterSpacing: "0.1em", textTransform: "uppercase", color: "#7E9BB5" }}>
              Locations
            </h3>
            <nav className="flex flex-col space-y-2 text-sm mb-6">
              <a href="#locations" className="text-muted-foreground hover:text-foreground transition-colors">Longmore Rd — Mesa, AZ</a>
              <a href="#locations" className="text-muted-foreground hover:text-foreground transition-colors">Power Rd — East Mesa, AZ</a>
            </nav>
            <h3 className="text-sm font-medium mb-4"
              style={{ fontFamily: "'Space Mono',monospace", letterSpacing: "0.1em", textTransform: "uppercase", color: "#7E9BB5" }}>
              Conditions
            </h3>
            <nav className="flex flex-col space-y-2 text-sm">
              {["Chronic Pain", "Neuropathy", "Fibromyalgia", "Back & Spine", "Joint Pain"].map((c) => (
                <a key={c} href="#conditions" className="text-muted-foreground hover:text-foreground transition-colors">{c}</a>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium"
              style={{ fontFamily: "'Space Mono',monospace", letterSpacing: "0.1em", textTransform: "uppercase", color: "#7E9BB5" }}>
              Contact
            </h3>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a href={PHONE_HREF} className="hover:text-primary transition-colors">{PHONE}</a>
              <span>info@cityhealthaz.com</span>
              <span>Mesa, AZ — East Valley</span>
              <span>Mon–Fri 8am–6pm</span>
            </div>
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center rounded-3xl bg-primary py-3 text-primary-foreground hover:bg-primary/90 transition-colors cursor-pointer mt-2"
              style={{ fontFamily: "'Space Mono',monospace", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em" }}>
              [ SCHEDULE NOW ]
            </a>
          </div>
        </motion.div>

        <div className="border-t">
          <div className="container flex flex-col items-center justify-between gap-3 py-6 md:h-16 md:flex-row md:py-0">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} City Health AZ. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">Mesa, AZ — East Valley Clinical Network</p>
          </div>
        </div>
      </footer>

    </div>
  )
}
