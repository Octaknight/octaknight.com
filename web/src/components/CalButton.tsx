import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function CalButton() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"30min"});
      cal("ui", {"theme":"dark","cssVarsPerTheme":{"dark":{"cal-brand":"#e4bb3b"},"light":{}},"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])
  return (
    <div className="CalButton">
      <button data-cal-namespace="30min" data-cal-link="octaknight-labs/30min" data-cal-config='{"layout":"month_view","theme":"dark"}' className="px-8 py-3 cursor-pointer bg-white/5 border border-white/10 rounded-full font-satoshi text-white/80 backdrop-blur-sm hover:bg-white/10 hover:text-white transition-all duration-300">
        Request Demo
      </button>
    </div>
  );
}
