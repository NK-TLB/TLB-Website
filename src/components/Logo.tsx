type Props = {
  className?: string;
};

export default function Logo({ className = "h-10 w-auto" }: Props) {
  return (
    <img
      src="/logo.png"
      alt="The Laundry Bag™ — India's Leading Laundry Service Provider"
      className={`${className} select-none`}
      draggable={false}
      width={1280}
      height={613}
    />
  );
}
