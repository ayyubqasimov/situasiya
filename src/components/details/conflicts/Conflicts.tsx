
// import './conflicts.css';
// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { fetchConflictDetails } from "../../features/client";

// const Conflicts = () => {
//   const { id } = useParams<{ id: string }>();
//   const [conflictData, setConflictData] = useState<any>(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const loadConflictData = async () => {
//       try {
//         const result = await fetchConflictDetails(id!);
//         setConflictData(result);
//       } catch (err) {
//         setError("Error fetching conflict details");
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     loadConflictData();
//   }, [id]);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div className="conflict-page" style={{ display: 'flex' }}>
//       <div className='left ant-col-16'>
//         {/* Video Player */}
//         <div className="video-container">
//           <video
//             id="video"
//             width="100%"
//             height="100%"
//             controls
//             controlsList="nodownload"
//             className="video"
//           >
//             <source src="path/to/video.mp4" type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         </div>

//         {/* Information Section */}
//         {conflictData && (
//           <div className="info-section">
//             <h2>{conflictData.authorName}</h2>
//             <p>{conflictData.viewCount} baxış | № {conflictData.number}</p>
//           </div>
//         )}

//         {/* Card Section */}

//         <div className="card-section">
//           <div className="card-container">
//             {/* First Card */}

//             <div className="card-1">
//             <div className="step-name">Situasiya əməkdaşı</div>
//               {conflictData?.details[0]?.detailCriterions.map((criterion: any) => (
//                 <div className="card ant-col-8" key={criterion.id}>
//                   <h3>{conflictData.details[0].sectionId.name}</h3>

//                   <p>
//                     {criterion.criterionId.parentId.name} {'-->'} {criterion.criterionId.name}
//                   </p>
//                 </div>
//               ))}</div>

//             {/* Second Card */}
//             <div className="card-1">
//               <div className="step-name">Məsul şəxs</div>
//               {conflictData?.details[0]?.detailCriterions.map((criterion: any) => (
//                 <div className="card ant-col-8" key={criterion.id}>
//                   <h3>{conflictData.details[0].sectionId.name}</h3>
//                   <p>
//                     {criterion.criterionId.parentId.name} {'-->'} {criterion.criterionId.name}
//                   </p>
//                 </div>
//               ))}</div>

//           </div>
//         </div>

//       </div>

//       <div className='right ant-col-8'>
//         {/* Approval Section */}
//         <div className="approval-section">
//           <p className='line-through'></p>
//           <div className="approval-buttons">
//             <button className="btn-imtina">İmtina</button>
//             <button className="btn-tesdiq">Təsdiq</button>
//           </div>
//           <textarea placeholder="Qeyd" className="approval-note"></textarea>
//           <button className="btn-gonder">Göndər</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Conflicts;























import './conflicts.css';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchConflictDetails } from "../../../features/client";

const Conflicts = () => {
  const { id } = useParams<{ id: string }>();
  const [conflictData, setConflictData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadConflictData = async () => {
      try {
        const result = await fetchConflictDetails(id!);
        setConflictData(result);
      } catch (err) {
        setError("Error fetching conflict details");
      } finally {
        setIsLoading(false);
      }
    };

    loadConflictData();
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <div className="conflict-page" style={{ display: 'flex' }}>
        <div className='left ant-col-16'>
          {/* Video Player */}
          <div className="video-container">
            <video
              id="video"
              width="100%"
              height="100%"
              controls
              controlsList="nodownload"
              className="video"
            >
              <source src="path/to/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Information Section */}
          {conflictData && (
            <div className="info-section">
              <h2>{conflictData.authorName}</h2>
              <p className='view-text'>{conflictData.viewCount} baxış</p>
              <p className='view-text'>№ {conflictData.number}</p>
            </div>
          )}

          {/* Card Section */}

          <div className="card-section">
            <div className="card-container">
              {/* First Card */}

              <div className="card-1">
                <div className="step-name">Situasiya əməkdaşı</div>
                {conflictData?.details[0]?.detailCriterions.map((criterion: any) => (
                  <div className="card ant-col-8" key={criterion.id}>
                    <h3>{conflictData.details[0].sectionId.name}</h3>

                    <p>
                      {criterion.criterionId.parentId.name} {'-->'} {criterion.criterionId.name}
                    </p>
                  </div>
                ))}</div>

              {/* Second Card */}
              <div className="card-1">
                <div className="step-name">Məsul şəxs</div>
                {conflictData?.details[0]?.detailCriterions.map((criterion: any) => (
                  <div className="card ant-col-8" key={criterion.id}>
                    <h3>{conflictData.details[0].sectionId.name}</h3>
                    <div className="margin-16">
                      <p>
                        {criterion.criterionId.parentId.name} {'-->'} {criterion.criterionId.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        <div className='right ant-col-8'>
          {/* Approval Section */}
          <div className="approval-section">
            {conflictData?.details[0]?.detailCriterions.map((criterion: any) => (
              <p className="line-through">
                {criterion.criterionId.parentId.name} {'-->'} {criterion.criterionId.name}
              </p>
            ))}

            <div className="approval-buttons">
              <button className="btn-imtina"><p>İmtina</p></button>
              <button className="btn-tesdiq"><p>Təsdiq</p></button>
            </div>
            <textarea placeholder="Qeyd" className="approval-note"></textarea>
            <button className="btn-gonder">Göndər</button>
          </div>
        </div>



      </div>
      <div className="footer">
        <p>© 2019 Situasiya mərkəzi</p>
      </div>
    </div>
  );
};

export default Conflicts;
