"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  ShoppingCart,
  Sparkles,
  ShieldCheck,
  PiggyBank,
  MapPin,
  MessageSquare,
  Mail,
} from "lucide-react";
import Logo from './icon.png'
import PreviewImage from './preview.png';
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Card } from "../../components/ui/card";


export default function Home() {
  const [email, setEmail] = useState("");
  const [waitlist, setWaitlist] = useState<boolean>(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const formData = new FormData()
    formData.append('email', email)
    formData.append('demo_use', waitlist ? 'true' : 'false')

    // Call the server action
    await fetch('/action', {
      method: 'POST',
      body: formData,
    })

    setEmail('')
    alert("You're officially on the waitlist... and officially cooler now.")
  }

  return (
    <main className="min-h-screen bg-[#f2fbff] text-slate-900 font-josefin">
      {/* ======= HERO ======= */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pt-8 pb-12">
        {/* Coming soon badge */}
        <div className="inline-flex items-center gap-2 rounded-full text-[#543AD3] bg-[#D7E7FF] px-3 py-1 text-s font-normal">
          {/* <span className="inline-block h-2 w-2 rounded-full bg-indigo-600" /> */}
          Coming soon
        </div>

        {/* Brand + Tagline */}
        <div className="mt-4 flex items-center gap-3">
          <div className="grid place-items-center h-32 w-32 rounded-md text-white -mt-12">
            <Image src={Logo} alt="Logo" style={{objectFit: 'contain' }} />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#382189] -ml-4">
            CollegeCart
          </h1>
        </div>

        <p className="mt-3 max-w-md text-[18px] text-[#333064] leading-5 text-slate-700 mt-3 text-normal">
          The easiest way to find textbooks, furniture, appliances, and more
          from students at CMU. Save money, reduce waste, and transact within
          your campus.
        </p>

        {/* Primary CTA */}
        <div className="mt-4">
          <Link href="#waitlist">
            <Button className="rounded-full bg-[#382189] hover:bg-[#2f167a]/90 px-5">
              Join the Waitlist <span className="ml-1">→</span>
            </Button>
          </Link>
        </div>

        {/* App Preview Image */}
        <div className="relative mt-8">
          <div className="mx-auto w-full max-w-xl overflow-hidden rounded-xl shadow-[0_10px_30px_rgba(10,10,50,0.12)] ring-1 ring-black/5">
            <Image
              src={PreviewImage} // replace with your image path or imported image
              alt="App preview"
              width={1000} // adjust width as needed
              height={400} // adjust height as needed
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>

          {/* Floating trust bubble */}
          <div className="absolute left-2 -bottom-4 md:-left-8">
            <div className="flex items-center gap-4 rounded-xl bg-[#F2FBFF] px-7 py-5 shadow-lg ring-1 ring-black/5">
              <div className="grid place-items-center h-10 w-10 rounded-full bg-emerald-100 text-emerald-700">
                <ShieldCheck className="h-4 w-4" />
              </div>
              <div className="text-m">
                <p className="font-semibold leading-4 mb-1">Campus Verified</p>
                <p className="text-slate-600 leading-4">Safe and Trusted</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======= FEATURES ======= */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <h2 className="text-center text-2xl sm:text-4xl font-regular">
          Built by students, for students
        </h2>

        <div className="mt-6 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2">
          <FeatureCard
            icon={
              <ShieldCheck className="h-5 w-5  text-indigo-700" aria-hidden />
            }
            title="Campus Verified"
            text="Only students with verified Andrew email can buy and sell with confidence."
          />
          <FeatureCard
            icon={<PiggyBank className="h-5 w-5 text-indigo-700" />}
            title="Save Money"
            text="Find furniture, appliances, and textbooks at student prices — reuse beats retail."
          />
          <FeatureCard
            icon={<MapPin className="h-5 w-5 text-indigo-700" />}
            title="Hyperlocal"
            text="Set your campus pickup or CMU locations for convenient, safe exchanges."
          />
          <FeatureCard
            icon={<MessageSquare className="h-5 w-5 text-indigo-700" />}
            title="Easy Communication"
            text="Chat directly with other students, agree on meeting spots, and arrange reliable pick-ups."
          />
        </div>
      </section>

      {/* ======= WAITLIST STRIPE ======= */}
      <section
        id="waitlist"
        className="bg-[#382189] text-white py-20 sm:py-20 mt-6"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto h-10 w-10 rounded-full bg-[#6A3BEB] grid place-items-center">
              <Mail className="h-120 w-120" />
            </div>
            <h3 className="mt-3 text-4xl mb-3 font-semibold">Join the waitlist!</h3>
            <p className="mt-1 text-lg opacity-90">
              Be the first to know when we launch. Plus, early members get
              exclusive perks.
            </p>

            <form
              className="mt-5 space-y-3"
              onSubmit={handleSubmit}>
              <div className="rounded-2xl bg-white ring-1 ring-black/10 p-10 px-10 max-w-2xl mx-auto">
                  <input
                    type="email"
                    required
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className= "w-full border border-gray-300 bg-[#D9D9D9] rounded-md px-5 py-3 text-m text-black focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  <div className="flex flex-row"> 
                    <p className="mt-5 text-s mr-2 text-[#6F6F6F] opacity-100">Would you be interested in being one of our first testers to shape CollegeCart?</p>
                    <input
                      type="checkbox"
                      checked={waitlist}
                      onChange={(e) => setWaitlist(e.target.checked)}
                      className="mt-5 accent-[#643AD3]"
                    />
                  </div>
                  <button type="submit" className="mt-5 text-s py-3 w-full bg-[#643AD3] rounded-md hover:bg-[#2f167a]/90 transition duration-200 p-1.5">
                    Join now
                  </button>
                {/* <Input
                  type="email"
                  required
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white text-slate-900 h-10"
                /> */}
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Spacer footer area to mirror screenshot */}
      <section className="h-24 bg-[#f4f8fb]" />
    </main>
  );
}

/* ======= Feature Card ======= */
function FeatureCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <Card className="rounded-xl bg-[#F2FBFF] ring-[0.3px] ring-[#5b5b5b] p-5 sm:p-3 hover:shadow-lg transition-shadow duration-200">
      <div className="flex flex-col items-start gap-3 ml-2 mr-2">
        <div className="grid place-items-center h-10 w-10 rounded-lg bg-[#CEE2FF] mt-4 ml-4 mb-3">
          {icon}
        </div>
        <div className="ml-5">
          <h3 className="text-[18px] font-semibold">{title}</h3>
          <p className="mt-4 text-sm text-slate-600 leading-4 mb-5">{text}</p>
        </div>
      </div>
    </Card>
  );
}