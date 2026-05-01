import svgPaths from "./svg-9h97jemgri";
type RadioIconProps = {
  className?: string;
  checked?: boolean;
  size?: "Small" | "Medium" | "Large";
  state?: boolean;
};

function RadioIcon({ className, checked = false, size = "Medium", state = true }: RadioIconProps) {
  return (
    <div className={className || "content-stretch flex items-center overflow-clip relative"}>
      <div className={`overflow-clip relative shrink-0 ${size === "Large" ? "size-[28px]" : size === "Small" ? "size-[20px]" : "size-[24px]"}`} data-name="Radio">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={checked ? svgPaths.pa419700 : svgPaths.p3a58b490} fill="var(--fill-0, black)" fillOpacity={!state || (size === "Small" && state) || (size === "Large" && state) ? "0.54" : undefined} id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function RadioEndActiveMedium({ className }: { className?: string }) {
  return (
    <div className={className || "content-stretch flex gap-[8px] h-[44px] items-center relative"} data-name="Radio/End/Active/Medium">
      <RadioIcon checked className="content-stretch flex h-[24px] items-center overflow-clip relative shrink-0" />
      <p className="font-['Montserrat',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.87)] w-[45px]">Label</p>
    </div>
  );
}