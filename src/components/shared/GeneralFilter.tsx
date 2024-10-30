import { Input, Select } from "antd";
import { DatePicker } from "antd";
import { useEffect, useState } from "react"; // Import useState and useEffect

const { RangePicker } = DatePicker;

const GeneralFilter = () => {
  const [branchOptions, setBranchOptions] = useState<any[]>([]); // New state for branch options

  useEffect(() => {
    const fetchBranchOptions = async () => { // New function to fetch branch options
      try {
        const response = await fetch("http://wsnq.prod/situationalcenter-1/common/branchList");
        const result = await response.json();
        if (result.data) {
          setBranchOptions(result.data.entities); // Set branch options from API response
        }
      } catch (error) {
        console.error("Error fetching branch options:", error);
      }
    };

    fetchBranchOptions(); // Call the fetch function
  }, []); 

  return (
    <div className="flex items-center gap-4">
      <Select placeholder="Mərkəz seçin" className="flex-1" allowClear>
        {branchOptions.map(option => ( // Use branchOptions for the select
          <Select.Option key={option.id} value={option.id}>
            {option.name} {/* Display branch name */}
          </Select.Option>
        ))}
      </Select>

      <Input placeholder="Video nömrəsi" className="flex-1" allowClear />

      <RangePicker placeholder={["Başlama tarixi", "Bitmə tarixi"]} className="flex-1" allowClear />
    </div>
  );
};

export default GeneralFilter;