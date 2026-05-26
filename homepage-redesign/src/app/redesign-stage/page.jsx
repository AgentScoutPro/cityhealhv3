import StagingShell from '@/components/redesign/StagingShell';
import RedesignOrchestrator from '@/components/redesign/RedesignOrchestrator';

export const metadata = {
  title: 'Homepage Redesign — Staging | City Health AZ',
  description: 'Internal staging environment. Not for public distribution.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function RedesignStagePage() {
  return (
    <StagingShell>
      <RedesignOrchestrator />
    </StagingShell>
  );
}
