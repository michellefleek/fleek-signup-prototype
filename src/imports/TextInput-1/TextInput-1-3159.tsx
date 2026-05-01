function Field() {
  return (
    <div className="bg-white h-[44px] relative rounded-[4px] shrink-0 w-full" data-name="Field">
      <div aria-hidden="true" className="absolute border border-[#12b76a] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center p-[12px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Montserrat',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[14px] text-black">
            <p className="leading-[1.4]">Value</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[12px] px-[4px] top-[-9px]" data-name="Label">
      <div className="flex flex-col font-['Montserrat',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#12b76a] text-[12px] whitespace-nowrap">
        <p className="leading-[1.5]">Label</p>
      </div>
    </div>
  );
}

export default function TextInput() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Text Input">
      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Input Field">
        <Field />
        <Label />
      </div>
    </div>
  );
}