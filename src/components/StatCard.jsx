export default function StatCard({icon, value, label, subtext}){
    return(
        <div className="col-md-4">
            <div className="card rounded-4 border-0 h-100">
                <div className="card-body d-flex flex-column align-items-center text-center justify-content-center">
                    <div className="mb-3" style={{color: "#8b5cf6", fontSize: "2.5rem"}}>
                        <i className={`bi ${icon}`}></i>
                    </div>
                    <h2 className="mb-1">{value}</h2>
                    <p className="opacity-75 fs-5">{label}</p>
                    <p className="text-muted small">{subtext}</p>
                </div>
            </div>
        </div>
    )
}