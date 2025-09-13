type Caption2Props = {
  title: string;
  weight?: 'bold' | 'semibold' | 'medium' | 'normal' | 'regular';
  className?: string;
}

function Caption2({ title, weight = 'regular', className = '' }: Caption2Props) {
  return (
    <div className={`w-full flex items-center ${className}`}>
      <h1 className={`text-sm font-${weight}] text-[#AFAFAF]`}>
        {title}
      </h1>
    </div>
  )
}

export default Caption2;
