type Caption1Props = {
  title: string;
}

function Caption1({ title }: Caption1Props) {
  return (
    <div className="w-full flex justify-between items-center">
      <h1 className="text-sm font-medium text-[#272727]">
        {title}
      </h1>
    </div>
  )
}

export default Caption1;
