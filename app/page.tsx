'use client';

import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import Link from 'next/link';
import { ArrowRight, Zap, Target, TrendingUp, CheckCircle } from 'lucide-react';
import Antigravity from '@/components/antigravity';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-foreground dark">
      <Navigation />

      {/* Hero Section with Antigravity Background */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Antigravity Background */}
        <div className="absolute inset-0 z-0">
          <Antigravity
            count={300}
            magnetRadius={6}
            ringRadius={7}
            waveSpeed={0.4}
            waveAmplitude={1}
            particleSize={1.5}
            lerpSpeed={0.05}
            color="#5227FF"
            autoAnimate
            particleVariance={1}
            rotationSpeed={0}
            depthFactor={1}
            pulseSpeed={3}
            particleShape="capsule"
            fieldStrength={10}
          />
        </div>

        {/* Radial gradient overlay */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-950/0 via-slate-950/20 to-slate-950" />

        {/* Content Overlay */}
        <div className="relative z-10 w-full">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-8">
              {/* Headline */}
              <div className="space-y-6 max-w-4xl mx-auto">
                <h1 className="text-7xl lg:text-8xl font-bold text-foreground leading-tight tracking-tight">
                  <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                    Digital Growth
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                    Made Simple
                  </span>
                </h1>

                {/* Subheading */}
                <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-light">
                  Transform your business with premium digital experiences built for growth. Strategic design meets measurable results.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <Link
                  href="/contact"
                  className="group px-10 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full font-semibold flex items-center justify-center gap-2 glow-md hover:shadow-2xl hover:shadow-primary/50 transition-all hover:scale-105"
                >
                  Start Your Project
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/portfolio"
                  className="group px-10 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full font-semibold flex items-center justify-center gap-2 glow-md hover:shadow-2xl hover:shadow-primary/50 transition-all hover:scale-105"
                >
                  View Our Work
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-foreground mb-6">Why Choose Us</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
              We combine strategic thinking, creative excellence, and data-driven results to deliver digital solutions that create lasting impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="glass rounded-xl p-8 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-primary/30 to-accent/30 rounded-lg flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all">
                <Zap className="text-accent" size={28} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Fast Execution</h3>
              <p className="text-muted-foreground leading-relaxed font-light">
                Quick turnarounds without compromising quality. We work strategically to deliver results that impact your bottom line.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="glass rounded-xl p-8 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-primary/30 to-accent/30 rounded-lg flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all">
                <Target className="text-accent" size={28} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Strategic Focus</h3>
              <p className="text-muted-foreground leading-relaxed font-light">
                Every project begins with deep strategy. We understand your goals and create solutions tailored to your unique business.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="glass rounded-xl p-8 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-primary/30 to-accent/30 rounded-lg flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all">
                <TrendingUp className="text-accent" size={28} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Results-Driven</h3>
              <p className="text-muted-foreground leading-relaxed font-light">
                We measure everything. Every project is optimized for conversions, engagement, and sustainable growth for your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-8 mb-16">
            <div>
              <h2 className="text-5xl font-bold text-foreground mb-4">Our Services</h2>
              <p className="text-lg text-muted-foreground font-light">Comprehensive digital solutions for sustainable business growth</p>
            </div>
            <Link href="/services" className="text-accent hover:text-accent/80 transition-colors font-semibold flex items-center gap-2 whitespace-nowrap">
              View All Services <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service Card 1 */}
            <div className="glass rounded-xl p-10 hover:bg-white/10 transition-all duration-300 group">
              <h3 className="text-2xl font-bold text-foreground mb-4">Web Design & Development</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed font-light">
                Beautiful, responsive websites built with cutting-edge technology that converts visitors into customers.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sm font-light">
                  <CheckCircle size={18} className="text-accent flex-shrink-0" />
                  <span>Modern, responsive designs</span>
                </li>
                <li className="flex items-center gap-3 text-sm font-light">
                  <CheckCircle size={18} className="text-accent flex-shrink-0" />
                  <span>E-commerce solutions</span>
                </li>
                <li className="flex items-center gap-3 text-sm font-light">
                  <CheckCircle size={18} className="text-accent flex-shrink-0" />
                  <span>Performance optimized</span>
                </li>
              </ul>
              <Link href="/services" className="text-accent hover:text-accent/80 font-semibold flex items-center gap-2">
                Learn More <ArrowRight size={18} />
              </Link>
            </div>

            {/* Service Card 2 */}
            <div className="glass rounded-xl p-10 hover:bg-white/10 transition-all duration-300 group">
              <h3 className="text-2xl font-bold text-foreground mb-4">Digital Marketing & SEO</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed font-light">
                Strategic marketing campaigns that increase your visibility and drive qualified traffic to your business.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sm font-light">
                  <CheckCircle size={18} className="text-accent flex-shrink-0" />
                  <span>SEO optimization</span>
                </li>
                <li className="flex items-center gap-3 text-sm font-light">
                  <CheckCircle size={18} className="text-accent flex-shrink-0" />
                  <span>Paid advertising</span>
                </li>
                <li className="flex items-center gap-3 text-sm font-light">
                  <CheckCircle size={18} className="text-accent flex-shrink-0" />
                  <span>Content strategy</span>
                </li>
              </ul>
              <Link href="/services" className="text-accent hover:text-accent/80 font-semibold flex items-center gap-2">
                Learn More <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-foreground mb-6">Simple, Transparent Pricing</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
              Choose the plan that fits your business needs. All plans include dedicated support and comprehensive results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Plan */}
            <div className="glass rounded-xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="mb-2">
                <h3 className="text-xl font-bold text-foreground">Starter</h3>
                <p className="text-sm text-muted-foreground font-light">For emerging businesses</p>
              </div>
              <div className="mb-8 pt-4 border-t border-white/10">
                <span className="text-4xl font-bold text-foreground">₹2,499</span>
                <span className="text-muted-foreground text-sm font-light ml-2">one-time</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-sm font-light">
                  <CheckCircle size={18} className="text-accent flex-shrink-0 mt-0.5" />
                  <span>Website design & development</span>
                </li>
                <li className="flex items-start gap-3 text-sm font-light">
                  <CheckCircle size={18} className="text-accent flex-shrink-0 mt-0.5" />
                  <span>Mobile responsive</span>
                </li>
                <li className="flex items-start gap-3 text-sm font-light">
                  <CheckCircle size={18} className="text-accent flex-shrink-0 mt-0.5" />
                  <span>Basic SEO optimization</span>
                </li>
                <li className="flex items-start gap-3 text-sm font-light">
                  <CheckCircle size={18} className="text-accent flex-shrink-0 mt-0.5" />
                  <span>3 months support</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="group relative w-full mt-2 px-6 py-3.5 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full font-semibold inline-flex items-center justify-center gap-2 shadow-lg shadow-primary/25 hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                <span className="relative z-10 inline-flex items-center justify-center gap-2">
                  Get Started
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </div>

            {/* Professional Plan */}
            <div className="relative transform md:scale-105">
              <div className="bg-gradient-to-br from-primary to-accent rounded-xl p-8 relative glow-lg">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-accent/20 backdrop-blur-xl text-accent px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide border border-accent/30">Recommended</span>
                </div>
                <div className="mb-2">
                  <h3 className="text-xl font-bold text-white">Professional</h3>
                  <p className="text-white/80 text-sm font-light">For growing companies</p>
                </div>
                <div className="mb-8 pt-4 border-t border-white/20">
                  <span className="text-4xl font-bold text-white">₹5,999</span>
                  <span className="text-white/80 text-sm font-light ml-2">one-time</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3 text-sm font-light text-white">
                    <CheckCircle size={18} className="flex-shrink-0 mt-0.5" />
                    <span>Complete website solution</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm font-light text-white">
                    <CheckCircle size={18} className="flex-shrink-0 mt-0.5" />
                    <span>Advanced SEO strategy</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm font-light text-white">
                    <CheckCircle size={18} className="flex-shrink-0 mt-0.5" />
                    <span>Paid advertising setup</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm font-light text-white">
                    <CheckCircle size={18} className="flex-shrink-0 mt-0.5" />
                    <span>6 months support</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm font-light text-white">
                    <CheckCircle size={18} className="flex-shrink-0 mt-0.5" />
                    <span>Analytics & reporting</span>
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="group relative w-full mt-2 px-6 py-3.5 bg-white text-slate-950 rounded-full font-semibold inline-flex items-center justify-center gap-2 shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-black/30 transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                >
                  <span className="relative z-10 inline-flex items-center justify-center gap-2">
                    Get Started
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="absolute inset-0 rounded-full bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="glass rounded-xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="mb-2">
                <h3 className="text-xl font-bold text-foreground">Enterprise</h3>
                <p className="text-sm text-muted-foreground font-light">For ambitious growth</p>
              </div>
              <div className="mb-8 pt-4 border-t border-white/10">
                <span className="text-4xl font-bold text-foreground">Custom</span>
                <span className="text-muted-foreground text-sm font-light ml-2">let's talk</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-sm font-light">
                  <CheckCircle size={18} className="text-accent flex-shrink-0 mt-0.5" />
                  <span>Full digital strategy</span>
                </li>
                <li className="flex items-start gap-3 text-sm font-light">
                  <CheckCircle size={18} className="text-accent flex-shrink-0 mt-0.5" />
                  <span>Marketing automation</span>
                </li>
                <li className="flex items-start gap-3 text-sm font-light">
                  <CheckCircle size={18} className="text-accent flex-shrink-0 mt-0.5" />
                  <span>Ongoing optimization</span>
                </li>
                <li className="flex items-start gap-3 text-sm font-light">
                  <CheckCircle size={18} className="text-accent flex-shrink-0 mt-0.5" />
                  <span>24/7 dedicated support</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="group relative w-full mt-2 px-6 py-3.5 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full font-semibold inline-flex items-center justify-center gap-2 shadow-lg shadow-primary/25 hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                <span className="relative z-10 inline-flex items-center justify-center gap-2">
                  Schedule Call
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-foreground mb-6">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
              A proven four-step approach that transforms your vision into results. We work collaboratively with you at every stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="glass rounded-xl p-8 h-full hover:bg-white/10 transition-all">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent text-white font-bold text-lg mb-6">
                  1
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Discovery</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  We dive deep into your business, goals, and target audience to understand what makes you unique.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-accent to-transparent" />
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="glass rounded-xl p-8 h-full hover:bg-white/10 transition-all">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent text-white font-bold text-lg mb-6">
                  2
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Strategy</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  We create a detailed roadmap outlining your digital goals, messaging, and tactical approach.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-accent to-transparent" />
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="glass rounded-xl p-8 h-full hover:bg-white/10 transition-all">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent text-white font-bold text-lg mb-6">
                  3
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Design & Build</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Our team creates stunning, high-performing solutions optimized for conversions and user experience.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-accent to-transparent" />
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="glass rounded-xl p-8 h-full hover:bg-white/10 transition-all">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent text-white font-bold text-lg mb-6">
                  4
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Launch & Optimize</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  We launch your solution and continuously monitor, test, and optimize for maximum results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-foreground mb-6">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
              Real feedback from growing businesses we've helped transform their digital presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="glass rounded-xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i} className="text-accent text-lg">★</span>
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed font-light">
                "Launch Digital Works completely transformed how we present our business online. Within 6 months, we saw a 240% increase in qualified leads. The team's strategic approach and attention to detail was exceptional."
              </p>
              <div className="border-t border-white/10 pt-6">
                <p className="font-semibold text-foreground">Anjali Sharma</p>
                <p className="text-sm text-muted-foreground">CEO, TechStart Solutions</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="glass rounded-xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i} className="text-accent text-lg">★</span>
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed font-light">
                "Working with Launch Digital Works was a game-changer for our agency. They didn't just build us a website—they created a conversion machine. Our average project ROI improved by 180%."
              </p>
              <div className="border-t border-white/10 pt-6">
                <p className="font-semibold text-foreground">Sakshi Singh</p>
                <p className="text-sm text-muted-foreground">Founder, Growth Marketing Agency</p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="glass rounded-xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i} className="text-accent text-lg">★</span>
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed font-light">
                "The professionalism and expertise of the Launch Digital Works team exceeded our expectations. They turned our outdated site into a modern, high-performing platform. Highly recommend!"
              </p>
              <div className="border-t border-white/10 pt-6">
                <p className="font-semibold text-foreground">Parth Verma</p>
                <p className="text-sm text-muted-foreground">Managing Director, Premium Consulting</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-slate-950">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-primary via-accent to-cyan-400 rounded-2xl p-16 text-center relative overflow-hidden glow-lg">
            {/* Subtle background elements */}
            <div className="absolute inset-0 overflow-hidden opacity-20">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-white rounded-full blur-3xl" />
              <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-white rounded-full blur-3xl" />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Ready to Transform Your Digital Presence?
              </h2>
              <p className="text-white/90 text-xl mb-10 max-w-3xl mx-auto font-light leading-relaxed">
                Let's discuss your project and create a strategy tailored to your business goals. No obligation, just meaningful conversation.
              </p>
              <Link
                href="/contact"
                className="inline-block px-10 py-4 bg-white text-primary rounded-full hover:bg-slate-50 transition-all font-semibold shadow-lg hover:shadow-xl"
              >
                Start Your Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
