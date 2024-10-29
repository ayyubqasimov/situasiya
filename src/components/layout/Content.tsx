
// import { Collapse, Table, Pagination } from "antd"; // Ensure Pagination is imported
// import GeneralFilter from "../shared/GeneralFilter";
// import AllFilter from "../shared/AllFilter";
// import { fetchData } from "../../features/client"; // fetchData function import
// import { EditOutlined, PushpinOutlined } from "@ant-design/icons";
// import { Button, Image } from "antd";
// import { useEffect, useState } from "react";
// import { CSSProperties } from "react";

// // Define an interface for the error type
// interface ErrorType {
//   message: string;
// }

// interface ContentProps {
//   type?: "all";
// }

// const Content = ({ type }: ContentProps) => {
//   const [data, setData] = useState<any[]>([]);
//   const [error, setError] = useState<ErrorType | null>(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [currentPage, setCurrentPage] = useState(1); // Current page state
//   const [totalItems, setTotalItems] = useState(0); // Total items state
//   const itemsPerPage = 10; // Number of items per page

//   useEffect(() => {
//     const loadData = async () => {
//       try {
//         const offset = currentPage - 1; // Calculate offset based on current page
//         const result = await fetchData(itemsPerPage, offset); // Pass max and offset
//         setData(result.entities);
//         setTotalItems(result.total); // Changed from totalCount to total
//       } catch (err) {
//         setError(err as ErrorType);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     loadData();
//   }, [currentPage]);

//   if (error) {
//     return <div>{error.message}</div>;
//   }

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   const handleEditClick = (recordId: string) => {
//     // Open the Conflict page in a new window
//     window.open(`/conflicts/${recordId}`, "_blank"); // Update URL with recordId
//   };

//   const handlePageChange = (page: number) => {
//     setCurrentPage(page); // Update current page
//   };

//   const iconStyle: CSSProperties = {
//     color: "#1890ff", // Set the icon color
//   };

//   const tableColumns = [
//     {
//       title: "Video",
//       dataIndex: "initialImg",
//       key: "thumbnail",
//       render: (initialImg: string) => (
//         <Image src={`data:image/png;base64, ${initialImg}`} width={150} />
//       ),
//     },
//     {
//       title: "Qeydiyyat tarixi",
//       dataIndex: "recordedDate",
//       key: "registrationDate",
//       render: (recordedDate: string) => <span>{recordedDate}</span>,
//     },
//     {
//       title: "Xidmət mərkəzi",
//       dataIndex: "branchName",
//       key: "serviceCenter",
//       render: (branchName: string) => <span>{branchName}</span>,
//     },
//     {
//       title: "Qeyd",
//       dataIndex: "note",
//       key: "note",
//     },
//     {
//       title: "Aksiyonlar",
//       key: "actions",
//       render: (_: any, record: any) => (
//         <div>
//           <Button
//             icon={<EditOutlined style={iconStyle} />}
//             style={{ marginRight: 8 }}
//             onClick={() => handleEditClick(record.id)}
//           />
//           <Button icon={<PushpinOutlined style={iconStyle} />} />
//         </div>
//       ),
//     },
//   ];

//   return (
//     <>
//       <Collapse
//         items={[
//           {
//             key: "1",
//             label: "Filtrlər",
//             children: type === "all" ? <AllFilter /> : <GeneralFilter />,
//           },
//         ]}
//         className="w-full"
//       />

//       <div className="pt-4">
//         <Table
//           columns={tableColumns}
//           dataSource={data}
//           rowKey="id" // Unique key for each row
//         />
//       </div>
//       <Pagination
//         current={currentPage} // Current page
//         pageSize={itemsPerPage} // Items per page
//         total={totalItems} // Total items
//         onChange={handlePageChange} // Handle page change
//         showSizeChanger={false} // Hide size changer if not needed
//         style={{ marginTop: 16, textAlign: "center" }} // Center the pagination
//       />
//     </>
//   );
// };

// export default Content;



















import { Collapse, Table, Pagination } from "antd"; // Ensure Pagination is imported
import GeneralFilter from "../shared/GeneralFilter";
import AllFilter from "../shared/AllFilter";
import { fetchData } from "../../features/client"; // fetchData function import
import { EditOutlined, PushpinOutlined } from "@ant-design/icons";
import { Button, Image } from "antd";
import { useEffect, useState } from "react";
import { CSSProperties } from "react";

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
  const itemsPerPage = 10; // Number of items per page

  useEffect(() => {
    const loadData = async () => {
      try {
        const offset = currentPage - 1; // Calculate offset based on current page
        const result = await fetchData(itemsPerPage, offset); // Pass max and offset
        setData(result.entities);
        setTotalItems(result.totalCount); // Changed from totalCount to total
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
    // Open the Conflict page in a new window
    window.open(`/conflicts/${recordId}`, "_blank"); // Update URL with recordId
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page); // Update current page
  };

  const iconStyle: CSSProperties = {
    color: "#1890ff", // Set the icon color
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
          rowKey="id" // Unique key for each row
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
