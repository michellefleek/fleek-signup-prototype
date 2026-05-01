import svgPaths from "./svg-pktkw4nww8";

export default function Radio() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative size-full" data-name="Radio">
      <div className="content-stretch flex h-[24px] items-center overflow-clip relative shrink-0" data-name="Radio Icon">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Radio">
          <div className="absolute inset-[8.33%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d={svgPaths.p3a58b490} fill="var(--fill-0, black)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <p className="font-['Montserrat',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.87)] w-[45px]">Label</p>
    </div>
  );
}