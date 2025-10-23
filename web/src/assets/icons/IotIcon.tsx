export default function IotIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="5" y="5" width="14" height="14" rx="2" ry="2" />
      <line x1="9" y1="3" x2="9" y2="5" />
      <line x1="15" y1="3" x2="15" y2="5" />
      <line x1="9" y1="19" x2="9" y2="21" />
      <line x1="15" y1="19" x2="15" y2="21" />
      <line x1="3" y1="9" x2="5" y2="9" />
      <line x1="3" y1="15" x2="5" y2="15" />
      <line x1="19" y1="9" x2="21" y2="9" />
      <line x1="19" y1="15" x2="21" y2="15" />
    </svg>
  );
}