'use client';

import { useEffect } from 'react';

export function HydrationGuard({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Remove existing bad attributes
    const clean = () => {
      document.querySelectorAll('[bis_skin_checked], [bis_register]').forEach(el => {
        el.removeAttribute('bis_skin_checked');
        el.removeAttribute('bis_register');
      });
    };

    clean(); // Run immediately

    // Watch for future additions (some extensions re-inject)
    const observer = new MutationObserver((mutations) => {
      mutations.forEach(() => clean());
    });

    observer.observe(document.body, {
      attributes: true,
      subtree: true,
      attributeFilter: ['bis_skin_checked', 'bis_register'],
    });

    return () => observer.disconnect();
  }, []);

  return <>{children}</>;
}