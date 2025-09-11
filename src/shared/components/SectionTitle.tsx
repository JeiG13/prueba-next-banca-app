type SectionTitleProps = {
  title: string;
}

function SectionTitle({ title }: SectionTitleProps) {
  return (
    <h1 className="text-xl font-semibold text-[#272727]">
      {title}
    </h1>
  )
}

export default SectionTitle;
