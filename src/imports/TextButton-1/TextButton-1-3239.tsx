function Base() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Base">
      <div className="flex flex-col font-['Montserrat',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#98a2b3] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[1.5]">Button</p>
      </div>
    </div>
  );
}

export default function TextButton() {
  return (
    <div className="bg-[#d0d5dd] content-stretch flex flex-col items-center justify-center overflow-clip px-[24px] relative rounded-[4px] size-full" data-name="Text Button">
      <Base />
    </div>
  );
}