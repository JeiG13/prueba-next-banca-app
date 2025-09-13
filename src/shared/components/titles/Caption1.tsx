type Caption1Props = {
  title: string;
  className?: string;
}

function Caption1({ title, className = '' }: Caption1Props) {
  return (
    <div className="flex items-center">
      <h1 className={`text-sm font-medium text-[#272727] ${className}`}>
        {title}
      </h1>
    </div>
  )
}

export default Caption1;
