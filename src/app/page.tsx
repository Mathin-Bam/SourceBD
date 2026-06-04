import { Hero } from '@/components/home/hero';
import { StatsBar } from '@/components/home/stats-bar';
import { CategoriesGrid } from '@/components/home/categories-grid';
import { TopSourced } from '@/components/home/top-sourced';
import { FeaturedSuppliers } from '@/components/home/featured-suppliers';
import { CtaSection } from '@/components/home/cta-section';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <StatsBar />
      <CategoriesGrid />
      <TopSourced />
      <FeaturedSuppliers />
      <CtaSection />
    </div>
  );
}