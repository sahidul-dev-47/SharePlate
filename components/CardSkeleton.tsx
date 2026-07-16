export default function CardSkeleton() {
  return (
    <div className="card-surface flex h-full flex-col overflow-hidden">
      <div className="skeleton aspect-[4/3] w-full" />
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="skeleton h-4 w-4/5 rounded" />
        <div className="skeleton h-3 w-full rounded" />
        <div className="skeleton h-3 w-2/3 rounded" />
        <div className="mt-auto flex items-center justify-between border-t border-paper-100 pt-3">
          <div className="skeleton h-4 w-12 rounded" />
          <div className="skeleton h-8 w-24 rounded-full" />
        </div>
      </div>
    </div>
  );
}
