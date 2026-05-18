type Props = {
  className?: string;
};

export default function Logo({ className = "h-10 w-auto" }: Props) {
  return (
    <img
      src="/logo.jpg"
      alt="The LaundryBag — On-demand laundry, dry cleaning, wash dry iron in Raipur, India"
      className={`${className} select-none`}
      draggable={false}
      width={480}
      height={300}
    />
  );
}
