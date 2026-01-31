'use client';

import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import Link from 'next/link';
import { ArrowRight, Code, Megaphone, Share2, Palette, BarChart3, Settings } from 'lucide-react';
import Antigravity from '@/components/antigravity';

export default function Services() {
  const services = [
    {
      title: 'Web Design & Development',
      icon: Code,
      description: 'Custom websites built to convert visitors into customers',
      features: [
        'Responsive mobile-first design',
        'Fast loading performance',
        'E-commerce integration',
        'Content management systems',
        'API integrations',
        'Ongoing maintenance & support',
      ],
      highlights:
        'We build beautiful, performant websites that look stunning on every device and drive real business results. From simple brochure sites to complex e-commerce platforms.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Digital Marketing',
      icon: Megaphone,
      description: 'Strategic campaigns that increase visibility and drive conversions',
      features: [
        'Search engine marketing (SEM)',
        'Google Ads management',
        'Email marketing campaigns',
        'Marketing automation',
        'Conversion rate optimization',
        'Campaign analytics & reporting',
      ],
      highlights:
        'We create targeted digital campaigns that reach your audience where they are. Every campaign is data-driven and optimized for maximum ROI.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      title: 'Social Media Marketing',
      icon: Share2,
      description: 'Build engagement and community across social platforms',
      features: [
        'Content strategy & creation',
        'Community management',
        'Social media advertising',
        'Influencer collaborations',
        'Analytics & insights',
        'Brand voice development',
      ],
      highlights:
        'We build your social presence from the ground up. Strategic content, consistent engagement, and authentic brand voice that resonates with your audience.',
      color: 'from-pink-500 to-pink-600',
    },
    {
      title: 'Branding & Design',
      icon: Palette,
      description: 'Create a memorable visual identity for your business',
      features: [
        'Logo design & brand identity',
        'Brand guidelines development',
        'Marketing collateral design',
        'Brand strategy consulting',
        'Visual design systems',
        'Brand messaging framework',
      ],
      highlights:
        'Your brand is your promise to your customers. We create cohesive visual identities that communicate your values and differentiate you from competitors.',
      color: 'from-orange-500 to-orange-600',
    },
    {
      title: 'SEO & Content Strategy',
      icon: BarChart3,
      description: 'Rank higher in search results and drive organic traffic',
      features: [
        'Keyword research & analysis',
        'On-page SEO optimization',
        'Technical SEO audit',
        'Link building strategy',
        'Content calendar creation',
        'Monthly reporting & optimization',
      ],
      highlights:
        'SEO isn\'t magic—it\'s strategy. We research, optimize, and monitor to get your site ranking for the keywords that matter to your business.',
      color: 'from-green-500 to-green-600',
    },
    {
      title: 'Technical Consulting',
      icon: Settings,
      description: 'Strategic guidance on technology and digital infrastructure',
      features: [
        'Technology stack recommendations',
        'Website audit & analysis',
        'Performance optimization',
        'Security & compliance review',
        'Digital transformation planning',
        'Ongoing technical support',
      ],
      highlights:
        'We help you understand the technology behind your digital presence. From choosing the right tools to optimizing performance, we\'ve got you covered.',
      color: 'from-cyan-500 to-cyan-600',
    },
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
              Services Designed for <span className="text-primary">Growth</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We offer comprehensive digital solutions tailored to your specific business needs. Whether you're just starting out or scaling fast, we have the expertise to help.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <div key={service.title} className="group">
                  <div className="bg-background border border-border rounded-xl p-8 hover:border-primary/50 transition-all h-full">
                    {/* Icon */}
                    <div className="w-14 h-14 bg-primary/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
                      <IconComponent className="text-primary" size={28} />
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-2xl font-bold text-foreground mb-2">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>

                    {/* Highlights */}
                    <p className="text-foreground/80 mb-6 text-sm leading-relaxed">{service.highlights}</p>

                    {/* Features List */}
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-2 h-2 rounded-full bg-accent" />
                          </div>
                          <span className="text-sm text-foreground/80">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <Link
                      href="/contact"
                      className="text-primary hover:text-primary/80 font-bold flex items-center gap-2 group/link"
                    >
                      Learn More
                      <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We follow a proven methodology to ensure every project delivers measurable results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'We learn about your business, goals, and audience through in-depth conversations and research.',
              },
              {
                step: '02',
                title: 'Strategy',
                description: 'We develop a comprehensive strategy tailored to your unique needs and market opportunities.',
              },
              {
                step: '03',
                title: 'Execution',
                description: 'Our team brings the strategy to life with creative excellence and technical precision.',
              },
              {
                step: '04',
                title: 'Optimization',
                description: 'We monitor, analyze, and continuously improve your digital presence for better results.',
              },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="bg-background rounded-xl p-8 border border-border">
                  <div className="text-4xl font-bold text-primary mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-1/3 -right-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-background z-10">
                    <ArrowRight size={16} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Work With Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're not just service providers. We're your growth partners, invested in your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Experienced Team',
                description:
                  '10+ years of combined experience across all aspects of digital marketing and web development.',
              },
              {
                title: 'Results-Focused',
                description: 'Every strategy, design, and campaign is built with measurable objectives and continuous optimization.',
              },
              {
                title: 'Custom Solutions',
                description:
                  'No cookie-cutter approaches. We tailor every solution to your specific business needs and budget.',
              },
              {
                title: 'Transparent Communication',
                description: 'Regular reporting, clear timelines, and honest conversations about what\'s working and what isn\'t.',
              },
              {
                title: 'Dedicated Support',
                description:
                  'You get a dedicated account manager and support team that understands your business goals.',
              },
              {
                title: 'Continuous Innovation',
                description:
                  'We stay current with the latest tools, trends, and best practices to keep you ahead of the competition.',
              },
            ].map((reason, idx) => (
              <div key={idx} className="bg-background rounded-xl p-8 border border-border hover:border-primary/50 transition-colors">
                <h3 className="text-xl font-bold text-foreground mb-3">{reason.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">Ready to Get Started?</h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can accelerate your growth. Schedule a free consultation with our team.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-primary-foreground text-primary rounded-lg hover:bg-primary-foreground/90 transition-colors font-bold"
          >
            Schedule Free Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
