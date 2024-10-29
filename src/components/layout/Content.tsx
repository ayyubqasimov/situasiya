
import { Collapse, Table } from "antd";
import GeneralFilter from "../shared/GeneralFilter";
import AllFilter from "../shared/AllFilter";
import { fetchData } from "../../features/client"; // fetchData fonksiyonunu içe aktar
import { EditOutlined, PushpinOutlined } from "@ant-design/icons";
import { Button, Image } from "antd";
import { useEffect, useState } from "react";
import { CSSProperties } from "react";
import { Pagination } from "antd";

// Define an interface for the error type
interface ErrorType {
  message: string;
}

interface ContentProps {
  type?: "all";
}

const Content = ({ type }: ContentProps) => {
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState<ErrorType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1); // Current page state
  const [totalItems, setTotalItems] = useState(0); // Total items state
  const itemsPerPage = 10;

  useEffect(() => {
    const loadData = async () => {
      try {
        const offset = (currentPage - 1) * itemsPerPage; // Calculate offset
        const result = await fetchData(itemsPerPage, offset); // Pass max and offset
        setData(result.entities);
        setTotalItems(result.total); // Set total items
      } catch (err) {
        setError(err as ErrorType);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, [currentPage]);

  if (error) {
    return <div>{error.message}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleEditClick = (recordId: string) => {
    // Yeni pencerede `Conflict` sayfasını aç
    window.open(`/conflicts/${recordId}`, "_blank"); // recordId eklenerek URL güncellendi
};

const handlePageChange = (page: number) => {
  setCurrentPage(page); // Update current page
};


// ... existing code ...

  const iconStyle: CSSProperties = {
    color: "#1890ff", // Set the icon color
  };

  const tableColumns = [
    {
      title: "Video",
      dataIndex: "initialImg", // initialImg kullanılıyor
      key: "thumbnail",
      render: (initialImg: string) => (
        <Image src={`data:image/png;base64, ${initialImg}`} width={150} /> // Base64 görüntü
      ),
    },
    {
      title: "Qeydiyyat tarixi",
      dataIndex: "recordedDate", // recordedDate kullanılıyor
      key: "registrationDate",
      render: (recordedDate: string) => (
        <span>{recordedDate}</span> // recordedDate görüntüleniyor
      ),
    },
    {
      title: "Xidmət mərkəzi",
      dataIndex: "branchName", // branchName kullanılıyor
      key: "serviceCenter",
      render: (branchName: string) => (
        <span>{branchName}</span> // branchName görüntüleniyor
      ),
    },
    {
      title: "Qeyd",
      dataIndex: "note",
      key: "note",
    },
    {
      title: "Aksiyonlar",
      key: "actions",
      render: (_: any, record: any) => (
        <div>
          <Button
            icon={<EditOutlined style={iconStyle} />} 
            style={{ marginRight: 8 }}
            onClick={() => handleEditClick(record.id)} 
          />
          <Button icon={<PushpinOutlined style={iconStyle} />} /> 
        </div>
      ),
    },
  ];

  return (
    <>
      <Collapse
        items={[
          {
            key: "1",
            label: "Filtrlər",
            children: type === "all" ? <AllFilter /> : <GeneralFilter />,
          },
        ]}
        className="w-full"
      />

      <div className="pt-4">
        <Table
          columns={tableColumns}
          dataSource={data}
          rowKey="id" // Her bir satır için benzersiz anahtar
        />
      </div>
      <Pagination
        current={currentPage} // Current page
        pageSize={itemsPerPage} // Items per page
        total={totalItems} // Total items
        onChange={handlePageChange} // Handle page change
        showSizeChanger={false} // Hide size changer if not needed
        style={{ marginTop: 16, textAlign: "center" }} // Center the pagination
      />
    </>
  );
};

export default Content;

