import './CoverDetail.css';
import Nav from '../../Component/Navigation/Navigate'
import CoverInputForm from '../../Component/PersonalInfo/ShowCover';

function CoverScreen() {
 
    return (
          
        <div className="CoverDetail">
          <Nav pagetype='cover' />
          <CoverInputForm/>
        </div>
    )
};

export default CoverScreen