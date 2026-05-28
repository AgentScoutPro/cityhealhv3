import SiteHeaderDesert from '@/components/redesign/SiteHeaderDesert';
import DesertOrchestrator from '@/components/redesign/DesertOrchestrator';

export const metadata = {
  title: 'City Health AZ | Pain Management & Physical Medicine — Mesa, AZ',
  description:
    'Expert pain management, neuropathy treatment, physical medicine, and anti-aging therapies in Mesa, AZ. Serving Chandler, Gilbert, Scottsdale, and the greater Phoenix metro area.',
  robots: { index: true, follow: true },
};

export default function HomePage() {
  return (
    <>
      <SiteHeaderDesert />
      <DesertOrchestrator />
    </>
  );
}
