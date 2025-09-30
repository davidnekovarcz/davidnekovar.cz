'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import './cookies.css';

const messages = [
  "Cookie Time!",
  "Robot Found Cookies!",
  "Munching Away...",
  "All Done!",
  "Redirecting to homepage..."
];

export default function CookiesPage() {
  const router = useRouter();
  const [messageIndex, setMessageIndex] = useState(0);
  const [cookieBites, setCookieBites] = useState(0);
  const [showCrumbs, setShowCrumbs] = useState(false);

  useEffect(() => {
    // Track page visit
    if (typeof window !== 'undefined' && window.trackEvent) {
      window.trackEvent('cookies_page_visit', {
        game_id: 'davidnekovar',
        game_name: 'David Nekovar Portfolio',
        event_category: 'page_interaction'
      });
    }

    const messageInterval = setInterval(() => {
      setMessageIndex(prev => {
        if (prev < messages.length - 1) return prev + 1;
        return prev;
      });
    }, 2000); // Change message every 2 seconds

    const biteInterval = setInterval(() => {
      setCookieBites(prev => (prev < 3 ? prev + 1 : prev));
    }, 1000); // Cookie gets a bite every second for 3 seconds

    const crumbsTimeout = setTimeout(() => {
      setShowCrumbs(true);
    }, 5000); // Show crumbs after 5 seconds

    const redirectTimeout = setTimeout(() => {
      router.push('/');
    }, 10000); // Redirect after 10 seconds

    return () => {
      clearInterval(messageInterval);
      clearInterval(biteInterval);
      clearTimeout(crumbsTimeout);
      clearTimeout(redirectTimeout);
    };
  }, [router]);

  return (
    <div className="cookies-page-container">
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>
      <div className="robot-container">
        <div className="robot">
          <div className="head">
            <div className="eye left"></div>
            <div className="eye right"></div>
            <div className="mouth"></div>
          </div>
          <div className="body"></div>
          <div className="arm left"></div>
          <div className="arm right"></div>
          <div className="leg left"></div>
          <div className="leg right"></div>
        </div>
        <div className="cookie-container">
          <div className={`cookie bite-${cookieBites}`}>
            <div className="chip chip-1"></div>
            <div className="chip chip-2"></div>
            <div className="chip chip-3"></div>
            <div className="chip chip-4"></div>
            <div className="chip chip-5"></div>
          </div>
          {showCrumbs && (
            <>
              <div className="crumb crumb-1"></div>
              <div className="crumb crumb-2"></div>
              <div className="crumb crumb-3"></div>
              <div className="crumb crumb-4"></div>
            </>
          )}
        </div>
      </div>
      <div className="message-box">
        <p>{messages[messageIndex]}</p>
      </div>
    </div>
  );
}
