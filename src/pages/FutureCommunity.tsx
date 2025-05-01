import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Twitter, Github, MessageCircle, Send, Globe, Mail } from 'lucide-react';

const FutureCommunityPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-28 pb-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Join Our Community</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Connect with like-minded individuals focused on Bitcoin's role as the premier digital store of value.
          </p>
          
          <div className="space-y-16">
            <section>
              <h2 className="text-3xl font-semibold mb-8 text-foreground">Connect Online</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SocialCard 
                  title="Twitter"
                  description="Follow us for daily insights and community updates"
                  icon={<Twitter className="h-8 w-8" />}
                  linkText="@BTCStoreOfValue"
                  linkUrl="https://twitter.com/example"
                  color="bg-[#1DA1F2]/10"
                />
                <SocialCard 
                  title="Telegram"
                  description="Join our discussion group with 5,000+ members"
                  icon={<Send className="h-8 w-8" />}
                  linkText="Bitcoin SoV Community"
                  linkUrl="https://t.me/example"
                  color="bg-[#0088cc]/10"
                />
                <SocialCard 
                  title="Discord"
                  description="Engage in focused topic channels and live events"
                  icon={<MessageCircle className="h-8 w-8" />}
                  linkText="Bitcoin Manifesto Server"
                  linkUrl="https://discord.gg/example"
                  color="bg-[#5865F2]/10"
                />
                <SocialCard 
                  title="GitHub"
                  description="Contribute to our open source educational materials"
                  icon={<Github className="h-8 w-8" />}
                  linkText="bitcoin-sov/resources"
                  linkUrl="https://github.com/example"
                  color="bg-[#181717]/10"
                />
              </div>
            </section>
            
            <section>
              <h2 className="text-3xl font-semibold mb-8 text-foreground">Local Meetups</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We organize regular in-person meetups in cities around the world. Join fellow Bitcoin advocates for discussions, presentations, and networking.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <MeetupCard 
                  city="New York"
                  schedule="First Tuesday of each month"
                  members="350+ members"
                  linkUrl="https://meetup.com/example-nyc"
                />
                <MeetupCard 
                  city="London"
                  schedule="Every other Thursday"
                  members="280+ members"
                  linkUrl="https://meetup.com/example-london"
                />
                <MeetupCard 
                  city="Singapore"
                  schedule="Last Friday of each month"
                  members="170+ members"
                  linkUrl="https://meetup.com/example-singapore"
                />
              </div>
              <div className="flex justify-center mt-8">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Globe className="mr-2 h-4 w-4" /> View All Meetups
                </Button>
              </div>
            </section>
            
            <section>
              <h2 className="text-3xl font-semibold mb-8 text-foreground">Stay Updated</h2>
              <Card>
                <CardHeader>
                  <CardTitle>Subscribe to Our Newsletter</CardTitle>
                  <CardDescription>Get weekly insights on Bitcoin as a store of value, upcoming events, and community highlights.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
                    <Input 
                      type="email" 
                      placeholder="Your email address"
                      className="md:flex-1" 
                    />
                    <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">
                      <Mail className="mr-2 h-4 w-4" /> Subscribe
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </section>
            
            <section>
              <h2 className="text-3xl font-semibold mb-8 text-foreground">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How can I contribute to the manifesto?</AccordionTrigger>
                  <AccordionContent>
                    We welcome contributions through our GitHub repository. You can suggest edits, add resources, or translate content into other languages. For major contributions, please join our Discord to discuss with the core team.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Are there speaking opportunities at your events?</AccordionTrigger>
                  <AccordionContent>
                    Yes! We're always looking for knowledgeable speakers for both online webinars and local meetups. Please contact us through the form on this page with your proposed topic and relevant experience.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>How can I start a local meetup in my city?</AccordionTrigger>
                  <AccordionContent>
                    We support community members who want to start local chapters. We provide guidelines, presentation materials, and promotional support. Reach out to our community manager through Discord to get started.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Do you have educational programs for organizations?</AccordionTrigger>
                  <AccordionContent>
                    We offer tailored workshops and presentation series for companies, educational institutions, and nonprofit organizations interested in learning about Bitcoin as a store of value. Contact us for details and pricing.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

const SocialCard = ({ title, description, icon, linkText, linkUrl, color }: 
  { title: string, description: string, icon: React.ReactNode, linkText: string, linkUrl: string, color: string }) => (
  <Card className="overflow-hidden">
    <div className={`p-6 flex items-center ${color}`}>
      {icon}
      <h3 className="text-xl font-semibold ml-4">{title}</h3>
    </div>
    <CardContent className="pt-6">
      <p className="text-muted-foreground">{description}</p>
    </CardContent>
    <CardFooter>
      <Button variant="outline" asChild className="w-full">
        <a href={linkUrl} target="_blank" rel="noopener noreferrer">
          {linkText}
        </a>
      </Button>
    </CardFooter>
  </Card>
);

const MeetupCard = ({ city, schedule, members, linkUrl }: 
  { city: string, schedule: string, members: string, linkUrl: string }) => (
  <Card className="text-center">
    <CardHeader>
      <CardTitle>{city}</CardTitle>
    </CardHeader>
    <CardContent className="space-y-2">
      <p className="font-medium">{schedule}</p>
      <p className="text-sm text-muted-foreground">{members}</p>
    </CardContent>
    <CardFooter className="flex justify-center">
      <Button variant="outline" asChild>
        <a href={linkUrl} target="_blank" rel="noopener noreferrer">
          Join Group
        </a>
      </Button>
    </CardFooter>
  </Card>
);

export default FutureCommunityPage; 