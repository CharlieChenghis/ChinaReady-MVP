"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ShieldAlert, SignalZero, UserX, MessageSquareWarning, ArrowRight, CheckCircle2, Globe2 } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-red-500/30">
      {/* Background gradients */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-red-600/10 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-orange-600/10 blur-[120px]" />
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur-md">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tighter text-white flex items-center gap-2">
            <Globe2 className="h-6 w-6 text-red-500" />
            ChinaReady.io
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <button onClick={() => handleScroll('problem')} className="hover:text-white transition-colors">The Problem</button>
            <button onClick={() => handleScroll('solution')} className="hover:text-white transition-colors">How it Works</button>
            <button onClick={() => handleScroll('pricing')} className="hover:text-white transition-colors">Pricing</button>
            <button onClick={() => handleScroll('founders')} className="hover:text-white transition-colors">Our Team</button>
          </nav>
          <div className="flex items-center gap-4">
            <Button className="bg-red-600 text-white hover:bg-red-700">Get Ready</Button>
          </div>
        </div>
      </header>

      <main className="relative z-10 flex flex-col items-center justify-center pt-24 pb-20 px-6">
        {/* Hero Section */}
        <section className="container max-w-5xl mx-auto flex flex-col items-center text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 mb-32">
          <Badge variant="outline" className="border-red-500/30 bg-red-500/10 text-red-300 py-1 px-4 text-sm font-medium backdrop-blur-sm">
            Your Digital Concierge Bridge
          </Badge>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            Land in China like a <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-yellow-500">
              local.
            </span>
          </h1>

          <p className="max-w-2xl text-lg md:text-xl text-slate-400 leading-relaxed">
            Skip the arrival panic. Get your payments, communication, and navigation sorted before you ever board the plane. We are your premium bridge to surviving and thriving in the Middle Kingdom.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white h-14 px-8 rounded-full text-base font-semibold shadow-[0_0_20px_rgba(220,38,38,0.4)] transition-all hover:shadow-[0_0_30px_rgba(220,38,38,0.6)]">
              Secure Your Setup
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* The Bleeding Neck Problem */}
        <section id="problem" className="container max-w-6xl mx-auto py-20">
          <div className="text-center mb-16">
            <Badge variant="destructive" className="mb-4">The "Bleeding Neck" Problem</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Why independent travel to China fails.</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg/relaxed">
              Without preparation, you will land completely cut off from the modern world. No cash accepted, no Google, no Uber, and no English.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-slate-900/40 border-slate-800/80 backdrop-blur-sm">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-4">
                  <ShieldAlert className="h-6 w-6 text-red-400" />
                </div>
                <CardTitle className="text-2xl text-slate-200">The Cashless Wall</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400">
                  Cash is virtually extinct. Visa and Mastercard are almost never accepted outside 5-star hotels. If your WeChat Pay or Alipay isn't verified and bound to a foreign card before arrival, you cannot buy a bottle of water.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/40 border-slate-800/80 backdrop-blur-sm">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4">
                  <SignalZero className="h-6 w-6 text-orange-400" />
                </div>
                <CardTitle className="text-2xl text-slate-200">Digital Blackout</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400">
                  The Great Firewall blocks Google, WhatsApp, Instagram, and mostly all Western services. Without a proper travel eSIM and pre-installed local navigation (Amap/Baidu), your phone is effectively a brick.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/40 border-slate-800/80 backdrop-blur-sm">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-yellow-500/10 flex items-center justify-center mb-4">
                  <UserX className="h-6 w-6 text-yellow-400" />
                </div>
                <CardTitle className="text-2xl text-slate-200">Hostile Onboarding</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400">
                  Setting up essential Chinese apps requires SMS codes, passport verification, and navigating Chinese-only interfaces. Doing this exhausted at an airport on spotty Wi-Fi is a nightmare.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/40 border-slate-800/80 backdrop-blur-sm">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                  <MessageSquareWarning className="h-6 w-6 text-rose-400" />
                </div>
                <CardTitle className="text-2xl text-slate-200">Language Chasm</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400">
                  English proficiency amongst taxi drivers, delivery workers, and shop owners is near zero. Communicating basic needs or directions without the right real-time translation tools simply doesn't work.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Turnkey Solution */}
        <section id="solution" className="container max-w-5xl mx-auto py-24">
          <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/60 p-10 md:p-16 backdrop-blur-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5 pointer-events-none" />
            <div className="relative z-10 text-center space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold text-white">The Turnkey Solution</h2>
              <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto">
                We are your <strong className="text-red-400">Digital Concierge Bridge</strong>.
                Before you fly, we run you through our proprietary setup protocol. We ensure your payment apps are bound, your eSIM is tested, and your essential apps are configured in English.
                Don't guess; let experts handle the friction.
              </p>
              <div className="pt-8 grid sm:grid-cols-3 gap-6 text-left">
                <div className="flex flex-col gap-2">
                  <CheckCircle2 className="h-8 w-8 text-green-500 mb-2" />
                  <h4 className="font-semibold text-white">Pre-Flight Setup</h4>
                  <p className="text-sm text-slate-400">We verify your Alipay/WeChat accounts before departure.</p>
                </div>
                <div className="flex flex-col gap-2">
                  <CheckCircle2 className="h-8 w-8 text-green-500 mb-2" />
                  <h4 className="font-semibold text-white">App Ecosystem</h4>
                  <p className="text-sm text-slate-400">Installation and English-configuration of Didi, Amap, and Translate.</p>
                </div>
                <div className="flex flex-col gap-2">
                  <CheckCircle2 className="h-8 w-8 text-green-500 mb-2" />
                  <h4 className="font-semibold text-white">On-Ground Support</h4>
                  <p className="text-sm text-slate-400">Direct line to our concierges for immediate troubleshooting.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tiered Pricing Table */}
        <section id="pricing" className="container max-w-6xl mx-auto py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Choose Your Readiness</h2>
            <p className="text-slate-400 text-lg">Simple, transparent pricing to guarantee your peace of mind.</p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950 overflow-hidden shadow-2xl">
            <Table>
              <TableHeader className="bg-slate-900/50">
                <TableRow className="hover:bg-transparent border-slate-800">
                  <TableHead className="w-[25%] p-6 align-top">
                    <div className="text-xl font-semibold text-white">Features</div>
                  </TableHead>
                  <TableHead className="w-[25%] p-6 align-top border-l border-slate-800">
                    <div className="flex flex-col gap-2">
                      <span className="text-sm font-medium text-slate-400 uppercase tracking-wider">Tier 1</span>
                      <span className="text-2xl font-bold text-white">Free</span>
                      <span className="text-sm text-slate-400 mt-2">2026 Survival Checklist (Self-Serve)</span>
                      <Button variant="outline" className="mt-4 w-full border-slate-700 bg-slate-900 text-slate-300">Download Guide</Button>
                    </div>
                  </TableHead>
                  <TableHead className="w-[25%] p-6 align-top border-l border-slate-800">
                    <div className="flex flex-col gap-2">
                      <span className="text-sm font-medium text-slate-400 uppercase tracking-wider">Tier 2</span>
                      <span className="text-2xl font-bold text-white">$99</span>
                      <span className="text-sm text-slate-400 mt-2">Pre-Flight Protocol (1-on-1 Zoom setup)</span>
                      <Button className="mt-4 w-full bg-slate-800 hover:bg-slate-700 text-white">Book Session</Button>
                    </div>
                  </TableHead>
                  <TableHead className="w-[25%] p-6 align-top border-l-2 border-red-500/50 bg-red-950/20 relative">
                    <div className="absolute top-0 right-0 w-full flex justify-center -translate-y-1/2">
                      <Badge className="bg-red-600 hover:bg-red-600 text-white font-bold py-1 px-3">MOST POPULAR</Badge>
                    </div>
                    <div className="flex flex-col gap-2 pt-2">
                      <span className="text-sm font-medium text-red-400 uppercase tracking-wider">Tier 3</span>
                      <span className="text-2xl font-bold text-red-50">$299+</span>
                      <span className="text-sm text-red-200 mt-2">Red Carpet Fixer (24/7 WhatsApp support)</span>
                      <Button className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-900/50">Hire a Fixer</Button>
                    </div>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="border-slate-800 hover:bg-slate-900/30">
                  <TableCell className="p-4 font-medium text-slate-300">Comprehensive PDF Guide</TableCell>
                  <TableCell className="p-4 border-l border-slate-800 text-center"><CheckCircle2 className="inline h-5 w-5 text-green-500" /></TableCell>
                  <TableCell className="p-4 border-l border-slate-800 text-center"><CheckCircle2 className="inline h-5 w-5 text-green-500" /></TableCell>
                  <TableCell className="p-4 border-l-2 border-red-500/20 bg-red-950/10 text-center"><CheckCircle2 className="inline h-5 w-5 text-red-500" /></TableCell>
                </TableRow>
                <TableRow className="border-slate-800 hover:bg-slate-900/30">
                  <TableCell className="p-4 font-medium text-slate-300">Recommended VPN/eSIM Links</TableCell>
                  <TableCell className="p-4 border-l border-slate-800 text-center"><CheckCircle2 className="inline h-5 w-5 text-green-500" /></TableCell>
                  <TableCell className="p-4 border-l border-slate-800 text-center"><CheckCircle2 className="inline h-5 w-5 text-green-500" /></TableCell>
                  <TableCell className="p-4 border-l-2 border-red-500/20 bg-red-950/10 text-center"><CheckCircle2 className="inline h-5 w-5 text-red-500" /></TableCell>
                </TableRow>
                <TableRow className="border-slate-800 hover:bg-slate-900/30">
                  <TableCell className="p-4 font-medium text-slate-300">1-on-1 Zoom Setup (45 mins)</TableCell>
                  <TableCell className="p-4 border-l border-slate-800 text-center text-slate-600">-</TableCell>
                  <TableCell className="p-4 border-l border-slate-800 text-center"><CheckCircle2 className="inline h-5 w-5 text-green-500" /></TableCell>
                  <TableCell className="p-4 border-l-2 border-red-500/20 bg-red-950/10 text-center"><CheckCircle2 className="inline h-5 w-5 text-red-500" /></TableCell>
                </TableRow>
                <TableRow className="border-slate-800 hover:bg-slate-900/30">
                  <TableCell className="p-4 font-medium text-slate-300">Alipay/WeChat Pay Verification</TableCell>
                  <TableCell className="p-4 border-l border-slate-800 text-center text-slate-600">-</TableCell>
                  <TableCell className="p-4 border-l border-slate-800 text-center"><CheckCircle2 className="inline h-5 w-5 text-green-500" /></TableCell>
                  <TableCell className="p-4 border-l-2 border-red-500/20 bg-red-950/10 text-center"><CheckCircle2 className="inline h-5 w-5 text-red-500" /></TableCell>
                </TableRow>
                <TableRow className="border-slate-800 hover:bg-slate-900/30">
                  <TableCell className="p-4 font-medium text-slate-300">24/7 Priority WhatsApp Support</TableCell>
                  <TableCell className="p-4 border-l border-slate-800 text-center text-slate-600">-</TableCell>
                  <TableCell className="p-4 border-l border-slate-800 text-center text-slate-600">-</TableCell>
                  <TableCell className="p-4 border-l-2 border-red-500/20 bg-red-950/10 text-center"><span className="text-red-400 font-medium text-sm">Yes - Always On-Call</span></TableCell>
                </TableRow>
                <TableRow className="border-slate-800 hover:bg-slate-900/30">
                  <TableCell className="p-4 font-medium text-slate-300">Emergency Native Translation</TableCell>
                  <TableCell className="p-4 border-l border-slate-800 text-center text-slate-600">-</TableCell>
                  <TableCell className="p-4 border-l border-slate-800 text-center text-slate-600">-</TableCell>
                  <TableCell className="p-4 border-l-2 border-red-500/20 bg-red-950/10 text-center"><span className="text-red-400 font-medium text-sm">Unlimited</span></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>

        {/* Founders Section */}
        <section id="founders" className="container max-w-5xl mx-auto py-24 mb-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">The 'East Meets West' Team</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              We are a Shenzhen-based collective. We navigate the friction so you don't have to.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-slate-800 bg-slate-900 flex items-center justify-center">
                <span className="text-4xl text-slate-600 font-bold">C</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-200">Charlie</h3>
                <p className="text-slate-400">Cofounder & Chief Dumpling Officer</p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-slate-800 bg-slate-900 flex items-center justify-center">
                <span className="text-4xl text-slate-600 font-bold">Y</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-200">Yudh</h3>
                <p className="text-slate-400">Cofounder & Taobao Black Belt</p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-slate-800 bg-slate-900 flex items-center justify-center">
                <span className="text-4xl text-slate-600 font-bold">A</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-200">Alexei</h3>
                <p className="text-slate-400">Cofounder & Firewall Whisperer</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-800 bg-slate-950 pb-8 pt-12 mt-10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-500 text-sm flex items-center gap-2">
            <Globe2 className="h-4 w-4" />
            © 2026 ChinaReady.io. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm text-slate-500">
            <Link href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-slate-300 transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
