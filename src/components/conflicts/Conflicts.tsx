
import './conflict.css'; // CSS stil dosyasını ayırmak iyi olabilir

const Conflict = () => {
  return (
    <div className="conflict-page">
      {/* Header */}
    

      {/* Video Player */}
      <div className="video-container">
        <video controls>
          <source src="path/to/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Information Section */}
      <div className="info-section">
        <h2>CAVID MƏMMƏDOV ARIF OĞLU</h2>
        <p>0 baxış | № 141162</p>
      </div>

      {/* Card Section */}
      <div className="card-section">
        <div className="card">
          <h3>Sitiuasiya əməkdaşı</h3>
          <p>Gülürüz davamnamma {'-->'} Vətəndaş qarşilayarkan</p>
        </div>
        <div className="card">
          <h3>Masul şəxs</h3>
          <p>Gülürüz davamnamma {'-->'} Vətəndaş qarşilayarkan (silinmə)</p>
        </div>
      </div>

      {/* Approval Section */}
      <div className="approval-section">
        <div className="approval-buttons">
          <button className="btn-imtina">İmtina</button>
          <button className="btn-tesdiq">Təsdiq</button>
        </div>
        <textarea placeholder="Qeyd" className="approval-note"></textarea>
        <button className="btn-gonder">Göndər</button>
      </div>
    </div>
  );
};

export default Conflict;
