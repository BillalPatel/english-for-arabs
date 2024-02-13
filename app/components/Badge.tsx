interface BadgeProps {
  text: string;
}

export default function Badge(props: BadgeProps) {
  const { text } = props;

  return (
    <div className="badge | text-sm bg-green rounded-3xl py-1 w-24 text-white font-bold">
      {text}
    </div>
  );
}
