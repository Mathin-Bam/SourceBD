'use client';

import { cn } from '@/lib/utils';

interface LoadingSkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular' | 'card';
}

export function LoadingSkeleton({
  className,
  variant = 'rectangular',
}: LoadingSkeletonProps) {
  const baseClass = 'animate-shimmer';

  switch (variant) {
    case 'text':
      return (
        <div className={cn('space-y-2', className)}>
          <div className={cn(baseClass, 'h-4 w-3/4 rounded')} />
          <div className={cn(baseClass, 'h-4 w-1/2 rounded')} />
        </div>
      );
    case 'circular':
      return <div className={cn(baseClass, 'h-12 w-12 rounded-full', className)} />;
    case 'card':
      return (
        <div className={cn('space-y-4 p-4', className)}>
          <div className={cn(baseClass, 'h-40 w-full rounded-lg')} />
          <div className={cn(baseClass, 'h-6 w-2/3 rounded')} />
          <div className={cn(baseClass, 'h-4 w-1/2 rounded')} />
          <div className="flex gap-2">
            <div className={cn(baseClass, 'h-6 w-16 rounded-full')} />
            <div className={cn(baseClass, 'h-6 w-16 rounded-full')} />
          </div>
        </div>
      );
    default:
      return <div className={cn(baseClass, 'h-full w-full rounded', className)} />;
  }
}

export function CardSkeleton() {
  return (
    <div className="bg-card rounded-lg border border-border p-4">
      <LoadingSkeleton variant="card" />
    </div>
  );
}

export function GridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  );
}