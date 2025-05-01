import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-28 pb-20">
        <Card className="max-w-4xl mx-auto border border-primary/20 shadow-lg overflow-hidden">
          <div className="h-1.5 bg-gradient-to-r from-primary to-primary/70 w-full"></div>
          <CardHeader className="pb-2 pt-6 px-8">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 px-3 py-1 text-sm font-medium">Official Document</Badge>
            <h1 className="text-4xl font-bold mb-4 text-foreground bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Privacy Policy</h1>
            <p className="text-lg text-muted-foreground flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Last updated: May 15, 2023
            </p>
          </CardHeader>
          
          <CardContent className="px-8 pb-8">
            <div className="prose dark:prose-invert prose-headings:text-foreground prose-p:text-muted-foreground max-w-none prose-headings:font-semibold prose-strong:text-primary prose-a:text-primary divide-y divide-border/30">
              <section className="pt-3 pb-8">
                <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                  <span className="h-6 w-1 bg-primary/50 rounded-full"></span>
                  1. Introduction
                </h2>
                <div className="ml-3 pl-4 border-l border-border/40 mt-4">
                  <p>
                    Store of Value ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website storeofvalue.ch and use our services. This Privacy Policy constitutes a legally binding agreement between you and Store of Value.
                  </p>
                  <p>
                    We respect Swiss data protection laws, including the Federal Act on Data Protection (FADP), and we aim to be transparent about our data practices. By accessing or using our website, you expressly consent to the collection, use, storage, disclosure, and processing of your information as described in this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please do not access the site.
                  </p>
                </div>
              </section>
              
              <section className="pt-8 pb-8">
                <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                  <span className="h-6 w-1 bg-primary/50 rounded-full"></span>
                  2. Information We Collect
                </h2>
                <div className="ml-3 pl-4 border-l border-border/40 mt-4">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <span className="h-2 w-2 bg-primary/70 rounded-full"></span>
                    2.1 Personal Data
                  </h3>
                  <p>
                    We may collect personal identification information, including but not limited to:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 marker:text-primary">
                    <li>Full name</li>
                    <li>Email address</li>
                    <li>Location data (country, region)</li>
                    <li>User profile information</li>
                    <li>Authentication information</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold flex items-center gap-2 mt-6">
                    <span className="h-2 w-2 bg-primary/70 rounded-full"></span>
                    2.2 Non-Personal Data
                  </h3>
                  <p>
                    We automatically collect certain non-personal identification information when you visit our website, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 marker:text-primary">
                    <li>Browser type and version</li>
                    <li>Device type and screen information</li>
                    <li>Operating system</li>
                    <li>IP address and approximate location derived from IP</li>
                    <li>Referring and exit pages</li>
                    <li>Date and time of access</li>
                    <li>Clickstream data and usage patterns</li>
                    <li>Cookies, web beacons, and similar tracking technologies</li>
                  </ul>
                </div>
              </section>
              
              <section className="pt-8 pb-8">
                <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                  <span className="h-6 w-1 bg-primary/50 rounded-full"></span>
                  3. How We Collect Information
                </h2>
                <div className="ml-3 pl-4 border-l border-border/40 mt-4">
                  <p>
                    We collect information through various methods:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 marker:text-primary">
                    <li><strong>Direct Interactions:</strong> Information you voluntarily provide when registering an account, signing up for our newsletter, participating in our community forums, or using our services.</li>
                    <li><strong>Automated Technologies:</strong> As you navigate through our site, we automatically collect usage data through cookies, server logs, web beacons, and similar technologies. You can manage your cookie preferences through your browser settings, but disabling certain cookies may limit your ability to use some features of our website.</li>
                    <li><strong>Third-Party Sources:</strong> We may receive information about you from third-party partners, service providers, and publicly available sources, always in compliance with applicable law.</li>
                  </ul>
                </div>
              </section>
              
              <section className="pt-8 pb-8">
                <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                  <span className="h-6 w-1 bg-primary/50 rounded-full"></span>
                  4. Legal Basis for Processing
                </h2>
                <div className="ml-3 pl-4 border-l border-border/40 mt-4">
                  <p>
                    We process your personal data on the following legal grounds:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 marker:text-primary">
                    <li><strong>Consent:</strong> Where you have given us explicit consent to process your data for specific purposes.</li>
                    <li><strong>Contractual Necessity:</strong> Where processing is necessary for the performance of a contract with you or to take steps at your request before entering into a contract.</li>
                    <li><strong>Legitimate Interests:</strong> Where processing is necessary for our legitimate interests or those of a third party, provided these interests are not overridden by your fundamental rights and freedoms.</li>
                    <li><strong>Legal Obligation:</strong> Where processing is necessary for compliance with our legal obligations under applicable laws.</li>
                  </ul>
                </div>
              </section>
              
              <section className="pt-8 pb-8">
                <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                  <span className="h-6 w-1 bg-primary/50 rounded-full"></span>
                  5. How We Use Your Information
                </h2>
                <div className="ml-3 pl-4 border-l border-border/40 mt-4">
                  <p>
                    We may use the information we collect for various purposes, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 marker:text-primary">
                    <li>Providing, operating, maintaining, and improving our website and services</li>
                    <li>Processing and completing transactions</li>
                    <li>Personalizing your experience and delivering tailored content</li>
                    <li>Analyzing how you use our website to enhance user experience</li>
                    <li>Developing new products, services, features, and functionality</li>
                    <li>Communicating with you, including for customer service, updates, and marketing purposes (where legally permitted)</li>
                    <li>Sending you newsletters, promotional materials, and other notices (with your consent where required by law)</li>
                    <li>Monitoring and analyzing usage, trends, and activities related to our website</li>
                    <li>Detecting, preventing, and addressing technical issues, security breaches, and fraudulent activities</li>
                    <li>Complying with legal obligations and enforcing our terms of service</li>
                  </ul>
                </div>
              </section>
              
              <section className="pt-8 pb-8">
                <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                  <span className="h-6 w-1 bg-primary/50 rounded-full"></span>
                  6. Disclosure of Your Information
                </h2>
                <div className="ml-3 pl-4 border-l border-border/40 mt-4">
                  <p>
                    We may disclose your information in the following circumstances:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 marker:text-primary">
                    <li><strong>Service Providers:</strong> We may share your information with third-party vendors, service providers, contractors, or agents who perform services on our behalf and require access to such information to do that work. These parties are contractually obligated to protect your data and may not use it for any purpose other than to provide the specified services to us.</li>
                    <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company. We will notify you via email and/or a prominent notice on our website of any change in ownership or uses of your personal data, as well as any choices you may have regarding your personal data.</li>
                    <li><strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or a government agency) or if we believe in good faith that such action is necessary to: (a) comply with a legal obligation; (b) protect and defend our rights or property; (c) prevent or investigate possible wrongdoing in connection with the service; (d) protect the personal safety of users of the service or the public; or (e) protect against legal liability.</li>
                    <li><strong>With Your Consent:</strong> We may disclose your personal information for any other purpose with your consent.</li>
                  </ul>
                  <p>
                    We do not sell, rent, or trade your personal identification information to third parties for their marketing purposes.
                  </p>
                </div>
              </section>
              
              <section className="pt-8 pb-8">
                <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                  <span className="h-6 w-1 bg-primary/50 rounded-full"></span>
                  7. Data Security
                </h2>
                <div className="ml-3 pl-4 border-l border-border/40 mt-4">
                  <p>
                    We implement appropriate technical and organizational safeguards designed to protect the security of your personal data. However, please be aware that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security.
                  </p>
                  <p>
                    We limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know. They will only process your personal data on our instructions, and they are subject to a duty of confidentiality.
                  </p>
                  <p>
                    We have put in place procedures to deal with any suspected personal data breach and will notify you and any applicable regulator of a breach where we are legally required to do so.
                  </p>
                </div>
              </section>
              
              <section className="pt-8 pb-8">
                <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                  <span className="h-6 w-1 bg-primary/50 rounded-full"></span>
                  8. Data Retention
                </h2>
                <div className="ml-3 pl-4 border-l border-border/40 mt-4">
                  <p>
                    We will retain your personal data only for as long as necessary to fulfill the purposes for which we collected it, including for the purposes of satisfying any legal, accounting, or reporting requirements.
                  </p>
                  <p>
                    To determine the appropriate retention period for personal data, we consider the amount, nature, and sensitivity of the personal data, the potential risk of harm from unauthorized use or disclosure of your personal data, the purposes for which we process your personal data, and whether we can achieve those purposes through other means, and the applicable legal requirements.
                  </p>
                  <p>
                    In some circumstances, we may anonymize your personal data (so that it can no longer be associated with you) for research or statistical purposes, in which case we may use this information indefinitely without further notice to you.
                  </p>
                </div>
              </section>
              
              <section className="pt-8 pb-8">
                <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                  <span className="h-6 w-1 bg-primary/50 rounded-full"></span>
                  9. Your Data Protection Rights
                </h2>
                <div className="ml-3 pl-4 border-l border-border/40 mt-4">
                  <p>
                    Under Swiss data protection laws and depending on your jurisdiction, you may have various rights related to your personal data, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 marker:text-primary">
                    <li><strong>Right to Access:</strong> You have the right to request copies of your personal data that we hold about you.</li>
                    <li><strong>Right to Rectification:</strong> You have the right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete.</li>
                    <li><strong>Right to Erasure (Right to be Forgotten):</strong> You have the right to request that we erase your personal data, under certain conditions.</li>
                    <li><strong>Right to Restrict Processing:</strong> You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
                    <li><strong>Right to Object to Processing:</strong> You have the right to object to our processing of your personal data, under certain conditions.</li>
                    <li><strong>Right to Data Portability:</strong> You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
                    <li><strong>Right to Withdraw Consent:</strong> Where we rely on your consent to process your personal data, you have the right to withdraw this consent at any time. This will not affect the lawfulness of processing based on your consent before its withdrawal.</li>
                  </ul>
                  <p>
                    To exercise any of these rights, please contact us using the details provided in the "Contact Us" section. We may need to request specific information from you to help us confirm your identity and ensure your right to access your personal data (or to exercise any of your other rights). This is a security measure to ensure that personal data is not disclosed to any person who has no right to receive it.
                  </p>
                  <p>
                    We will respond to all legitimate requests within one month. Occasionally it may take us longer than a month if your request is particularly complex or you have made a number of requests. In this case, we will notify you and keep you updated.
                  </p>
                </div>
              </section>
              
              <section className="pt-8 pb-8">
                <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                  <span className="h-6 w-1 bg-primary/50 rounded-full"></span>
                  10. International Data Transfers
                </h2>
                <div className="ml-3 pl-4 border-l border-border/40 mt-4">
                  <p>
                    Our servers are located in Switzerland. If you are accessing our website from outside Switzerland, please be aware that your information may be transferred to, stored, and processed in Switzerland where our servers are located and our central database is operated.
                  </p>
                  <p>
                    By submitting your information, you consent to this transfer, storing, or processing. We will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and Swiss data protection laws. We ensure that any international transfers of personal data are subject to appropriate and suitable safeguards.
                  </p>
                </div>
              </section>
              
              <section className="pt-8 pb-8">
                <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                  <span className="h-6 w-1 bg-primary/50 rounded-full"></span>
                  11. Children's Privacy
                </h2>
                <div className="ml-3 pl-4 border-l border-border/40 mt-4">
                  <p>
                    Our website is not intended for children under the age of 16. We do not knowingly collect personal information from children under 16. If we learn we have collected or received personal information from a child under 16 without verification of parental consent, we will take steps to delete that information.
                  </p>
                  <p>
                    If you are a parent or guardian and believe your child has provided us with personal information without your consent, please contact us immediately, and we will take steps to remove such information from our servers.
                  </p>
                </div>
              </section>
              
              <section className="pt-8 pb-8">
                <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                  <span className="h-6 w-1 bg-primary/50 rounded-full"></span>
                  12. Third-Party Links and Services
                </h2>
                <div className="ml-3 pl-4 border-l border-border/40 mt-4">
                  <p>
                    Our website may contain links to third-party websites, services, or tools that are not owned or controlled by Store of Value. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites or services.
                  </p>
                  <p>
                    We strongly advise you to review the privacy policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
                  </p>
                </div>
              </section>
              
              <section className="pt-8 pb-8">
                <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                  <span className="h-6 w-1 bg-primary/50 rounded-full"></span>
                  13. Changes to This Privacy Policy
                </h2>
                <div className="ml-3 pl-4 border-l border-border/40 mt-4">
                  <p>
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
                  </p>
                  <p>
                    You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page. Your continued use of our website following the posting of changes constitutes your acceptance of such changes.
                  </p>
                </div>
              </section>
              
              <section className="pt-8 pb-8">
                <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                  <span className="h-6 w-1 bg-primary/50 rounded-full"></span>
                  14. Contact Us
                </h2>
                <div className="ml-3 pl-4 border-l border-border/40 mt-4">
                  <p>
                    If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
                  </p>
                  <div className="bg-primary/5 p-5 rounded-md border border-primary/20 mt-4 shadow-sm">
                    <div className="text-primary font-medium text-lg mb-2">Store of Value</div>
                    <div className="flex items-center mt-2 text-muted-foreground">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary/70 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Zug, Switzerland
                    </div>
                    <div className="flex items-center mt-2 text-muted-foreground">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary/70 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Email: <a href="mailto:contact@storeofvalue.ch" className="text-primary hover:underline transition-all">contact@storeofvalue.ch</a>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            
            <div className="border-t border-border/30 mt-8 pt-8 flex justify-center">
              <Button asChild variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link to="/">Return to Home</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage; 