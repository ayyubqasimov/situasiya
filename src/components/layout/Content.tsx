import { Collapse, Table } from "antd";
import GeneralFilter from "../shared/GeneralFilter";
import AllFilter from "../shared/AllFilter";
import { fetchData } from "../../features/client"; // fetchData fonksiyonunu içe aktar
import { EditOutlined, PushpinOutlined } from "@ant-design/icons";
import { Button, Image } from "antd";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await fetchData();
        setData(result);
      } catch (err) {
        setError(err as ErrorType);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  if (error) {
    return <div>{error.message}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleEditClick = (recordId: string) => {
    // Yeni pencerede `Conflict` sayfasını aç
    window.open(`/conflict`, "_blank");
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
            icon={<EditOutlined />}
            style={{ marginRight: 8 }}
            onClick={() => handleEditClick(record.id)} // Edit tıklandığında yeni pencere açılır
          />
          <Button icon={<PushpinOutlined />} />
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
    </>
  );
};

export default Content;
