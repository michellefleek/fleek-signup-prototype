import svgPaths from "./svg-cyyd9yarq1";

function Loading() {
  return (
    <div className="h-[13.714px] relative shrink-0 w-[17.143px]" data-name="Loading">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%+0.08px)] overflow-clip p-[0.857px] size-[17.143px] top-[calc(50%+0.06px)]" data-name="Spinner">
        <div className="h-[15.558px] relative shrink-0 w-[15.586px]" data-name="Ellipse (Stroke)">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5861 15.5578">
            <path clipRule="evenodd" d={svgPaths.p1b6d6fc0} fill="var(--fill-0, black)" fillRule="evenodd" id="Ellipse (Stroke)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function TextButton() {
  return (
    <div className="bg-[#f8c642] content-stretch flex flex-col items-center justify-center overflow-clip px-[24px] relative rounded-[4px] size-full" data-name="Text Button">
      <Loading />
    </div>
  );
}