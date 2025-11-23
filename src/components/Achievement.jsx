export default function Achievements({icon, iconColor, iconBg, title, description, rarityLabel, rarityBg}){
    return(
        <div className="text-white my-4">
            <div className="card p-3 border-0 rounded-4">
                <div className="d-flex align-items-center">
                    {/* icone */}
                    <div
                        className="d-flex align-items-center justify-content-center rounded-4 me-4"
                        style={{
                            width: "60px",
                            height: "60px",
                            minHeight: "60px",
                            backgroundColor: iconBg,
                            color: iconColor
                        }}
                    >
                        <i className={`bi ${icon} fs-3`}></i>
                    </div>
                    {/* texto */}
                    <div className="flex-grow-1">
                        <h5 className="text-dark fw-bold mb-1">{title}</h5>
                        <p className="mb-0 text-muted small">{description}</p>
                    </div>
                    {/* raridade */}
                    <span
                        className="badge rounded-pill px-3 py-2 text-white fw-bold"
                        style = {{backgroundColor: rarityBg, fontSize: "0.8rem"}}
                    >
                        {rarityLabel}
                    </span>
                </div>
            </div>
        </div>
    )
}