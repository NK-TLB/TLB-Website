type Props = {
  className?: string;
};

export default function Logo({ className = "h-10 w-auto" }: Props) {
  return (
    <img
      src="/images/logo.png"
      alt="The Laundry Bag — Commercial and Residential Laundry and Dry Cleaning"
      className={`${className} select-none border border-white`}
      draggable={false}
      width={480}
      height={300}
    />
  );
}
