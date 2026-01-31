'use client';

import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Antigravity from '@/components/antigravity';

export default function Portfolio() {
  const caseStudies = [
    {
      id: 1,
      title: 'TechStart Pro - Brand Transformation',
      category: 'Branding & Web Design',
      client: 'TechStart Pro',
      challenge:
        'Early-stage SaaS startup needed complete brand identity and website to establish market presence and attract investors.',
      solution:
        'We created a premium brand identity, modern website, and positioning strategy that elevated their credibility.',
      results: ['250% increase in qualified leads', '5x media mentions', '₹2M seed funding raised', 'Industry recognition'],
      image: 'bg-gradient-to-br from-blue-500/20 to-blue-600/20',
      tags: ['Branding', 'Web Design', 'Strategy'],
    },
    {
      id: 2,
      title: 'E-Shop Essentials - E-Commerce Growth',
      category: 'E-Commerce & Digital Marketing',
      client: 'E-Shop Essentials',
      challenge: 'Online retailer struggling with low conversion rates and rising customer acquisition costs.',
      solution:
        'We redesigned the website for conversion, optimized product pages, implemented strategic paid advertising, and created retention campaigns.',
      results: ['45% increase in conversion rate', '120% increase in revenue', '38% lower CAC', 'Top 10 in category'],
      image: 'bg-gradient-to-br from-purple-500/20 to-purple-600/20',
      tags: ['E-Commerce', 'Conversion Optimization', 'Marketing'],
    },
    {
      id: 3,
      title: 'Local Services Co - Local SEO Dominance',
      category: 'SEO & Content Marketing',
      client: 'Local Services Co',
      challenge:
        'Service-based business losing market share to larger competitors with better online visibility in their local area.',
      solution:
        'We executed comprehensive local SEO strategy, optimized Google Business Profile, created location-specific content, and built local citations.',
      results: ['#1 ranking for 15+ keywords', '200% organic traffic growth', '3x appointment requests', '4.9★ average rating'],
      image: 'bg-gradient-to-br from-green-500/20 to-green-600/20',
      tags: ['SEO', 'Local Marketing', 'Content'],
    },
    {
      id: 4,
      title: 'Fashion Forward - Social Media Growth',
      category: 'Social Media & Content Marketing',
      client: 'Fashion Forward',
      challenge: 'Small fashion brand with no social media presence competing against established brands with large followings.',
      solution:
        'We built their social presence from zero, created consistent content strategy, collaborated with micro-influencers, and ran strategic campaigns.',
      results: ['50K followers in 6 months', '8% engagement rate', '15 brand collaborations', 'Viral campaigns'],
      image: 'bg-gradient-to-br from-pink-500/20 to-pink-600/20',
      tags: ['Social Media', 'Influencer Marketing', 'Content'],
    },
    {
      id: 5,
      title: 'Corporate Services Ltd - Digital Transformation',
      category: 'Strategy & Digital Transformation',
      client: 'Corporate Services Ltd',
      challenge: 'Traditional consulting firm needed complete digital overhaul to attract millennial clients and stay competitive.',
      solution:
        'We modernized their brand, built thought leadership content, implemented marketing automation, and launched digital advertising.',
      results: ['₹5M in new business', '40% from digital channels', 'Industry thought leader status', 'Awards & recognition'],
      image: 'bg-gradient-to-br from-orange-500/20 to-orange-600/20',
      tags: ['Digital Strategy', 'Thought Leadership', 'B2B'],
    },
    {
      id: 6,
      title: 'Health & Wellness - Patient Acquisition',
      category: 'Healthcare Marketing',
      client: 'Health & Wellness Clinic',
      challenge: 'New healthcare clinic needed to establish patient base and build trusted online reputation quickly.',
      solution:
        'We created educational content strategy, optimized for local search, implemented patient review management, and ran targeted campaigns.',
      results: ['300+ new patients', '4.8★ online rating', '200% patient referrals', '98% retention rate'],
      image: 'bg-gradient-to-br from-cyan-500/20 to-cyan-600/20',
      tags: ['Healthcare', 'Patient Acquisition', 'Reviews'],
    },
  ];

  const stats = [
    { number: '50+', label: 'Successful Projects' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '₹25M+', label: 'Client Revenue Generated' },
    { number: '8.5x', label: 'Average ROI' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Antigravity
            count={260}
            magnetRadius={6}
            ringRadius={7}
            waveSpeed={0.4}
            waveAmplitude={1}
            particleSize={1.2}
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
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Our <span className="text-primary">Success Stories</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Real results from real clients. See how we've helped businesses like yours achieve remarkable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/50 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="group bg-background border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all"
              >
                {/* Image/Visual */}
                <div className={`${study.image} h-48 flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-primary/10" />
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-xs font-bold text-accent uppercase tracking-wider mb-2">{study.category}</p>
                      <h3 className="text-2xl font-bold text-foreground">{study.title}</h3>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4">{study.client}</p>

                  {/* Tags */}
                  <div className="flex gap-2 mb-6 flex-wrap">
                    {study.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Challenge & Solution */}
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-bold text-foreground text-sm mb-2">Challenge</h4>
                      <p className="text-muted-foreground text-sm">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-sm mb-2">Solution</h4>
                      <p className="text-muted-foreground text-sm">{study.solution}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mb-6">
                    <h4 className="font-bold text-foreground text-sm mb-3">Results</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-accent">
                          <div className="w-2 h-2 rounded-full bg-accent" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <Link
                    href="/contact"
                    className="text-primary hover:text-primary/80 font-bold flex items-center gap-2 group/link"
                  >
                    Start Your Project
                    <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">What Makes Our Projects Successful</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine strategy, creativity, and data-driven execution to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Strategic Planning',
                description:
                  'Every project begins with deep research and strategic planning. We understand your market, competitors, and opportunities before we start building.',
              },
              {
                title: 'Creative Excellence',
                description:
                  'We design and build digital solutions that are not just functional, but beautiful, memorable, and aligned with your brand vision.',
              },
              {
                title: 'Data-Driven Optimization',
                description:
                  'We measure everything and continuously optimize. Results matter more than perfection, and we iterate based on real user data.',
              },
              {
                title: 'Dedicated Partnership',
                description:
                  'You get a dedicated team that understands your business. We\'re invested in your success and communicate transparently every step.',
              },
              {
                title: 'Scalable Solutions',
                description:
                  'We build for growth. Our solutions are designed to scale with your business, handling increased traffic and complexity.',
              },
              {
                title: 'Ongoing Support',
                description:
                  'We don\'t disappear after launch. We provide ongoing support, monitoring, and optimization to keep your digital presence performing.',
              },
            ].map((benefit, idx) => (
              <div key={idx} className="bg-background rounded-xl p-8 border border-border hover:border-primary/50 transition-colors">
                <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">What Our Clients Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Launch Digital Works completely transformed our online presence. The team understood our vision and delivered beyond expectations. Our leads increased 5x in the first quarter.",
                author: 'Anjali Sharma',
              },
              {
                quote:
                  "From strategy to execution, Launch Digital Works was professional, creative, and results-focused. Best investment we made for our business.",
                author: 'Beena Rawat',
              },
              {
                quote:
                  "The team treated our business like their own. Their dedication to results and transparent communication made all the difference in our growth.",
                author: 'Sakshi Singh',
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-background border border-border rounded-xl p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-5 h-5 bg-accent rounded-full" />
                  ))}
                </div>
                <p className="text-muted-foreground italic mb-6">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">Your Success Story Starts Here</h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create something amazing together. Schedule a free consultation with our team.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-primary-foreground text-primary rounded-lg hover:bg-primary-foreground/90 transition-colors font-bold"
          >
            Start Your Project
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
