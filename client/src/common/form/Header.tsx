export default function Header({
  title,
  toggleHeader,
}: {
  title: string;
  toggleHeader: Function;
}) {
  return (
    <div
      className="bg-yellow text-white font-light rounded-xl p-4 cursor-pointer"
      onClick={() => toggleHeader()}
    >
      <span>{title}</span>
    </div>
  );
}
