import React, { useState, useEffect, createContext, useContext } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { X } from 'lucide-react';

type CookieCategory = {
  id: string;
  name: string;
  description: string;
  required: boolean;
  checked: boolean;
};

type CookieConsentContextType = {
  openCookieSettings: () => void;
};

// Create context to allow other components to open cookie settings
export const CookieConsentContext = createContext<CookieConsentContextType>({
  openCookieSettings: () => {},
});

export const useCookieConsent = () => useContext(CookieConsentContext);

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState<CookieCategory[]>([
    {
      id: 'essential',
      name: 'Essential',
      description: 'These cookies are necessary for the website to function and cannot be switched off.',
      required: true,
      checked: true,
    },
    {
      id: 'functional',
      name: 'Functional',
      description: 'These cookies enable personalized features and functionality.',
      required: false,
      checked: false,
    },
    {
      id: 'analytics',
      name: 'Analytics',
      description: 'These cookies help us improve our website by collecting information about how you use it.',
      required: false,
      checked: false,
    },
    {
      id: 'marketing',
      name: 'Marketing',
      description: 'These cookies are used to track visitors across websites to display relevant advertisements.',
      required: false,
      checked: false,
    },
  ]);

  // Check if user has already made cookie choices
  useEffect(() => {
    try {
      const consent = localStorage.getItem('cookieConsent');
      if (!consent) {
        // Wait a bit before showing the banner
        const timer = setTimeout(() => {
          setShowBanner(true);
        }, 1000);
        return () => clearTimeout(timer);
      } else {
        // Load saved preferences
        try {
          const savedPreferences = JSON.parse(consent);
          if (savedPreferences.categories) {
            setCookiePreferences(prev => 
              prev.map(cookie => ({
                ...cookie,
                checked: cookie.required || savedPreferences.categories[cookie.id] || false
              }))
            );
          }
        } catch (error) {
          console.error("Error parsing cookie consent:", error);
          // If there's an error with the stored preferences, show the banner again
          setShowBanner(true);
        }
      }
    } catch (error) {
      // If there's an error accessing localStorage, still allow the site to function
      console.error("Error accessing localStorage:", error);
    }
  }, []);

  const handleAcceptAll = () => {
    setCookiePreferences(prev => 
      prev.map(cookie => ({ ...cookie, checked: true }))
    );
    saveCookiePreferences(true);
    setShowBanner(false);
  };

  const handleRejectNonEssential = () => {
    setCookiePreferences(prev => 
      prev.map(cookie => ({ ...cookie, checked: cookie.required }))
    );
    saveCookiePreferences(false);
    setShowBanner(false);
  };

  const handleToggleCookie = (id: string) => {
    setCookiePreferences(prev =>
      prev.map(cookie => 
        cookie.id === id ? { ...cookie, checked: !cookie.checked } : cookie
      )
    );
  };

  const handleSavePreferences = () => {
    const hasAcceptedNonEssential = cookiePreferences.some(cookie => !cookie.required && cookie.checked);
    saveCookiePreferences(hasAcceptedNonEssential);
    setShowDrawer(false);
    setShowBanner(false);
  };

  const saveCookiePreferences = (hasAcceptedNonEssential: boolean) => {
    try {
      const preferences = {
        accepted: hasAcceptedNonEssential,
        timestamp: new Date().toISOString(),
        categories: cookiePreferences.reduce((acc, curr) => {
          acc[curr.id] = curr.checked;
          return acc;
        }, {} as Record<string, boolean>),
      };
      localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    } catch (error) {
      console.error("Error saving cookie preferences:", error);
    }
  };

  const openCookieSettings = () => {
    setShowDrawer(true);
  };

  return (
    <CookieConsentContext.Provider value={{ openCookieSettings }}>
      {/* Cookie Settings Drawer */}
      <Drawer open={showDrawer} onOpenChange={setShowDrawer}>
        <DrawerContent>
          <div className="max-w-md mx-auto">
            <DrawerHeader>
              <DrawerTitle>Cookie Settings</DrawerTitle>
              <DrawerDescription>
                Choose which cookies you want to allow. You can change these settings anytime.
              </DrawerDescription>
            </DrawerHeader>
            
            <div className="px-4 space-y-6">
              {cookiePreferences.map((cookie) => (
                <div key={cookie.id} className="flex items-start space-x-4 py-3 border-b last:border-0">
                  <Checkbox 
                    id={cookie.id} 
                    checked={cookie.checked} 
                    onCheckedChange={() => !cookie.required && handleToggleCookie(cookie.id)}
                    disabled={cookie.required}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <Label 
                      htmlFor={cookie.id} 
                      className="text-base font-medium mb-1 block"
                    >
                      {cookie.name} {cookie.required && <span className="text-xs text-amber-500">(Required)</span>}
                    </Label>
                    <p className="text-muted-foreground text-sm">
                      {cookie.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <DrawerFooter>
              <Button onClick={handleSavePreferences}>Save Preferences</Button>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
      
      {/* Cookie Banner */}
      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
          <Card className="border-primary/20 shadow-lg animate-slideUp">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="text-4xl">🍪</div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold">Cookie Preferences</h3>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => setShowBanner(false)} 
                      className="h-8 w-8 rounded-full"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
                    By clicking "Accept All", you consent to our use of cookies.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button 
                      variant="outline" 
                      onClick={() => setShowDrawer(true)}
                    >
                      Customize
                    </Button>
                    
                    <Button 
                      variant="secondary" 
                      onClick={handleRejectNonEssential}
                    >
                      Essential Only
                    </Button>
                    
                    <Button 
                      onClick={handleAcceptAll} 
                      className="bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      Accept All
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </CookieConsentContext.Provider>
  );
};

export default CookieConsent; 