import ComponentDemo from "../ComponentsDemo";

const TooltipPage = () => {
  const usageCode = `const TooltipPreview = () => (
  <div className="relative group inline-block">
    <button className="px-4 py-2 rounded-md bg-black text-white">
      Hover me
    </button>

    <span
      className="
        pointer-events-none absolute left-1/2 -translate-x-1/2 -top-11
        whitespace-nowrap rounded-md bg-gray-900 px-3 py-1.5 text-xs text-white
        opacity-0 group-hover:opacity-100 transition-opacity
      "
    >
      This is a tooltip
    </span>
  </div>
);`;

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Tooltip</h1>
        <p className="text-xl text-gray-600">
          Tooltip is a small message that appears when users hover over an
          element.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <ComponentDemo code={usageCode}>
          <div className="relative group inline-block">
            <button className="px-4 py-2 rounded-md bg-black text-white">
              Hover me
            </button>

            <span
              className="
                pointer-events-none absolute left-1/2 -translate-x-1/2 -top-11
                whitespace-nowrap rounded-md bg-gray-900 px-3 py-1.5 text-xs text-white
                opacity-0 group-hover:opacity-100 transition-opacity
              "
            >
              This is a tooltip
            </span>
          </div>
        </ComponentDemo>
      </section>
    </div>
  );
};

export default TooltipPage;
