import { Input, Select } from "antd";
import { DatePicker } from "antd";

const { RangePicker } = DatePicker;
const GeneralFilter = () => {
  return (
    <div className="flex items-center gap-4">
      <Select placeholder="Mərkəz seçin" className="flex-1" allowClear />

      <Input placeholder="Video nömrəsi" className="flex-1" allowClear />

      <RangePicker placeholder={["Başlama tarixi", "Bitmə tarixi"]} className="flex-1" allowClear />
    </div>
  );
};

export default GeneralFilter;
