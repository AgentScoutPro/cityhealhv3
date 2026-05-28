'use client';

/**
 * StagingShell — header + noindex guard only.
 *
 * The orchestrator owns <main> and paddingTop, so this shell
 * renders only SiteHeader above children (no wrapping <main>).
 *
 * Migration checklist:
 *  1. Remove this shell
 *  2. Move SiteHeader into app/layout.jsx
 *  3. Remove noindex from redesign-stage/page.jsx metadata
 *  4. Rename app/page.jsx to point at RedesignOrchestrator directly
 */

import { useEffect } from 'react';
import SiteHeader from './SiteHeader';

export default function StagingShell({ children }) {
  useEffect(() => {
    const existing = document.querySelector('meta[name="robots"]');
    if (existing) existing.setAttribute('content', 'noindex, nofollow');
  }, []);

  return (
    <>
      <meta name="robots" content="noindex, nofollow" />
      <SiteHeader staging />
      {children}
    </>
  );
}
