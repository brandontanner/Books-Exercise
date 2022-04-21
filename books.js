function Book({data}) {
  const [info, setInfo] = React.useState(false);
  const [status, setStatus] = React.useState(0);
  const statusList = ['See More Info', 'See Less Info'];

  function showInfo(){
    setInfo(!info);
    let newStatus = ((status + 1) %2);
    setStatus(newStatus);
  }

  return (
    <div className="card">
      <h5 className="card-header">{data.title}</h5>
      <div className="card-body">
        <h5>{data.subtitle}</h5>
            <table className="table">
              {info && <tbody>
                <tr>
                    <td className="text-primary font-weight-bold">Title:</td>
                    <td>{data.title}</td>
                </tr>
                <tr>
                    <td className="text-primary font-weight-bold">Subtitle:</td>
                    <td>{data.subtitle}</td>
                </tr>
                <tr>
                    <td className="text-primary font-weight-bold">Author:</td>
                    <td>{data.author}</td>
                </tr>
                <tr>
                    <td className="text-primary font-weight-bold">Publisher:</td>
                    <td>{data.publisher}</td>
                </tr>
                <tr>
                    <td className="text-primary font-weight-bold">Description:</td>
                    <td>{data.description}</td>
                </tr>
                </tbody>}
            </table>
        <div>
          <button className="btn btn-outline-secondary" onClick={showInfo}>{statusList[status]}</button>
          <a className="btn btn-outline-secondary" href={data.website}>See website</a>
        </div>
      </div>
    </div>    
  )
}
