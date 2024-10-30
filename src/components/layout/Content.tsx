
import { Button, Collapse, Image, Table, Tooltip } from "antd";
import { EditOutlined, PushpinOutlined, FileSyncOutlined } from "@ant-design/icons";
import GeneralFilter from "../shared/GeneralFilter";
import AllFilter from "../shared/AllFilter";
import { fetchData } from "../../features/client";
import { useEffect, useState, CSSProperties } from "react";

// Define an interface for the error type
interface ErrorType {
  message: string;
}

interface ContentProps {
  type?: "all" | "reviewables" | "other"; // Add "reviewables" to identify the "Baxılacaq olanlar" menu
}

const Content = ({ type }: ContentProps) => {
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState<ErrorType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const itemsPerPage = 10;

  useEffect(() => {
    const loadData = async () => {
      try {
        const offset = currentPage - 1;
        const result = await fetchData(itemsPerPage, offset);
        setData(result.entities);
        setTotalItems(result.totalCount);
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
    window.open(`/conflicts/${recordId}`, "_blank");
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const iconStyle: CSSProperties = {
    color: "#1890ff",
  };

  const tableColumns = [
    {
      title: "Video",
      dataIndex: "initialImg",
      key: "thumbnail",
      render: (initialImg: string) => (
        <Image src={`data:image/png;base64, ${initialImg}`} width={150} />
      ),
    },
    {
      title: "Qeydiyyat tarixi",
      dataIndex: "recordedDate",
      key: "registrationDate",
      render: (recordedDate: string) => <span>{recordedDate}</span>,
    },
    {
      title: "Xidmət mərkəzi",
      dataIndex: "branchName",
      key: "serviceCenter",
      render: (branchName: string) => <span>{branchName}</span>,
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
        <div style={{ display: 'flex', flexDirection: 'column' }}> 
          <Tooltip title="Redaktə et">
            <Button
              icon={<EditOutlined style={iconStyle} />}
              style={{ marginBottom: 8 }}
              onClick={() => handleEditClick(record.id)}
            />
          </Tooltip>
          <Tooltip title="Sabitlə">
            <Button icon={<PushpinOutlined style={iconStyle} />} style={{ marginBottom: 8 }} />
          </Tooltip>
          {type === "reviewables" && (
            <Tooltip title="Arxivə göndər">
              <Button icon={<FileSyncOutlined style={iconStyle} />} />
            </Tooltip>
          )}
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
          rowKey="id"
          pagination={{
            current: currentPage,
            pageSize: itemsPerPage,
            total: totalItems,
            onChange: handlePageChange,
            showSizeChanger: false,
          }}
        />
      </div>
    </>
  );
};

export default Content;
