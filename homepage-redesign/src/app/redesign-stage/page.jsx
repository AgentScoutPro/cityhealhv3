import SiteHeaderDesert from '@/components/redesign/SiteHeaderDesert';
import DesertOrchestrator from '@/components/redesign/DesertOrchestrator';

export const metadata = {
  title: 'Homepage Redesign v3 — Desert Southwest | City Health AZ',
  description: 'Internal staging environment. Not for public distribution.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function RedesignStagePage() {
  return (
    <>
      <SiteHeaderDesert staging />
      <DesertOrchestrator />
    </>
  );
}
