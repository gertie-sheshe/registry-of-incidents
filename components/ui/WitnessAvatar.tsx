type WitnessAvatarProps = {
  name: string;
  size?: number;
};

function getInitials(name: string): string {
  const parts = name
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  if (parts.length === 0) {
    return "";
  }

  if (parts.length === 1) {
    return parts[0].slice(0, 2).toUpperCase();
  }

  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}

export function WitnessAvatar({ name, size = 40 }: WitnessAvatarProps): JSX.Element {
  return (
    <div
      className="bg-[#DDD8CF] text-charcoal font-sans font-semibold rounded-full flex items-center justify-center flex-shrink-0 tracking-[0.03em]"
      style={{ width: size, height: size, fontSize: size * 0.35 }}
      aria-label={name}
    >
      {getInitials(name)}
    </div>
  );
}

export default WitnessAvatar;
