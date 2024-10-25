import { Input, Select, DatePicker } from "antd";
import { useEffect, useState } from "react";
import { CheckCircleOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;

const AllFilter = () => {
  const [statusOptions, setStatusOptions] = useState<any[]>([]);
  const [actionOptions, setActionOptions] = useState<any[]>([]);
  const [priorityOptions, setPriorityOptions] = useState<any[]>([]);
  const [workSectionsOptions, setWorkSectionsOptions] = useState<any[]>([]);
  const [criterionsOptions, setCriterionsOptions] = useState<any[]>([]);

  useEffect(() => {
    const fetchCriterionsOptions = async () => {
      try {
        const response = await fetch("http://wsnq.prod/situationalcenter-1/criterions/root");
        const result = await response.json();
        if (result.data) {
          setCriterionsOptions(result.data); 
        }
      } catch (error) {
        console.error("Error fetching criterions options:", error);
      }
    };

    const fetchStatusOptions = async () => {
      try {
        const response = await fetch("http://wsnq.prod/situationalcenter-1/operationStatuses/get");
        const result = await response.json();
        if (result.data) {
          setStatusOptions(result.data); 
        }
      } catch (error) {
        console.error("Error fetching status options:", error);
      }
    };

    const fetchPriorityOptions = async () => {
      try {
        const response = await fetch("http://wsnq.prod/situationalcenter-1/priority/all");
        const result = await response.json();
        if (result.data) {
          setPriorityOptions(result.data); 
        }
      } catch (error) {
        console.error("Error fetching priority options:", error);
      }
    };

    const fetchActionOptions = async () => {
      try {
        const response = await fetch("http://wsnq.prod/situationalcenter-1/takenActions/all");
        const result = await response.json();
        if (result.data) {
          setActionOptions(result.data); 
        }
      } catch (error) {
        console.error("Error fetching action options:", error);
      }
    };

    const fetchWorkSectionsOptions = async () => {
      try {
        const response = await fetch("http://wsnq.prod/situationalcenter-1/common/employeeWorkSections");
        const result = await response.json();
        if (result.data) {
          setWorkSectionsOptions(result.data); 
        }
      } catch (error) {
        console.error("Error fetching work sections options:", error);
      }
    };

    fetchCriterionsOptions();
    fetchStatusOptions();
    fetchPriorityOptions();
    fetchActionOptions();
    fetchWorkSectionsOptions();
  }, []); 

  const renderOptions = (options: any[]) => {
    return options.map(option => (
      <Select.OptGroup
        key={option.id}
        label={
          <span className="flex items-center">
            <CheckCircleOutlined className="mr-2 text-green-500" /> 
            <span className="font-bold text-sm">{option.name}</span> 
          </span>
        }
      >
        {option.childs && option.childs.length > 0 && (
          option.childs.map((child: { id: string; name: string }) => (
            <Select.Option key={child.id} value={child.id} className="text-gray-600">
              {child.name} 
            </Select.Option>
          ))
        )}
      </Select.OptGroup>
    ));
  };

  return (
    <div className="flex flex-wrap items-center gap-4">
      <Select
        placeholder="Kriteriya seçin"
        className="flex-1 min-w-[17vw]"
        allowClear
        dropdownClassName="max-h-96 overflow-y-auto" // Daha yüksek bir maksimum yükseklik ve scroll eklendi
      >
        {renderOptions(criterionsOptions)} 
      </Select>
      <Select placeholder="Görülmüş işi seçin" className="flex-1 min-w-[17vw]" allowClear>
        {actionOptions.map(option => (
          <Select.Option key={option.id} value={option.id}>
            <span className="flex items-center">
              {option.name} {/* İkon kaldırıldı */}
            </span>
          </Select.Option>
        ))}
      </Select>
      <Select placeholder="Əməkdaşın adını seçin" className="flex-1 min-w-[17vw]" allowClear showSearch />
      <Select placeholder="Tip seçin" className="flex-1 min-w-[17vw]" allowClear />

      <Select placeholder="Status seçin" className="flex-1 min-w-[17vw]" allowClear>
        {statusOptions.map(option => (
          <Select.Option key={option.id} value={option.label}>
            <span className="flex items-center">
              {option.name} {/* İkon kaldırıldı */}
            </span>
          </Select.Option>
        ))}
      </Select>

      <Select placeholder="Mərkəz seçin" className="flex-1 min-w-[17vw]" allowClear />
      <Select placeholder="Prioritet seçin" className="flex-1 min-w-[17vw]" allowClear>
        {priorityOptions.map(option => (
          <Select.Option key={option.id} value={option.label}>
            <span className="flex items-center">
              {option.name} {/* İkon kaldırıldı */}
            </span>
          </Select.Option>
        ))}
      </Select>
      <Select placeholder="Orqan seçin" className="flex-1 min-w-[17vw]" allowClear>
        {workSectionsOptions.map(option => (
          <Select.Option key={option.id} value={option.label}>
            <span className="flex items-center">
              {option.name} {/* İkon kaldırıldı */}
            </span>
          </Select.Option>
        ))}
      </Select>
      <RangePicker placeholder={["Başlama tarixi", "Bitmə tarixi"]} className="flex-1 min-w-[17vw]" allowClear />
      <Select placeholder="Kurator rəyi" className="flex-1 min-w-[17vw]" allowClear />
      <Select placeholder="Gözəgörünməzlər" className="flex-1 min-w-[17vw]" allowClear />
      <Input placeholder="Video nömrəsini daxil edin" className="flex-1 min-w-[17vw]" allowClear />
    </div>
  );
};

export default AllFilter;