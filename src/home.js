import './badge.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {app} from './data'
import { Link } from 'react-router-dom';

export function Home() {

  const navcolor = "#4747b8";
  const gridStyle = {
    height: "50px",
    borderRadius: "10px",
  };


  return (
    <>
      <div className='badge-banner' >
        <nav className="navbar navbar-light" style={{ background: navcolor }}>
          <div className="container-fluid">
            <div className="navbar-brand d-flex justify-content-center align-item-center" >
              <h1 >Application Badge</h1>
            </div>
          </div>
        </nav>
        <div className='container my-4' style={{ backdropFilter: "blur(10px)" }} >

          <div className="row">
            {
              app.map(function (x) {
                return (<div className="col-3" style={gridStyle} key={x.id}> <Link to={x.link}> <h2> {x.name}  </h2></Link>   </div>)
              })
            }
          </div>

        </div>
      </div>

    </>
  )
}
