type TagsProps = {
  items: string[];
};

export default function Tags({ items }: TagsProps) {
  return (
    <ul className="flex flex-wrap gap-3">
      {items.map((tag, index) => (
        <li
          key={index}
          className="
            border border-purplePaths-100
            text-black font-semibold uppercase
            px-6 py-3 rounded-full
            text-sm md:text-base
            whitespace-nowrap
          "
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}