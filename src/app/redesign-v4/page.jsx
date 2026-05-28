import SiteHeaderPrecision from '@/components/redesign/SiteHeaderPrecision';
import PrecisionOrchestrator from '@/components/redesign/PrecisionOrchestrator';

export const metadata = {
  title: 'Homepage Redesign v4 — Precision MedTech | City Health AZ',
  description: 'Internal staging environment. Not for public distribution.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function RedesignV4Page() {
  return (
    <>
      <SiteHeaderPrecision staging />
      <PrecisionOrchestrator />
    </>
  );
}
