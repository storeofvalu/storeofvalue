import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

const TermsOfServicePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-28 pb-20">
        <Card className="max-w-4xl mx-auto border border-primary/20 shadow-lg overflow-hidden">
          <div className="h-1.5 bg-gradient-to-r from-primary to-primary/70 w-full"></div>
          <CardHeader className="pb-2 pt-6 px-8">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 px-3 py-1 text-sm font-medium">Official Document</Badge>
            <h1 className="text-4xl font-bold mb-4 text-foreground bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Terms of Service</h1>
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
                    Welcome to Store of Value ("we," "our," or "us"). By accessing our website at storeofvalue.ch ("Website"), you agree to be bound by these Terms of Service ("Terms"), all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
                  </p>
                  <p>
                    These Terms constitute a legally binding agreement between you and Store of Value governing your access to and use of the Website. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.
                  </p>
                  <p>
                    We reserve the right to modify these Terms at any time without prior notice. Your continued use of the Website following any changes constitutes your acceptance of such changes.
                  </p>
                </div>
              </section>
              
              <section className="pt-8 pb-8">
                <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                  <span className="h-6 w-1 bg-primary/50 rounded-full"></span>
                  2. Use License
                </h2>
                <div className="ml-3 pl-4 border-l border-border/40 mt-4">
                  <p>
                    Permission is granted to temporarily download one copy of the materials (information or software) on Store of Value's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 marker:text-primary">
                    <li>Modify or copy the materials;</li>
                    <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                    <li>Attempt to decompile or reverse engineer any software contained on Store of Value's website;</li>
                    <li>Remove any copyright or other proprietary notations from the materials;</li>
                    <li>Transfer the materials to another person or "mirror" the materials on any other server;</li>
                    <li>Use the materials in any manner that could disable, overburden, damage, or impair the Website or interfere with any other party's use of the Website;</li>
                    <li>Use any robot, spider, or other automatic device, process, or means to access the Website for any purpose;</li>
                    <li>Introduce any viruses, Trojan horses, worms, logic bombs, or other harmful material.</li>
                  </ul>
                  <p>
                    This license shall automatically terminate if you violate any of these restrictions and may be terminated by Store of Value at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
                  </p>
                </div>
              </section>
              
              <section className="pt-8 pb-8">
                <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                  <span className="h-6 w-1 bg-primary/50 rounded-full"></span>
                  3. Disclaimer
                </h2>
                <div className="ml-3 pl-4 border-l border-border/40 mt-4">
                  <p>
                    The materials on Store of Value's website are provided on an 'as is' and 'as available' basis. Store of Value makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, non-infringement of intellectual property or other violation of rights.
                  </p>
                  <p>
                    Further, Store of Value does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site. The information provided may contain technical inaccuracies, outdated information, or typographical errors, and we do not guarantee the completeness or accuracy of any material on the Website.
                  </p>
                </div>
              </section>
              
              <section className="pt-8 pb-8">
                <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                  <span className="h-6 w-1 bg-primary/50 rounded-full"></span>
                  4. Educational Content and Investment Decisions
                </h2>
                <div className="ml-3 pl-4 border-l border-border/40 mt-4">
                  <p>
                    The content on this website is for informational and educational purposes only and should not be construed as professional financial advice, legal advice, tax advice, or any other type of advice. Store of Value is not a financial advisor, broker, dealer, attorney, tax advisor, or fiduciary. We do not recommend specific investment strategies or financial products.
                  </p>
                  <p>
                    Before making any investment decisions, we strongly recommend consulting with qualified professionals, including but not limited to financial advisors, legal counsel, and tax professionals. Investments in Bitcoin and other digital assets involve significant risk, including the possible loss of principal. Past performance is not indicative of future results.
                  </p>
                  <p>
                    Digital assets are highly volatile, and their value can fluctuate significantly in a short period. You should be prepared to lose the entire amount invested. Legislative and regulatory changes or actions at domestic or international levels may adversely affect the use, transfer, exchange, and value of digital assets.
                  </p>
                  <p>
                    You acknowledge and agree that you have sufficient knowledge, market sophistication, professional advice, and experience to make your own evaluation of the merits and risks of any investment or transaction.
                  </p>
                </div>
              </section>
              
              <section className="pt-8 pb-8">
                <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                  <span className="h-6 w-1 bg-primary/50 rounded-full"></span>
                  5. Limitations of Liability
                </h2>
                <div className="ml-3 pl-4 border-l border-border/40 mt-4">
                  <p>
                    In no event shall Store of Value, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 marker:text-primary">
                    <li>Your access to or use of or inability to access or use the Website;</li>
                    <li>Any conduct or content of any third party on the Website;</li>
                    <li>Any content obtained from the Website;</li>
                    <li>Unauthorized access, use, or alteration of your transmissions or content; or</li>
                    <li>Any other matter relating to the Website.</li>
                  </ul>
                  <p>
                    This limitation applies whether the alleged liability is based on contract, tort, negligence, strict liability, or any other basis, even if Store of Value has been advised of the possibility of such damage. Because some jurisdictions do not allow the exclusion or limitation of incidental or consequential damages, Store of Value's liability in such jurisdictions shall be limited to the extent permitted by law.
                  </p>
                  <p>
                    In no event shall our total liability to you for all damages, losses, or causes of action exceed the amount paid by you, if any, for accessing our Website.
                  </p>
                </div>
              </section>
              
              <section className="pt-8 pb-8">
                <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                  <span className="h-6 w-1 bg-primary/50 rounded-full"></span>
                  6. Accuracy of Materials
                </h2>
                <div className="ml-3 pl-4 border-l border-border/40 mt-4">
                  <p>
                    The materials appearing on Store of Value's website could include technical, typographical, or photographic errors. Store of Value does not warrant that any of the materials on its website are accurate, complete, or current. Store of Value may make changes to the materials contained on its website at any time without notice. However, Store of Value does not make any commitment to update the materials.
                  </p>
                  <p>
                    It is your responsibility to verify any information before relying on it. The content of this Website may be changed without notice, and it is not our responsibility to notify you of any such changes.
                  </p>
                </div>
              </section>
              
              <section className="pt-8 pb-8">
                <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                  <span className="h-6 w-1 bg-primary/50 rounded-full"></span>
                  7. Links to Third-Party Sites
                </h2>
                <div className="ml-3 pl-4 border-l border-border/40 mt-4">
                  <p>
                    Store of Value has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Store of Value of the site. Use of any such linked website is at the user's own risk.
                  </p>
                  <p>
                    These linked sites are only for your convenience, and you access them at your own risk. We are not responsible for the availability, accuracy, content, products, or services of any third-party websites. You should review the applicable terms and policies, including privacy and data collection practices, of any website to which you navigate from our Website.
                  </p>
                </div>
              </section>
              
              <section className="pt-8 pb-8">
                <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                  <span className="h-6 w-1 bg-primary/50 rounded-full"></span>
                  8. Modifications to Terms of Service
                </h2>
                <div className="ml-3 pl-4 border-l border-border/40 mt-4">
                  <p>
                    Store of Value may revise these Terms of Service for its website at any time without notice. By using this website, you are agreeing to be bound by the then-current version of these Terms of Service. It is your responsibility to check these Terms periodically for changes.
                  </p>
                  <p>
                    If we make material changes to these Terms, we will notify you by posting a notice on our Website or by sending you an email. Your continued use of the Website after such notice constitutes your acceptance of the modified Terms.
                  </p>
                </div>
              </section>
              
              <section className="pt-8 pb-8">
                <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                  <span className="h-6 w-1 bg-primary/50 rounded-full"></span>
                  9. User Accounts and Contributions
                </h2>
                <div className="ml-3 pl-4 border-l border-border/40 mt-4">
                  <p>
                    If you create an account on our website or participate in our community, you are responsible for:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 marker:text-primary">
                    <li>Maintaining the confidentiality of your account credentials;</li>
                    <li>All activities that occur under your account;</li>
                    <li>Promptly notifying us of any unauthorized use of your account or other security breaches;</li>
                    <li>Ensuring that your account information is accurate and up-to-date.</li>
                  </ul>
                  <p>
                    We reserve the right to terminate or suspend your account and access to our services at our sole discretion, without notice, for any reason, including but not limited to, violation of these Terms.
                  </p>
                  <p>
                    When you contribute content to our platform, you grant us a non-exclusive, worldwide, royalty-free, irrevocable, sublicensable, and transferable license to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, perform, and display your content in any existing or future media formats and through any media channels. You also warrant that the content you contribute does not violate any third-party rights, including but not limited to intellectual property rights and privacy rights.
                  </p>
                  <p>
                    You are solely responsible for your content and the consequences of posting or publishing it. We reserve the right, but not the obligation, to monitor, edit, or remove any content at our sole discretion.
                  </p>
                </div>
              </section>
              
              <section className="pt-8 pb-8">
                <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                  <span className="h-6 w-1 bg-primary/50 rounded-full"></span>
                  10. Intellectual Property
                </h2>
                <div className="ml-3 pl-4 border-l border-border/40 mt-4">
                  <p>
                    The Website and its original content, features, and functionality are owned by Store of Value and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                  </p>
                  <p>
                    You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any material from our Website, except as follows:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 marker:text-primary">
                    <li>Your computer may temporarily store copies of such materials in RAM incidental to your accessing and viewing those materials;</li>
                    <li>You may store files that are automatically cached by your Web browser for display enhancement purposes;</li>
                    <li>You may print or download one copy of a reasonable number of pages of the Website for your own personal, non-commercial use and not for further reproduction, publication, or distribution.</li>
                  </ul>
                </div>
              </section>
              
              <section className="pt-8 pb-8">
                <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                  <span className="h-6 w-1 bg-primary/50 rounded-full"></span>
                  11. Governing Law
                </h2>
                <div className="ml-3 pl-4 border-l border-border/40 mt-4">
                  <p>
                    These Terms and your use of the Website shall be governed by and construed in accordance with the laws of Switzerland, without regard to its conflict of law principles. Any legal proceedings arising out of or relating to these Terms or your use of the Website shall be brought exclusively in the courts located in Zug, Switzerland, and you irrevocably submit to the exclusive jurisdiction of such courts.
                  </p>
                  <p>
                    If any provision of these Terms is found to be invalid or unenforceable under applicable law, such provisions shall be deleted without affecting the remaining provisions herein. Any failure by Store of Value to enforce any right or provision of these Terms will not be considered a waiver of such right or provision.
                  </p>
                </div>
              </section>
              
              <section className="pt-8 pb-8">
                <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                  <span className="h-6 w-1 bg-primary/50 rounded-full"></span>
                  12. Termination
                </h2>
                <div className="ml-3 pl-4 border-l border-border/40 mt-4">
                  <p>
                    We may terminate or suspend your access to the Website immediately, without prior notice or liability, for any reason, including but not limited to a breach of these Terms. Upon termination, your right to use the Website will immediately cease.
                  </p>
                  <p>
                    All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
                  </p>
                </div>
              </section>
              
              <section className="pt-8 pb-8">
                <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                  <span className="h-6 w-1 bg-primary/50 rounded-full"></span>
                  13. Indemnification
                </h2>
                <div className="ml-3 pl-4 border-l border-border/40 mt-4">
                  <p>
                    You agree to defend, indemnify, and hold harmless Store of Value, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of the Website, including, but not limited to, your User Contributions, any use of the Website's content, services, and products other than as expressly authorized in these Terms, or your use of any information obtained from the Website.
                  </p>
                </div>
              </section>
              
              <section className="pt-8 pb-8">
                <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                  <span className="h-6 w-1 bg-primary/50 rounded-full"></span>
                  14. Force Majeure
                </h2>
                <div className="ml-3 pl-4 border-l border-border/40 mt-4">
                  <p>
                    Store of Value shall not be liable for any failure to perform its obligations hereunder where such failure results from any cause beyond Store of Value's reasonable control, including, but not limited to, mechanical, electronic, or communications failure or degradation, acts of God, pandemic, terrorist acts, riots, or government regulation.
                  </p>
                </div>
              </section>
              
              <section className="pt-8 pb-8">
                <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                  <span className="h-6 w-1 bg-primary/50 rounded-full"></span>
                  15. Contact Information
                </h2>
                <div className="ml-3 pl-4 border-l border-border/40 mt-4">
                  <p>
                    If you have any questions about these Terms, please contact us at:
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
            
            <div className="border-t border-border/30 mt-8 pt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link to="/">Return to Home</Link>
              </Button>
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <Link to="/privacy-policy">Privacy Policy</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
};

export default TermsOfServicePage; 