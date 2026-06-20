export default function Loading() {
  return (
    <div className="fixed inset-0 bg-background z-[100] flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        <div className="w-12 h-12 border-4 border-secondary border-t-transparent rounded-full animate-spin" />
        <p className="font-label-tech text-label-tech text-on-surface-variant uppercase tracking-widest">
          Loading
        </p>
      </div>
    </div>
  );
}
