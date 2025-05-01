import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { 
  MessageSquare, 
  Mail, 
  Send, 
  Twitter, 
  Linkedin, 
  Github,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  const handleSubjectChange = (value) => {
    setFormState({
      ...formState,
      subject: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Encode form data for Netlify
      const formData = new FormData();
      formData.append('form-name', 'contact');
      Object.entries(formState).forEach(([key, value]) => {
        formData.append(key, value);
      });
      
      // Submit form to Netlify
      await fetch('/', {
        method: 'POST',
        body: formData,
      });
      
      // Show success toast
      toast({
        title: "Message Sent",
        description: "We've received your message and will respond shortly.",
      });
      
      // Update UI to show success state
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      
      // Show error toast
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-16 overflow-hidden bg-gradient-to-b from-amber-500/5 to-orange-500/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center z-10 relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Badge className="mb-4 px-3 py-1 bg-orange-500/10 text-orange-500 hover:bg-orange-500/20 transition-colors">
                  <MessageSquare className="mr-1 h-3.5 w-3.5" />
                  <span>Get in Touch</span>
                </Badge>
                
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Contact Us
                </h1>
                
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Have questions about Bitcoin or our services? Send us a message and our team will get back to you as soon as possible.
                </p>
              </motion.div>
            </div>
          </div>
          
          {/* Background decoration */}
          <div className="absolute inset-0 pointer-events-none">
            <svg className="w-full h-full opacity-[0.03]" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
        </section>
        
        {/* Contact Form Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Contact Info */}
                <div className="lg:col-span-1">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <h2 className="text-2xl font-bold mb-6">Connect With Us</h2>
                    
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-lg font-semibold mb-3 text-orange-500">Email</h3>
                        <a 
                          href="mailto:hello@storeofvalue.ch" 
                          className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Mail className="h-5 w-5 mr-2 text-orange-500/70" />
                          hello@storeofvalue.ch
                        </a>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-3 text-orange-500">Social</h3>
                        <div className="flex space-x-4">
                          <a 
                            href="https://x.com/storeofvalue_ch" 
                            target="_blank" 
                            rel="noreferrer" 
                            className="p-2 rounded-full bg-orange-500/10 text-orange-500 hover:bg-orange-500/20 transition-colors"
                            aria-label="X (Twitter)"
                          >
                            <Twitter className="h-5 w-5" />
                          </a>
                          <a 
                            href="https://linkedin.com/company/storeofvalue" 
                            target="_blank" 
                            rel="noreferrer" 
                            className="p-2 rounded-full bg-orange-500/10 text-orange-500 hover:bg-orange-500/20 transition-colors"
                            aria-label="LinkedIn"
                          >
                            <Linkedin className="h-5 w-5" />
                          </a>
                          <a 
                            href="https://github.com/storeofvalue" 
                            target="_blank" 
                            rel="noreferrer" 
                            className="p-2 rounded-full bg-orange-500/10 text-orange-500 hover:bg-orange-500/20 transition-colors"
                            aria-label="GitHub"
                          >
                            <Github className="h-5 w-5" />
                          </a>
                        </div>
                      </div>
                      
                      <Card className="border-orange-500/20 bg-gradient-to-b from-orange-50/5 to-amber-50/5">
                        <CardContent className="p-6">
                          <h3 className="text-lg font-semibold mb-3">Office Hours</h3>
                          <p className="text-muted-foreground text-sm mb-2">
                            Our team is available to respond to inquiries:
                          </p>
                          <div className="text-sm text-muted-foreground">
                            <p>By appointment (Central European Time/CET)</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </motion.div>
                </div>
                
                {/* Contact Form */}
                <div className="lg:col-span-2">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    {!submitted ? (
                      <>
                        <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                        
                        <form 
                          onSubmit={handleSubmit} 
                          className="space-y-6"
                          name="contact"
                          method="POST"
                          data-netlify="true"
                          netlify-honeypot="bot-field"
                        >
                          <input type="hidden" name="form-name" value="contact" />
                          <div className="hidden">
                            <label>
                              Don't fill this out if you're human: <input name="bot-field" />
                            </label>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <label htmlFor="name" className="text-sm font-medium">
                                Name
                              </label>
                              <Input
                                id="name"
                                name="name"
                                placeholder="Your name"
                                required
                                value={formState.name}
                                onChange={handleChange}
                                className="border-orange-500/20 focus-visible:ring-orange-500/30"
                              />
                            </div>
                            
                            <div className="space-y-2">
                              <label htmlFor="email" className="text-sm font-medium">
                                Email
                              </label>
                              <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="your@email.com"
                                required
                                value={formState.email}
                                onChange={handleChange}
                                className="border-orange-500/20 focus-visible:ring-orange-500/30"
                              />
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm font-medium">
                              Subject
                            </label>
                            <Select 
                              onValueChange={handleSubjectChange}
                              value={formState.subject}
                              required
                            >
                              <SelectTrigger className="w-full border-orange-500/20 focus-visible:ring-orange-500/30">
                                <SelectValue placeholder="Select a subject" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="general-inquiry">General Inquiry</SelectItem>
                                <SelectItem value="consulting">Consulting Services</SelectItem>
                                <SelectItem value="education">Bitcoin Education</SelectItem>
                                <SelectItem value="feedback">Website Feedback</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          
                          <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium">
                              Message
                            </label>
                            <Textarea
                              id="message"
                              name="message"
                              placeholder="How can we help you?"
                              required
                              rows={6}
                              value={formState.message}
                              onChange={handleChange}
                              className="border-orange-500/20 focus-visible:ring-orange-500/30 resize-none"
                            />
                          </div>
                          
                          <Button 
                            type="submit"
                            className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white w-full md:w-auto"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? (
                              <span className="flex items-center">
                                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Sending...
                              </span>
                            ) : (
                              <span className="flex items-center">
                                <Send className="mr-2 h-4 w-4" />
                                Send Message
                              </span>
                            )}
                          </Button>
                        </form>
                      </>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-green-50/10 border border-green-500/20 rounded-lg p-8 text-center"
                      >
                        <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10">
                          <CheckCircle2 className="h-8 w-8 text-green-500" />
                        </div>
                        
                        <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
                        
                        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                          Thank you for reaching out. We've received your message and will get back to you shortly at {formState.email}.
                        </p>
                        
                        <Button 
                          onClick={() => {
                            setSubmitted(false);
                            setFormState({
                              name: '',
                              email: '',
                              subject: '',
                              message: ''
                            });
                          }}
                          variant="outline"
                          className="border-orange-500/20 text-orange-500 hover:bg-orange-500/10"
                        >
                          Send Another Message
                        </Button>
                      </motion.div>
                    )}
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-gradient-to-b from-background to-orange-950/5 border-t border-orange-500/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-muted-foreground">
                  Some common questions about our services and response times
                </p>
              </motion.div>
              
              <div className="grid gap-6 text-left">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <h3 className="text-xl font-semibold mb-2 text-orange-500">How quickly do you respond to inquiries?</h3>
                  <p className="text-muted-foreground">
                    We typically respond to all inquiries within 24-48 business hours. For urgent matters, please indicate this in your message subject.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h3 className="text-xl font-semibold mb-2 text-orange-500">Do you offer consultation services?</h3>
                  <p className="text-muted-foreground">
                    Yes, we provide Bitcoin consultation services for individuals and organizations. Fill out our contact form with your specific needs and we'll get back to you with more information.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h3 className="text-xl font-semibold mb-2 text-orange-500">Can I request custom educational content?</h3>
                  <p className="text-muted-foreground">
                    Absolutely! We specialize in creating tailored Bitcoin educational content. Contact us with your requirements, and we'll discuss how we can help you achieve your educational objectives.
                  </p>
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-12"
              >
                <a 
                  href="/faq" 
                  className="inline-flex items-center text-orange-500 font-medium hover:text-orange-600 transition-colors"
                >
                  View all FAQs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact; 