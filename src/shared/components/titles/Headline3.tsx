type Headline3Props = {
  title: string;
  weight?: 'bold' | 'semibold' | 'medium';
}

function Headline3({ title, weight  = 'semibold'}: Headline3Props) {
  return (
    <div className="w-full flex justify-between items-center">
      <h1 className={`text-base font-${weight} text-[#272727]`}>
        {title}
      </h1>
    </div>
  )
}

export default Headline3;
