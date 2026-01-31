'use client';

import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import Link from 'next/link';
import { ArrowRight, Users, Lightbulb, Target } from 'lucide-react';
import Antigravity from '@/components/antigravity';

export default function About() {
  const team = [
    {
      name: 'Sanket Mistry',
      role: 'Co-Founder & Creative Director',
      bio: 'Digital strategist with 12+ years of experience building brands. Passionate about creating meaningful experiences.',
    },
    {
      name: 'Aryan kumar',
      role: 'CTO & Technical Lead',
      bio: 'Full-stack developer and tech architect. Specializes in scalable web solutions and performance optimization.',
    },
    {
      name: 'Hitesh Rawat',
      role: 'Marketing Strategist',
      bio: 'Data-driven marketer with proven track record. Focuses on campaigns that deliver measurable ROI.',
    },
    {
      name: 'Amartya Vikram Singh',
      role: 'Design Lead',
      bio: 'UX/UI designer with eye for detail. Creates beautiful, functional designs that solve real problems.',
    },
  ];

  const values = [
    {
      title: 'Excellence',
      description: 'We deliver our best work on every project. Quality is non-negotiable, and we continuously raise the bar.',
      icon: '✨',
    },
    {
      title: 'Integrity',
      description: 'We are transparent, honest, and accountable. Your trust is everything to us, and we earn it every day.',
      icon: '🤝',
    },
    {
      title: 'Innovation',
      description:
        'We stay current with technology and trends. Continuous learning and evolution drive everything we do.',
      icon: '💡',
    },
    {
      title: 'Partnership',
      description: 'Your success is our success. We invest in relationships and work as true partners toward your goals.',
      icon: '🚀',
    },
    {
      title: 'Results',
      description: 'We focus on measurable outcomes. Every strategy is designed to drive real business growth and impact.',
      icon: '📈',
    },
    {
      title: 'Community',
      description:
        'We believe in lifting others up. We share knowledge, mentor emerging talent, and give back to our community.',
      icon: '🌟',
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                About <span className="text-primary">Launch Digital Works</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                We're a team of digital strategists, designers, and developers passionate about helping businesses grow. Founded with a simple mission: make premium digital services accessible to ambitious startups and small businesses.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-bold"
              >
                Let's Talk
                <ArrowRight size={20} />
              </Link>
            </div>

            {/* Visual */}
            <div className="hidden lg:block">
              <div className="relative h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full -translate-y-32 translate-x-32 blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full translate-y-32 -translate-x-32 blur-3xl" />
                </div>
                <div className="relative z-10 text-center">
                  <div className="text-6xl font-bold text-primary mb-4">3+</div>
                  <p className="text-lg text-foreground">Years of Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Visual */}
            <div className="bg-gradient-to-br from-accent/20 to-primary/20 h-96 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="inline-block mb-4">
                  <Lightbulb className="w-16 h-16 text-primary" />
                </div>
                <p className="text-foreground font-bold">Passion Meets Purpose</p>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-foreground">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                Launch Digital Works began with two college students and a shared obsession with building things on the internet. While studying, we spent our free time learning web development, experimenting with digital marketing, and taking on small projects just to see ideas come to life on a screen.
                </p>
                <p>
                What started as helping friends and local businesses quickly turned into something bigger. We realized many startups struggled to find reliable, affordable digital solutions that actually delivered results. So we decided to build an agency that focuses on practical, high-quality work without unnecessary complexity or inflated costs.
                </p>
                <p>
                From late-night coding sessions to our first real clients, we’ve grown by staying curious, learning fast, and listening closely to the people we work with. Every project taught us something new about design, strategy, and what businesses really need to grow online.
                </p>
                <p>
                Today, Launch Digital Works partners with startups and small businesses to create impactful digital experiences. We’re still driven by the same mindset we had as students: build smart, stay honest, and help brands grow through meaningful, measurable results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide every decision we make and every project we undertake
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-background rounded-xl p-8 border border-border hover:border-primary/50 transition-colors">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Meet the Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Talented individuals united by a passion for digital excellence and client success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-background border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-colors">
                {/* Avatar */}
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-primary/30 flex items-center justify-center">
                    <Users className="w-12 h-12 text-primary" />
                  </div>
                </div>

                {/* Info */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary font-semibold mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Partner With Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here's what sets us apart from other agencies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Custom Solutions, Not Templates',
                description:
                  'We never use off-the-shelf solutions. Every project is custom-built for your unique needs and goals.',
                icon: '🎨',
              },
              {
                title: 'Your Success Metrics',
                description:
                  'We measure success by your metrics. If it doesn\'t help your business grow, we don\'t call it a win.',
                icon: '📊',
              },
              {
                title: 'Partnership, Not Transactions',
                description:
                  'We work as an extension of your team. Your goals become our goals, and we\'re invested in the long-term.',
                icon: '🤝',
              },
              {
                title: 'Transparent Communication',
                description:
                  'Regular updates, honest conversations, clear timelines. You always know where your project stands.',
                icon: '💬',
              },
              {
                title: 'Proven Track Record',
                description:
                  'Over 50 successful projects across industries. Real clients, real results, real growth. Check our portfolio.',
                icon: '🏆',
              },
              {
                title: 'Dedicated Team',
                description:
                  'You get a dedicated account manager and team. No account jumping or losing continuity mid-project.',
                icon: '👥',
              },
            ].map((reason, idx) => (
              <div key={idx} className="bg-background rounded-xl p-8 border border-border hover:border-primary/50 transition-colors">
                <div className="text-4xl mb-4">{reason.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">{reason.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Journey</h2>
          </div>

          <div className="space-y-8">
            {[
              { year: '2023', milestone: 'Founded', description: 'Launch Digital Works launched with a mission to democratize premium digital services.' },
              { year: '2023', milestone: 'First 10 Projects', description: 'Completed 10 successful projects and earned 100% client satisfaction rating.' },
              { year: '2023', milestone: 'Team Expansion', description: 'Grew to 8 team members and opened our second office.' },
              { year: '2024', milestone: '30 Projects Milestone', description: 'Hit 30 successful projects and ₹10M in client revenue generated.' },
              { year: '2025', milestone: 'Industry Recognition', description: 'Won "Best Digital Agency" award. Featured in industry publications.' },
              { year: '2026', milestone: '50+ Projects', description: 'Celebrating 50+ successful projects and continuing to grow with amazing clients.' },
            ].map((milestone, idx) => (
              <div key={idx} className="flex gap-8">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                    {milestone.year.slice(-2)}
                  </div>
                  {idx < 5 && <div className="w-1 h-20 bg-primary/30 mt-4" />}
                </div>
                <div className="pb-8">
                  <p className="text-primary font-bold">{milestone.year}</p>
                  <h3 className="text-xl font-bold text-foreground mb-2">{milestone.milestone}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">Ready to Work Together?</h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help your business grow. No pressure, just a conversation about your goals.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-primary-foreground text-primary rounded-lg hover:bg-primary-foreground/90 transition-colors font-bold"
          >
            Schedule Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
