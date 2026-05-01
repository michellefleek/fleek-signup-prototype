import svgPaths from "../../imports/SigninWithEmail5/svg-y7tkg23vjj";

function Notch() {
  return (
    <div className="-translate-x-1/2 absolute h-[32px] left-1/2 top-0 w-[172px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 172 32">
        <path d={svgPaths.p29d69840} fill="black" />
      </svg>
    </div>
  );
}

function LeftSide() {
  return (
    <div className="-translate-x-1/2 absolute contents left-[calc(16.67%-11px)] top-[14px]">
      <div className="-translate-x-1/2 absolute h-[21px] left-[calc(16.67%-10.5px)] rounded-xl top-[14px] w-[54px]">
        <p className="-translate-x-1/2 absolute font-sans font-semibold h-[20px] leading-[21px] left-[27px] not-italic text-body text-black text-center top-px tracking-[-0.32px] w-[54px]">9:41</p>
      </div>
    </div>
  );
}

function RightSide() {
  return (
    <div className="-translate-x-1/2 absolute contents left-[calc(83.33%-0.3px)] top-[19px]">
      <div className="-translate-x-1/2 absolute h-[13px] left-[calc(83.33%+25.2px)] top-[19px] w-[27.401px]">
        <div className="-translate-y-1/2 absolute h-[13px] left-0 right-[2.4px] top-1/2">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 13">
            <path d={svgPaths.p3f827980} opacity="0.35" stroke="black" />
          </svg>
        </div>
        <div className="-translate-y-1/2 absolute h-[4.22px] right-0 top-[calc(50%+0.61px)] w-[1.401px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.40119 4.22034">
            <path d={svgPaths.p237cb000} fill="black" opacity="0.4" />
          </svg>
        </div>
        <div className="-translate-y-1/2 absolute h-[9px] left-[2px] right-[4.4px] top-1/2">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 9">
            <path d={svgPaths.pa544c00} fill="black" />
          </svg>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute h-[11.834px] left-[calc(83.33%-4px)] top-[20px] w-[17px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 11.8339">
          <path d={svgPaths.p370a1200} fill="black" />
        </svg>
      </div>
      <div className="-translate-x-1/2 absolute h-[12px] left-[calc(83.33%-29.5px)] top-[20px] w-[18px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 12">
          <path d={svgPaths.p1ec31400} fill="black" />
          <path d={svgPaths.p19f8d480} fill="black" />
          <path d={svgPaths.p13f4aa00} fill="black" />
          <path d={svgPaths.p1bfb7500} fill="black" />
        </svg>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className="absolute h-[35.14px] left-[177.5px] top-[50px] w-[38px]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[35.093px] left-1/2 top-[calc(50%-0.02px)] w-[38px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 35.0938">
          <path d={svgPaths.p5aa6500} fill="#F8C642" />
          <path d={svgPaths.p3a3fffc0} fill="#F8C642" />
          <path d={svgPaths.p2dbbf4c0} fill="#F8C642" />
          <path d={svgPaths.p3ff7f500} fill="#F8C642" />
          <path d={svgPaths.p4c9570} fill="#F8C642" />
          <path d={svgPaths.p11d25b00} fill="#F8C642" />
          <path d={svgPaths.p360667c0} fill="#F8C642" />
          <path d={svgPaths.pfe03a00} fill="#F8C642" />
          <path d={svgPaths.p2fdfd200} fill="#F8C642" />
          <path d={svgPaths.p2b73c600} fill="#F8C642" />
          <path d={svgPaths.p2d7742c0} fill="#F8C642" />
        </svg>
      </div>
    </div>
  );
}

function BackButton({ onClick }: { onClick?: () => void }) {
  return (
    <div className="absolute content-stretch flex gap-xs items-center left-0 top-[44px] w-[393px]">
      <div className="flex-[1_0_0] h-[44px] min-w-px relative rounded-xs">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-sm relative size-full">
            <div className="bg-white content-stretch flex items-center justify-center p-xxs relative rounded-full shrink-0 size-[32px] cursor-pointer" onClick={onClick}>
              <div aria-hidden="true" className="absolute border border-grey-400 border-solid inset-0 pointer-events-none rounded-full" />
              <div className="relative shrink-0 size-[18px]">
                <div className="absolute inset-[16.67%]">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                    <path d={svgPaths.p83cd500} fill="#323232" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AppHeader({ onBack, visible }: { onBack?: () => void; visible: boolean }) {
  return (
    <div
      className="absolute top-0 left-0 right-0 z-50 bg-grey-100 transition-opacity duration-300"
      style={{ opacity: visible ? 1 : 0, pointerEvents: visible ? "auto" : "none" }}
    >
      <BackButton onClick={onBack} />
      <Logo />
      <div className="h-[100px]" />
    </div>
  );
}
